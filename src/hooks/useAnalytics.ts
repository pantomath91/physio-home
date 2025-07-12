'use client';

import { useCallback } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const useAnalytics = () => {
  const pushToDataLayer = useCallback((event: any) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push(event);
    }
  }, []);

  // Simplified event tracking
  const trackEvent = useCallback((eventName: string, category: string, source?: string, additionalData?: any) => {
    pushToDataLayer({
      event: eventName,
      event_category: category,
      source_location: source,
      ...additionalData,
    });
  }, [pushToDataLayer]);

  // User landed on website
  const trackUserLanded = useCallback((page: string, source?: string) => {
    pushToDataLayer({
      event: 'user_landed',
      event_category: 'user_action',
      page_path: page,
      traffic_source: source,
    });
  }, [pushToDataLayer]);

  // User showed interest in service
  const trackServiceInterest = useCallback((serviceName: string, location: string) => {
    pushToDataLayer({
      event: 'user_interested_service',
      event_category: 'user_action',
      service_name: serviceName,
      source_location: location,
    });
  }, [pushToDataLayer]);

  // User clicked phone number
  const trackPhoneClick = useCallback((location: string) => {
    pushToDataLayer({
      event: 'contact_phone_clicked',
      event_category: 'contact',
      source_location: location,
      value: 1, // High intent action
    });
  }, [pushToDataLayer]);

  // User opened WhatsApp form
  const trackWhatsAppOpened = useCallback((source: string) => {
    pushToDataLayer({
      event: 'contact_whatsapp_opened',
      event_category: 'contact',
      source_location: source,
    });
  }, [pushToDataLayer]);

  // User opened Google Form fallback
  const trackFormOpened = useCallback((source: string) => {
    pushToDataLayer({
      event: 'contact_form_opened',
      event_category: 'contact',
      source_location: source,
    });
  }, [pushToDataLayer]);

  // User started booking process
  const trackBookingStarted = useCallback((source: string, packageName?: string) => {
    pushToDataLayer({
      event: 'conversion_booking_started',
      event_category: 'conversion',
      source_location: source,
      package: packageName,
    });
  }, [pushToDataLayer]);

  // User completed booking (MAIN CONVERSION)
  const trackBookingCompleted = useCallback((details: {
    source: string;
    name?: string;
    phone?: string;
    email?: string;
    packageName?: string;
    [key: string]: any;
  }) => {
    pushToDataLayer({
      event: 'conversion_booking_completed',
      event_category: 'conversion',
      source_location: details.source,
      user_name: details.name,
      user_phone: details.phone,
      user_email: details.email,
      package: details.packageName,
      value: 50, // Assign monetary value for conversion
      ...details,
    });
  }, [pushToDataLayer]);

  // User abandoned booking process
  const trackBookingAbandoned = useCallback((source: string, step: string) => {
    pushToDataLayer({
      event: 'conversion_booking_abandoned',
      event_category: 'conversion',
      source_location: source,
      abandonment_step: step,
    });
  }, [pushToDataLayer]);

  // Track form interactions (when user starts filling)
  const trackFormInteraction = useCallback((formType: string, fieldName: string, source: string, formData?: any) => {
    pushToDataLayer({
      event: 'form_interaction',
      event_category: 'form',
      form_type: formType,
      field_name: fieldName,
      source_location: source,
      form_progress: formData ? Object.keys(formData).filter(key => formData[key] && formData[key].trim() !== '').length : 1,
      ...formData,
    });
  }, [pushToDataLayer]);

  return {
    // New simplified methods
    trackUserLanded,
    trackServiceInterest,
    trackPhoneClick,
    trackWhatsAppOpened,
    trackFormOpened,
    trackBookingStarted,
    trackBookingCompleted,
    trackBookingAbandoned,
    trackFormInteraction,
    
    // Keep generic trackEvent for custom needs
    trackEvent,
  };
}; 