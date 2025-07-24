import React from 'react';

// Note: Testimonials are created using AI to show diverse user experiences and trust in the VPN service.

interface TestimonialsProps {
  onNavigateToAbout?: () => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onNavigateToAbout }) => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Digital Nomad",
      avatar: "👩‍💻",
      rating: 5,
      text: "Secure VPN has been a game-changer for my remote work. I can access geo-restricted content and work securely from anywhere in the world. The connection is always fast and reliable.",
      location: "Barcelona, Spain"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      avatar: "👨‍💻",
      rating: 5,
      text: "As a developer, I need secure connections when working with sensitive data. Secure VPN provides the privacy and security I need without slowing down my workflow.",
      location: "San Francisco, USA"
    },
    {
      name: "Emma Wilson",
      role: "Content Creator",
      avatar: "🎬",
      rating: 5,
      text: "I travel frequently for my content creation work, and Secure VPN ensures I can access my streaming platforms and upload content securely from any country.",
      location: "London, UK"
    },
    {
      name: "David Rodriguez",
      role: "Business Owner",
      avatar: "👔",
      rating: 5,
      text: "Privacy is crucial for my business communications. Secure VPN gives me peace of mind knowing my data is encrypted and my online activities are private.",
      location: "Mexico City, Mexico"
    },
    {
      name: "Lisa Park",
      role: "Student",
      avatar: "🎓",
      rating: 5,
      text: "Perfect for accessing research materials and online libraries that are geo-blocked. The student discount makes it very affordable too!",
      location: "Seoul, South Korea"
    },
    {
      name: "James Thompson",
      role: "Cybersecurity Expert",
      avatar: "🔒",
      rating: 5,
      text: "I've tested many VPN services, and Secure VPN stands out with its strong encryption, no-logs policy, and excellent speed. Highly recommended for security professionals.",
      location: "Toronto, Canada"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join millions of satisfied users who trust Secure VPN to protect their online privacy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:bg-gray-100"
              onClick={() => onNavigateToAbout && onNavigateToAbout()}
            >

              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-center">
                <div className="text-3xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-blue-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Millions Worldwide
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10M+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4.8/5</div>
              <div className="text-gray-600">App Store Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Award-Winning VPN Service
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div 
              className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300 p-4 rounded-xl hover:bg-gray-50"
              onClick={() => onNavigateToAbout && onNavigateToAbout()}
            >
              <div className="text-6xl mb-4 hover:animate-bounce">🏆</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">Best VPN 2024</h4>
              <p className="text-gray-600">TechRadar Choice Award</p>
            </div>
            
            <div 
              className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300 p-4 rounded-xl hover:bg-gray-50"
              onClick={() => onNavigateToAbout && onNavigateToAbout()}
            >
              <div className="text-6xl mb-4 hover:animate-pulse">⭐</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-yellow-600 transition-colors duration-300">Editor's Choice</h4>
              <p className="text-gray-600">PCMag Excellence Award</p>
            </div>
            
            <div 
              className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300 p-4 rounded-xl hover:bg-gray-50"
              onClick={() => onNavigateToAbout && onNavigateToAbout()}
            >
              <div className="text-6xl mb-4 hover:animate-spin">🛡️</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-green-600 transition-colors duration-300">Most Secure VPN</h4>
              <p className="text-gray-600">Cybersecurity Excellence Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
