import React, { useState } from 'react';

interface PaymentProps {
  user: { name: string; email: string; };
  onBackToWebsite: () => void;
  selectedPlan?: {
    name: string;
    price: string;
    duration: string;
    features: string[];
  };
}

const Payment: React.FC<PaymentProps> = ({ user, onBackToWebsite, selectedPlan }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    billingAddress: '',
    city: '',
    zipCode: '',
    country: 'United States'
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  // Default plan if none selected
  const plan = selectedPlan || {
    name: 'Premium Plan',
    price: '$9.99',
    duration: 'month',
    features: ['Unlimited devices', 'Ultra-fast servers', '24/7 support', 'No logs policy']
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'cardNumber') {
      // Format card number with spaces
      const formatted = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else if (name === 'expiryDate') {
      // Format expiry date MM/YY
      const formatted = value.replace(/\D/g, '').replace(/(\d{2})(\d{2})/, '$1/$2');
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const applyCoupon = () => {
    const validCoupons = {
      'SAVE20': 20,
      'WELCOME10': 10,
      'FIRST50': 50
    };
    
    if (validCoupons[couponCode as keyof typeof validCoupons]) {
      setDiscount(validCoupons[couponCode as keyof typeof validCoupons]);
      alert(`🎉 Coupon applied! ${validCoupons[couponCode as keyof typeof validCoupons]}% discount added.`);
    } else {
      alert('❌ Invalid coupon code. Try SAVE20, WELCOME10, or FIRST50');
    }
  };

  const calculateTotal = () => {
    const basePrice = parseFloat(plan.price.replace('$', ''));
    const discountAmount = (basePrice * discount) / 100;
    return (basePrice - discountAmount).toFixed(2);
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      alert(`🎉 Payment Successful!\n\n📋 Order Details:\n• Plan: ${plan.name}\n• Amount: $${calculateTotal()}\n• Payment Method: ${paymentMethod === 'card' ? 'Credit Card' : 'PayPal'}\n• User: ${user.name}\n• Email: ${user.email}\n\n✅ Your VPN access is now active!\n✅ Welcome email sent\n✅ Account upgraded to Premium\n\nRedirecting to dashboard...`);
      
      // Here you would typically redirect to dashboard or success page
      setTimeout(() => {
        onBackToWebsite();
      }, 2000);
    } catch (error) {
      alert('❌ Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-brand-100 to-brand-200 pt-16">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={onBackToWebsite}
              className="flex items-center space-x-2 text-brand-600 hover:text-brand-700 font-medium transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Website</span>
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent">
                Secure VPN
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Order Summary</h2>
              
              {/* Plan Details */}
              <div className="border border-neutral-200 rounded-xl p-4 mb-6">
                <h3 className="font-semibold text-neutral-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-neutral-600 mb-3">Billed {plan.duration}ly</p>
                <ul className="space-y-1 text-sm text-neutral-600">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coupon Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Coupon Code
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    placeholder="Enter code"
                  />
                  <button
                    type="button"
                    onClick={applyCoupon}
                    className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 text-sm border-t border-neutral-200 pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{plan.price}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-brand-600">
                    <span>Discount ({discount}%)</span>
                    <span>-${((parseFloat(plan.price.replace('$', '')) * discount) / 100).toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-semibold text-lg border-t border-neutral-200 pt-3">
                  <span>Total</span>
                  <span>${calculateTotal()}</span>
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-6 flex items-center space-x-2 text-sm text-neutral-600">
                <svg className="w-5 h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Secure 256-bit SSL encryption</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h1 className="text-2xl font-bold text-neutral-900 mb-6">Complete Your Payment</h1>

              {/* User Info */}
              <div className="mb-6 p-4 bg-brand-50 rounded-xl">
                <h3 className="font-semibold text-neutral-900 mb-2">Account Details</h3>
                <p className="text-sm text-neutral-600">Name: {user.name}</p>
                <p className="text-sm text-neutral-600">Email: {user.email}</p>
              </div>

              {/* Payment Method Selection */}
              <div className="mb-6">
                <h3 className="font-semibold text-neutral-900 mb-4">Payment Method</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 border-2 rounded-xl flex items-center justify-center space-x-3 transition-all ${
                      paymentMethod === 'card' 
                        ? 'border-brand-500 bg-brand-50' 
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="font-medium">Credit Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-4 border-2 rounded-xl flex items-center justify-center space-x-3 transition-all ${
                      paymentMethod === 'paypal' 
                        ? 'border-brand-500 bg-brand-50' 
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">PP</span>
                    </div>
                    <span className="font-medium">PayPal</span>
                  </button>
                </div>
              </div>

              {/* Payment Form */}
              <form onSubmit={handlePayment} className="space-y-6">
                {paymentMethod === 'card' ? (
                  <>
                    {/* Card Information */}
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-4">Card Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-2">
                            Card Number
                          </label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            maxLength={19}
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              name="expiryDate"
                              value={formData.expiryDate}
                              onChange={handleInputChange}
                              maxLength={5}
                              className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                              placeholder="MM/YY"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                              CVV
                            </label>
                            <input
                              type="text"
                              name="cvv"
                              value={formData.cvv}
                              onChange={handleInputChange}
                              maxLength={4}
                              className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                              placeholder="123"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-2">
                            Cardholder Name
                          </label>
                          <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Billing Address */}
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-4">Billing Address</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-2">
                            Address
                          </label>
                          <input
                            type="text"
                            name="billingAddress"
                            value={formData.billingAddress}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                            placeholder="123 Main Street"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                              City
                            </label>
                            <input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                              placeholder="New York"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                              ZIP Code
                            </label>
                            <input
                              type="text"
                              name="zipCode"
                              value={formData.zipCode}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                              placeholder="10001"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-2">
                            Country
                          </label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                            required
                          >
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Germany">Germany</option>
                            <option value="France">France</option>
                            <option value="Australia">Australia</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">PP</span>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Pay with PayPal</h3>
                    <p className="text-neutral-600 mb-6">You'll be redirected to PayPal to complete your payment</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 disabled:from-neutral-400 disabled:to-neutral-500 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      <span>Processing Payment...</span>
                    </div>
                  ) : (
                    `Complete Payment - $${calculateTotal()}`
                  )}
                </button>

                {/* Security Info */}
                <div className="text-center text-sm text-neutral-600 mt-4">
                  <p>🔒 Your payment information is encrypted and secure</p>
                  <p>30-day money-back guarantee • Cancel anytime</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
