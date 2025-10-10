import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/request';
import { Metadata } from 'next';
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'Bosque de Arrayanes',
      'Arrayanes Forest',
      'Villa La Angostura',
      'Patagonia',
      'Lake Nahuel Huapi',
      'Catamaran tour',
      'Argentina tourism',
      'Nature tours',
      'Catamarán Futaleufú',
    ],
    authors: [{ name: 'Bosque de Arrayanes' }],
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://bosquearrayanes.com/${locale}`,
      siteName: 'Bosque de Arrayanes',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Bosque de Arrayanes - Unique Forest Experience',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://bosquearrayanes.com/${locale}`,
      languages: {
        'es': '/es',
        'en': '/en',
        'pt': '/pt',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  // Structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'Bosque de Arrayanes',
    description: 'Unique Arrayanes Forest tour via catamaran on Lake Nahuel Huapi',
    image: 'https://bosquearrayanes.com/images/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Villa La Angostura',
      addressRegion: 'Neuquén',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-40.75',
      longitude: '-71.65',
    },
    url: `https://bosquearrayanes.com/${locale}`,
    telephone: '+54-294-449-4464',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '150',
    },
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
