import React from "react";

const Header = () => {
  const handleGetSurfshark = () => {
    alert('🚀 Get SecureVPN\n\nStart your secure journey today!\n\n✅ 30-day money-back guarantee\n✅ Unlimited devices\n✅ 24/7 support\n\nRedirecting to signup...');
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50 border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent">
            SecureVPN
          </div>
        </div>

        {/* Navigation Menu (Hidden on mobile, shown on desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-neutral-600 hover:text-brand-600 font-medium transition-colors duration-200">
            Features
          </a>
          <a href="#pricing" className="text-neutral-600 hover:text-brand-600 font-medium transition-colors duration-200">
            Pricing
          </a>
          <a href="#download" className="text-neutral-600 hover:text-brand-600 font-medium transition-colors duration-200">
            Download
          </a>
          <a href="#faq" className="text-neutral-600 hover:text-brand-600 font-medium transition-colors duration-200">
            FAQ
          </a>
        </nav>

        {/* CTA Button */}
        <button 
          onClick={handleGetSurfshark}
          className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-6 py-2.5 rounded-xl font-semibold shadow-accent transition-all duration-300 hover:shadow-xl-accent hover:scale-105"
        >
          Get SecureVPN
        </button>
      </div>
    </header>
  );
};

export default Header;
