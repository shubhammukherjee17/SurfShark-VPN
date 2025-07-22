import React from "react";

const Hero = () => {
  const handleGetSurfshark = () => {
    alert('🚀 Get SecureVPN\n\nStart your secure journey today!\n\n✅ 30-day money-back guarantee\n✅ Unlimited devices\n✅ 24/7 support\n\nRedirecting to signup...');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-brand-50 via-brand-100 to-brand-200 pt-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-300/30 to-brand-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-gradient-to-br from-brand-200/40 to-brand-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-brand-300/30 to-brand-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Online security starts with a VPN
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
              Access the web safely and privately on unlimited devices.
            </p>

            <div className="space-y-4">
              <button 
                onClick={handleGetSurfshark}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200 shadow-lg"
              >
                Get Surfshark
              </button>
              
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Content - Device Mockups */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Phone Mockup */}
            <div className="relative z-20 transform -rotate-12 translate-x-8">
              <div className="w-64 h-[520px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-teal-500 rounded-[2rem] overflow-hidden relative">
                  {/* Phone Status Bar */}
                  <div className="flex justify-between items-center p-4 text-white text-sm">
                    <span>VPN</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Phone Content */}
                  <div className="px-6 py-8 text-white text-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Connected</h3>
                    <p className="text-sm opacity-90 mb-4">IP address 193.106.244.115</p>
                    <div className="bg-white bg-opacity-10 rounded-lg p-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
                          <div className="w-3 h-2 bg-white rounded-sm"></div>
                        </div>
                        <span className="text-sm">United States</span>
                      </div>
                    </div>
                    <button className="bg-teal-600 text-white px-6 py-2 rounded-lg text-sm font-medium w-full">
                      Disconnect
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop/Laptop Mockup */}
            <div className="relative z-10 transform rotate-6 -translate-x-8 translate-y-8">
              <div className="w-80 h-48 bg-gray-800 rounded-lg p-1 shadow-2xl">
                <div className="w-full h-full bg-gray-900 rounded-lg overflow-hidden relative">
                  {/* Desktop Content */}
                  <div className="p-4 text-white">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="bg-gray-700 rounded p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Connected and safe</span>
                        <span className="text-xs text-green-400">01:17</span>
                      </div>
                      <div className="text-xs text-gray-300 mb-2">Connection time</div>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">IKEv2</span>
                        </div>
                        <div>
                          <div className="text-xs font-medium">IKEv2</div>
                          <div className="text-xs text-gray-400">Protocol in use</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Shield Icon */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-30">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl">
                <svg className="w-12 h-12 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1L5 4v6c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V4l-5-3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
