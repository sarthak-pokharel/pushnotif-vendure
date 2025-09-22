import React, { useState, useEffect } from 'react';
import type { NotificationPayload } from './types/notifications';
import { FCMService } from './firebase/messaging';
import './App.css';

// Simple GraphQL client without Apollo
class SimpleGraphQLClient {
  constructor(private endpoint: string) {}

  async request(query: string, variables?: any) {
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });
    return response.json();
  }
}

const shopClient = new SimpleGraphQLClient('http://localhost:3000/shop-api');
const adminClient = new SimpleGraphQLClient('http://localhost:3000/admin-api');

interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
}

function App() {
  const [notifications, setNotifications] = useState<NotificationPayload[]>([]);
  const [fcmService] = useState(() => FCMService.getInstance());
  const [isSupported, setIsSupported] = useState(false);
  const [currentView, setCurrentView] = useState<'customer' | 'admin'>('customer');

  // Customer state
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Admin state
  const [customers, setCustomers] = useState<any[]>([]);
  const [notificationForm, setNotificationForm] = useState({
    title: 'Admin Notification',
    body: 'This is a test notification from admin!',
    targetCustomers: [] as string[]
  });

  React.useEffect(() => {
    const initialize = async () => {
      setIsSupported(fcmService.isNotificationSupported());
      if (fcmService.isNotificationSupported()) {
        await fcmService.initialize();
        fcmService.onMessage((payload) => {
          setNotifications(prev => [...prev, { ...payload, timestamp: Date.now() }]);
        });
      }
    };
    initialize();
  }, [fcmService]);

  // Customer functions
  const handleRegister = async () => {
    try {
      const result = await shopClient.request(`
        mutation RegisterCustomer($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
          registerCustomer(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
            success
            message
            customer {
              id
              firstName
              lastName
              emailAddress
            }
          }
        }
      `, registerForm);

      if (result.data?.registerCustomer?.success) {
        alert('Registration successful!');
        setRegisterForm({ email: '', password: '', firstName: '', lastName: '' });
      } else {
        alert(result.data?.registerCustomer?.message || 'Registration failed');
      }
    } catch (error) {
      alert('Registration error');
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      const result = await shopClient.request(`
        mutation AuthenticateCustomer($email: String!, $password: String!) {
          authenticateCustomer(email: $email, password: $password) {
            success
            message
            customer {
              id
              firstName
              lastName
              emailAddress
            }
            token
          }
        }
      `, loginForm);

      if (result.data?.authenticateCustomer?.success) {
        setCustomer(result.data.authenticateCustomer.customer);
        setIsLoggedIn(true);
        alert('Login successful!');
      } else {
        alert(result.data?.authenticateCustomer?.message || 'Login failed');
      }
    } catch (error) {
      alert('Login error');
      console.error(error);
    }
  };

  const handleSubscribeToNotifications = async () => {
    if (!customer) {
      alert('Please login first');
      return;
    }

    try {
      const token = await fcmService.getToken();
      if (!token) {
        alert('Failed to get FCM token');
        return;
      }

      const deviceId = localStorage.getItem('deviceId') || `device_${Date.now()}`;
      localStorage.setItem('deviceId', deviceId);

      const result = await shopClient.request(`
        mutation SubscribeToPushNotifications($fcmToken: String!, $deviceId: String, $userAgent: String) {
          subscribeToPushNotifications(fcmToken: $fcmToken, deviceId: $deviceId, userAgent: $userAgent) {
            success
            message
          }
        }
      `, {
        fcmToken: token,
        deviceId,
        userAgent: navigator.userAgent
      });

      if (result.data?.subscribeToPushNotifications?.success) {
        alert('Successfully subscribed to push notifications!');
      } else {
        alert(result.data?.subscribeToPushNotifications?.message || 'Subscription failed');
      }
    } catch (error) {
      alert('Subscription error');
      console.error(error);
    }
  };

  // Admin functions
  const loadCustomers = async () => {
    try {
      const result = await adminClient.request(`
        query CustomersWithTokens {
          customersWithTokens {
            customer {
              id
              firstName
              lastName
              emailAddress
            }
            activeTokensCount
          }
        }
      `);

      setCustomers(result.data?.customersWithTokens || []);
    } catch (error) {
      console.error('Error loading customers:', error);
    }
  };

  const sendNotificationToCustomers = async () => {
    try {
      const customerIds = notificationForm.targetCustomers.length > 0
        ? notificationForm.targetCustomers
        : customers.map(c => c.customer.id);

      const result = await adminClient.request(`
        mutation SendPushNotification($input: SendPushNotificationInput!) {
          sendPushNotification(input: $input) {
            success
            sent
            failed
            message
          }
        }
      `, {
        input: {
          title: notificationForm.title,
          body: notificationForm.body,
          customerIds
        }
      });

      if (result.data?.sendPushNotification?.success) {
        alert(`Sent: ${result.data.sendPushNotification.sent}, Failed: ${result.data.sendPushNotification.failed}`);
      } else {
        alert(result.data?.sendPushNotification?.message || 'Send failed');
      }
    } catch (error) {
      alert('Error sending notifications');
      console.error(error);
    }
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const sendTestNotification = () => {
    if (Notification.permission === 'granted') {
      new Notification('Test Notification', {
        body: 'This is a test push notification!',
        icon: '/firebase-logo.png',
      });
    } else {
      alert('Notification permission not granted');
    }
  };

  return (
    <div className="App" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1>🔔 Push Notification System</h1>
        <p>Complete customer/admin notification management system</p>

        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button
            onClick={() => setCurrentView('customer')}
            style={{
              padding: '10px 20px',
              backgroundColor: currentView === 'customer' ? '#007bff' : '#f8f9fa',
              color: currentView === 'customer' ? 'white' : 'black',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Customer View
          </button>
          <button
            onClick={() => { setCurrentView('admin'); loadCustomers(); }}
            style={{
              padding: '10px 20px',
              backgroundColor: currentView === 'admin' ? '#007bff' : '#f8f9fa',
              color: currentView === 'admin' ? 'white' : 'black',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Admin View
          </button>
        </div>
      </header>

      {currentView === 'customer' && (
        <div>
          <h2>Customer Portal</h2>

          {!isLoggedIn ? (
            <div>
              {/* Registration Form */}
              <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px' }}>
                <h3>Register New Account</h3>
                <div style={{ display: 'grid', gap: '10px' }}>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={registerForm.firstName}
                    onChange={(e) => setRegisterForm({...registerForm, firstName: e.target.value})}
                    style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={registerForm.lastName}
                    onChange={(e) => setRegisterForm({...registerForm, lastName: e.target.value})}
                    style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={registerForm.email}
                    onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                    style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={registerForm.password}
                    onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                    style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                  <button
                    onClick={handleRegister}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#28a745',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>

              {/* Login Form */}
              <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                <h3>Login to Existing Account</h3>
                <div style={{ display: 'grid', gap: '10px' }}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                    style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                    style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                  <button
                    onClick={handleLogin}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#007bff',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px', backgroundColor: '#d4edda' }}>
                <h3>Welcome, {customer?.firstName} {customer?.lastName}!</h3>
                <p>Email: {customer?.emailAddress}</p>
                <button
                  onClick={() => { setIsLoggedIn(false); setCustomer(null); }}
                  style={{
                    padding: '5px 15px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Logout
                </button>
              </div>

              {/* FCM Subscription */}
              <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px' }}>
                <h3>🔔 Push Notifications</h3>
                <p><strong>Browser Support:</strong> {isSupported ? '✅ Supported' : '❌ Not Supported'}</p>
                <p><strong>Permission:</strong> {Notification.permission}</p>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <button
                    onClick={handleSubscribeToNotifications}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#007bff',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Subscribe to Notifications
                  </button>

                  <button
                    onClick={sendTestNotification}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#28a745',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Test Local Notification
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {currentView === 'admin' && (
        <div>
          <h2>Admin Panel</h2>

          {/* Customer List */}
          <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px' }}>
            <h3>📋 Customers ({customers.length})</h3>
            <button
              onClick={loadCustomers}
              style={{
                padding: '5px 15px',
                backgroundColor: '#17a2b8',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginBottom: '15px'
              }}
            >
              Refresh
            </button>

            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
              {customers.map((item, index) => (
                <div
                  key={item.customer.id}
                  style={{
                    padding: '10px',
                    backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white',
                    border: '1px solid #dee2e6',
                    marginBottom: '5px'
                  }}
                >
                  <strong>{item.customer.firstName} {item.customer.lastName}</strong><br/>
                  Email: {item.customer.emailAddress}<br/>
                  Active Tokens: {item.activeTokensCount}
                </div>
              ))}
            </div>
          </div>

          {/* Send Notification */}
          <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>📢 Send Push Notification</h3>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Title:</label>
              <input
                type="text"
                value={notificationForm.title}
                onChange={(e) => setNotificationForm({...notificationForm, title: e.target.value})}
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Message:</label>
              <textarea
                value={notificationForm.body}
                onChange={(e) => setNotificationForm({...notificationForm, body: e.target.value})}
                rows={3}
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical' }}
              />
            </div>

            <button
              onClick={sendNotificationToCustomers}
              style={{
                padding: '10px 20px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Send to All Customers ({customers.length})
            </button>
          </div>
        </div>
      )}

      {/* Received Notifications */}
      {notifications.length > 0 && (
        <div style={{
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          margin: '20px 0',
          backgroundColor: '#f8f9fa'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3>📬 Recent Notifications ({notifications.length})</h3>
            <button
              onClick={clearNotifications}
              style={{
                padding: '5px 10px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              Clear
            </button>
          </div>

          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {notifications.slice().reverse().map((notification, index) => (
              <div
                key={`${notification.timestamp}-${index}`}
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
                  {notification.timestamp ? new Date(notification.timestamp).toLocaleString() : 'Unknown time'}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <footer style={{ marginTop: '40px', padding: '20px', borderTop: '1px solid #ccc', textAlign: 'center', fontSize: '14px', color: '#666' }}>
        <p>
          <strong>🎯 Complete Push Notification Flow:</strong><br/>
          <strong>Customer:</strong> Register → Login → Subscribe to Notifications<br/>
          <strong>Admin:</strong> View Customers → Send Targeted Notifications<br/>
          <strong>Testing:</strong> Use both views to test the complete flow
        </p>
      </footer>
    </div>
  );
}

export default App;