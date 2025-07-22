import React from 'react';

const Download: React.FC = () => {
  const handleDownload = (platformName: string) => {
    if (platformName === 'Router') {
      alert(`🔧 Router Setup Guide\n\nPlatform: ${platformName}\n\n📋 Opening setup instructions...\n📖 Step-by-step configuration guide\n🛠️ Technical support available\n\nIn a real app, this would download the setup guide PDF!`);
    } else {
      alert(`📱 Download Started!\n\nPlatform: ${platformName}\n\n⬇️ Downloading SurfShark VPN app...\n✅ Compatible with your device\n🔒 Digitally signed & secure\n\nIn a real app, this would start the actual download!`);
    }
  };
  const platforms = [
    {
      name: "Windows",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 12V6.75L9 5.43V11.91L3 12M20 3V11.75L10 11.9V5.21L20 3M3 13L9 12.09V18.5L3 17.25V13M20 12.25V22L10 20.09V13.1L20 12.25Z"/>
        </svg>
      ),
      version: "Version 3.2.1",
      size: "15.2 MB",
      requirements: "Windows 7 or later"
    },
    {
      name: "macOS",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
        </svg>
      ),
      version: "Version 3.2.1",
      size: "18.7 MB",
      requirements: "macOS 10.12 or later"
    },
    {
      name: "iOS",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28C16.2 21.94 14.54 23 13.15 23C11.8 23 10.65 22.05 9.35 22.05C8 22.05 6.79 23.08 5.54 23C3.58 22.85 1.5 20.16 1.5 16.5C1.5 10.94 5.45 8.5 8.5 8.5C9.59 8.5 10.5 9.5 11.5 9.5C12.45 9.5 13.5 8.5 14.85 8.5C16.73 8.5 18.5 9.64 19.5 11.5C17.96 12.41 17 14.21 17 16.5C17 18.29 17.72 19.78 17.05 20.28M12.5 7.5C12.5 5.5 13.79 4 15.5 4C15.66 5.58 15.2 7.23 14.31 8.39C13.41 9.56 12.05 10.5 10.5 10.5C10.34 8.92 11.71 7.5 12.5 7.5Z"/>
        </svg>
      ),
      version: "Version 3.1.8",
      size: "45.3 MB",
      requirements: "iOS 12.0 or later"
    },
    {
      name: "Android",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.6,9.48L16.75,8.63C16.36,8.24 15.73,8.24 15.34,8.63C14.95,9.02 14.95,9.65 15.34,10.04L16.19,10.89C15.73,11.21 15.2,11.47 14.63,11.66C14.05,11.86 13.44,11.96 12.83,11.96C11.61,11.96 10.42,11.58 9.4,10.86L10.25,10.01C10.64,9.62 10.64,8.99 10.25,8.6C9.86,8.21 9.23,8.21 8.84,8.6L7.99,9.45C7.31,8.43 6.96,7.26 6.96,6.06C6.96,4.85 7.31,3.68 7.99,2.66L8.84,3.51C9.23,3.9 9.86,3.9 10.25,3.51C10.64,3.12 10.64,2.49 10.25,2.1L9.4,1.25C10.42,0.53 11.61,0.15 12.83,0.15C14.05,0.15 15.24,0.53 16.26,1.25L15.41,2.1C15.02,2.49 15.02,3.12 15.41,3.51C15.8,3.9 16.43,3.9 16.82,3.51L17.67,2.66C18.35,3.68 18.7,4.85 18.7,6.06C18.7,7.26 18.35,8.43 17.67,9.45L17.6,9.48M12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14M4,17V19H20V17H4M6,20V22H18V20H6Z"/>
        </svg>
      ),
      version: "Version 3.1.5",
      size: "12.1 MB",
      requirements: "Android 5.0 or later"
    },
    {
      name: "Linux",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.62,8.35C15.09,8.63 15.67,8.69 16.18,8.53C16.69,8.37 17.11,7.96 17.32,7.45C17.54,6.94 17.54,6.36 17.32,5.85C17.11,5.34 16.69,4.93 16.18,4.77C15.67,4.61 15.09,4.67 14.62,4.95C14.15,5.23 13.82,5.69 13.71,6.22C13.6,6.75 13.72,7.3 14.02,7.75C14.33,8.2 14.8,8.49 15.32,8.58C15.06,9.06 14.6,9.42 14.05,9.55C13.5,9.68 12.92,9.57 12.46,9.24C12,8.91 11.71,8.4 11.68,7.85C11.65,7.3 11.89,6.77 12.33,6.41C12.77,6.05 13.35,5.9 13.91,6.01C14.47,6.12 14.95,6.48 15.24,6.98L16.24,6.48C15.8,5.73 15.09,5.2 14.27,4.97C13.45,4.74 12.57,4.84 11.82,5.26C11.07,5.68 10.5,6.37 10.25,7.19C10,8.01 10.08,8.89 10.48,9.65C10.88,10.41 11.56,10.99 12.37,11.26C13.18,11.53 14.06,11.47 14.83,11.09C15.6,10.71 16.19,10.05 16.46,9.25C16.73,8.45 16.65,7.57 16.25,6.82L14.62,8.35M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"/>
        </svg>
      ),
      version: "Version 3.0.9",
      size: "8.7 MB",
      requirements: "Ubuntu 18.04 or compatible"
    },
    {
      name: "Router",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.7 15.6,17.2 15.1,17.2H8.9C8.4,17.2 8,16.8 8,16.3V12.8C8,12.3 8.4,11.9 8.9,11.9V10C8.9,8.6 10.3,7 11.7,7H12M12,8.2C11,8.2 10.2,9 10.2,10V11.5H13.8V10C13.8,9 13,8.2 12,8.2Z"/>
        </svg>
      ),
      version: "Setup Guide",
      size: "Configuration",
      requirements: "Compatible routers"
    }
  ];

  return (
    <section id="download" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Download SecureVPN
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes. Download our apps for all your devices and enjoy secure browsing everywhere.
          </p>
        </div>

        {/* Platform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center">
                {/* Platform Icon */}
                <div className="text-blue-600 mb-4 flex justify-center">
                  {platform.icon}
                </div>
                
                {/* Platform Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {platform.name}
                </h3>
                
                {/* Version Info */}
                <div className="text-gray-600 mb-6 space-y-1">
                  <div className="font-medium">{platform.version}</div>
                  <div className="text-sm">{platform.size}</div>
                  <div className="text-sm">{platform.requirements}</div>
                </div>
                
                {/* Download Button */}
                <button 
                  onClick={() => handleDownload(platform.name)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                >
                  {platform.name === 'Router' ? 'Setup Guide' : 'Download'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Browser Extensions */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Browser Extensions
            </h3>
            <p className="text-gray-600">
              Quick and easy browser protection for Chrome, Firefox, and Edge
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Chrome', 'Firefox', 'Edge'].map((browser, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="text-4xl mb-3">
                  {browser === 'Chrome' && '🌐'}
                  {browser === 'Firefox' && '🦊'}
                  {browser === 'Edge' && '🔷'}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{browser}</h4>
                <button className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-900 py-2 px-4 rounded-lg transition-colors">
                  Add Extension
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Setup Guide */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Quick Setup in 3 Easy Steps
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Download & Install</h4>
              <p className="text-gray-600">Download the app for your device and install it with one click</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Sign In</h4>
              <p className="text-gray-600">Log in with your SecureVPN account credentials</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Connect & Browse</h4>
              <p className="text-gray-600">Choose a server location and start browsing securely</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
