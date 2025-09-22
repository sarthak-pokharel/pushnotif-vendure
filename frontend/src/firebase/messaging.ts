import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { firebaseConfig, vapidKey } from './config';
import type { NotificationPayload } from '../types/notifications';

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export type { NotificationPayload };

export class FCMService {
  private static instance: FCMService;
  private token: string | null = null;
  private isSupported: boolean = false;

  private constructor() {
    this.isSupported = 'serviceWorker' in navigator && 'PushManager' in window;
  }

  static getInstance(): FCMService {
    if (!FCMService.instance) {
      FCMService.instance = new FCMService();
    }
    return FCMService.instance;
  }

  async initialize(): Promise<void> {
    if (!this.isSupported) {
      console.warn('Push messaging is not supported');
      return;
    }

    try {
      // Register service worker
      if ('serviceWorker' in navigator) {
        await navigator.serviceWorker.register('/firebase-messaging-sw.js');
        console.log('Service worker registered successfully');
      }
    } catch (error) {
      console.error('Service worker registration failed:', error);
    }
  }

  async requestPermission(): Promise<boolean> {
    if (!this.isSupported) {
      return false;
    }

    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  async getToken(): Promise<string | null> {
    if (!this.isSupported) {
      return null;
    }

    try {
      const hasPermission = await this.requestPermission();
      if (!hasPermission) {
        console.warn('Notification permission denied');
        return null;
      }

      this.token = await getToken(messaging, { vapidKey });
      console.log('FCM token generated:', this.token);
      return this.token;
    } catch (error) {
      console.error('Error getting FCM token:', error);
      return null;
    }
  }

  onMessage(callback: (payload: NotificationPayload) => void): void {
    if (!this.isSupported) {
      return;
    }

    onMessage(messaging, (payload) => {
      console.log('Message received in foreground:', payload);
      callback({
        title: payload.notification?.title,
        body: payload.notification?.body,
        icon: payload.notification?.icon,
        data: payload.data,
      });
    });
  }

  getCurrentToken(): string | null {
    return this.token;
  }

  isNotificationSupported(): boolean {
    return this.isSupported;
  }
}