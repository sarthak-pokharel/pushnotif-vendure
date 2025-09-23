import type { NotificationPayload } from './notifications';

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
}

export interface CustomerWithTokens {
  customer: Customer;
  activeTokensCount: number;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface NotificationForm {
  title: string;
  body: string;
  targetCustomers: string[];
}

export interface AppState {
  notifications: NotificationPayload[];
  currentView: 'customer' | 'admin';
  customer: Customer | null;
  isLoggedIn: boolean;
  customers: CustomerWithTokens[];
}