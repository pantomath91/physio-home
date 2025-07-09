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

  const trackEvent = useCallback((action: string, category: string, label?: string, value?: number) => {
    pushToDataLayer({
      event: action,
      event_category: category,
      event_label: label,
      value: value,
    });
  }, [pushToDataLayer]);

  const trackPageView = useCallback((url: string) => {
    pushToDataLayer({
      event: 'page_view',
      page_path: url,
    });
  }, [pushToDataLayer]);

  const trackPhoneCall = useCallback(() => {
    pushToDataLayer({
      event: 'phone_call',
      event_category: 'engagement',
      event_label: 'contact',
      value: 0.5,
    });
  }, [pushToDataLayer]);

  const trackFormInteraction = useCallback((formName: string, action: string) => {
    pushToDataLayer({
      event: action,
      event_category: 'form_interaction',
      event_label: formName,
    });
  }, [pushToDataLayer]);

  const trackServiceInterest = useCallback((serviceName: string) => {
    pushToDataLayer({
      event: 'service_interest',
      event_category: 'engagement',
      event_label: serviceName,
    });
  }, [pushToDataLayer]);

  const trackScrollDepth = useCallback((depth: number) => {
    pushToDataLayer({
      event: 'scroll_depth',
      event_category: 'engagement',
      event_label: `depth_${depth}%`,
    });
  }, [pushToDataLayer]);

  // Track a booking event with custom details
  const trackBooking = useCallback((details: {
    source: string;
    name?: string;
    phone?: string;
    email?: string;
    packageName?: string;
    [key: string]: any;
  }) => {
    pushToDataLayer({
      event: 'booking_submit',
      event_category: 'booking',
      event_label: details.source,
      user_name: details.name,
      user_phone: details.phone,
      user_email: details.email,
      package: details.packageName,
      ...details,
    });
  }, [pushToDataLayer]);

  return {
    trackEvent,
    trackPageView,
    trackPhoneCall,
    trackFormInteraction,
    trackServiceInterest,
    trackScrollDepth,
    trackBooking,
  };
}; 