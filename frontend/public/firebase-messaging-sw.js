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

  const notificationTitle = payload.notification.title || 'New Notification';
  const notificationOptions = {
    body: payload.notification.body || 'You have a new message',
    icon: payload.notification.icon || '/firebase-logo.png',
    badge: '/badge-icon.png',
    data: payload.data || {},
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
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event);
  event.notification.close();

  if (event.action === 'open') {
    // Open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
  // 'close' action or no action will just close the notification
});