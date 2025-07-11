'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  UserGroupIcon,
  ClockIcon,
  HomeIcon,
  HeartIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  StarIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import WhatsAppBookingModal from '@/components/WhatsAppBookingModal';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ServicePackages from '@/components/ServicePackages';
import Image from 'next/image';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function Home() {
  const { trackPageView, trackScrollDepth, trackServiceInterest, trackPhoneCall } = useAnalytics();
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
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
      description: 'Expert treatment for joint pain, muscle injuries, and post-surgical rehabilitation with personalized recovery plans',
      icon: HeartIcon,
    },
    {
      name: 'Neurological Physiotherapy',
      description: 'Specialized care for stroke recovery, spinal cord injuries, and neurological conditions with advanced techniques',
      icon: UserGroupIcon,
    },
    {
      name: 'Geriatric Physiotherapy',
      description: 'Comprehensive care for age-related conditions, focusing on mobility, balance, and independent living',
      icon: ClockIcon,
    },
    {
      name: 'Sports Injury Treatment',
      description: 'Professional care for sports-related injuries with performance enhancement and prevention strategies',
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
      title: 'Expert Care',
      description: 'Licensed physiotherapists with years of experience in home care',
      icon: UserGroupIcon,
    },
    {
      title: 'Home Comfort',
      description: 'Professional treatment in your familiar environment',
      icon: HomeIcon,
    },
    {
      title: 'Personalized Treatment',
      description: 'Customized care plans based on your specific needs',
      icon: HeartIcon,
    },
    {
      title: 'Quick Recovery',
      description: 'Evidence-based treatments for faster healing',
      icon: ClockIcon,
    },
  ];

  const treatmentImages = [
    {
      src: '/images/Physiotherapy (1).webp',
      alt: 'Physiotherapy Treatment',
      title: 'Professional Care',
      description: 'Expert physiotherapy in the comfort of your home',
    },
    {
      src: '/images/Physiotherapy (2).webp',
      alt: 'Exercise Therapy',
      title: 'Exercise Therapy',
      description: 'Personalized exercise programs for optimal recovery',
    },
    {
      src: '/images/Physiotherapy (3).webp',
      alt: 'Cupping Therapy',
      title: 'Cupping Therapy',
      description: 'Traditional cupping treatment for pain relief and healing',
    },
  ];

  const stats = [
    { id: 1, name: 'Years of Experience', value: '10+' },
    { id: 2, name: 'Patients Treated', value: '5000+' },
    { id: 3, name: 'Success Rate', value: '95%' },
    { id: 4, name: 'Qualified Therapists', value: '15+' },
  ];

  const certifications = [
    {
      name: 'ISO Certified',
      description: 'Quality assured healthcare services',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Licensed Professionals',
      description: 'All therapists are state-licensed',
      icon: AcademicCapIcon,
    },
    {
      name: 'Advanced Training',
      description: 'Regular skill enhancement programs',
      icon: StarIcon,
    },
    {
      name: 'Quality Care',
      description: 'Patient satisfaction guaranteed',
      icon: ChartBarIcon,
    },
  ];

  // Track page view on mount
  useEffect(() => {
    trackPageView('/');
  }, [trackPageView]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      // Track at 25%, 50%, 75%, and 100% scroll points
      if (scrollPercent >= 25 && scrollPercent < 50) {
        trackScrollDepth(25);
      } else if (scrollPercent >= 50 && scrollPercent < 75) {
        trackScrollDepth(50);
      } else if (scrollPercent >= 75 && scrollPercent < 100) {
        trackScrollDepth(75);
      } else if (scrollPercent >= 100) {
        trackScrollDepth(100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackScrollDepth]);

  return (
    <div className="relative">
      {/* Hero Section with Background Image */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/Physiotherapy (1).webp"
            alt="Physiotherapy Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-blue-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Professional Physiotherapy at Your Doorstep
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Experience expert physiotherapy care in the comfort of your home. Our team of qualified professionals brings comprehensive treatment and personalized care to you, ensuring a comfortable and effective recovery journey.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <button
                    onClick={() => setIsWhatsAppModalOpen(true)}
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Book Your Appointment
                  </button>
                  <a href="#services" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn More <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div className="relative mx-auto w-full max-w-sm rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 lg:mx-0 lg:max-w-none">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-100 to-blue-50 opacity-20 blur"></div>
              <div className="relative rounded-2xl bg-white p-8 shadow-xl">
                <div className="flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0"></span>
                      Start Your Recovery Journey
                    </p>
                    <p className="text-gray-600">Free consultation for your first home visit</p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center">
                      <span className="text-white font-semibold">✓</span>
                    </div>
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">Free Initial Assessment</p>
                      <p className="text-gray-600">Comprehensive evaluation of your condition</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Packages - Moved to top */}
      <ServicePackages />

      {/* Real Images Showcase */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Practice</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Physiotherapy Care
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See our professional setup and equipment that we bring to your home for comprehensive physiotherapy treatment.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <div className="relative h-80 w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/Physiotherapy (2).webp"
                  alt="Physiotherapy Equipment"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">Professional Equipment</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">We bring all necessary equipment to your home for comprehensive treatment.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <div className="relative h-80 w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/Physiotherapy (3).webp"
                  alt="Treatment Session"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">Personalized Treatment</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">One-on-one attention in the comfort of your own home environment.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Treatment Images Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Approach</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Treatment Methods
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {treatmentImages.map((image) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{image.title}</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{image.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-blue-600 sm:text-5xl">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
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
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a wide range of specialized physiotherapy services, delivered by experienced professionals in the comfort of your home.
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

      {/* Certifications Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Standards</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Quality & Professionalism
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {certifications.map((certification) => (
                <motion.div
                  key={certification.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <certification.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {certification.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{certification.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Enhanced Testimonials Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Patient Success Stories</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Patients Say
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Don't just take our word for it. Here's what our patients have to say about their experience with our home visit physiotherapy services.
            </p>
          </div>
          <div className="mt-16">
            <Testimonials />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} id="about" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">About Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Home Visit Physiotherapy
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We bring expert physiotherapy care directly to your doorstep. Our team of qualified professionals is dedicated to providing personalized treatment in the comfort of your home, ensuring a convenient and effective recovery journey.
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
          <div className="mt-16 mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Home Visit Physiotherapy?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">No travel required - we come to you, saving time and energy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Personalized care in familiar surroundings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Comprehensive assessment of your home environment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Family members can be involved in the treatment process</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Treatment Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Detailed initial assessment and personalized treatment plan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Evidence-based physiotherapy techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Regular progress monitoring and treatment adjustments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Home exercise program guidance and support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <div ref={contactRef} id="contact" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Contact Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get in Touch
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready to start your recovery journey? Contact us today to schedule your first appointment or to learn more about our services. We serve multiple locations and are available for emergency consultations.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {/* Primary Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isContactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Primary Contact</h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center gap-x-3">
                        <PhoneIcon className="h-5 w-5 text-blue-600" />
                        <div>
                          <span className="text-gray-900 font-medium">+91 7017421438</span>
                          <p className="text-sm text-gray-500">Main Office</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <EnvelopeIcon className="h-5 w-5 text-blue-600" />
                        <div>
                          <span className="text-gray-900 font-medium">kavitajoshi2406@gmail.com</span>
                          <p className="text-sm text-gray-500">Email Support</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <ClockIcon className="h-5 w-5 text-blue-600" />
                        <div>
                          <span className="text-gray-900 font-medium">Mon-Sat: 9:00 AM - 7:00 PM</span>
                          <p className="text-sm text-gray-500">Sunday: Emergency Only</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Service Locations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Locations</h3>
                    <div className="mt-4 space-y-4">
                      <div className="border-l-4 border-blue-600 pl-4">
                        <h4 className="font-medium text-gray-900">Bangalore</h4>
                        <p className="text-sm text-gray-600">Koramangala, Bangalore - 560034</p>
                        <p className="text-xs text-gray-500">Primary Service Area</p>
                      </div>
                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-medium text-gray-900">Haldwani</h4>
                        <p className="text-sm text-gray-600">Kathgodam, Haldwani - 263139</p>
                        <p className="text-xs text-gray-500">Uttarakhand Region</p>
                      </div>
                      <div className="border-l-4 border-purple-600 pl-4">
                        <h4 className="font-medium text-gray-900">Ramnagar</h4>
                        <p className="text-sm text-gray-600">Ramnagar, Uttarakhand - 244715</p>
                        <p className="text-xs text-gray-500">Extended Service Area</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Emergency & Booking */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isContactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Book Your Appointment</h3>
                    <p className="text-gray-600 mb-6">
                      Ready to start your recovery journey? Book your appointment through WhatsApp for quick and easy scheduling.
                    </p>
                    <div className="space-y-4">
                      <button
                        onClick={() => setIsWhatsAppModalOpen(true)}
                        className="w-full rounded-lg bg-green-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        Book via WhatsApp
                      </button>
                      
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Or call us directly:</p>
                        <a 
                          href="tel:+917017421438" 
                          className="text-blue-600 hover:text-blue-500 font-semibold text-lg"
                        >
                          +91 7017421438
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Additional Information */}
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Free initial consultation and assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Same-day appointment availability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Emergency consultation on Sundays</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Flexible scheduling to suit your needs</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-green-50 p-8 rounded-2xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900">Primary Coverage</h4>
                    <p className="text-sm text-gray-600">Bangalore (Koramangala, Indiranagar, HSR Layout, Whitefield)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Uttarakhand Region</h4>
                    <p className="text-sm text-gray-600">Haldwani, Ramnagar, Nainital, Rudrapur</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Extended Services</h4>
                    <p className="text-sm text-gray-600">Corporate visits, elderly care, post-surgery rehabilitation</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppBookingModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />
    </div>
  );
} 