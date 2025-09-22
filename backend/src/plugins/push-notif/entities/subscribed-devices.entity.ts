import {
    DeepPartial,
    VendureEntity,
    Customer,
    ID
} from '@vendure/core';
import { Column, Entity, ManyToOne, Index } from 'typeorm';

@Entity()
export class SubscribedDevices extends VendureEntity {
    constructor(input?: DeepPartial<SubscribedDevices>) {
        super(input);
    }

    @Index({ unique: true })
    @Column()
    fcmToken: string;

    @Column({ nullable: true })
    deviceId?: string;

    @Column({ nullable: true })
    userAgent?: string;

    @Column({ default: true })
    isActive: boolean;

    @ManyToOne(() => Customer, { nullable: true, onDelete: 'CASCADE' })
    customer?: Customer;
}
