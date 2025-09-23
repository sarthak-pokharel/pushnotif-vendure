import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ 
      marginTop: '40px', 
      padding: '20px', 
      borderTop: '1px solid #ccc', 
      textAlign: 'center', 
      fontSize: '14px', 
      color: '#666' 
    }}>
      <p>
        <strong>🎯 Complete Push Notification Flow:</strong><br/>
        <strong>Customer:</strong> Register → Login → Subscribe to Notifications<br/>
        <strong>Admin:</strong> View Customers → Send Targeted Notifications<br/>
        <strong>Testing:</strong> Use both views to test the complete flow
      </p>
    </footer>
  );
};