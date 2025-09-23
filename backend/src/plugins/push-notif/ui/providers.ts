import { addNavMenuSection } from '@vendure/admin-ui/core';

export default [
    addNavMenuSection({
        id: 'additional-nav-section',
        label: 'Additional',
        items: [{
            id: 'sender-page-nav',
            label: 'Push Notifications',
            routerLink: ['/extensions/push-notif'],
            // Icon can be any of https://core.clarity.design/foundation/icons/shapes/
            icon: 'bell',
        }],
    },
    // Add this section before the "settings" section
    'settings'),
];