import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { locales, defaultLocale } from './i18n';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export default function middleware(req: NextRequest) {
  try {
    return intlMiddleware(req);
  } catch (error) {
    // Log error for debugging but don't crash the middleware
    console.error('Middleware error:', error);
    // Allow the request to proceed without locale handling in case of error
    return;
  }
}

export const config = {
  // Match all pathnames except for:
  // - API routes (/api)
  // - Next.js internals (_next)
  // - Vercel internals (_vercel)
  // - Static files (with file extensions)
  // - Sitemap and robots routes (handled by Next.js special files)
  // - Favicon
  matcher: ['/((?!api|_next|_vercel|favicon\\.ico|sitemap|robots|.*\\..*).*)'
  ]
};
