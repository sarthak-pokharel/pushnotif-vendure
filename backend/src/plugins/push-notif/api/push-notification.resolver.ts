import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Ctx, RequestContext, Transaction, CustomerService } from '@vendure/core';
import { PushNotificationService } from '../services/push-notification.service';
import { SubscribedDevices } from '../entities/subscribed-devices.entity';
import {
    PushNotificationResponse,
    SendNotificationResult,
    SubscribeToPushNotificationsArgs,
    UnsubscribeFromPushNotificationsArgs,
    SendPushNotificationArgs,
    UpdateSubscribedDeviceArgs,
    DeleteSubscribedDeviceArgs,
    PushSubscriptionArgs,
    CustomerWithTokens,
} from '../types/generated';

@Resolver()
export class PushNotificationShopResolver {
    constructor(
        private pushNotificationService: PushNotificationService
    ) {}

    @Mutation()
    @Transaction()
    async subscribeToPushNotifications(
        @Ctx() ctx: RequestContext,
        @Args() args: SubscribeToPushNotificationsArgs
    ): Promise<PushNotificationResponse> {
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
        @Args() args: UnsubscribeFromPushNotificationsArgs
    ): Promise<PushNotificationResponse> {
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
}

@Resolver()
export class PushNotificationAdminResolver {
    constructor(
        private pushNotificationService: PushNotificationService,
        private customerService: CustomerService
    ) {}

    @Query()
    async pushSubscriptions(@Ctx() ctx: RequestContext): Promise<SubscribedDevices[]> {
        return this.pushNotificationService.getAllSubscriptions(ctx);
    }

    @Query()
    async pushSubscription(@Ctx() ctx: RequestContext, @Args() args: PushSubscriptionArgs): Promise<SubscribedDevices | null> {
        return this.pushNotificationService.getSubscriptionById(ctx, args.id);
    }

    @Mutation()
    @Transaction()
    async sendPushNotification(
        @Ctx() ctx: RequestContext,
        @Args() args: SendPushNotificationArgs
    ): Promise<SendNotificationResult> {
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
    async customersWithTokens(@Ctx() ctx: RequestContext): Promise<CustomerWithTokens[]> {
        const customers = await this.customerService.findAll(ctx, {});
        const result: CustomerWithTokens[] = [];

        for (const customer of customers.items) {
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
        @Args() args: UpdateSubscribedDeviceArgs
    ): Promise<PushNotificationResponse> {
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
        @Args() args: DeleteSubscribedDeviceArgs
    ): Promise<PushNotificationResponse> {
        try {
            await this.pushNotificationService.deleteSubscribedDevice(ctx, args.id);
            return { success: true, message: 'Device deleted successfully' };
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            return { success: false, message: errorMessage };
        }
    }
}