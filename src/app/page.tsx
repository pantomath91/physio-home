'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  UserGroupIcon,
  ClockIcon,
  HomeIcon,
  HeartIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import BookingModal from '@/components/BookingModal';

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const servicesRef = useRef(null);
  const benefitsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const isServicesInView = useInView(servicesRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true });
  const isAboutInView = useInView(aboutRef, { once: true });
  const isContactInView = useInView(contactRef, { once: true });

  const services = [
    {
      name: 'Musculoskeletal Physiotherapy',
      description: 'Treatment for joint pain, muscle injuries, and post-surgical rehabilitation',
      icon: HeartIcon,
    },
    {
      name: 'Neurological Physiotherapy',
      description: 'Specialized care for stroke, spinal cord injuries, and neurological conditions',
      icon: UserGroupIcon,
    },
    {
      name: 'Geriatric Physiotherapy',
      description: 'Comprehensive care for age-related conditions and mobility issues',
      icon: ClockIcon,
    },
    {
      name: 'Sports Injury Treatment',
      description: 'Expert care for sports-related injuries and performance enhancement',
      icon: HeartIcon,
    },
  ];

  const locations = [
    {
      name: 'Bangalore',
      address: 'Koramangala, Bangalore - 560034',
      icon: MapPinIcon,
    },
    {
      name: 'Haldwani',
      address: 'Kathgodam, Haldwani - 263139',
      icon: MapPinIcon,
    },
    {
      name: 'Ramnagar',
      address: 'Ramnagar, Uttarakhand - 244715',
      icon: MapPinIcon,
    },
  ];

  const benefits = [
    {
      title: 'Expertise',
      description: 'Our team of experienced physiotherapists',
      icon: UserGroupIcon,
    },
    {
      title: 'Convenience',
      description: 'Visit us at your convenience',
      icon: HomeIcon,
    },
    {
      title: 'Customized Care',
      description: 'Tailored treatments to meet your specific needs',
      icon: HeartIcon,
    },
    {
      title: 'Results',
      description: 'Achieve faster recovery with our effective treatments',
      icon: ClockIcon,
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Professional Physiotherapy at Your Doorstep
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Experience expert physiotherapy care in the comfort of your home. Our team of qualified professionals is dedicated to your recovery and well-being.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Book Your Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div ref={servicesRef} id="services" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Physiotherapy Care
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {services.map((service) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Locations</h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {locations.map((location) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <location.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {location.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{location.address}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} id="about" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">About Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Us
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <benefit.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {benefit.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{benefit.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} id="contact" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Contact Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get in Touch
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isContactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center gap-x-3">
                        <PhoneIcon className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-600">+91 7017421438</span>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <EnvelopeIcon className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-600">kavitajoshi2406@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <MapPinIcon className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-600">Bangalore, Karnataka</span>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <ClockIcon className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-600">Mon-Sat: 9:00 AM - 7:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isContactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <div className="mt-2">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
} 