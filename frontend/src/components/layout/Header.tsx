import React from 'react';

interface HeaderProps {
  currentView: 'customer' | 'admin';
  onViewChange: (view: 'customer' | 'admin') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  return (
    <header style={{ marginBottom: '30px' }}>
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>
        🔔 Push Notification Demo - Vendure + Firebase
      </h1>
      
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px', justifyContent: 'center' }}>
        <button
          onClick={() => onViewChange('customer')}
          style={{
            padding: '10px 20px',
            backgroundColor: currentView === 'customer' ? '#007bff' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: currentView === 'customer' ? 'bold' : 'normal'
          }}
        >
          👤 Customer View
        </button>
        <button
          onClick={() => onViewChange('admin')}
          style={{
            padding: '10px 20px',
            backgroundColor: currentView === 'admin' ? '#007bff' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: currentView === 'admin' ? 'bold' : 'normal'
          }}
        >
          🛠️ Admin View
        </button>
      </div>

      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0, color: '#666' }}>
          <strong>Current View:</strong> {currentView === 'customer' ? '👤 Customer' : '🛠️ Admin'} | 
          <strong> Mode:</strong> {currentView === 'customer' 
            ? ' Register, Login, and Subscribe to Notifications' 
            : ' Manage Customers and Send Push Notifications'
          }
        </p>
      </div>
    </header>
  );
};