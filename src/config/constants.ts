export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'For Employers', href: '/employers' },
  { name: 'For Job Seekers', href: '/job-seekers' },
];

export const BRAND_MESSAGE = 'Fast, human-first hiring';

export const COMPANY_INFO = {
  name: 'Hireside Chat',
  tagline: 'Making hiring human again',
  phone: '(555) 123-4567',
  email: import.meta.env.VITE_ADMIN_EMAIL ,
  description: 'Transform hiring from a numbers game into human connections that stick. We cut time-to-hire from 44 days to 10, delivering 85%+ retention through face-to-face meetings that matter.',
};

export const STATS = {
  fasterHiring: { value: 4, suffix: 'x', label: 'Faster Hiring', detail: '44 days → 10 days' },
  sameDayOffers: { value: 70, suffix: '%', label: 'Same-Day Offers', detail: 'Face-to-face decisions' },
  retention: { value: 85, suffix: '%', label: 'Retention Rate', detail: 'Human connections stick' },
};

export const FOOTER_LINKS = {
  navigation: NAVIGATION_ITEMS,
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Contact Us', href: '/contact' },
  ],
};