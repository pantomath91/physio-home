import React, { useState } from 'react';
import { CheckIcon, StarIcon } from '@heroicons/react/24/outline';
import WhatsAppBookingModal from './WhatsAppBookingModal';
import { useAnalytics } from '@/hooks/useAnalytics';

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  highlight?: boolean;
}

const packages: Package[] = [
  {
    name: 'Free Consultation',
    price: 'FREE',
    description: 'First home visit - No charge',
    features: [
      'Initial home visit',
      'Comprehensive assessment',
      'Treatment consultation',
      'Personalized recommendations',
      'No obligation to continue'
    ],
    highlight: true
  },
  {
    name: 'Single Session',
    price: '₹800',
    description: 'Per session after first visit',
    features: [
      'One home visit',
      'Follow-up treatment',
      'Exercise guidance',
      'Progress assessment',
      'WhatsApp follow-up support'
    ]
  },
  {
    name: 'Weekly Package',
    price: '₹4,000',
    description: '6 days of intensive treatment',
    features: [
      '6 home visits',
      'Comprehensive treatment plan',
      'Daily exercise program',
      'Customized diet plan',
      'Weight management guidance',
      'Progress tracking',
      '24/7 WhatsApp support',
      'Free follow-up consultation'
    ],
    popular: true
  }
];

const ServicePackages: React.FC = () => {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const { trackBooking } = useAnalytics();

  const handleBookNow = (pkg: Package) => {
    // Track intent to book
    trackBooking({
      source: 'ServicePackagesButton',
      packageName: pkg.name,
      action: 'open_booking_modal',
    });
    setSelectedPackage(pkg);
    setIsWhatsAppModalOpen(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Service Packages
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start with a free consultation and choose the perfect package for your needs
          </p>
        </div>

        {/* Special Highlight Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 text-center text-white">
              <div className="flex justify-center mb-4">
                <StarIcon className="h-12 w-12 text-yellow-300" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Free First Consultation!</h3>
              <p className="text-xl mb-4">Your first home visit is completely FREE</p>
              <p className="text-lg opacity-90">
                Experience our quality service with no obligation. After your free consultation, 
                sessions are ₹800 each, or choose our weekly package starting at ₹4,000.
              </p>
              <button
                onClick={() => handleBookNow(packages[0])}
                className="mt-6 bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl shadow-lg overflow-hidden ${
                pkg.popular ? 'ring-2 ring-blue-500' : ''
              } ${pkg.highlight ? 'ring-2 ring-green-500 bg-green-50' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                  <span className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              {pkg.highlight && (
                <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-green-600 px-4 py-1 text-sm font-semibold text-white">
                    FREE
                  </span>
                </div>
              )}
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                <p className="mt-4 text-gray-500">{pkg.description}</p>
                <p className="mt-8">
                  <span className={`text-4xl font-bold ${pkg.highlight ? 'text-green-600' : 'text-gray-900'}`}>
                    {pkg.price}
                  </span>
                </p>
                <ul className="mt-8 space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckIcon className={`h-6 w-6 ${pkg.highlight ? 'text-green-500' : 'text-blue-500'}`} aria-hidden="true" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleBookNow(pkg)}
                  className={`mt-8 w-full rounded-lg px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition-colors ${
                    pkg.highlight
                      ? 'bg-green-600 hover:bg-green-500'
                      : pkg.popular
                      ? 'bg-blue-600 hover:bg-blue-500'
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  {pkg.highlight ? 'Book Free Consultation' : 'Book Now'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Summary */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Pricing Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 border-r border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-2">FREE</div>
              <div className="text-lg font-semibold text-gray-900">First Consultation</div>
              <div className="text-sm text-gray-600 mt-1">Home visit included</div>
            </div>
            <div className="p-4 border-r border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-2">₹800</div>
              <div className="text-lg font-semibold text-gray-900">Per Session</div>
              <div className="text-sm text-gray-600 mt-1">After first visit</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">₹4,000</div>
              <div className="text-lg font-semibold text-gray-900">Weekly Package</div>
              <div className="text-sm text-gray-600 mt-1">6 sessions included</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>* All prices include GST</p>
          <p className="mt-1">Custom packages available upon request</p>
        </div>
      </div>

      <WhatsAppBookingModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        selectedPackage={selectedPackage ? { name: selectedPackage.name, price: selectedPackage.price } : undefined}
      />
    </section>
  );
};

export default ServicePackages; 