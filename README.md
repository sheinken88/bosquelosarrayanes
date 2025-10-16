# Bosque de Arrayanes - Landing Page

A modern, SEO-optimized Next.js landing page for the Bosque de Arrayanes catamaran tour service in Villa La Angostura, Argentina.

## Features

✅ **Modern Tech Stack**
- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- next-intl for internationalization

✅ **Multi-language Support**
- Spanish (primary)
- English
- Portuguese

✅ **SEO Optimized**
- Dynamic metadata per language
- Structured data (JSON-LD)
- Sitemap generation
- robots.txt configuration
- Open Graph and Twitter Card support

✅ **Fully Responsive**
- Mobile-first design
- Optimized for all screen sizes
- Touch-friendly navigation

✅ **Key Sections**
- Hero with full-screen atmospheric design
- Forest information showcase
- Catamaran details
- Tour experience breakdown
- Pricing (Tarifas)
- Photo gallery with lightbox
- Embedded YouTube video
- Testimonials
- FAQ accordion
- Contact form
- Footer with social links

✅ **Design Philosophy**
- Deep teal/forest green color palette
- Serif headlines (Playfair Display) + Sans body (Inter)
- Organic SVG transitions between sections
- Atmospheric imagery
- Premium wilderness aesthetic

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add images to `public/images/` directory (see `public/images/README.md` for requirements)

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000/es](http://localhost:3000/es) in your browser

The page will automatically redirect to `/es` (Spanish) by default.

### Available Routes

- `/es` - Spanish version
- `/en` - English version
- `/pt` - Portuguese version

## Project Structure

```
bosque-arrayanes-lp/
├── app/
│   ├── [locale]/           # Locale-specific pages
│   │   ├── layout.tsx      # Layout with SEO metadata
│   │   └── page.tsx        # Main landing page
│   ├── globals.css         # Global styles with design system
│   ├── layout.tsx          # Root layout
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt configuration
├── components/             # React components
│   ├── Navigation.tsx      # Sticky nav with language switcher
│   ├── Hero.tsx           # Full-screen hero section
│   ├── ForestSection.tsx  # Arrayanes forest info
│   ├── CatamaranSection.tsx
│   ├── TourSection.tsx
│   ├── PricingSection.tsx
│   ├── GallerySection.tsx # Photo gallery with lightbox
│   ├── VideoSection.tsx   # YouTube embed
│   ├── TestimonialsSection.tsx
│   ├── FAQSection.tsx     # Accordion FAQ
│   ├── ContactSection.tsx # Contact form
│   └── Footer.tsx
├── i18n/
│   └── request.ts         # i18n configuration
├── messages/              # Translation files
│   ├── es.json
│   ├── en.json
│   └── pt.json
├── public/
│   └── images/            # Image assets
└── middleware.ts          # Locale detection/routing
```

## Customization

### Update Translations
Edit the JSON files in `messages/` directory:
- `es.json` - Spanish
- `en.json` - English
- `pt.json` - Portuguese

### Modify Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --forest-dark: #1a4d4d;
  --forest-medium: #2d6a6a;
  --earth-gold: #d4a574;
  /* ... etc */
}
```

### Update Contact Information
Edit the `ContactSection.tsx` component and translation files.

### Add/Remove Sections
Edit `app/[locale]/page.tsx` to add/remove components.

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
Build the production version:
```bash
npm run build
npm start
```

## Performance Optimizations

- Image optimization with Next.js Image component
- Font optimization with next/font
- Automatic code splitting
- Static generation where possible
- Lazy loading for images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## To-Do Before Launch

- [ ] Add real images to `public/images/`
- [ ] Update contact information (phone, email, address)
- [ ] Set up contact form backend/API
- [ ] Add Google Analytics tracking ID
- [ ] Test all forms and links
- [ ] Verify all translations
- [ ] Add actual testimonials
- [ ] Update pricing information
- [ ] Configure domain and SSL certificate
- [ ] Test on multiple devices
- [ ] Run Lighthouse audit

## Environment Variables

Create a `.env.local` file for environment-specific config:

```env
NEXT_PUBLIC_SITE_URL=https://bosquearrayanes.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## License

© 2025 Bosque de Arrayanes. All rights reserved.
