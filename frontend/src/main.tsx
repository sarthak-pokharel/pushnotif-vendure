import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Initialize service worker early for push notifications
if ('serviceWorker' in navigator && 'PushManager' in window) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js', {
    scope: '/'
  }).then((registration) => {
    console.log('Service Worker registered early:', registration);
  }).catch((error) => {
    console.error('Service Worker registration failed early:', error);
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
