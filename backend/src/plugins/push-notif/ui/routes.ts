
export default [
    {
        path: '',
        loadChildren: () => import('./push-notif.module').then(m => m.PushNotifModule),
    },
];