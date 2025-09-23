import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, ModalService, NotificationService, SharedModule } from '@vendure/admin-ui/core';
import { gql } from 'apollo-angular';

interface SubscribedDevice {
  id: string;
  createdAt: string;
  updatedAt: string;
  fcmToken: string;
  deviceId?: string;
  userAgent?: string;
  isActive: boolean;
  customer?: {
    id: string;
    emailAddress: string;
    firstName: string;
    lastName: string;
  };
}

const GET_SUBSCRIPTIONS = gql`
  query GetPushSubscriptions {
    pushSubscriptions {
      id
      createdAt
      updatedAt
      fcmToken
      deviceId
      userAgent
      isActive
      customer {
        id
        emailAddress
        firstName
        lastName
      }
    }
  }
`;

const UPDATE_SUBSCRIPTION = gql`
  mutation UpdateSubscribedDevice($input: UpdateSubscribedDeviceInput!) {
    updateSubscribedDevice(input: $input) {
      success
      message
    }
  }
`;

const DELETE_SUBSCRIPTION = gql`
  mutation DeleteSubscribedDevice($id: ID!) {
    deleteSubscribedDevice(id: $id) {
      success
      message
    }
  }
`;

const SEND_PUSH_NOTIFICATION = gql`
  mutation SendPushNotification($input: SendPushNotificationInput!) {
    sendPushNotification(input: $input) {
      success
      sent
      failed
      message
    }
  }
`;

@Component({
  selector: 'push-notif-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ]
})
export class SubscribersComponent implements OnInit {
  subscriptions: SubscribedDevice[] = [];
  loading = true;
  editingDevice: SubscribedDevice | null = null;
  showNotificationForm = false;
  sendingNotification = false;
  notificationData = {
    title: '',
    body: '',
    dataJson: ''
  };

  constructor(
    private dataService: DataService,
    private modalService: ModalService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.loadSubscriptions();
  }

  loadSubscriptions() {
    this.loading = true;
    console.log('Loading subscriptions...');
    
    this.dataService.query(GET_SUBSCRIPTIONS).single$.subscribe({
      next: (result: any) => {
        console.log('Raw query result:', result);
        console.log('pushSubscriptions data:', result.pushSubscriptions);
        
        this.subscriptions = result.pushSubscriptions || [];
        console.log('Mapped subscriptions:', this.subscriptions);
        console.log('Subscriptions length:', this.subscriptions.length);
        
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Query error:', error);
        this.notificationService.error('Failed to load subscriptions');
        this.loading = false;
      }
    });
  }

  toggleDeviceStatus(device: SubscribedDevice) {
    this.dataService.mutate(UPDATE_SUBSCRIPTION, {
      input: {
        id: device.id,
        isActive: !device.isActive
      }
    }).subscribe({
      next: (result: any) => {
        if (result.updateSubscribedDevice?.success) {
          device.isActive = !device.isActive;
          this.notificationService.success('Device status updated');
        } else {
          this.notificationService.error(result.updateSubscribedDevice?.message || 'Update failed');
        }
      },
      error: () => {
        this.notificationService.error('Failed to update device status');
      }
    });
  }

  editDevice(device: SubscribedDevice) {
    this.editingDevice = { ...device };
  }

  cancelEdit() {
    this.editingDevice = null;
  }

  saveEdit() {
    if (!this.editingDevice) return;

    this.dataService.mutate(UPDATE_SUBSCRIPTION, {
      input: {
        id: this.editingDevice.id,
        deviceId: this.editingDevice.deviceId,
        userAgent: this.editingDevice.userAgent,
        isActive: this.editingDevice.isActive
      }
    }).subscribe({
      next: (result: any) => {
        if (result.updateSubscribedDevice?.success) {
          const index = this.subscriptions.findIndex(d => d.id === this.editingDevice!.id);
          if (index !== -1) {
            this.subscriptions[index] = { ...this.editingDevice! };
          }
          this.editingDevice = null;
          this.notificationService.success('Device updated successfully');
        } else {
          this.notificationService.error(result.updateSubscribedDevice?.message || 'Update failed');
        }
      },
      error: () => {
        this.notificationService.error('Failed to update device');
      }
    });
  }

  deleteDevice(device: SubscribedDevice) {
    this.modalService.dialog({
      title: 'Delete Device',
      body: `Are you sure you want to delete this device subscription? This action cannot be undone.`,
      buttons: [
        { type: 'secondary', label: 'Cancel' },
        { type: 'danger', label: 'Delete', returnValue: true },
      ],
    }).subscribe(confirmed => {
      if (confirmed) {
        this.dataService.mutate(DELETE_SUBSCRIPTION, {
          id: device.id
        }).subscribe({
          next: (result: any) => {
            if (result.deleteSubscribedDevice?.success) {
              this.subscriptions = this.subscriptions.filter(d => d.id !== device.id);
              this.notificationService.success('Device deleted successfully');
            } else {
              this.notificationService.error(result.deleteSubscribedDevice?.message || 'Delete failed');
            }
          },
          error: () => {
            this.notificationService.error('Failed to delete device');
          }
        });
      }
    });
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString();
  }

  truncateToken(token: string): string {
    return token.length > 20 ? token.substring(0, 20) + '...' : token;
  }

  showSendNotificationForm() {
    this.showNotificationForm = true;
    this.notificationData = {
      title: '',
      body: '',
      dataJson: ''
    };
  }

  cancelSendNotification() {
    this.showNotificationForm = false;
    this.notificationData = {
      title: '',
      body: '',
      dataJson: ''
    };
  }

  getActiveSubscriberCount(): number {
    return this.subscriptions.filter(sub => sub.isActive).length;
  }

  sendNotification() {
    if (!this.notificationData.title || !this.notificationData.body) {
      this.notificationService.error('Title and message are required');
      return;
    }

    this.sendingNotification = true;

    // Parse additional data if provided
    let additionalData = null;
    if (this.notificationData.dataJson.trim()) {
      try {
        additionalData = JSON.parse(this.notificationData.dataJson);
      } catch (error) {
        this.notificationService.error('Invalid JSON format in additional data');
        this.sendingNotification = false;
        return;
      }
    }

    const input = {
      title: this.notificationData.title,
      body: this.notificationData.body,
      data: additionalData
    };

    this.dataService.mutate(SEND_PUSH_NOTIFICATION, { input }).subscribe({
      next: (result: any) => {
        this.sendingNotification = false;
        if (result.sendPushNotification?.success) {
          const { sent, failed } = result.sendPushNotification;
          this.notificationService.success(
            `Notification sent successfully! Delivered to ${sent} devices${failed > 0 ? `, ${failed} failed` : ''}`
          );
          this.showNotificationForm = false;
        } else {
          this.notificationService.error(result.sendPushNotification?.message || 'Failed to send notification');
        }
      },
      error: () => {
        this.sendingNotification = false;
        this.notificationService.error('Failed to send notification');
      }
    });
  }
}