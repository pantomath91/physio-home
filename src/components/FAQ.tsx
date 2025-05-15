import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What conditions can be treated with home physiotherapy?",
    answer: "We treat a wide range of conditions including musculoskeletal disorders, post-surgery rehabilitation, sports injuries, neurological conditions, and age-related mobility issues. Our therapists are equipped to handle various physiotherapy needs in the comfort of your home."
  },
  {
    question: "How long does a typical home physiotherapy session last?",
    answer: "A standard session typically lasts 45-60 minutes. This includes initial assessment, treatment, and guidance for home exercises. The duration may vary based on your specific condition and treatment requirements."
  },
  {
    question: "What equipment do you bring for home sessions?",
    answer: "We bring all necessary portable equipment including treatment tables, resistance bands, exercise balls, and other therapeutic tools. For specialized equipment, we'll inform you in advance if anything specific is needed."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment through our website, by calling us directly, or through WhatsApp. We offer flexible scheduling and can accommodate your preferred time slots."
  },
  {
    question: "Is home physiotherapy covered by insurance?",
    answer: "Many insurance providers cover home physiotherapy services. We can provide necessary documentation for insurance claims. Please check with your insurance provider for specific coverage details."
  },
  {
    question: "What areas do you serve?",
    answer: "We currently serve Bangalore, Haldwani, and Ramnagar. Our service areas are regularly expanding. Contact us to check if we cover your location."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about our home physiotherapy services
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 