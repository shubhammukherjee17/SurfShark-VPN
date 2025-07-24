import React from 'react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNewsletterSubscribe = () => {
    const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
    const email = emailInput?.value || '';
    
    if (email && email.includes('@')) {
      alert(`📧 Newsletter Subscription Successful!\n\nEmail: ${email}\n\n✅ Welcome to Secure VPN updates!\n✅ You'll receive security tips & offers\n✅ Unsubscribe anytime\n\nThank you for subscribing!`);
      if (emailInput) emailInput.value = '';
    } else {
      alert('⚠️ Please enter a valid email address to subscribe to our newsletter.');
    }
  };

  const handleFooterLinkClick = (href: string, name: string) => {
    if (name === 'About Us' && onNavigate) {
      onNavigate('about-us');
      return;
    }
    
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      alert(`🔗 ${name}\n\nThis feature will redirect you to: ${name}\n\n✅ Coming soon!\n✅ Full functionality in development\n\nStay tuned for updates!`);
    }
  };

  const handleSocialClick = (platform: string) => {
    const urls = {
      'X': 'https://twitter.com/ItsShubhamDev',
      'Instagram': 'https://instagram.com/shubham.mukherjee_',
      'YouTube': 'https://youtube.com/securevpn',
      'LinkedIn': 'https://www.linkedin.com/in/theshubhammukherjee/'
    };
    
    alert(`🌐 ${platform}\n\n📱 Follow us on ${platform}!\n\n✅ Get latest updates\n✅ Security tips & tricks\n✅ Product announcements\n\nOpening ${platform} page...`);
    window.open(urls[platform as keyof typeof urls] || '#', '_blank');
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Download', href: '#download' },
      { name: 'Server Locations', href: '#' },
      { name: 'What is VPN?', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Support', href: '#' },
      { name: 'Setup Guides', href: '#' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Live Chat', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Reviews', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Warrant Canary', href: '#' },
      { name: 'DMCA', href: '#' }
    ]
  };

  const socialLinks = [
    {
      name: 'X',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.24-3.44-.72-.99-.48-1.772-1.145-2.344-1.995-.572-.85-.858-1.825-.858-2.925 0-1.297.24-2.448.72-3.44.48-.99 1.145-1.772 1.995-2.344.85-.572 1.825-.858 2.925-.858 1.297 0 2.448.24 3.44.72.99.48 1.772 1.145 2.344 1.995.572.85.858 1.825.858 2.925 0 1.297-.24 2.448-.72 3.44-.48.99-1.145 1.772-1.995 2.344-.85.572-1.825.858-2.925.858zm0-9.97c-.833 0-1.531.292-2.096.876-.565.584-.847 1.297-.847 2.14 0 .833.292 1.531.876 2.096.584.565 1.297.847 2.14.847.833 0 1.531-.292 2.096-.876.565-.584.847-1.297.847-2.14 0-.833-.292-1.531-.876-2.096-.584-.565-1.297-.847-2.14-.847zm5.99-1.31c-.197 0-.364-.068-.5-.204-.136-.136-.204-.303-.204-.5s.068-.364.204-.5c.136-.136.303-.204.5-.204s.364.068.5.204c.136.136.204.303.204.5s-.068.364-.204.5c-.136.136-.303.204-.5.204z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-blue-400">Secure VPN</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your privacy is our priority. Browse the web safely and anonymously with military-grade encryption and a strict no-logs policy.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialClick(social.name)}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                  aria-label={social.name}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleFooterLinkClick(link.href, link.name)}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleFooterLinkClick(link.href, link.name)}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleFooterLinkClick(link.href, link.name)}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleFooterLinkClick(link.href, link.name)}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Get the latest news about VPN security and privacy tips.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button 
                onClick={handleNewsletterSubscribe}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Secure VPN. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">SSL Secured</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">No Logs</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">30-Day Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
