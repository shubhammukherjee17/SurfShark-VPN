import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is a VPN and why do I need one?",
      answer: "A VPN (Virtual Private Network) creates a secure, encrypted connection between your device and the internet. It protects your online privacy, secures your data from hackers, allows you to access geo-restricted content, and helps you browse anonymously. In today's digital world, a VPN is essential for protecting your personal information from cybercriminals, ISPs, and government surveillance."
    },
    {
      question: "How does SecureVPN protect my privacy?",
      answer: "SecureVPN uses military-grade AES-256 encryption to secure your internet connection. We have a strict no-logs policy, meaning we don't track, collect, or store your online activities. Your real IP address is hidden and replaced with one from our secure servers, making it impossible for websites, advertisers, or hackers to trace your online activities back to you."
    },
    {
      question: "Can I use SecureVPN on multiple devices?",
      answer: "Yes! One SecureVPN subscription allows you to protect up to 10 devices simultaneously. This includes computers, smartphones, tablets, smart TVs, and routers. You can use our apps on Windows, macOS, iOS, Android, Linux, and configure it on compatible routers to protect your entire home network."
    },
    {
      question: "Will SecureVPN slow down my internet connection?",
      answer: "While any VPN may cause a slight decrease in speed due to encryption, SecureVPN is optimized for performance. With our global network of 3200+ high-speed servers, most users experience minimal speed loss. Our WireGuard protocol ensures the fastest possible connection speeds while maintaining top-level security."
    },
    {
      question: "Can I access Netflix and other streaming services?",
      answer: "Yes! SecureVPN works with popular streaming platforms including Netflix, Hulu, Amazon Prime Video, Disney+, and many others. Our specialized streaming servers are optimized to bypass geo-restrictions, allowing you to access your favorite content from anywhere in the world."
    },
    {
      question: "Is it legal to use a VPN?",
      answer: "Yes, VPNs are completely legal in most countries including the US, UK, Canada, and EU nations. VPNs are legitimate tools used by individuals and businesses to protect privacy and security. However, it's important to use VPNs responsibly and comply with the terms of service of websites and services you access."
    },
    {
      question: "What is your no-logs policy?",
      answer: "Our strict no-logs policy means we don't collect, store, or monitor any of your online activities. We don't track which websites you visit, what files you download, or any other browsing data. This policy has been independently audited by third-party security firms to ensure transparency and trustworthiness."
    },
    {
      question: "How many server locations do you have?",
      answer: "SecureVPN operates 3200+ servers across 65+ countries on 6 continents. This extensive network ensures you can always find a fast, nearby server for optimal performance. Our servers are strategically located in major cities worldwide to provide the best possible connection speeds and reliability."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and cryptocurrency (Bitcoin, Ethereum) for maximum privacy. All payments are processed securely, and we offer a 30-day money-back guarantee on all subscription plans if you're not completely satisfied."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes! We provide 24/7 customer support through live chat, email, and our comprehensive help center. Our support team consists of VPN experts who can help you with setup, troubleshooting, and any questions about your service. Most live chat inquiries are resolved within minutes."
    },
    {
      question: "Can I try SecureVPN for free?",
      answer: "We offer a 7-day free trial for new users, and all our paid plans come with a 30-day money-back guarantee. This gives you plenty of time to test our service and ensure it meets your needs. If you're not completely satisfied, you can get a full refund within 30 days of purchase."
    },
    {
      question: "How do I set up SecureVPN?",
      answer: "Setting up SecureVPN is simple! After subscribing, download our app for your device, sign in with your account credentials, choose a server location, and connect. The entire process takes less than 5 minutes. We also provide detailed setup guides and 24/7 support if you need any assistance."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about SecureVPN
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is available 24/7 to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>

        {/* Search FAQ */}
        <div className="mt-12">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search FAQ..."
              className="w-full px-4 py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
