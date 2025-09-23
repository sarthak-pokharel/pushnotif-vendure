import { useState, useEffect } from 'react';
import { FCMService } from '../firebase/messaging';
import { shopClient, adminClient } from '../utils/graphql-client';
import type { Customer, CustomerWithTokens, LoginForm, RegisterForm, NotificationForm } from '../types/app';
import type { NotificationPayload } from '../types/notifications';

interface ExtendedNotificationPayload extends NotificationPayload {
  timestamp?: number;
}

export const useAppState = () => {
  // Core state
  const [notifications, setNotifications] = useState<ExtendedNotificationPayload[]>([]);
  const [fcmService] = useState(() => FCMService.getInstance());
  const [isSupported, setIsSupported] = useState(false);
  const [currentView, setCurrentView] = useState<'customer' | 'admin'>('customer');

  // Customer state
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loginForm, setLoginForm] = useState<LoginForm>({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Admin state
  const [customers, setCustomers] = useState<CustomerWithTokens[]>([]);
  const [notificationForm, setNotificationForm] = useState<NotificationForm>({
    title: 'Admin Notification',
    body: 'This is a test notification from admin!',
    targetCustomers: []
  });

  // Initialize FCM
  useEffect(() => {
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
        mutation RegisterCustomerAccount($input: RegisterCustomerInput!) {
          registerCustomerAccount(input: $input) {
            ... on Success {
              success
            }
            ... on ErrorResult {
              errorCode
              message
            }
          }
        }
      `, { 
        input: {
          emailAddress: registerForm.email,
          password: registerForm.password,
          firstName: registerForm.firstName,
          lastName: registerForm.lastName
        }
      });

      if (result.data?.registerCustomerAccount?.success) {
        alert('Registration successful! Please check your email to verify your account.');
        setRegisterForm({ email: '', password: '', firstName: '', lastName: '' });
      } else {
        alert(result.data?.registerCustomerAccount?.message || 'Registration failed');
      }
    } catch (error) {
      alert('Registration error');
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      const result = await shopClient.request(`
        mutation Authenticate($username: String!, $password: String!) {
          authenticate(input: { native: { username: $username, password: $password } }) {
            ... on CurrentUser {
              id
              identifier
            }
            ... on ErrorResult {
              errorCode
              message
            }
          }
        }
      `, { username: loginForm.email, password: loginForm.password });

      if (result.data?.authenticate?.id) {
        // Get customer profile after authentication
        const profileResult = await shopClient.request(`
          query GetActiveCustomer {
            activeCustomer {
              id
              firstName
              lastName
              emailAddress
            }
          }
        `);

        if (profileResult.data?.activeCustomer) {
          setCustomer(profileResult.data.activeCustomer);
          setIsLoggedIn(true);
          alert('Login successful!');
        } else {
          alert('Failed to get customer profile after login');
        }
      } else {
        alert(result.data?.authenticate?.message || 'Login failed');
      }
    } catch (error) {
      alert('Login error');
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await shopClient.request(`
        mutation Logout {
          logout {
            success
          }
        }
      `);
      setCustomer(null);
      setIsLoggedIn(false);
      alert('Logged out successfully!');
    } catch (error) {
      console.error('Logout error:', error);
      // Even if the request fails, clear the local state
      setCustomer(null);
      setIsLoggedIn(false);
      alert('Logged out (local session cleared)');
    }
  };

  const handleSubscribeToNotifications = async () => {
    if (!isLoggedIn) {
      alert('Please log in first to subscribe to notifications');
      return;
    }

    try {
      const token = await fcmService.getToken();
      if (!token) {
        alert('Failed to get FCM token. Please check your browser permissions.');
        return;
      }

      const deviceId = `device_${Date.now()}`;
      const userAgent = navigator.userAgent;

      const result = await shopClient.request(`
        mutation SubscribeToPushNotifications($fcmToken: String!, $deviceId: String, $userAgent: String) {
          subscribeToPushNotifications(fcmToken: $fcmToken, deviceId: $deviceId, userAgent: $userAgent) {
            success
            message
          }
        }
      `, { fcmToken: token, deviceId, userAgent });

      if (result.data?.subscribeToPushNotifications?.success) {
        alert('Successfully subscribed to push notifications!');
      } else {
        alert(result.data?.subscribeToPushNotifications?.message || 'Subscription failed');
      }
    } catch (error) {
      alert('Error subscribing to notifications');
      console.error(error);
    }
  };

  // Admin functions
  const loadCustomers = async () => {
    try {
      const result = await adminClient.request(`
        query GetCustomersWithTokens {
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

      if (result.data?.customersWithTokens) {
        setCustomers(result.data.customersWithTokens);
      }
    } catch (error) {
      alert('Error loading customers');
      console.error(error);
    }
  };

  const sendNotificationToCustomers = async () => {
    if (notificationForm.targetCustomers.length === 0) {
      alert('Please select at least one customer to send notifications to');
      return;
    }

    try {
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
          customerIds: notificationForm.targetCustomers,
          data: {
            type: 'admin_notification',
            timestamp: Date.now().toString()
          }
        }
      });

      if (result.data?.sendPushNotification) {
        const response = result.data.sendPushNotification;
        alert(`Notification sent! Success: ${response.sent}, Failed: ${response.failed}`);
        
        // Reset target customers after successful send
        if (response.success) {
          setNotificationForm(prev => ({ ...prev, targetCustomers: [] }));
        }
      }
    } catch (error) {
      alert('Error sending notifications');
      console.error(error);
    }
  };

  return {
    // State
    notifications,
    isSupported,
    currentView,
    customer,
    loginForm,
    registerForm,
    isLoggedIn,
    customers,
    notificationForm,
    
    // Setters
    setCurrentView,
    setLoginForm,
    setRegisterForm,
    setNotificationForm,
    
    // Actions
    handleRegister,
    handleLogin,
    handleLogout,
    handleSubscribeToNotifications,
    loadCustomers,
    sendNotificationToCustomers
  };
};