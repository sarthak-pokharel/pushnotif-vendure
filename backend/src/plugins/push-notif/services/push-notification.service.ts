import { Injectable } from '@nestjs/common';
import { RequestContext, TransactionalConnection, Logger, Customer } from '@vendure/core';
import { In } from 'typeorm';
import { SubscribedDevices } from '../entities/subscribed-devices.entity';
import { FirebaseService } from './firebase.service';
import { loggerCtx } from '../constants';
import * as admin from 'firebase-admin';

@Injectable()
export class PushNotificationService {
    constructor(
        private connection: TransactionalConnection,
        private firebaseService: FirebaseService
    ) {}

    async subscribeDevice(
        ctx: RequestContext,
        fcmToken: string,
        deviceId?: string,
        userAgent?: string
    ): Promise<SubscribedDevices> {
        const existingDevice = await this.connection
            .getRepository(ctx, SubscribedDevices)
            .findOne({ where: { fcmToken } });

        if (existingDevice) {
            // Update existing subscription
            existingDevice.isActive = true;
            if (deviceId) existingDevice.deviceId = deviceId;
            if (userAgent) existingDevice.userAgent = userAgent;
            if (ctx.activeUserId) {
                const customer = await this.connection
                    .getRepository(ctx, Customer)
                    .findOne({ where: { user: { id: ctx.activeUserId } } });
                if (customer) existingDevice.customer = customer;
            }
            return this.connection.getRepository(ctx, SubscribedDevices).save(existingDevice);
        }

        // Create new subscription
        const device = this.connection.getRepository(ctx, SubscribedDevices).create({
            fcmToken,
            deviceId,
            userAgent,
            isActive: true,
        });

        if (ctx.activeUserId) {
            Logger.info(`Looking for customer with activeUserId: ${ctx.activeUserId}`, loggerCtx);
            const customer = await this.connection
                .getRepository(ctx, Customer)
                .findOne({ where: { user: { id: ctx.activeUserId } } });
            if (customer) {
                device.customer = customer;
                Logger.info(`Found customer: ${customer.emailAddress} (ID: ${customer.id})`, loggerCtx);
            } else {
                Logger.warn(`No customer found for activeUserId: ${ctx.activeUserId}`, loggerCtx);
            }
        } else {
            Logger.warn(`No activeUserId in context`, loggerCtx);
        }

        Logger.info(`New device subscribed: ${fcmToken}`, loggerCtx);
        return this.connection.getRepository(ctx, SubscribedDevices).save(device);
    }

    async unsubscribeDevice(ctx: RequestContext, fcmToken: string): Promise<void> {
        await this.connection
            .getRepository(ctx, SubscribedDevices)
            .update({ fcmToken }, { isActive: false });

        Logger.info(`Device unsubscribed: ${fcmToken}`, loggerCtx);
    }

    async getCustomerSubscriptions(ctx: RequestContext): Promise<SubscribedDevices[]> {
        if (!ctx.activeUserId) {
            return [];
        }

        const customer = await this.connection
            .getRepository(ctx, Customer)
            .findOne({ where: { user: { id: ctx.activeUserId } } });

        if (!customer) {
            return [];
        }

        return this.connection
            .getRepository(ctx, SubscribedDevices)
            .find({
                where: { customer: { id: customer.id }, isActive: true },
                relations: ['customer']
            });
    }

    async getAllSubscriptions(ctx: RequestContext): Promise<SubscribedDevices[]> {
        return this.connection
            .getRepository(ctx, SubscribedDevices)
            .find({
                where: { isActive: true },
                relations: ['customer']
            });
    }

    async getSubscriptionById(ctx: RequestContext, id: string): Promise<SubscribedDevices | null> {
        return this.connection
            .getRepository(ctx, SubscribedDevices)
            .findOne({
                where: { id },
                relations: ['customer']
            });
    }

    async sendNotification(
        ctx: RequestContext,
        input: {
            title: string;
            body: string;
            customerIds?: string[];
            deviceIds?: string[];
            data?: any;
        }
    ): Promise<admin.messaging.BatchResponse> {
        const subscriptions = await this.getTargetSubscriptions(ctx, input.customerIds, input.deviceIds);

        if (subscriptions.length === 0) {
            throw new Error('No valid subscriptions found for the specified targets');
        }

        const tokens = subscriptions.map(sub => sub.fcmToken);
        return this.firebaseService.sendMultipleNotifications(
            tokens,
            input.title,
            input.body,
            input.data
        );
    }

    private async getTargetSubscriptions(
        ctx: RequestContext,
        customerIds?: string[],
        deviceIds?: string[]
    ): Promise<SubscribedDevices[]> {
        const repo = this.connection.getRepository(ctx, SubscribedDevices);

        if (deviceIds && deviceIds.length > 0) {
            return repo.find({
                where: { id: In(deviceIds), isActive: true },
                relations: ['customer']
            });
        }

        if (customerIds && customerIds.length > 0) {
            return repo.find({
                where: { customer: { id: In(customerIds) }, isActive: true },
                relations: ['customer']
            });
        }

        // If no specific targets, send to all active subscriptions
        return repo.find({
            where: { isActive: true },
            relations: ['customer']
        });
    }

    async cleanupInactiveTokens(ctx: RequestContext): Promise<void> {
        const subscriptions = await this.connection
            .getRepository(ctx, SubscribedDevices)
            .find({ where: { isActive: true } });

        const invalidTokens: string[] = [];

        for (const subscription of subscriptions) {
            const isValid = await this.firebaseService.validateToken(subscription.fcmToken);
            if (!isValid) {
                invalidTokens.push(subscription.fcmToken);
            }
        }

        if (invalidTokens.length > 0) {
            await this.connection
                .getRepository(ctx, SubscribedDevices)
                .update(
                    { fcmToken: In(invalidTokens) },
                    { isActive: false }
                );

            Logger.info(`Cleaned up ${invalidTokens.length} inactive tokens`, loggerCtx);
        }
    }

    async getCustomerTokens(ctx: RequestContext, customerId: string): Promise<SubscribedDevices[]> {
        return this.connection
            .getRepository(ctx, SubscribedDevices)
            .find({
                where: { customer: { id: customerId } },
                relations: ['customer']
            });
    }
}