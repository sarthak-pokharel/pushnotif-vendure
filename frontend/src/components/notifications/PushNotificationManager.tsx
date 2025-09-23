import React from 'react';
import type { NotificationPayload } from '../../types/notifications';

interface ExtendedNotificationPayload extends NotificationPayload {
  timestamp?: number;
}

interface PushNotificationManagerProps {
  isSupported: boolean;
  onSubscribe: () => Promise<void>;
  notifications: ExtendedNotificationPayload[];
}

export const PushNotificationManager: React.FC<PushNotificationManagerProps> = ({
  isSupported,
  onSubscribe,
  notifications
}) => {
  if (!isSupported) {
    return (
      <div style={{ 
        padding: '20px', 
        border: '1px solid #dc3545', 
        borderRadius: '8px', 
        backgroundColor: '#f8d7da',
        marginBottom: '20px' 
      }}>
        <h3>❌ Push Notifications Not Supported</h3>
        <p>Your browser doesn't support push notifications or you're not using HTTPS.</p>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      marginBottom: '20px' 
    }}>
      <h3>🔔 Push Notifications</h3>
      <p>Subscribe to receive push notifications when new orders or updates are available.</p>
      
      <button 
        onClick={onSubscribe}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        Subscribe to Push Notifications
      </button>

      {notifications.length > 0 && (
        <div>
          <h4>📱 Received Notifications:</h4>
          <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
            {notifications.map((notification, index) => (
              <div
                key={index}
                style={{
                  padding: '10px',
                  backgroundColor: 'white',
                  border: '1px solid #dee2e6',
                  borderRadius: '4px',
                  marginBottom: '8px'
                }}
              >
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                  {notification.title || 'No Title'}
                </div>
                <div style={{ marginBottom: '4px' }}>
                  {notification.body || 'No message body'}
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  {notification.timestamp ? 
                    new Date(notification.timestamp).toLocaleString() : 
                    'Unknown time'
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};