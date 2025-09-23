import { RequestContext } from '@vendure/core';

export interface PushNotificationResponse {
  success: boolean;
  message: string;
}

export interface SendNotificationResult {
  success: boolean;
  sent: number;
  failed: number;
  message: string;
}

export interface SendPushNotificationInput {
  title: string;
  body: string;
  customerIds?: string[];
  deviceIds?: string[];
  data?: any;
}

export interface UpdateSubscribedDeviceInput {
  id: string;
  isActive?: boolean;
  deviceId?: string;
  userAgent?: string;
}

export interface CustomerWithTokens {
  customer: any; // Will be generated Customer type
  tokens: any[]; // Will be generated SubscribedDevice[] type
  activeTokensCount: number;
}

// Resolver context type
export interface ResolverContext {
  req: RequestContext;
}

// Resolver argument types
export interface SubscribeToPushNotificationsArgs {
  fcmToken: string;
  deviceId?: string;
  userAgent?: string;
}

export interface UnsubscribeFromPushNotificationsArgs {
  fcmToken: string;
}

export interface SendPushNotificationArgs {
  input: SendPushNotificationInput;
}

export interface UpdateSubscribedDeviceArgs {
  input: UpdateSubscribedDeviceInput;
}

export interface DeleteSubscribedDeviceArgs {
  id: string;
}

export interface PushSubscriptionArgs {
  id: string;
}