// Analytics utility for tracking events across GA4, GTM, and Clarity

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    clarity: (...args: any[]) => void;
  }
}

type EventCategory = 'engagement' | 'conversion' | 'navigation' | 'form' | 'cta';

interface TrackEventParams {
  action: string;
  category: EventCategory;
  label?: string;
  value?: number;
  custom_data?: Record<string, any>;
}

/**
 * Track an event across all analytics platforms
 */
export const trackEvent = ({ action, category, label, value, custom_data }: TrackEventParams) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...custom_data,
    });
  }

  // Google Tag Manager dataLayer
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: action,
      eventCategory: category,
      eventLabel: label,
      eventValue: value,
      ...custom_data,
    });
  }

  // Microsoft Clarity custom tags
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('set', action, label || category);
  }
};

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent({
    action: 'cta_click',
    category: 'cta',
    label: ctaName,
    custom_data: { cta_location: location },
  });
};

/**
 * Track form submissions
 */
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent({
    action: success ? 'form_submit_success' : 'form_submit_error',
    category: 'form',
    label: formName,
    value: success ? 1 : 0,
  });
};

/**
 * Track calendar booking clicks
 */
export const trackCalendarClick = (source: string) => {
  trackEvent({
    action: 'calendar_booking_click',
    category: 'conversion',
    label: source,
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (depth: number) => {
  trackEvent({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${depth}%`,
    value: depth,
  });
};

/**
 * Track page views (for SPA navigation)
 */
export const trackPageView = (path: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-07F8K4LWKM', {
      page_path: path,
      page_title: title,
    });
  }

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_path: path,
      page_title: title,
    });
  }
};

/**
 * Track outbound link clicks
 */
export const trackOutboundLink = (url: string) => {
  trackEvent({
    action: 'outbound_link_click',
    category: 'navigation',
    label: url,
  });
};

/**
 * Track file downloads
 */
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent({
    action: 'file_download',
    category: 'engagement',
    label: fileName,
    custom_data: { file_type: fileType },
  });
};

/**
 * Track video interactions
 */
export const trackVideoEvent = (action: 'play' | 'pause' | 'complete', videoTitle: string) => {
  trackEvent({
    action: `video_${action}`,
    category: 'engagement',
    label: videoTitle,
  });
};

/**
 * Set user properties for analytics
 */
export const setUserProperties = (properties: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'user_properties', properties);
  }
};

/**
 * Initialize scroll depth tracking
 */
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;

  const thresholds = [25, 50, 75, 90, 100];
  const tracked = new Set<number>();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    thresholds.forEach((threshold) => {
      if (scrollPercent >= threshold && !tracked.has(threshold)) {
        tracked.add(threshold);
        trackScrollDepth(threshold);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => window.removeEventListener('scroll', handleScroll);
};
