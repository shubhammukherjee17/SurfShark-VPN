import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Download from './components/Download';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Payment from './components/Payment';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{name: string, email: string} | null>(null);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
    duration: string;
    features: string[];
  } | null>(null);

  const handleLogin = (userDetails: {name: string, email: string}) => {
    setUser(userDetails);
    setIsLoggedIn(true);
    setShowDashboard(true); 
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setShowDashboard(false);
    setShowPayment(false);
  };

  const handleNavigateToDashboard = () => {
    setShowDashboard(true);
    setShowPayment(false);
  };

  const handleNavigateToWebsite = () => {
    setShowDashboard(false);
    setShowPayment(false);
  };

  const handleNavigateToPayment = (plan?: {
    name: string;
    price: string;
    duration: string;
    features: string[];
  }) => {
    if (!isLoggedIn) {
      alert('Please log in first to purchase a plan');
      return;
    }
    setSelectedPlan(plan || null);
    setShowPayment(true);
    setShowDashboard(false);
  };

  const handleEmergencySupport = () => {
    alert('🆘 Emergency Support Contact\n\n📞 24/7 Support Available:\n• Live Chat: Available now\n• Email: support@securevpn.com\n• Phone: 1-800-SECUREVPN\n\n⚡ Average response time: < 5 minutes\n🔒 Priority security support');
  };

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'h') {
        e.preventDefault();
        handleEmergencySupport();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (showPayment && isLoggedIn && user) {
    return (
      <div className="App">
        <Payment 
          user={user} 
          onBackToWebsite={handleNavigateToWebsite}
          selectedPlan={selectedPlan || undefined}
        />
        <button
          onClick={handleEmergencySupport}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 animate-pulse-glow"
          title="24/7 Support (Ctrl+H)"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    );
  }

  if (isLoggedIn && user && showDashboard) {
    return (
      <div className="App">
        <Dashboard user={user} onLogout={handleLogout} />
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
              <button 
                onClick={handleNavigateToWebsite}
                className="flex items-center space-x-2 text-brand-600 hover:text-brand-700 font-medium transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to Website</span>
              </button>
              
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-xs">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-neutral-700 font-medium text-sm">{user.name}</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleEmergencySupport}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 animate-pulse-glow"
          title="24/7 Support (Ctrl+H)"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Header 
        onLogin={handleLogin} 
        user={user} 
        onLogout={handleLogout}
        onNavigateToDashboard={handleNavigateToDashboard}
        isLoggedIn={isLoggedIn}
      />
      <Hero 
        onLogin={handleLogin} 
        onNavigateToPayment={handleNavigateToPayment}
        isLoggedIn={isLoggedIn}
      />
      <Features />
      <Pricing onNavigateToPayment={handleNavigateToPayment} />
      <Download />
      <Testimonials />
      <FAQ />
      <Footer />

      <button
        onClick={handleEmergencySupport}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 animate-pulse-glow"
        title="24/7 Support (Ctrl+H)"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

export default App;
