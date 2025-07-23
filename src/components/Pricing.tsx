import React, { useState } from 'react';

interface PricingProps {
  onNavigateToPayment: (plan?: {
    name: string;
    price: string;
    duration: string;
    features: string[];
  }) => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigateToPayment }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('24 months');

  const handlePlanSelection = (planName: string, price: string, features: string[]) => {
    const planDetails = {
      name: planName,
      price: price,
      duration: selectedPeriod,
      features: features
    };
    
    onNavigateToPayment(planDetails);
  };

  const plans = {
    '24 months': [
      {
        name: "Secure VPN Starter",
        price: "$1.99",
        period: "/mo.",
        originalPrice: "$417.35",
        finalPrice: "$53.73",
        savings: "Save 87%",
        extraMonths: "+3 EXTRA months",
        billing: "for the first 27 months",
        features: [
          "VPN",
          "Ad-free browsing",
          "Cookie pop-up blocker"
        ],
        buttonText: "Get Starter",
        popular: false,
        teal: false
      },
      {
        name: "Secure VPN One",
        price: "$2.49",
        period: "/mo.",
        originalPrice: "$404.55",
        finalPrice: "$67.23",
        savings: "Save 86%",
        extraMonths: "+3 EXTRA months",
        billing: "for the first 27 months",
        features: [
          "Everything in Starter, plus:",
          "Antivirus",
          "Personal data removal",
          "Identity monitoring"
        ],
        buttonText: "Get One",
        popular: true,
        teal: true
      },
      {
        name: "Secure VPN One+",
        price: "$3.99",
        period: "/mo.",
        originalPrice: "$567.55",
        finalPrice: "$107.73",
        savings: "Save 81%",
        extraMonths: "+3 EXTRA months",
        billing: "for the first 27 months",
        features: [
          "Everything in One, plus:",
          "Incogni data removal",
          "Enhanced security features"
        ],
        buttonText: "Get One+",
        popular: false,
        teal: false
      }
    ],
    '12 months': [
      {
        name: "Secure VPN Starter",
        price: "$2.99",
        period: "/mo.",
        originalPrice: "$215.40",
        finalPrice: "$47.88",
        savings: "Save 78%",
        extraMonths: "+2 EXTRA months",
        billing: "for the first 14 months",
        features: [
          "VPN",
          "Ad-free browsing",
          "Cookie pop-up blocker"
        ],
        buttonText: "Get Starter",
        popular: false,
        teal: false
      },
      {
        name: "Secure VPN One",
        price: "$3.99",
        period: "/mo.",
        originalPrice: "$215.40",
        finalPrice: "$63.86",
        savings: "Save 70%",
        extraMonths: "+2 EXTRA months",
        billing: "for the first 14 months",
        features: [
          "Everything in Starter, plus:",
          "Antivirus",
          "Personal data removal",
          "Identity monitoring"
        ],
        buttonText: "Get One",
        popular: true,
        teal: true
      },
      {
        name: "Secure VPN One+",
        price: "$5.99",
        period: "/mo.",
        originalPrice: "$323.40",
        finalPrice: "$95.86",
        savings: "Save 70%",
        extraMonths: "+2 EXTRA months",
        billing: "for the first 14 months",
        features: [
          "Everything in One, plus:",
          "Incogni data removal",
          "Enhanced security features"
        ],
        buttonText: "Get One+",
        popular: false,
        teal: false
      }
    ],
    '1 month': [
      {
        name: "Secure VPN Starter",
        price: "$15.45",
        period: "/mo.",
        originalPrice: null,
        finalPrice: null,
        savings: null,
        extraMonths: null,
        billing: "monthly billing",
        features: [
          "VPN",
          "Ad-free browsing",
          "Cookie pop-up blocker"
        ],
        buttonText: "Get Starter",
        popular: false,
        teal: false
      },
      {
        name: "Secure VPN One",
        price: "$17.95",
        period: "/mo.",
        originalPrice: null,
        finalPrice: null,
        savings: null,
        extraMonths: null,
        billing: "monthly billing",
        features: [
          "Everything in Starter, plus:",
          "Antivirus",
          "Personal data removal",
          "Identity monitoring"
        ],
        buttonText: "Get One",
        popular: true,
        teal: true
      },
      {
        name: "Secure VPN One+",
        price: "$25.95",
        period: "/mo.",
        originalPrice: null,
        finalPrice: null,
        savings: null,
        extraMonths: null,
        billing: "monthly billing",
        features: [
          "Everything in One, plus:",
          "Incogni data removal",
          "Enhanced security features"
        ],
        buttonText: "Get One+",
        popular: false,
        teal: false
      }
    ]
  };

  const currentPlans = plans[selectedPeriod as keyof typeof plans];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Compare VPN plans & pricing
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {Object.keys(plans).map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedPeriod === period
                    ? 'bg-teal-500 text-white shadow-lg'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                plan.popular 
                  ? 'border-teal-500' 
                  : 'border-gray-200'
              } transition-all duration-300 hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most popular
                  </div>
                </div>
              )}

              {plan.savings && (
                <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {plan.savings}
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {plan.name}
              </h3>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-lg text-gray-600 ml-1">
                    {plan.period}
                  </span>
                </div>
          
                {plan.extraMonths && (
                  <div className="text-red-500 font-medium mt-2">
                    {plan.extraMonths}
                  </div>
                )}

                <div className="text-sm text-gray-600 mt-3">
                  {plan.originalPrice && plan.finalPrice && (
                    <>
                      <span className="line-through">{plan.originalPrice}</span>
                      <span className="ml-2 font-medium">{plan.finalPrice}</span>
                      <span className="ml-1">{plan.billing}</span>
                    </>
                  )}
                  {!plan.originalPrice && (
                    <span>{plan.billing}</span>
                  )}
                  <br />
                  <span className="text-xs">(VAT may apply).</span>
                </div>
              </div>

              <button
                onClick={() => handlePlanSelection(plan.name, plan.price, plan.features)}
                className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-300 mb-6 ${
                  plan.teal
                    ? 'bg-teal-500 hover:bg-teal-600 text-white'
                    : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                {plan.buttonText}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include 30-day money-back guarantee and 24/7 customer support
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
