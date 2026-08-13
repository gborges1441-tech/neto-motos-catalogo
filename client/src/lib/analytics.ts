type AnalyticsValue = string | number | boolean;

type UmamiWindow = Window & {
  umami?: {
    track: (eventName: string, data?: Record<string, AnalyticsValue>) => void;
  };
};

export function trackEvent(eventName: string, data?: Record<string, AnalyticsValue>) {
  if (typeof window === "undefined") return;
  (window as UmamiWindow).umami?.track(eventName, data);
}
