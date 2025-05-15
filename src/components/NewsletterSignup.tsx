import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Here you would typically integrate with your email service provider
    // For now, we'll simulate a successful signup
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Stay Updated with Health Tips
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Subscribe to our newsletter for physiotherapy tips, health advice, and exclusive offers
          </p>
        </div>

        <div className="mt-8 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="sm:flex justify-center">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mt-4 sm:ml-4 sm:mt-0">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="block w-full rounded-md bg-white px-4 py-3 text-sm font-semibold text-blue-600 shadow hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-50"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm text-blue-100">
              Thank you for subscribing! Please check your email to confirm your subscription.
            </p>
          )}

          <p className="mt-4 text-sm text-blue-100">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup; 