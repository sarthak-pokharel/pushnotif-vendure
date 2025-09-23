import React from 'react';
import type { CustomerWithTokens, NotificationForm } from '../../types/app';

interface AdminDashboardProps {
  customers: CustomerWithTokens[];
  notificationForm: NotificationForm;
  setNotificationForm: (form: NotificationForm) => void;
  onLoadCustomers: () => Promise<void>;
  onSendNotification: () => Promise<void>;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  customers,
  notificationForm,
  setNotificationForm,
  onLoadCustomers,
  onSendNotification
}) => {
  const handleCustomerToggle = (customerId: string) => {
    const isSelected = notificationForm.targetCustomers.includes(customerId);
    const newTargetCustomers = isSelected
      ? notificationForm.targetCustomers.filter(id => id !== customerId)
      : [...notificationForm.targetCustomers, customerId];
    
    setNotificationForm({
      ...notificationForm,
      targetCustomers: newTargetCustomers
    });
  };

  return (
    <div>
      <div style={{ 
        padding: '20px', 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        marginBottom: '20px' 
      }}>
        <h3>👥 Customer Management</h3>
        <button 
          onClick={onLoadCustomers}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginBottom: '15px'
          }}
        >
          Load Customers with Push Tokens
        </button>
        
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {customers.length === 0 ? (
            <p>No customers loaded. Click the button above to load customers.</p>
          ) : (
            customers.map((customerData) => (
              <div
                key={customerData.customer.id}
                style={{
                  padding: '10px',
                  backgroundColor: 'white',
                  border: '1px solid #dee2e6',
                  borderRadius: '4px',
                  marginBottom: '8px'
                }}
              >
                <div style={{ fontWeight: 'bold' }}>
                  {customerData.customer.firstName} {customerData.customer.lastName}
                </div>
                <div style={{ fontSize: '14px', color: '#666' }}>
                  {customerData.customer.emailAddress}
                </div>
                <div style={{ fontSize: '12px', color: '#28a745' }}>
                  Active tokens: {customerData.activeTokensCount}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div style={{ 
        padding: '20px', 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        marginBottom: '20px' 
      }}>
        <h3>📢 Send Notifications</h3>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Select Customers:
          </label>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {customers.map((customerData) => (
              <label 
                key={customerData.customer.id} 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '5px 10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  backgroundColor: notificationForm.targetCustomers.includes(customerData.customer.id) 
                    ? '#e7f3ff' 
                    : 'white',
                  cursor: 'pointer'
                }}
              >
                <input
                  type="checkbox"
                  checked={notificationForm.targetCustomers.includes(customerData.customer.id)}
                  onChange={() => handleCustomerToggle(customerData.customer.id)}
                />
                {customerData.customer.firstName} {customerData.customer.lastName}
              </label>
            ))}
            {customers.length === 0 && (
              <p style={{ color: '#666', fontStyle: 'italic' }}>
                Load customers first to select notification targets
              </p>
            )}
          </div>
        </div>

        <div style={{ display: 'grid', gap: '10px', marginBottom: '15px' }}>
          <input
            type="text"
            placeholder="Notification Title"
            value={notificationForm.title}
            onChange={(e) => setNotificationForm({ ...notificationForm, title: e.target.value })}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <textarea
            placeholder="Notification Message"
            value={notificationForm.body}
            onChange={(e) => setNotificationForm({ ...notificationForm, body: e.target.value })}
            rows={3}
            style={{ 
              padding: '8px', 
              borderRadius: '4px', 
              border: '1px solid #ccc',
              resize: 'vertical'
            }}
          />
        </div>

        <button 
          onClick={onSendNotification}
          disabled={notificationForm.targetCustomers.length === 0}
          style={{
            padding: '10px 20px',
            backgroundColor: notificationForm.targetCustomers.length > 0 ? '#28a745' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: notificationForm.targetCustomers.length > 0 ? 'pointer' : 'not-allowed'
          }}
        >
          Send to {notificationForm.targetCustomers.length} selected customer{notificationForm.targetCustomers.length !== 1 ? 's' : ''}
        </button>
      </div>
    </div>
  );
};