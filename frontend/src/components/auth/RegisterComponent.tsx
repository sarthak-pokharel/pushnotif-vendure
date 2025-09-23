import React from 'react';
import type { RegisterForm } from '../../types/app';

interface RegisterComponentProps {
  registerForm: RegisterForm;
  setRegisterForm: (form: RegisterForm) => void;
  onRegister: () => Promise<void>;
}

export const RegisterComponent: React.FC<RegisterComponentProps> = ({
  registerForm,
  setRegisterForm,
  onRegister
}) => {
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      marginBottom: '20px' 
    }}>
      <h3>📝 Customer Registration</h3>
      <div style={{ display: 'grid', gap: '10px' }}>
        <input
          type="text"
          placeholder="First Name"
          value={registerForm.firstName}
          onChange={(e) => setRegisterForm({ ...registerForm, firstName: e.target.value })}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={registerForm.lastName}
          onChange={(e) => setRegisterForm({ ...registerForm, lastName: e.target.value })}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="email"
          placeholder="Email"
          value={registerForm.email}
          onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={registerForm.password}
          onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button 
          onClick={onRegister}
          style={{
            padding: '10px',
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
  );
};