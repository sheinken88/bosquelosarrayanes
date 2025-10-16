# Quick Start Guide - Bosque de Arrayanes Landing Page

## What You Have

A complete, modern landing page for your Bosque de Arrayanes catamaran tour business with:

- ✅ **3 languages**: Spanish, English, Portuguese
- ✅ **SEO optimized**: Ready for Google
- ✅ **Mobile responsive**: Works perfectly on phones and tablets
- ✅ **Professional design**: Premium wilderness aesthetic
- ✅ **All sections**: Hero, Forest info, Catamaran, Tour details, Pricing, Gallery, Video, Testimonials, FAQ, Contact form
- ✅ **Built with latest technology**: Next.js 15, TypeScript, Tailwind CSS

## First Steps (Do This Now)

### 1. View the Website Locally

Open Terminal in this folder and run:

```bash
npm install
npm run dev
```

Then open your browser to: **http://localhost:3000/es**

You should see your landing page! Try clicking the language switcher (ES/EN/PT) in the top right.

### 2. Add Your Images (CRITICAL)

The site currently has placeholder image paths. You MUST add real images:

**Go to:** `public/images/` folder

**You need these images:**
- `hero-forest.jpg` - Main hero image (1920x1080 or larger)
- `arrayanes-forest.jpg` - Forest showcase (1200x800)
- `catamaran.jpg` - Your catamaran (1200x800)
- `gallery-1.jpg` through `gallery-6.jpg` - Gallery images (800x600 each)
- `og-image.jpg` - For social media sharing (1200x630)

See `public/images/README.md` for detailed requirements.

**Where to get images:**
- Use your own professional photos (BEST option)
- Or use free stock photos from:
  - https://unsplash.com (search: "forest", "lake patagonia", "catamaran")
  - https://pexels.com

### 3. Update Your Contact Information

**File to edit:** `messages/es.json` (and `en.json`, `pt.json`)

Look for the "contact" section and update:
- Phone number
- Email address
- Address
- Hours

**Also edit:** `components/ContactSection.tsx` (lines 93-108)
- Update phone: `+54 (294) 449-4464`
- Update email: `info@bosquearrayanes.com`
- Update map coordinates if needed

## Next Steps (Before Going Live)

### Update Content

Edit these files to customize the content:

1. **Translations:** `messages/es.json`, `messages/en.json`, `messages/pt.json`
   - Update pricing (currently shows `$$$` placeholders)
   - Update tour times
   - Add real testimonials
   - Verify all text is accurate

2. **Testimonials:** `components/TestimonialsSection.tsx` (lines 9-33)
   - Replace sample testimonials with real ones from clients

### Test Everything

1. **Test all 3 languages**:
   - http://localhost:3000/es (Spanish)
   - http://localhost:3000/en (English)
   - http://localhost:3000/pt (Portuguese)

2. **Test on your phone**:
   - Navigation menu
   - Contact form
   - Image gallery
   - Language switcher

3. **Test all links**:
   - Click every navigation item
   - Submit the contact form (it shows a success message but doesn't send yet)
   - Click the gallery images
   - Play the YouTube video

## Going Live (Deploy to Internet)

### Option 1: Vercel (Recommended - FREE and EASY)

1. **Create GitHub account** (if you don't have one): https://github.com
2. **Upload your code to GitHub**
3. **Go to Vercel**: https://vercel.com
4. **Sign up with GitHub**
5. **Click "New Project"**
6. **Import your repository**
7. **Click Deploy**
8. **Done!** Your site is live

**Cost:** FREE for this type of site

**Your site will be at:** `https://your-project-name.vercel.app`

### Option 2: Buy a Custom Domain

After deploying to Vercel:

1. **Buy domain** at:
   - Namecheap.com
   - GoDaddy.com
   - Google Domains

   Example: `bosquearrayanes.com`

2. **Add domain in Vercel**:
   - Settings > Domains
   - Add your domain
   - Follow instructions to update DNS

**Cost:** ~$10-15/year for domain

## Setting Up Contact Form (Important!)

The contact form currently just shows a success message. To actually receive emails:

### Easy Option: Use Formspree (FREE for 50 submissions/month)

1. Go to https://formspree.io
2. Create free account
3. Create new form
4. Copy the form endpoint URL
5. Update `components/ContactSection.tsx` (we can help with this)

### Alternative: Use EmailJS (FREE for 200 emails/month)

1. Go to https://www.emailjs.com
2. Create account
3. Set up email service
4. We can help integrate it

## Common Questions

**Q: How much does hosting cost?**
A: FREE on Vercel. You only pay for a custom domain (~$10/year) if you want one.

**Q: Can I update the site myself later?**
A: Yes! Just edit the translation files (`messages/*.json`) and push to GitHub. It auto-updates.

**Q: What if something breaks?**
A: Vercel keeps all previous versions. You can instantly rollback to any previous version.

**Q: How do I add more photos to the gallery?**
A: Add images to `public/images/`, then edit `components/GallerySection.tsx` to include them.

**Q: Can I change colors?**
A: Yes! Edit `app/globals.css` (lines 3-24) to change the color scheme.

**Q: How do I update prices?**
A: Edit `messages/es.json` (and en/pt versions), look for the "pricing" section.

## What Each File Does

```
bosque-arrayanes-lp/
├── app/                    # Main application structure
├── components/             # Website sections (Hero, Gallery, etc.)
├── messages/               # Translations (Spanish, English, Portuguese)
│   ├── es.json            # ← EDIT THIS for Spanish text
│   ├── en.json            # ← EDIT THIS for English text
│   └── pt.json            # ← EDIT THIS for Portuguese text
├── public/
│   └── images/            # ← PUT YOUR IMAGES HERE
└── README.md              # Technical documentation
```

## Need Help?

### Files to Edit for Common Changes:

| What to Change | File to Edit |
|----------------|--------------|
| Any text content | `messages/es.json`, `messages/en.json`, `messages/pt.json` |
| Contact info | `messages/*.json` + `components/ContactSection.tsx` |
| Pricing | `messages/*.json` (search for "pricing") |
| Colors | `app/globals.css` |
| Photos | Add to `public/images/` folder |
| Testimonials | `components/TestimonialsSection.tsx` |

### Resources:

- **See DEPLOYMENT.md** for detailed deployment instructions
- **See README.md** for technical details
- **See public/images/README.md** for image requirements

## Support

If you need help:
1. Check the documentation files (README.md, DEPLOYMENT.md)
2. Read error messages carefully
3. Google the error message
4. Ask your developer

---

**Ready to launch?** Follow the "Going Live" section above! 🚀
