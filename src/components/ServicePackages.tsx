import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import BookingModal from './BookingModal';

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const packages: Package[] = [
  {
    name: 'Single Session',
    price: '₹800',
    description: 'One-time home visit',
    features: [
      'One home visit',
      'Basic assessment',
      'Initial consultation',
      'Basic treatment plan',
      'Basic diet consultation',
      'WhatsApp follow-up'
    ]
  },
  {
    name: 'Weekly Package',
    price: '₹4,200',
    description: '6 days of intensive treatment',
    features: [
      '6 home visits',
      'Comprehensive assessment',
      'Personalized treatment plan',
      'Daily exercise program',
      'Customized diet plan',
      'Weight management guidance',
      'Progress tracking',
      'WhatsApp support',
      'Free follow-up consultation'
    ],
    popular: true
  }
];

const ServicePackages: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const handleBookNow = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Service Packages
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect package for your physiotherapy needs
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl shadow-lg overflow-hidden ${
                pkg.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                  <span className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                <p className="mt-4 text-gray-500">{pkg.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                </p>
                <ul className="mt-8 space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckIcon className="h-6 w-6 text-blue-500" aria-hidden="true" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleBookNow(pkg)}
                  className={`mt-8 w-full rounded-lg px-4 py-2 text-center text-sm font-semibold text-white shadow-sm ${
                    pkg.popular
                      ? 'bg-blue-600 hover:bg-blue-500'
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>* All prices include GST</p>
          <p className="mt-1">Custom packages available upon request</p>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackage}
      />
    </section>
  );
};

export default ServicePackages; 