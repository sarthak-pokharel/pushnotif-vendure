import React, { useState } from 'react';

interface NotificationTesterProps {
  onSendTestNotification?: (title: string, body: string) => void;
}

export const NotificationTester: React.FC<NotificationTesterProps> = ({
  onSendTestNotification
}) => {
  const [title, setTitle] = useState('Test Notification');
  const [body, setBody] = useState('This is a test push notification from your app!');

  const handleSendTest = () => {
    onSendTestNotification?.(title, body);
  };

  const handleBrowserNotificationTest = () => {
    if (Notification.permission === 'granted') {
      new Notification(title, {
        body,
        icon: '/firebase-logo.png',
        badge: '/badge-icon.png',
      });
    } else {
      alert('Notification permission not granted');
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', margin: '20px 0' }}>
      <h3>🧪 Test Notifications</h3>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          <strong>Title:</strong>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '10px'
          }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          <strong>Message:</strong>
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

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button
          onClick={handleBrowserNotificationTest}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Test Browser Notification
        </button>

        {onSendTestNotification && (
          <button
            onClick={handleSendTest}
            style={{
              padding: '10px 20px',
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Send via Server
          </button>
        )}
      </div>

      <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
        💡 <strong>Browser test:</strong> Shows notification locally without server interaction.<br/>
        💡 <strong>Server test:</strong> Sends notification through your backend (requires implementation).
      </p>
    </div>
  );
};