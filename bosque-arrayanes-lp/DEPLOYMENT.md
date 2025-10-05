# Deployment Guide

## Pre-Deployment Checklist

Before deploying to production, ensure you complete these tasks:

### 1. Add Images
- [ ] Add all required images to `public/images/` (see `public/images/README.md`)
- [ ] Optimize images for web (compress to 80-85% quality)
- [ ] Test all image paths work correctly

### 2. Update Content
- [ ] Review and update all translations in `messages/*.json`
- [ ] Update contact information (phone, email, address)
- [ ] Add real testimonials
- [ ] Update pricing information
- [ ] Verify tour details (times, duration, included items)

### 3. Configure Contact Form
- [ ] Set up form submission backend (options below)
- [ ] Test form submissions work correctly
- [ ] Add email notifications for new inquiries
- [ ] Set up form spam protection (reCAPTCHA or similar)

### 4. Analytics & Tracking
- [ ] Create Google Analytics 4 property
- [ ] Add GA tracking code to layout
- [ ] Set up conversion tracking for contact form
- [ ] Verify analytics are working

### 5. SEO & Domain
- [ ] Purchase domain (if not done)
- [ ] Update all URLs in code to use real domain
- [ ] Configure DNS settings
- [ ] Set up SSL certificate (automatic on Vercel)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Open Graph tags with Facebook Debugger

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is the easiest deployment option for Next.js:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Configure project (defaults should work)
   - Click "Deploy"

3. **Configure Custom Domain**
   - In Vercel dashboard, go to Settings > Domains
   - Add your custom domain
   - Follow DNS configuration instructions
   - SSL is automatic

4. **Environment Variables** (if needed)
   - Settings > Environment Variables
   - Add any secrets (API keys, etc.)

### Option 2: Netlify

1. **Push to GitHub** (same as Vercel)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect to GitHub
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

3. **Configure Domain**
   - Domain settings > Add custom domain
   - Follow DNS instructions

### Option 3: Self-Hosted (VPS/Cloud)

If deploying to your own server:

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Set Up Server**
   - Install Node.js 18+
   - Install PM2 for process management:
     ```bash
     npm install -g pm2
     ```

3. **Transfer Files**
   ```bash
   # Upload these directories/files:
   - .next/
   - public/
   - node_modules/
   - package.json
   - package-lock.json
   ```

4. **Start Application**
   ```bash
   pm2 start npm --name "bosque-arrayanes" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx** (reverse proxy)
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

## Contact Form Backend Options

The current form is frontend-only. Choose a backend solution:

### Option 1: Formspree (Easiest)
- Create account at [formspree.io](https://formspree.io)
- Get form endpoint URL
- Update form action in `ContactSection.tsx`

### Option 2: EmailJS
- Create account at [emailjs.com](https://www.emailjs.com)
- Set up email service
- Add EmailJS SDK and configure

### Option 3: Custom API Route
Create `app/api/contact/route.ts`:
```typescript
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const data = await request.json();

  // Configure your email service
  const transporter = nodemailer.createTransport({
    // Your SMTP settings
  });

  await transporter.sendMail({
    from: 'noreply@bosquearrayanes.com',
    to: 'info@bosquearrayanes.com',
    subject: `New inquiry from ${data.name}`,
    html: `...email template...`
  });

  return NextResponse.json({ success: true });
}
```

## Post-Deployment

### 1. Test Everything
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test all navigation links
- [ ] Test language switcher
- [ ] Test contact form submission
- [ ] Verify all images load
- [ ] Check page load speed

### 2. SEO Setup
- [ ] Submit sitemap: `https://yourdomain.com/sitemap.xml`
- [ ] Verify in Google Search Console
- [ ] Set up Google Business Profile
- [ ] Add to TripAdvisor
- [ ] Set up social media profiles

### 3. Performance Optimization
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Check Core Web Vitals
- [ ] Optimize any slow-loading images
- [ ] Enable Vercel Analytics (if using Vercel)

### 4. Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, etc.)
- [ ] Configure error tracking (Sentry, etc.)
- [ ] Monitor Google Analytics regularly
- [ ] Check Search Console for issues weekly

## Updating the Site

After initial deployment, to update:

1. **Make changes locally**
2. **Test locally**: `npm run dev`
3. **Build and verify**: `npm run build`
4. **Commit and push**:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
5. **Automatic deployment** (if using Vercel/Netlify)

## Rollback

If something goes wrong:

**On Vercel:**
- Go to Deployments
- Find previous working deployment
- Click "..." > "Promote to Production"

**On Self-Hosted:**
```bash
git revert HEAD
git push
pm2 restart bosque-arrayanes
```

## Support & Maintenance

### Regular Maintenance Tasks
- Update dependencies monthly: `npm update`
- Review and respond to contact form submissions
- Update content (testimonials, photos, pricing)
- Monitor and fix any reported issues
- Review analytics and adjust strategy

### Getting Help
- Next.js docs: https://nextjs.org/docs
- next-intl docs: https://next-intl-docs.vercel.app
- Vercel support: https://vercel.com/support

## Security Considerations

- [ ] Keep dependencies updated
- [ ] Use environment variables for sensitive data
- [ ] Enable CORS protection
- [ ] Implement rate limiting on contact form
- [ ] Regular security audits
- [ ] Keep Node.js version updated

---

**Need help?** Contact your developer or refer to the main README.md for more information.
