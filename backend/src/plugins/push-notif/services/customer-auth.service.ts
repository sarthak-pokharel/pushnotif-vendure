import { Injectable } from '@nestjs/common';
import { RequestContext, TransactionalConnection, Logger, Customer, User, NativeAuthenticationStrategy } from '@vendure/core';
import { loggerCtx } from '../constants';

@Injectable()
export class CustomerAuthService {
    constructor(private connection: TransactionalConnection) {}

    async registerCustomer(
        ctx: RequestContext,
        email: string,
        password: string,
        firstName: string,
        lastName: string
    ): Promise<Customer> {
        // Check if customer already exists
        const existingCustomer = await this.connection
            .getRepository(ctx, Customer)
            .findOne({ where: { emailAddress: email } });

        if (existingCustomer) {
            throw new Error('Customer with this email already exists');
        }

        // Create user
        const user = new User({
            identifier: email,
            roles: [],
        });

        const savedUser = await this.connection.getRepository(ctx, User).save(user);

        // Create customer
        const customer = new Customer({
            title: '',
            firstName,
            lastName,
            phoneNumber: '',
            emailAddress: email,
            user: savedUser,
        });

        const savedCustomer = await this.connection.getRepository(ctx, Customer).save(customer);

        Logger.info(`New customer registered: ${email}`, loggerCtx);
        return savedCustomer;
    }

    async authenticateCustomer(ctx: RequestContext, email: string, password: string) {
        const customer = await this.connection
            .getRepository(ctx, Customer)
            .findOne({
                where: { emailAddress: email },
                relations: ['user']
            });

        if (!customer || !customer.user) {
            throw new Error('Invalid credentials');
        }

        // For demo purposes, we'll accept any password
        // In production, you'd verify against a hashed password
        Logger.info(`Customer authenticated: ${email}`, loggerCtx);

        // Create a simple session token (in production, use JWT or similar)
        const token = Buffer.from(`${customer.id}:${Date.now()}`).toString('base64');

        return {
            customer,
            token
        };
    }

    async getCurrentCustomer(ctx: RequestContext): Promise<Customer | null> {
        if (!ctx.activeUserId) {
            return null;
        }

        return this.connection
            .getRepository(ctx, Customer)
            .findOne({
                where: { user: { id: ctx.activeUserId } },
                relations: ['user']
            });
    }

    async getCustomerById(ctx: RequestContext, customerId: string): Promise<Customer | null> {
        return this.connection
            .getRepository(ctx, Customer)
            .findOne({
                where: { id: customerId },
                relations: ['user']
            });
    }

    async getAllCustomers(ctx: RequestContext): Promise<Customer[]> {
        return this.connection
            .getRepository(ctx, Customer)
            .find({
                relations: ['user']
            });
    }
}