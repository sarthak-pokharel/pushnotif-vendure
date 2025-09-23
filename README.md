# Push Notification System with Vendure & Firebase

A complete push notification system built with Vendure e-commerce framework, React frontend, and Firebase Cloud Messaging (FCM). This system supports both customer and admin interfaces with real-time push notifications that work even when the browser tab is closed.

## 🏗️ Architecture

### Backend (Vendure)
- **Framework**: Vendure e-commerce platform with TypeScript
- **Database**: SQLite (`pushnotif.sqlite`)
- **Push Plugin**: Custom Vendure plugin for push notification management
- **Admin UI**: Extended Vendure admin panel with push notification controls
- **Service Account**: Firebase service account integration for server-side notifications

### Frontend (React + Vite)
- **Framework**: React 19.1.1 with TypeScript
- **Build Tool**: Vite
- **GraphQL Client**: Apollo Client 4.0.5
- **Push Service**: Firebase 12.3.0
- **Service Worker**: Background notification handling

## 🚀 Features

### Core Functionality
- ✅ **Background Notifications**: Receive notifications even when browser tab is closed
- ✅ **Customer Registration**: User signup/login with push notification subscription
- ✅ **Admin Dashboard**: Send notifications to all customers or specific users
- ✅ **Real-time Messaging**: Instant notification delivery via FCM
- ✅ **Permission Management**: Proper notification permission handling
- ✅ **Token Management**: FCM token generation and refresh handling

### User Interfaces
- **Customer View**: 
  - User authentication (login/register)
  - Push notification subscription toggle
  - Notification history
  - Real-time notification reception

- **Admin View**:
  - Customer management
  - Bulk notification sending
  - Individual customer targeting
  - Notification analytics

## 📁 Project Structure

```
pushnotif/
├── backend/                    # Vendure backend
│   ├── src/
│   │   ├── plugins/
│   │   │   └── push-notif/    # Custom push notification plugin
│   │   ├── vendure-config.ts  # Vendure configuration
│   │   └── index.ts           # Server entry point
│   ├── admin-ui/              # Extended Vendure admin interface
│   │   └── src/
│   │       └── extensions/
│   │           └── push-notif-ui/
│   └── pushnotif.sqlite       # Database file
│
├── frontend/                   # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin/         # Admin dashboard components
│   │   │   ├── auth/          # Authentication components
│   │   │   ├── customer/      # Customer dashboard components
│   │   │   ├── layout/        # Layout components
│   │   │   └── notifications/ # Notification components
│   │   ├── firebase/
│   │   │   ├── config.ts      # Firebase configuration
│   │   │   └── messaging.ts   # FCM service implementation
│   │   ├── graphql/           # GraphQL queries and client
│   │   ├── hooks/             # React hooks
│   │   └── types/             # TypeScript types
│   └── public/
│       └── firebase-messaging-sw.js  # Service worker for background notifications
│
└── README.md
```

## 🔧 Setup & Installation

### Prerequisites
- Node.js 18+
- npm or bun
- Firebase project with FCM enabled

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Firebase Configuration
1. Create a Firebase project at https://console.firebase.google.com
2. Enable Cloud Messaging
3. Generate a service account key
4. Update configuration files:
   - `frontend/src/firebase/config.ts` - Client configuration
   - `backend/src/service-account.json` - Server configuration (gitignored)

## 🔥 Key Technical Implementation

### Service Worker for Background Notifications
The project implements a robust service worker (`firebase-messaging-sw.js`) that:
- Handles background message reception via Firebase
- Shows persistent notifications with custom actions
- Manages notification clicks and app focus
- Provides fallback push event handling

### FCM Service Class
A singleton service class manages:
- Service worker registration
- FCM token generation and refresh
- Permission requests
- Message listening (foreground)

### Push Notification Plugin
Custom Vendure plugin providing:
- GraphQL mutations for subscription management
- Admin API for sending notifications
- Database models for tracking subscriptions
- Integration with Firebase Admin SDK

## 🎯 Usage

### For Customers
1. Visit the frontend application
2. Register/login with credentials
3. Grant notification permissions when prompted
4. Subscribe to push notifications
5. Receive notifications in real-time (even with tab closed)

### For Admins
1. Access the admin dashboard
2. Load customer list
3. Compose notification message
4. Send to all customers or specific users
5. Monitor delivery status

## 🔐 Security Features

- Service account credentials properly gitignored
- VAPID keys for secure FCM communication
- Permission-based notification access
- Token validation and refresh mechanisms

## 🛠️ Development Notes

### Background Notification Requirements
- HTTPS required for service workers (dev server provides this)
- Proper service worker scope configuration
- FCM token management and refresh
- Notification permission handling

### Recent Improvements
- Enhanced service worker with better error handling
- Improved token refresh mechanism
- Better notification persistence settings
- Robust fallback push event handling

## 📝 API Endpoints

### GraphQL Mutations
- `subscribeToNotifications` - Subscribe user to push notifications
- `unsubscribeFromNotifications` - Unsubscribe user
- `sendPushNotification` - Send notification (admin)

### GraphQL Queries
- `myPushSubscriptions` - Get user's subscription status
- `customers` - Get customer list (admin)

## 🧪 Testing

To test background notifications:
1. Subscribe to notifications in the frontend
2. Close the browser tab completely
3. Send a notification from the admin panel
4. Notification should appear via the operating system

## 📊 Technology Stack

- **Backend**: Vendure, TypeScript, SQLite, Firebase Admin SDK
- **Frontend**: React, TypeScript, Vite, Apollo Client, Firebase SDK
- **Infrastructure**: Service Workers, GraphQL, Push API
- **Styling**: CSS with component-based architecture

## 🔄 Git Workflow

- Main branch: `main` (clean history with sensitive files removed)
- Service account files are gitignored for security
- Clean commit history with proper branch management

---

This project demonstrates a complete implementation of a modern push notification system with proper background handling, making it suitable for production e-commerce applications requiring real-time customer engagement.
