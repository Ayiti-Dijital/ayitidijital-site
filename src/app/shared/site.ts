import { IconName } from './icon/icon';

export const CONTACT_EMAIL = 'kontakt@ayitidijital.org';
export const REPO_URL = 'https://github.com/Ayiti-Dijital/ayitidijital-site';
export const TTS_REPO_URL = 'https://github.com/Ayiti-Dijital/haitian-creole-tts';
/** The dictionary site – later https://diksyone.ayitidijital.org */
export const DIKSYONE_URL = 'https://diksyone-kreyol.vercel.app';
export const LEXHAITI_URL = 'https://www.lexhaiti.org';

/** An email link to the Ayiti Dijital contact address with a prefilled subject. */
export function mailto(subject: string): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

/** One entry of the main menu: an internal route, or a link to another Ayiti Dijital site. */
export interface MenuItem {
  readonly label: string;
  readonly path?: string;
  readonly href?: string;
}

export const MENU: readonly MenuItem[] = [
  { label: 'Lang Kreyòl', path: '/lang-kreyol' },
  { label: 'Bileng', path: '/bileng' },
  { label: 'Flashcard', path: '/flashcard' },
  { label: 'Tradiktè', path: '/tradikte' },
  { label: 'Gramè', path: '/grame' },
  { label: 'Ansiklopedi', path: '/ansiklopedi' },
  { label: 'Kizin', path: '/kizin' },
  { label: 'Jwèt', href: `${DIKSYONE_URL}/jwet` },
  { label: 'Liv', path: '/liv' },
];

/** What a "Byento" page shows; set per route in `app.routes.ts`. */
export interface ComingSoon {
  readonly heading: string;
  readonly text: string;
  readonly icon: IconName;
}
