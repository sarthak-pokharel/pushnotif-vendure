import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubscribersComponent } from './components/subscribers.component';

@NgModule({
    imports: [
        SubscribersComponent,
        RouterModule.forChild([
            {
                path: '',
                component: SubscribersComponent,
                data: {
                    breadcrumb: 'Push Notification Subscribers',
                },
            },
        ]),
    ],
})
export class PushNotifModule {}