import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CustomerDashboard } from './components/customer/CustomerDashboard';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { useAppState } from './hooks/useAppState';
import './App.css';

function App() {
  const {
    // State
    notifications,
    isSupported,
    currentView,
    customer,
    loginForm,
    registerForm,
    isLoggedIn,
    customers,
    notificationForm,
    
    // Setters
    setCurrentView,
    setLoginForm,
    setRegisterForm,
    setNotificationForm,
    
    // Actions
    handleRegister,
    handleLogin,
    handleLogout,
    handleSubscribeToNotifications,
    loadCustomers,
    sendNotificationToCustomers
  } = useAppState();

  return (
    <div className="App" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <Header 
        currentView={currentView} 
        onViewChange={setCurrentView} 
      />

      {currentView === 'customer' ? (
        <CustomerDashboard
          customer={customer}
          isLoggedIn={isLoggedIn}
          loginForm={loginForm}
          setLoginForm={setLoginForm}
          registerForm={registerForm}
          setRegisterForm={setRegisterForm}
          notifications={notifications}
          isSupported={isSupported}
          onLogin={handleLogin}
          onLogout={handleLogout}
          onRegister={handleRegister}
          onSubscribe={handleSubscribeToNotifications}
        />
      ) : (
        <AdminDashboard
          customers={customers}
          notificationForm={notificationForm}
          setNotificationForm={setNotificationForm}
          onLoadCustomers={loadCustomers}
          onSendNotification={sendNotificationToCustomers}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;