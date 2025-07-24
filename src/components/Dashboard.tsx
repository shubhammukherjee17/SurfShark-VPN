import React, { useState } from 'react';

interface DashboardProps {
  user: {
    name: string;
    email: string;
  };
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [isConnected, setIsConnected] = useState(false);
  const [selectedServer, setSelectedServer] = useState('United States');

  const servers = [
    { name: 'United States', ip: '193.106.244.115', ping: '23ms', load: '68%' },
    { name: 'United Kingdom', ip: '185.83.214.123', ping: '45ms', load: '34%' },
    { name: 'Germany', ip: '46.165.220.101', ping: '52ms', load: '76%' },
    { name: 'Japan', ip: '103.200.23.45', ping: '89ms', load: '23%' },
    { name: 'Canada', ip: '142.251.32.78', ping: '31ms', load: '45%' },
    { name: 'Australia', ip: '203.104.45.89', ping: '125ms', load: '56%' }
  ];

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  const connectionTime = isConnected ? '01:17:23' : '00:00:00';
  const dataUsed = isConnected ? '2.4 GB' : '0 GB';

  return (
    <div className="min-h-screen bg-gray-50">
      {}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent">
                Secure VPN Dashboard
              </div>
            </div>

            {}
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Welcome, <span className="font-medium text-gray-900">{user.name}</span>
              </div>
              <button
                onClick={onLogout}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-8 max-w-md">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'servers', label: 'Servers' },
            { id: 'settings', label: 'Settings' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedTab === tab.id
                  ? 'bg-white text-brand-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {}
        {selectedTab === 'overview' && (
          <div className="space-y-6">
            {}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Connection Status</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`text-lg font-semibold ${isConnected ? 'text-green-600' : 'text-gray-500'}`}>
                        {isConnected ? 'Connected' : 'Disconnected'}
                      </div>
                      <div className="text-sm text-gray-600">
                        {isConnected ? `Connected to ${selectedServer}` : 'Click to connect'}
                      </div>
                    </div>
                    <button
                      onClick={handleConnect}
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isConnected
                          ? 'bg-green-500 hover:bg-green-600 shadow-lg'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    >
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>

                  {isConnected && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2 text-green-800">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Your connection is secure</span>
                      </div>
                      <p className="text-sm text-green-700 mt-1">
                        All your internet traffic is encrypted and protected.
                      </p>
                    </div>
                  )}
                </div>

                {}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900">{connectionTime}</div>
                      <div className="text-sm text-gray-600">Connection Time</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900">{dataUsed}</div>
                      <div className="text-sm text-gray-600">Data Used</div>
                    </div>
                  </div>
                  
                  {isConnected && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="text-sm font-medium text-blue-900">Current IP Address</div>
                      <div className="text-lg font-mono text-blue-800">
                        {servers.find(s => s.name === selectedServer)?.ip}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-900">65+</div>
                    <div className="text-sm text-gray-600">Available Countries</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-900">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-900">AES-256</div>
                    <div className="text-sm text-gray-600">Encryption</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {}
        {selectedTab === 'servers' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Server Locations</h2>
              <p className="text-sm text-gray-600 mt-1">Choose from our global network of secure servers</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-3">
                {servers.map((server) => (
                  <div
                    key={server.name}
                    className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedServer === server.name
                        ? 'border-brand-500 bg-brand-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedServer(server.name)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        selectedServer === server.name ? 'bg-brand-500' : 'bg-gray-300'
                      }`}></div>
                      <div>
                        <div className="font-medium text-gray-900">{server.name}</div>
                        <div className="text-sm text-gray-500">{server.ip}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="text-gray-600">
                        <span className="font-medium">{server.ping}</span> ping
                      </div>
                      <div className="text-gray-600">
                        <span className="font-medium">{server.load}</span> load
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {}
        {selectedTab === 'settings' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={user.email}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={user.name}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subscription Plan</label>
                  <div className="bg-brand-50 border border-brand-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-brand-900">Premium Trial</div>
                        <div className="text-sm text-brand-700">7 days remaining</div>
                      </div>
                      <button className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Upgrade Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">VPN Settings</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">Auto-connect on startup</div>
                    <div className="text-sm text-gray-600">Automatically connect when the app starts</div>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">Kill switch</div>
                    <div className="text-sm text-gray-600">Block internet if VPN disconnects</div>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-brand-500 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">DNS leak protection</div>
                    <div className="text-sm text-gray-600">Prevent DNS requests from leaking</div>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-brand-500 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
