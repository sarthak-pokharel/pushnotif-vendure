import React, { useState } from 'react';
import * as Apollo from '@apollo/client';

const { useMutation, gql } = Apollo;
import { adminClient } from '../graphql/client';

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

export const AdminNotificationSender: React.FC = () => {
  const [title, setTitle] = useState('Admin Test Notification');
  const [body, setBody] = useState('This is a test notification sent from the admin interface!');
  const [customerIds, setCustomerIds] = useState('');
  const [deviceIds, setDeviceIds] = useState('');

  const [sendNotification, { loading, data, error }] = useMutation(SEND_PUSH_NOTIFICATION, {
    client: adminClient
  });

  const handleSend = async () => {
    try {
      const input: any = {
        title,
        body,
      };

      if (customerIds.trim()) {
        input.customerIds = customerIds.split(',').map(id => id.trim()).filter(id => id);
      }

      if (deviceIds.trim()) {
        input.deviceIds = deviceIds.split(',').map(id => id.trim()).filter(id => id);
      }

      await sendNotification({ variables: { input } });
    } catch (err) {
      console.error('Failed to send notification:', err);
    }
  };

  return (
    <div style={{
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      margin: '20px 0',
      backgroundColor: '#f8f9fa'
    }}>
      <h3>🔧 Admin: Send Push Notifications</h3>
      <p style={{ fontSize: '14px', color: '#666' }}>
        Send push notifications to all subscribed users or specific customers/devices.
      </p>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Title:
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Message:
        </label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={3}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            resize: 'vertical'
          }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Customer IDs (optional, comma-separated):
        </label>
        <input
          type="text"
          value={customerIds}
          onChange={(e) => setCustomerIds(e.target.value)}
          placeholder="1,2,3"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Device IDs (optional, comma-separated):
        </label>
        <input
          type="text"
          value={deviceIds}
          onChange={(e) => setDeviceIds(e.target.value)}
          placeholder="device1,device2,device3"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
      </div>

      <button
        onClick={handleSend}
        disabled={loading || !title.trim() || !body.trim()}
        style={{
          padding: '10px 20px',
          backgroundColor: loading ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Sending...' : 'Send Notification'}
      </button>

      {data && (
        <div style={{
          marginTop: '15px',
          padding: '10px',
          backgroundColor: data.sendPushNotification.success ? '#d4edda' : '#f8d7da',
          border: `1px solid ${data.sendPushNotification.success ? '#c3e6cb' : '#f5c6cb'}`,
          borderRadius: '4px'
        }}>
          <strong>Result:</strong> {data.sendPushNotification.message}
          {data.sendPushNotification.success && (
            <div style={{ fontSize: '14px', marginTop: '5px' }}>
              ✅ Sent: {data.sendPushNotification.sent} | ❌ Failed: {data.sendPushNotification.failed}
            </div>
          )}
        </div>
      )}

      {error && (
        <div style={{
          marginTop: '15px',
          padding: '10px',
          backgroundColor: '#f8d7da',
          border: '1px solid #f5c6cb',
          borderRadius: '4px'
        }}>
          <strong>Error:</strong> {error.message}
        </div>
      )}

      <div style={{ marginTop: '15px', fontSize: '14px', color: '#666' }}>
        <p>
          <strong>💡 Tips:</strong><br/>
          • Leave Customer/Device IDs empty to send to all subscribed users<br/>
          • Use Customer IDs to target specific customers<br/>
          • Use Device IDs to target specific devices<br/>
          • Make sure at least one user is subscribed to receive notifications
        </p>
      </div>
    </div>
  );
};