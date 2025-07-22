import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Military-Grade Encryption",
      description: "AES-256 encryption keeps your data safe from hackers, ISPs, and government surveillance.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast Speeds",
      description: "Connect to 3200+ high-speed servers worldwide for seamless streaming and browsing.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "No-Logs Policy",
      description: "We don't track, collect, or share your private data. Your online activity is your business.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Server Network",
      description: "Access content from anywhere with servers in 65+ countries across 6 continents.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Multi-Device Support",
      description: "Protect up to 10 devices simultaneously with apps for all major platforms.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "24/7 Customer Support",
      description: "Get help whenever you need it with our round-the-clock customer support team.",
      gradient: "from-red-500 to-rose-500"
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-section heading-modern text-gray-900 mb-4 text-shadow">
            Why Choose <span className="gradient-text">SurfShark VPN</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the ultimate online privacy and security with our cutting-edge VPN technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card card-hover p-8 group animate-fade-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-white mb-6 w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 heading-modern">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-modern">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="card p-12 text-center shadow-glow animate-fade-scale">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">
                3200+
              </div>
              <div className="text-gray-600 font-medium">Servers Worldwide</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">
                65+
              </div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">
                10M+
              </div>
              <div className="text-gray-600 font-medium">Happy Users</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <div className="text-gray-600 font-medium">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
