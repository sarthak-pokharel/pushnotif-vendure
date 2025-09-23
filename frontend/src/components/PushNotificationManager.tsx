import React, { useState, useEffect } from 'react';
import * as Apollo from '@apollo/client';

const { useMutation, useQuery } = Apollo;
import { FCMService } from '../firebase/messaging';
import type { NotificationPayload } from '../types/notifications';
import {
  SUBSCRIBE_TO_PUSH_NOTIFICATIONS,
  UNSUBSCRIBE_FROM_PUSH_NOTIFICATIONS,
  GET_MY_PUSH_SUBSCRIPTIONS
} from '../graphql/queries';

interface PushNotificationManagerProps {
  onNotificationReceived?: (payload: NotificationPayload) => void;
}

export const PushNotificationManager: React.FC<PushNotificationManagerProps> = ({
  onNotificationReceived
}) => {
  const [fcmService] = useState(() => FCMService.getInstance());
  const [isSupported, setIsSupported] = useState(false);
  const [currentToken, setCurrentToken] = useState<string | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [permissionStatus, setPermissionStatus] = useState<'default' | 'granted' | 'denied'>('default');

  const [subscribe, { loading: subscribing }] = useMutation(SUBSCRIBE_TO_PUSH_NOTIFICATIONS);
  const [unsubscribe, { loading: unsubscribing }] = useMutation(UNSUBSCRIBE_FROM_PUSH_NOTIFICATIONS);
  const { data: subscriptionsData, refetch: refetchSubscriptions } = useQuery(GET_MY_PUSH_SUBSCRIPTIONS);

  useEffect(() => {
    const initialize = async () => {
      setIsSupported(fcmService.isNotificationSupported());
      setPermissionStatus(Notification.permission);

      if (fcmService.isNotificationSupported()) {
        await fcmService.initialize();

        // Set up message listener
        fcmService.onMessage((payload) => {
          console.log('Received foreground message:', payload);
          onNotificationReceived?.(payload);

          // Show browser notification if permission is granted
          if (Notification.permission === 'granted') {
            new Notification(payload.title || 'New Notification', {
              body: payload.body,
              icon: payload.icon,
            });
          }
        });
      }
    };

    initialize();
  }, [fcmService, onNotificationReceived]);

  useEffect(() => {
    // Check if user is already subscribed
    const checkSubscriptionStatus = () => {
      if (subscriptionsData?.myPushSubscriptions) {
        const activeSubscriptions = subscriptionsData.myPushSubscriptions.filter(
          (sub: any) => sub.isActive
        );
        setIsSubscribed(activeSubscriptions.length > 0);

        if (activeSubscriptions.length > 0 && currentToken) {
          const hasCurrentToken = activeSubscriptions.some(
            (sub: any) => sub.fcmToken === currentToken
          );
          if (!hasCurrentToken) {
            setIsSubscribed(false);
          }
        }
      }
    };

    checkSubscriptionStatus();
  }, [subscriptionsData, currentToken]);

  const handleSubscribe = async () => {
    try {
      // Ensure service worker is initialized first
      await fcmService.initialize();
      
      const token = await fcmService.getToken();
      if (!token) {
        alert('Failed to get push notification token. Please check your permissions and try again.');
        return;
      }

      setCurrentToken(token);
      setPermissionStatus(Notification.permission);

      const deviceId = localStorage.getItem('deviceId') || `device_${Date.now()}`;
      localStorage.setItem('deviceId', deviceId);

      const result = await subscribe({
        variables: {
          fcmToken: token,
          deviceId,
          userAgent: navigator.userAgent,
        },
      });

      if (result.data?.subscribeToPushNotifications?.success) {
        setIsSubscribed(true);
        refetchSubscriptions();
        alert('Successfully subscribed to push notifications!');
      } else {
        alert(result.data?.subscribeToPushNotifications?.message || 'Failed to subscribe');
      }
    } catch (error) {
      console.error('Error subscribing to push notifications:', error);
      alert('Error subscribing to push notifications');
    }
  };

  const handleUnsubscribe = async () => {
    if (!currentToken) {
      alert('No active subscription found');
      return;
    }

    try {
      const result = await unsubscribe({
        variables: {
          fcmToken: currentToken,
        },
      });

      if (result.data?.unsubscribeFromPushNotifications?.success) {
        setIsSubscribed(false);
        refetchSubscriptions();
        alert('Successfully unsubscribed from push notifications!');
      } else {
        alert(result.data?.unsubscribeFromPushNotifications?.message || 'Failed to unsubscribe');
      }
    } catch (error) {
      console.error('Error unsubscribing from push notifications:', error);
      alert('Error unsubscribing from push notifications');
    }
  };

  const getPermissionStatusText = () => {
    switch (permissionStatus) {
      case 'granted':
        return '✅ Notifications allowed';
      case 'denied':
        return '❌ Notifications blocked';
      default:
        return '❓ Permission not requested';
    }
  };

  if (!isSupported) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', margin: '20px 0' }}>
        <h3>🔔 Push Notifications</h3>
        <p>❌ Push notifications are not supported in this browser.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', margin: '20px 0' }}>
      <h3>🔔 Push Notifications</h3>

      <div style={{ marginBottom: '15px' }}>
        <p><strong>Status:</strong> {getPermissionStatusText()}</p>
        <p><strong>Subscription:</strong> {isSubscribed ? '✅ Active' : '❌ Not subscribed'}</p>
      </div>

      {permissionStatus === 'denied' && (
        <div style={{ padding: '10px', backgroundColor: '#fff3cd', border: '1px solid #ffeaa7', borderRadius: '4px', marginBottom: '15px' }}>
          <p>⚠️ Notifications are blocked. Please enable them in your browser settings to receive push notifications.</p>
        </div>
      )}

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {!isSubscribed ? (
          <button
            onClick={handleSubscribe}
            disabled={subscribing || permissionStatus === 'denied'}
            style={{
              padding: '10px 20px',
              backgroundColor: permissionStatus === 'denied' ? '#ccc' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: permissionStatus === 'denied' ? 'not-allowed' : 'pointer',
            }}
          >
            {subscribing ? 'Subscribing...' : 'Enable Notifications'}
          </button>
        ) : (
          <button
            onClick={handleUnsubscribe}
            disabled={unsubscribing}
            style={{
              padding: '10px 20px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {unsubscribing ? 'Unsubscribing...' : 'Disable Notifications'}
          </button>
        )}
      </div>

      {subscriptionsData?.myPushSubscriptions && subscriptionsData.myPushSubscriptions.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h4>Your Devices:</h4>
          <ul style={{ fontSize: '14px' }}>
            {subscriptionsData.myPushSubscriptions.map((sub: any) => (
              <li key={sub.id} style={{ marginBottom: '8px' }}>
                <strong>Device:</strong> {sub.deviceId || 'Unknown'} |
                <strong> Status:</strong> {sub.isActive ? '🟢 Active' : '🔴 Inactive'} |
                <strong> Created:</strong> {new Date(sub.createdAt).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};