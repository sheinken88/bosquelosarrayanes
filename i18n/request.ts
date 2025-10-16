import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Import all message files statically
import esMessages from '../messages/es.json';
import enMessages from '../messages/en.json';
import ptMessages from '../messages/pt.json';

// Can be imported from a shared config
export const locales = ['es', 'en', 'pt'] as const;
export const defaultLocale = 'es' as const;

// Create a messages map
const messages = {
  es: esMessages,
  en: enMessages,
  pt: ptMessages
} as const;

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: messages[locale as keyof typeof messages]
  };
});
