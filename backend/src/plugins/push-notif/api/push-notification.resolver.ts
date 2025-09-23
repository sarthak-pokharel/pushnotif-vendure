import { Args, Mutation, Query, Resolver, Context } from '@nestjs/graphql';
import { Ctx, RequestContext, Transaction } from '@vendure/core';
import { PushNotificationService } from '../services/push-notification.service';
import { CustomerAuthService } from '../services/customer-auth.service';
import { SubscribedDevices } from '../entities/subscribed-devices.entity';

@Resolver()
export class PushNotificationShopResolver {
    constructor(
        private pushNotificationService: PushNotificationService,
        private customerAuthService: CustomerAuthService
    ) {}

    @Mutation()
    @Transaction()
    async subscribeToPushNotifications(
        @Ctx() ctx: RequestContext,
        @Args() args: { fcmToken: string; deviceId?: string; userAgent?: string }
    ) {
        try {
            await this.pushNotificationService.subscribeDevice(
                ctx,
                args.fcmToken,
                args.deviceId,
                args.userAgent
            );
            return { success: true, message: 'Successfully subscribed to push notifications' };
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            return { success: false, message: errorMessage };
        }
    }

    @Mutation()
    @Transaction()
    async unsubscribeFromPushNotifications(
        @Ctx() ctx: RequestContext,
        @Args() args: { fcmToken: string }
    ) {
        try {
            await this.pushNotificationService.unsubscribeDevice(ctx, args.fcmToken);
            return { success: true, message: 'Successfully unsubscribed from push notifications' };
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            return { success: false, message: errorMessage };
        }
    }

    @Query()
    async myPushSubscriptions(@Ctx() ctx: RequestContext): Promise<SubscribedDevices[]> {
        return this.pushNotificationService.getCustomerSubscriptions(ctx);
    }

    @Mutation()
    @Transaction()
    async registerCustomer(
        @Ctx() ctx: RequestContext,
        @Args() args: { email: string; password: string; firstName: string; lastName: string }
    ) {
        try {
            const customer = await this.customerAuthService.registerCustomer(
                ctx,
                args.email,
                args.password,
                args.firstName,
                args.lastName
            );
            return { success: true, message: 'Customer registered successfully', customer };
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            return { success: false, message: errorMessage, customer: null };
        }
    }

    @Query()
    async currentCustomerProfile(@Ctx() ctx: RequestContext) {
        try {
            return await this.customerAuthService.getCurrentCustomer(ctx);
        } catch (error) {
            return null;
        }
    }
}

@Resolver()
export class PushNotificationAdminResolver {
    constructor(
        private pushNotificationService: PushNotificationService,
        private customerAuthService: CustomerAuthService
    ) {}

    @Query()
    async pushSubscriptions(@Ctx() ctx: RequestContext): Promise<SubscribedDevices[]> {
        return this.pushNotificationService.getAllSubscriptions(ctx);
    }

    @Query()
    async pushSubscription(@Ctx() ctx: RequestContext, @Args() args: { id: string }): Promise<SubscribedDevices | null> {
        return this.pushNotificationService.getSubscriptionById(ctx, args.id);
    }

    @Mutation()
    @Transaction()
    async sendPushNotification(
        @Ctx() ctx: RequestContext,
        @Args() args: {
            input: {
                title: string;
                body: string;
                customerIds?: string[];
                deviceIds?: string[];
                data?: any;
            }
        }
    ) {
        try {
            const result = await this.pushNotificationService.sendNotification(ctx, args.input);
            return {
                success: true,
                sent: result.successCount,
                failed: result.failureCount,
                message: `Sent ${result.successCount} notifications, ${result.failureCount} failed`
            };
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            return {
                success: false,
                sent: 0,
                failed: 0,
                message: errorMessage
            };
        }
    }

    @Query()
    async allCustomers(@Ctx() ctx: RequestContext) {
        return this.customerAuthService.getAllCustomers(ctx);
    }

    @Query()
    async customerById(@Ctx() ctx: RequestContext, @Args() args: { id: string }) {
        return this.customerAuthService.getCustomerById(ctx, args.id);
    }

    @Query()
    async customersWithTokens(@Ctx() ctx: RequestContext) {
        const customers = await this.customerAuthService.getAllCustomers(ctx);
        const result = [];

        for (const customer of customers) {
            const tokens = await this.pushNotificationService.getCustomerTokens(ctx, customer.id.toString());
            const activeTokensCount = tokens.filter(token => token.isActive).length;

            result.push({
                customer,
                tokens,
                activeTokensCount
            });
        }

        return result;
    }

    @Mutation()
    @Transaction()
    async updateSubscribedDevice(
        @Ctx() ctx: RequestContext,
        @Args() args: {
            input: {
                id: string;
                isActive?: boolean;
                deviceId?: string;
                userAgent?: string;
            }
        }
    ) {
        try {
            await this.pushNotificationService.updateSubscribedDevice(ctx, args.input.id, {
                isActive: args.input.isActive,
                deviceId: args.input.deviceId,
                userAgent: args.input.userAgent
            });
            return { success: true, message: 'Device updated successfully' };
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            return { success: false, message: errorMessage };
        }
    }

    @Mutation()
    @Transaction()
    async deleteSubscribedDevice(
        @Ctx() ctx: RequestContext,
        @Args() args: { id: string }
    ) {
        try {
            await this.pushNotificationService.deleteSubscribedDevice(ctx, args.id);
            return { success: true, message: 'Device deleted successfully' };
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            return { success: false, message: errorMessage };
        }
    }
}