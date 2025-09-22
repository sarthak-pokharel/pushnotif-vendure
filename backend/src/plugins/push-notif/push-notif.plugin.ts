import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { PUSH_NOTIF_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { SubscribedDevices } from './entities/subscribed-devices.entity';
import { FirebaseService } from './services/firebase.service';
import { PushNotificationService } from './services/push-notification.service';
import { CustomerAuthService } from './services/customer-auth.service';
import { PushNotificationShopResolver, PushNotificationAdminResolver } from './api/push-notification.resolver';
import { shopApiExtensions, adminApiExtensions } from './api/api-extensions';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [
        { provide: PUSH_NOTIF_PLUGIN_OPTIONS, useFactory: () => PushNotifPlugin.options },
        FirebaseService,
        PushNotificationService,
        CustomerAuthService,
    ],
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [PushNotificationShopResolver],
    },
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [PushNotificationAdminResolver],
    },
    compatibility: '^3.0.0',
    entities: [SubscribedDevices],
})
export class PushNotifPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<PushNotifPlugin> {
        this.options = options;
        return PushNotifPlugin;
    }
}
