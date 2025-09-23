import React from 'react';
import type { LoginForm, Customer } from '../../types/app';

interface LoginComponentProps {
  loginForm: LoginForm;
  setLoginForm: (form: LoginForm) => void;
  onLogin: () => Promise<void>;
  onLogout: () => Promise<void>;
  isLoggedIn: boolean;
  customer: Customer | null;
}

export const LoginComponent: React.FC<LoginComponentProps> = ({
  loginForm,
  setLoginForm,
  onLogin,
  onLogout,
  isLoggedIn,
  customer
}) => {
  if (isLoggedIn && customer) {
    return (
      <div style={{ 
        padding: '20px', 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        marginBottom: '20px', 
        backgroundColor: '#d4edda' 
      }}>
        <h3>✅ Logged in as: {customer.firstName} {customer.lastName}</h3>
        <p>Email: {customer.emailAddress}</p>
        <button 
          onClick={onLogout}
          style={{
            padding: '10px 20px',
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
    );
  }

  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      marginBottom: '20px' 
    }}>
      <h3>🔐 Customer Login</h3>
      <div style={{ display: 'grid', gap: '10px' }}>
        <input
          type="email"
          placeholder="Email"
          value={loginForm.email}
          onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginForm.password}
          onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button 
          onClick={onLogin}
          style={{
            padding: '10px',
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
  );
};