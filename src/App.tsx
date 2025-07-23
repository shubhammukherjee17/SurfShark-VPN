import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Download from './components/Download';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {

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

  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Download />
      <Testimonials />
      <FAQ />
      <Footer />
      
      {/* Floating Support Button */}
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
