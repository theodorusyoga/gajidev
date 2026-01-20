// Google Analytics initialization
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    console.info('Tracking pageview:', url)
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

export const event = (action: string, params?: Record<string, string | number | boolean>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    console.info('Tracking event:', action, params)
    (window as any).gtag('event', action, params)
  }
}

// Declare gtag on window
declare global {
  interface Window {
    gtag: (command: string, id: string, config: Record<string, any>) => void
  }
}
