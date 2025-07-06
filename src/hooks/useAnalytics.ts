'use client';

import { useCallback } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const useAnalytics = () => {
  const trackEvent = useCallback((action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }, []);

  const trackPageView = useCallback((url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-XVQNLGWLTW', {
        page_path: url,
      });
    }
  }, []);

  const trackWhatsAppBooking = useCallback((packageType: string) => {
    trackEvent('whatsapp_booking', 'engagement', packageType);
  }, [trackEvent]);

  const trackWhatsAppQuickMessage = useCallback((messageType: string) => {
    trackEvent('whatsapp_quick_message', 'engagement', messageType);
  }, [trackEvent]);

  const trackPhoneCall = useCallback(() => {
    trackEvent('phone_call', 'engagement', 'contact');
  }, [trackEvent]);

  const trackFormInteraction = useCallback((formName: string, action: string) => {
    trackEvent(action, 'form_interaction', formName);
  }, [trackEvent]);

  const trackServiceInterest = useCallback((serviceName: string) => {
    trackEvent('service_interest', 'engagement', serviceName);
  }, [trackEvent]);

  const trackScrollDepth = useCallback((depth: number) => {
    trackEvent('scroll_depth', 'engagement', `depth_${depth}%`);
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackWhatsAppBooking,
    trackWhatsAppQuickMessage,
    trackPhoneCall,
    trackFormInteraction,
    trackServiceInterest,
    trackScrollDepth,
  };
}; 