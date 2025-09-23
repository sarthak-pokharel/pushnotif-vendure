import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';
import { AdminUiExtension } from '@vendure/ui-devkit/compiler';
import * as path from 'path';

import { adminApiExtensions, shopApiExtensions } from './api/api-extensions';
import { PushNotificationAdminResolver, PushNotificationShopResolver } from './api/push-notification.resolver';
import { PUSH_NOTIF_PLUGIN_OPTIONS } from './constants';
import { SubscribedDevices } from './entities/subscribed-devices.entity';
import { CustomerAuthService } from './services/customer-auth.service';
import { FirebaseService } from './services/firebase.service';
import { PushNotificationService } from './services/push-notification.service';
import { PluginInitOptions } from './types';
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

    static ui: AdminUiExtension = {
        id: 'push-notif-ui',
        extensionPath: path.join(__dirname, 'ui'),
        routes: [{ route: 'push-notif', filePath: 'routes.ts' }],
        providers: ['providers.ts'],
    };
}
