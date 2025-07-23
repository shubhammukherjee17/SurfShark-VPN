import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (authMode === 'signup') {
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        alert('Please fill in all fields');
        setIsLoading(false);
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        setIsLoading(false);
        return;
      }
      if (formData.password.length < 8) {
        alert('Password must be at least 8 characters long');
        setIsLoading(false);
        return;
      }
    } else {
      if (!formData.email || !formData.password) {
        alert('Please fill in all fields');
        setIsLoading(false);
        return;
      }
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (authMode === 'signup') {
        alert(`🎉 Welcome to Secure VPN, ${formData.name}!\n\n✅ Account created successfully\n✅ Verification email sent to ${formData.email}\n✅ 7-day free trial activated\n\nRedirecting to dashboard...`);
      } else {
        alert(`🚀 Welcome back to Secure VPN!\n\n✅ Login successful\n✅ All devices synced\n✅ Premium features available\n\nRedirecting to dashboard...`);
      }
      
      setShowAuthModal(false);
      setFormData({ email: '', password: '', confirmPassword: '', name: '' });
    } catch (error) {
      alert('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleMenuClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50 border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 flex-shrink-0 hover:opacity-80 transition-opacity duration-200"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent">
              Secure VPN
            </div>
          </button>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a 
              href="#features" 
              onClick={(e) => { e.preventDefault(); handleMenuClick('features'); }}
              className="text-neutral-600 hover:text-brand-600 font-medium transition-colors duration-200 text-sm lg:text-base"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => { e.preventDefault(); handleMenuClick('pricing'); }}
              className="text-neutral-600 hover:text-brand-600 font-medium transition-colors duration-200 text-sm lg:text-base"
            >
              Pricing
            </a>
            <a 
              href="#download" 
              onClick={(e) => { e.preventDefault(); handleMenuClick('download'); }}
              className="text-neutral-600 hover:text-brand-600 font-medium transition-colors duration-200 text-sm lg:text-base"
            >
              Download
            </a>
            <a 
              href="#faq" 
              onClick={(e) => { e.preventDefault(); handleMenuClick('faq'); }}
              className="text-neutral-600 hover:text-brand-600 font-medium transition-colors duration-200 text-sm lg:text-base"
            >
              FAQ
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-brand-600 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <svg 
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ease-in-out ${!isMobileMenuOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-neutral-100">
            <button
              onClick={() => handleMenuClick('features')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-neutral-600 hover:text-brand-600 hover:bg-neutral-50 rounded-md transition-all duration-200 transform hover:translate-x-1"
            >
              Features
            </button>
            <button
              onClick={() => handleMenuClick('pricing')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-neutral-600 hover:text-brand-600 hover:bg-neutral-50 rounded-md transition-all duration-200 transform hover:translate-x-1"
            >
              Pricing
            </button>
            <button
              onClick={() => handleMenuClick('download')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-neutral-600 hover:text-brand-600 hover:bg-neutral-50 rounded-md transition-all duration-200 transform hover:translate-x-1"
            >
              Download
            </button>
            <button
              onClick={() => handleMenuClick('faq')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-neutral-600 hover:text-brand-600 hover:bg-neutral-50 rounded-md transition-all duration-200 transform hover:translate-x-1"
            >
              FAQ
            </button>
          </div>
        </div>
      </div>

      {/* Authentication Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">
                    {authMode === 'signup' ? 'Join Secure VPN' : 'Welcome Back'}
                  </h2>
                </div>
                <button
                  onClick={() => setShowAuthModal(false)}
                  className="text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleAuthSubmit} className="space-y-4">
                {authMode === 'signup' && (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    placeholder="Enter your password"
                    minLength={8}
                    required
                  />
                  {authMode === 'signup' && (
                    <p className="text-xs text-neutral-500 mt-1">Password must be at least 8 characters long</p>
                  )}
                </div>

                {authMode === 'signup' && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 disabled:from-neutral-400 disabled:to-neutral-500 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      <span>{authMode === 'signup' ? 'Creating Account...' : 'Signing In...'}</span>
                    </div>
                  ) : (
                    authMode === 'signup' ? 'Start Free Trial' : 'Sign In'
                  )}
                </button>
              </form>

              {/* Toggle Mode */}
              <div className="mt-6 text-center">
                <p className="text-sm text-neutral-600">
                  {authMode === 'signup' ? 'Already have an account?' : "Don't have an account?"}
                  <button
                    type="button"
                    onClick={() => setAuthMode(authMode === 'signup' ? 'login' : 'signup')}
                    className="ml-2 text-brand-600 hover:text-brand-700 font-medium transition-colors"
                  >
                    {authMode === 'signup' ? 'Sign In' : 'Sign Up'}
                  </button>
                </p>
              </div>

              {/* Features */}
              {authMode === 'signup' && (
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <h3 className="text-sm font-semibold text-neutral-900 mb-3">What you get:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-neutral-600">
                      <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>7-day free trial</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-neutral-600">
                      <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Unlimited devices</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-neutral-600">
                      <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>30-day money-back guarantee</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
