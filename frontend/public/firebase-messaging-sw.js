// Import and configure Firebase
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: "AIzaSyD7aFMB6SJj_tRuJDYoLdg2o4N-Cju6c14",
  authDomain: "demo77forfun.firebaseapp.com",
  projectId: "demo77forfun",
  storageBucket: "demo77forfun.firebasestorage.app",
  messagingSenderId: "782653294206",
  appId: "1:782653294206:web:3597a6862d6366eafcba2f",
  measurementId: "G-7LHQKJTYW4"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);

  const notificationTitle = payload.notification?.title || payload.data?.title || 'New Notification';
  const notificationBody = payload.notification?.body || payload.data?.body || 'You have a new message';
  
  const notificationOptions = {
    body: notificationBody,
    icon: payload.notification?.icon || payload.data?.icon || '/firebase-logo.png',
    badge: '/badge-icon.png',
    data: {
      ...payload.data,
      url: payload.fcmOptions?.link || payload.data?.click_action || '/',
    },
    actions: [
      {
        action: 'open',
        title: 'Open App',
      },
      {
        action: 'close',
        title: 'Dismiss',
      },
    ],
    requireInteraction: false, // Auto-dismiss after some time
    silent: false,
    vibrate: [200, 100, 200], // Vibration pattern
    tag: 'notification-' + (payload.data?.timestamp || Date.now()), // Unique tag
  };

  console.log('Showing notification with options:', notificationOptions);
  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event);
  event.notification.close();

  if (event.action === 'open' || !event.action) {
    // Open the app - use the URL from notification data or default to homepage
    const urlToOpen = event.notification.data?.url || '/';
    
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
        // Check if app is already open
        for (const client of clientList) {
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            // Focus existing window and navigate if needed
            if (urlToOpen !== '/') {
              client.navigate(urlToOpen);
            }
            return client.focus();
          }
        }
        // Open new window if app is not already open
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
    );
  }
  // 'close' action or other actions will just close the notification
});