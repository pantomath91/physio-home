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

  const trackWhatsAppBooking = useCallback((packageType: string) => {
    pushToDataLayer({
      event: 'whatsapp_booking',
      event_category: 'engagement',
      event_label: packageType,
      value: 1,
    });
  }, [pushToDataLayer]);

  const trackWhatsAppQuickMessage = useCallback((messageType: string) => {
    pushToDataLayer({
      event: 'whatsapp_quick_message',
      event_category: 'engagement',
      event_label: messageType,
      value: 0.5,
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