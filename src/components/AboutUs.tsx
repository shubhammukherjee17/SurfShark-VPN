import React from 'react';

interface AboutUsProps {
  onBack: () => void;
  onNavigateToPayment?: () => void;
  onLogin?: (userDetails: {name: string, email: string}) => void;
  isLoggedIn?: boolean;
}

const AboutUs: React.FC<AboutUsProps> = ({ onBack, onNavigateToPayment, onLogin, isLoggedIn }) => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const stats = [
    { number: '10M+', label: 'Active Users', icon: '👥' },
    { number: '65+', label: 'Countries', icon: '🌍' },
    { number: '500+', label: 'Servers', icon: '🖥️' },
    { number: '99.9%', label: 'Uptime', icon: '⚡' }
  ];

  const teamMembers = [
    {
      name: 'Shubham Mukherjee',
      role: 'Founder & CEO',
      image: '/images/image.png',
      description: 'Full-stack developer and cybersecurity enthusiast dedicated to protecting digital privacy worldwide'
    }
  ];

  const values = [
    {
      title: 'Privacy First',
      description: 'Your digital privacy is our top priority. We never log, track, or sell your data.',
      icon: '🔒'
    },
    {
      title: 'Transparency',
      description: 'Open-source protocols, regular security audits, and clear privacy policies.',
      icon: '🔍'
    },
    {
      title: 'Innovation',
      description: 'Constantly improving our technology to stay ahead of digital threats.',
      icon: '🚀'
    },
    {
      title: 'Global Access',
      description: 'Breaking down digital barriers and ensuring internet freedom worldwide.',
      icon: '🌐'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 animate-fade-in">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-neutral-200 animate-slide-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={onBack}
              className="group flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-all duration-300 hover:scale-105 hover:-translate-x-1"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="transition-all duration-300">Back to Home</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-900 animate-fade-in-delay">About SecureVPN</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-bounce-in">
            Protecting Digital Privacy Since 2015
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-delay-2">
            We believe that internet privacy is a fundamental right. Our mission is to make secure, 
            private internet access available to everyone, everywhere.
          </p>
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-6 py-3 rounded-full animate-scale-in hover:scale-105 transition-transform duration-300">
            <span className="text-2xl animate-pulse">🛡️</span>
            <span className="text-blue-800 font-semibold">Trusted by millions worldwide</span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-2 animate-count-up">{stat.number}</div>
              <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 animate-slide-up hover:shadow-2xl transition-all duration-500">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed animate-fade-in-delay">
                To create a world where everyone can access the internet freely and securely, 
                without fear of surveillance, censorship, or data theft.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed animate-fade-in-delay-2">
                We're committed to advancing digital rights and protecting online privacy through 
                cutting-edge technology and unwavering dedication to our users.
              </p>
              <div className="flex items-center space-x-4 animate-slide-right">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Zero-Log Guarantee</h4>
                  <p className="text-gray-600">We never store or track your online activities</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl hover:scale-105 transition-transform duration-500 animate-fade-in-right">
              <div className="text-center">
                <div className="text-6xl mb-4 animate-spin-slow hover:animate-pulse">🌍</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Global Impact</h4>
                <div className="space-y-3">
                  <div className="flex justify-between hover:bg-white hover:bg-opacity-50 p-2 rounded transition-all duration-300">
                    <span className="text-gray-600">Data Protected Daily</span>
                    <span className="font-semibold animate-pulse">50+ TB</span>
                  </div>
                  <div className="flex justify-between hover:bg-white hover:bg-opacity-50 p-2 rounded transition-all duration-300">
                    <span className="text-gray-600">Threats Blocked</span>
                    <span className="font-semibold animate-pulse">1M+ Daily</span>
                  </div>
                  <div className="flex justify-between hover:bg-white hover:bg-opacity-50 p-2 rounded transition-all duration-300">
                    <span className="text-gray-600">Privacy Enhanced</span>
                    <span className="font-semibold animate-pulse">24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16 animate-fade-in-up">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-bounce-in">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up group cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{value.title}</h4>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16 animate-slide-up">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-bounce-in">Meet the Founder</h3>
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center animate-fade-in-up group cursor-pointer hover:-translate-y-2 max-w-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-100 group-hover:border-blue-300 transition-colors duration-300 shadow-lg"
                  />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{member.name}</h4>
                <p className="text-blue-600 font-semibold mb-4 text-lg group-hover:scale-105 transition-transform duration-300">{member.role}</p>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">{member.description}</p>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4 mt-6">
                  <a href="https://github.com/shubhammukherjee17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
                    <span className="text-2xl">🔗</span>
                  </a>
                  <a href="https://www.linkedin.com/in/theshubhammukherjee/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                    <span className="text-2xl">💼</span>
                  </a>
                  <a href="https://twitter.com/ItsShubhamDev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    <span className="text-2xl">🐦</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Personal Message */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto animate-fade-in-up">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">A Personal Message</h4>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "I started SecureVPN with a simple mission: to make online privacy accessible to everyone. 
                As a developer who understands the importance of digital security, I wanted to create a service 
                that combines cutting-edge technology with user-friendly design."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "Your privacy is not just our business—it's our passion."
              </p>
              <div className="mt-6">
                <span className="text-2xl font-bold text-blue-600">- Shubham Mukherjee</span>
              </div>
            </div>
          </div>
        </div>

        {/* History Timeline */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 animate-slide-up hover:shadow-2xl transition-all duration-500">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-bounce-in">Our Journey</h3>
          
          {/* Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-2xl">ℹ️</span>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> This timeline represents a conceptual project demonstration. 
                  The dates and milestones are created for educational and showcase purposes only.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4 animate-slide-right hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-gray-50">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">2015 - Founded</h4>
                <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Started with a vision to make internet privacy accessible to everyone</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 animate-slide-right hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-gray-50" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl">🔒</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 hover:text-green-600 transition-colors duration-300">2017 - Zero-Log Policy</h4>
                <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Implemented industry-leading zero-log policy, independently audited</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 animate-slide-right hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-gray-50" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl">🌍</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors duration-300">2020 - Global Expansion</h4>
                <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Reached 65+ countries with 500+ servers worldwide</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 animate-slide-right hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-gray-50" style={{ animationDelay: '300ms' }}>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 hover:text-orange-600 transition-colors duration-300">2023 - Industry Recognition</h4>
                <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Awarded "Best VPN Service" by multiple cybersecurity organizations</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 animate-slide-right hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-gray-50" style={{ animationDelay: '400ms' }}>
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 hover:text-cyan-600 transition-colors duration-300">2025 - Project Showcase</h4>
                <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  Developed comprehensive VPN website with modern React architecture and user-centric design
                  <span className="block text-xs mt-1 text-gray-500 italic">*Reference milestone for project demonstration</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white animate-scale-in hover:scale-105 transition-transform duration-500 hover:shadow-2xl">
          <h3 className="text-3xl font-bold mb-4 animate-bounce-in">Ready to Get Started?</h3>
          <p className="text-xl mb-6 opacity-90 animate-fade-in-delay">
            Join thousands of users who trust SecureVPN for their online privacy and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <button 
              onClick={() => {
                if (isLoggedIn && onNavigateToPayment) {
                  onNavigateToPayment();
                } else if (onLogin) {
                  // Simulate a quick login for demo purposes
                  const demoUser = {
                    name: 'Demo User',
                    email: 'demo@example.com'
                  };
                  onLogin(demoUser);
                  // Small delay then navigate to payment
                  setTimeout(() => {
                    if (onNavigateToPayment) {
                      onNavigateToPayment();
                    }
                  }, 500);
                } else {
                  alert('🚀 Ready to start your free trial!\n\nPlease use the login button in the header to sign in first, then come back to start your trial.');
                }
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Start Your Free Trial
            </button>
            <button 
              onClick={onBack}
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
