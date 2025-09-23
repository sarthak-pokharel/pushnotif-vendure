import React from 'react';
import { LoginComponent } from '../auth/LoginComponent';
import { RegisterComponent } from '../auth/RegisterComponent';
import { PushNotificationManager } from '../notifications/PushNotificationManager';
import type { Customer, LoginForm, RegisterForm } from '../../types/app';
import type { NotificationPayload } from '../../types/notifications';

interface ExtendedNotificationPayload extends NotificationPayload {
  timestamp?: number;
}

interface CustomerDashboardProps {
  customer: Customer | null;
  isLoggedIn: boolean;
  loginForm: LoginForm;
  setLoginForm: (form: LoginForm) => void;
  registerForm: RegisterForm;
  setRegisterForm: (form: RegisterForm) => void;
  notifications: ExtendedNotificationPayload[];
  isSupported: boolean;
  onLogin: () => Promise<void>;
  onLogout: () => Promise<void>;
  onRegister: () => Promise<void>;
  onSubscribe: () => Promise<void>;
}

export const CustomerDashboard: React.FC<CustomerDashboardProps> = ({
  customer,
  isLoggedIn,
  loginForm,
  setLoginForm,
  registerForm,
  setRegisterForm,
  notifications,
  isSupported,
  onLogin,
  onLogout,
  onRegister,
  onSubscribe
}) => {
  return (
    <div>
      <LoginComponent
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        onLogin={onLogin}
        onLogout={onLogout}
        isLoggedIn={isLoggedIn}
        customer={customer}
      />

      {!isLoggedIn && (
        <RegisterComponent
          registerForm={registerForm}
          setRegisterForm={setRegisterForm}
          onRegister={onRegister}
        />
      )}

      {isLoggedIn && (
        <PushNotificationManager
          isSupported={isSupported}
          onSubscribe={onSubscribe}
          notifications={notifications}
        />
      )}
    </div>
  );
};