import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Ctx, RequestContext, Transaction } from '@vendure/core';
import { CustomerAuthService } from '../services/customer-auth.service';

@Resolver()
export class CustomerAuthResolver {
    constructor(private customerAuthService: CustomerAuthService) {}

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

    @Mutation()
    async authenticateCustomer(
        @Ctx() ctx: RequestContext,
        @Args() args: { email: string; password: string }
    ) {
        try {
            const result = await this.customerAuthService.authenticateCustomer(
                ctx,
                args.email,
                args.password
            );
            return { success: true, message: 'Authentication successful', ...result };
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            return { success: false, message: errorMessage, customer: null, token: null };
        }
    }

    @Query()
    async me(@Ctx() ctx: RequestContext) {
        try {
            const customer = await this.customerAuthService.getCurrentCustomer(ctx);
            return customer;
        } catch (error) {
            return null;
        }
    }
}