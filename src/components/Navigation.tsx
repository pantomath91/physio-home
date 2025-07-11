'use client';

import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import WhatsAppBookingModal from './WhatsAppBookingModal';
import { Fragment } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { trackEvent } = useAnalytics();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Physio Home Visit</span>
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PH</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Physio Home Visit</span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={() => {
              trackEvent('booking_intent', 'booking', 'Navigation');
              setIsWhatsAppModalOpen(true);
            }}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            Book Now
          </button>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe6RDgMOUh7OfTv07qcYVT6pitgH-qZ7LI_nJu_gBCVO8xNKg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-300 hover:bg-blue-50 border border-blue-200 transition-colors"
            style={{ textDecoration: 'none' }}
            onClick={() => trackEvent('form_fallback_click', 'booking', 'Navigation')}
          >
            No WhatsApp? Book via Google Form
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Physio Home Visit</span>
              <div className="flex items-center">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PH</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">Physio Home Visit</span>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <button
                  onClick={() => {
                    trackEvent('booking_intent', 'booking', 'Navigation');
                    setIsWhatsAppModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-full text-left"
                >
                  Book Now
                </button>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe6RDgMOUh7OfTv07qcYVT6pitgH-qZ7LI_nJu_gBCVO8xNKg/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-blue-600 bg-white shadow-sm ring-1 ring-inset ring-blue-300 hover:bg-blue-50 border border-blue-200 text-left"
                  style={{ textDecoration: 'none' }}
                  onClick={() => trackEvent('form_fallback_click', 'booking', 'Navigation')}
                >
                  No WhatsApp? Book via Google Form
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      <WhatsAppBookingModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => {
          trackEvent('booking_cancel', 'booking', 'Navigation');
          setIsWhatsAppModalOpen(false);
        }}
        onOpen={() => trackEvent('booking_modal_open', 'booking', 'Navigation')}
      />
    </header>
  );
} 