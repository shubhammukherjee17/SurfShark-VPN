import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi! I'm SecureBot, your VPN assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('price') || message.includes('cost') || message.includes('plan')) {
      return "💰 Our plans start at $4.99/month! We offer:\n• Basic Plan: $4.99/month\n• Pro Plan: $8.99/month\n• Premium Plan: $12.99/month\n\nAll plans include a 30-day money-back guarantee! 🛡️";
    }
    
    if (message.includes('server') || message.includes('location')) {
      return "🌍 We have 500+ servers across 65+ countries! Popular locations include:\n• United States (50+ servers)\n• United Kingdom (20+ servers)\n• Germany (15+ servers)\n• Japan (10+ servers)\n• Australia (8+ servers)\n\nAll optimized for speed and security! ⚡";
    }
    
    if (message.includes('speed') || message.includes('fast') || message.includes('slow')) {
      return "🚀 SecureVPN offers lightning-fast speeds:\n• Up to 1 Gbps connection speeds\n• No bandwidth limitations\n• Optimized for streaming & gaming\n• Smart server selection\n\nOur users experience less than 5% speed reduction on average!";
    }
    
    if (message.includes('security') || message.includes('safe') || message.includes('encryption')) {
      return "🔒 Your security is our priority:\n• AES-256 military-grade encryption\n• Kill switch protection\n• DNS leak protection\n• No-logs policy (audited)\n• Multi-hop connections available\n\nYour data is completely secure with us! 🛡️";
    }
    
    if (message.includes('streaming') || message.includes('netflix') || message.includes('video')) {
      return "📺 Perfect for streaming enthusiasts:\n• Unblocks Netflix, Hulu, Disney+\n• 4K streaming support\n• Dedicated streaming servers\n• No buffering or throttling\n• Works with all major platforms\n\nEnjoy unlimited entertainment! 🍿";
    }
    
    if (message.includes('device') || message.includes('phone') || message.includes('computer')) {
      return "📱 Compatible with all your devices:\n• Windows, Mac, Linux\n• iOS & Android apps\n• Router configuration\n• Browser extensions\n• Smart TV setup\n\nUp to 10 simultaneous connections! 💻";
    }
    
    if (message.includes('trial') || message.includes('free') || message.includes('demo')) {
      return "🆓 Start your free trial today:\n• 7-day free trial (no credit card required)\n• Full access to all features\n• 30-day money-back guarantee\n• Cancel anytime\n\nClick 'Start Your Free Trial' to begin! ✨";
    }
    
    if (message.includes('support') || message.includes('help') || message.includes('contact')) {
      return "🎧 24/7 Support is here for you:\n• Live chat (available now)\n• Email: support@securevpn.com\n• Phone: 1-800-SECUREVPN\n• Comprehensive knowledge base\n\nAverage response time: less than 5 minutes! ⚡";
    }
    
    if (message.includes('refund') || message.includes('cancel') || message.includes('money back')) {
      return "💸 Hassle-free refund policy:\n• 30-day money-back guarantee\n• No questions asked\n• Full refund processing\n• Cancel anytime in your dashboard\n\nWe're confident you'll love SecureVPN! 😊";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "👋 Hello there! Welcome to SecureVPN! I'm here to answer any questions about our VPN service. What would you like to know?";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "😊 You're very welcome! Is there anything else about SecureVPN I can help you with today?";
    }
    
    return "🤔 I'm here to help with any VPN questions! You can ask me about:\n• Pricing and plans\n• Server locations\n• Security features\n• Streaming capabilities\n• Device compatibility\n• Free trial information\n\nWhat would you like to know? 💭";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { text: "💰 View Pricing", message: "What are your pricing plans?" },
    { text: "🌍 Server Locations", message: "Where are your servers located?" },
    { text: "🆓 Free Trial", message: "How can I start a free trial?" },
    { text: "📺 Streaming", message: "Can I use this for Netflix?" }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4 md:p-6">
      <div 
        className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-md h-[650px] bg-white rounded-2xl shadow-2xl flex flex-col animate-slide-up border border-gray-200">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-11 h-11 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-xl">🤖</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">SecureBot</h3>
              <p className="text-blue-100 text-sm">VPN Support Assistant</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 p-2.5 rounded-full transition-all duration-200 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                  message.isBot
                    ? 'bg-white text-gray-800 shadow-sm border border-gray-200'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                } whitespace-pre-line`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-2 ${message.isBot ? 'text-gray-500' : 'text-blue-100'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white px-5 py-4 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {messages.length <= 1 && (
          <div className="px-5 pb-4">
            <p className="text-xs text-gray-500 mb-3">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => setInputValue(action.message)}
                  className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
                >
                  {action.text}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="p-5 border-t border-gray-200 bg-white rounded-b-2xl">
          <div className="flex space-x-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-200 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
