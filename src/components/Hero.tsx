import React, { useState } from "react";

const Hero = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleGetSecureVPN = () => {
    setAuthMode('signup');
    setShowAuthModal(true);
  };

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

  const handleViewPlans = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-brand-50 via-brand-100 to-brand-200 pt-16 sm:pt-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-br from-brand-300/30 to-brand-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-10 sm:-left-20 w-30 sm:w-60 h-30 sm:h-60 bg-gradient-to-br from-brand-200/40 to-brand-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-20 sm:w-40 h-20 sm:h-40 bg-gradient-to-br from-brand-300/30 to-brand-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] sm:min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-xs sm:text-sm font-medium mb-4">
              <svg className="w-3 sm:w-4 h-3 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Trusted by 10M+ users worldwide
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Online security starts with a 
              <span className="bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent"> VPN</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Access the web safely and privately on unlimited devices with military-grade encryption.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button 
                  onClick={handleGetSecureVPN}
                  className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 shadow-xl-accent hover:scale-105"
                >
                  Get Secure VPN
                </button>
                
                <button 
                  onClick={handleViewPlans}
                  className="border-2 border-brand-500 text-brand-600 hover:bg-brand-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300"
                >
                  View Plans
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-neutral-600">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>No logs policy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Device Mockups */}
          <div className="relative flex justify-center lg:justify-end animate-slide-up order-1 lg:order-2 px-4 sm:px-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Phone Mockup */}
              <div className="relative z-20 transform -rotate-6 sm:-rotate-12 translate-x-4 sm:translate-x-8 mx-auto">
                <div className="w-48 sm:w-56 md:w-64 h-[390px] sm:h-[450px] md:h-[520px] bg-neutral-900 rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-brand-500 to-brand-600 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden relative">
                    {/* Phone Status Bar */}
                    <div className="flex justify-between items-center p-3 sm:p-4 text-white text-xs sm:text-sm">
                      <span className="font-medium">Secure VPN</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Phone Content */}
                    <div className="px-4 sm:px-6 py-6 sm:py-8 text-white text-center">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2">Protected</h3>
                      <p className="text-xs sm:text-sm opacity-90 mb-3 sm:mb-4">IP: 193.106.244.115</p>
                      <div className="bg-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 mb-3 sm:mb-4 backdrop-blur-sm">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className="w-5 sm:w-6 h-3 sm:h-4 bg-blue-500 rounded-sm flex items-center justify-center">
                            <div className="w-2.5 sm:w-3 h-1.5 sm:h-2 bg-white rounded-sm"></div>
                          </div>
                          <span className="text-xs sm:text-sm font-medium">United States</span>
                        </div>
                      </div>
                      <button className="bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium w-full hover:bg-white/30 transition-colors">
                        Disconnect
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop/Laptop Mockup */}
              <div className="absolute -bottom-2 sm:-bottom-4 md:-bottom-6 -left-4 sm:-left-6 md:-left-8 z-10 transform rotate-3 sm:rotate-6">
                <div className="w-48 sm:w-64 md:w-80 h-30 sm:h-40 md:h-48 bg-neutral-800 rounded-lg sm:rounded-xl p-0.5 sm:p-1 shadow-2xl scale-75 sm:scale-90 md:scale-100">
                  <div className="w-full h-full bg-neutral-900 rounded-lg sm:rounded-xl overflow-hidden relative">
                    {/* Desktop Content */}
                    <div className="p-2 sm:p-3 md:p-4 text-white">
                      <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-4">
                        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-accent-500 rounded-full"></div>
                        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-brand-500 rounded-full"></div>
                      </div>
                      <div className="bg-neutral-700 rounded-md sm:rounded-lg p-2 sm:p-3">
                        <div className="flex items-center justify-between mb-1 sm:mb-2">
                          <span className="text-xs sm:text-sm font-medium text-brand-400">Connected and secure</span>
                          <span className="text-xs text-brand-400">01:17</span>
                        </div>
                        <div className="text-xs text-neutral-300 mb-1 sm:mb-2">Connection time</div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="w-6 sm:w-8 h-6 sm:h-8 bg-brand-500 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold">IKE</span>
                          </div>
                          <div>
                            <div className="text-xs font-medium">IKEv2</div>
                            <div className="text-xs text-neutral-400 hidden sm:block">Protocol in use</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Shield Icon */}
              <div className="absolute top-1/3 sm:top-1/2 -right-2 sm:right-4 md:right-8 transform -translate-y-1/2 z-30">
                <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl-brand">
                  <svg className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="space-y-1 sm:space-y-2">
            <div className="text-xl sm:text-2xl font-bold text-brand-600">10M+</div>
            <div className="text-xs sm:text-sm text-neutral-600">Active Users</div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-xl sm:text-2xl font-bold text-brand-600">65+</div>
            <div className="text-xs sm:text-sm text-neutral-600">Countries</div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-xl sm:text-2xl font-bold text-brand-600">3200+</div>
            <div className="text-xs sm:text-sm text-neutral-600">Servers</div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-xl sm:text-2xl font-bold text-brand-600">24/7</div>
            <div className="text-xs sm:text-sm text-neutral-600">Support</div>
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
                    <label htmlFor="hero-name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="hero-name"
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
                  <label htmlFor="hero-email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="hero-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="hero-password" className="block text-sm font-medium text-neutral-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="hero-password"
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
                    <label htmlFor="hero-confirmPassword" className="block text-sm font-medium text-neutral-700 mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="hero-confirmPassword"
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
    </section>
  );
};

export default Hero;
