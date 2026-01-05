# CNV (Chứng Nhận Việt) - Documentation

## Project Overview

CNV (Chứng Nhận Việt) is a static website for a Vietnamese ISO certification company. The site showcases certification services, company information, and provides contact methods for potential clients. Built with modern web technologies, it features a clean, professional design with custom branding.

**Live Demo:** Designed for deployment on GitHub Pages
**Language:** Vietnamese (vi)
**Industry:** ISO Certification & Quality Management

## Tech Stack

### Core Technologies
- **HTML5** - Semantic markup with Vietnamese language support
- **CSS3** - Custom styles with modern layout techniques
- **JavaScript (ES6+)** - Interactive features and animations
- **Tailwind CSS** - Utility-first CSS framework (CDN)

### Libraries & Dependencies
All dependencies are loaded via CDN (no build process required):

- **Tailwind CSS** (CDN) - Responsive utility classes
- **Remix Icon** (v4.5.0) - Icon library
- **Swiper.js** (v11) - Touch slider/carousel
- **AOS** (v2.3.1) - Animate On Scroll library
- **Google Fonts** - Be Vietnam Pro & Montserrat

### Design System
- **Primary Color:** `#0A8FDC` (Blue) - Trust & professionalism
- **Accent Color:** `#F5841F` (Orange) - Energy & action
- **Typography:**
  - Headings: Be Vietnam Pro
  - Body: Montserrat
- **Logo:** CNV custom logo in blue/orange

## File Structure

```
cnv/
├── index.html              # Homepage with hero, services, about
├── about.html              # Company information & culture
├── services.html           # Detailed certification services
├── contact.html            # Contact form & information
├── assets/
│   ├── css/
│   │   └── custom.css      # Custom styles & overrides
│   ├── js/
│   │   └── main.js         # Main JavaScript file
│   └── images/
│       └── logo.png        # CNV logo
├── docs/
│   ├── README.md           # This file
│   └── project-overview-pdr.md  # Product requirements
└── .gitignore              # Git ignore rules
```

## Quick Start Guide

### Local Development

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd cnv
   ```

2. **Open in browser:**
   Simply open `index.html` in your web browser. No build process required.

3. **Local server (optional):**
   For a better development experience:
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (http-server)
   npx http-server
   ```
   Then visit `http://localhost:8000`

### Testing

Test the site across different:
- **Browsers:** Chrome, Firefox, Safari, Edge
- **Devices:** Desktop, tablet, mobile (responsive design)
- **Screen sizes:** Mobile (320px+), tablet (768px+), desktop (1024px+)

## Deployment to GitHub Pages

### Method 1: Direct Push to gh-pages

1. **Initialize git (if needed):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub:**
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings > Pages
   - Source: Deploy from branch
   - Branch: `main` / `(root)`
   - Save

4. **Access your site:**
   Visit `https://<username>.github.io/<repository-name>/`

### Method 2: Using gh-pages Branch

```bash
# Create orphan gh-pages branch
git checkout --orphan gh-pages
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# Then configure in GitHub Settings > Pages
# Source: gh-pages branch
```

### Custom Domain (Optional)

1. Add `CNAME` file in root:
   ```
   www.chungnhanviet.vn
   ```

2. Configure DNS settings:
   - Add A records pointing to GitHub's IPs
   - Or CNAME record pointing to `<username>.github.io`

## Customization Guide

### Changing Colors

**Via Tailwind Config** (in `<head>` of each HTML file):
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0A8FDC', dark: '#1E5F8A', light: '#69C8F2' },
        accent: { DEFAULT: '#F5841F', light: '#F8A64B' },
      }
    }
  }
}
```

**In custom.css:**
```css
::-webkit-scrollbar-thumb {
  background: #0A8FDC; /* Primary color */
}
```

### Updating Content

1. **Company Name/Branding:**
   - Search and replace "Chứng Nhận Việt" or "CNV"
   - Update meta tags in each HTML `<head>`

2. **Contact Information:**
   - Phone: Search for `0123 456 789`
   - Email: Search for `info@chungnhanviet.vn`
   - Address: Found in footer and contact page

3. **Logo:**
   - Replace `/assets/images/logo.png`
   - Recommended size: 200x200px (transparent PNG)
   - Update favicon in each HTML `<head>`

### Adding Pages

1. **Copy existing page:**
   ```bash
   cp about.html new-page.html
   ```

2. **Update navigation** in all HTML files:
   ```html
   <a href="new-page.html">New Page</a>
   ```

3. **Update content:**
   - Change page title in `<title>`
   - Update meta description
   - Modify page header section
   - Add your content

### Modifying Components

**Hero Slider (index.html):**
- Add/remove slides in `.heroSwiper .swiper-wrapper`
- Adjust autoplay delay in `main.js` (line 66)

**Services Cards:**
- Edit service items in homepage and services page
- Update icons using Remix Icon classes

**Forms:**
- Contact form in `contact.html`
- Validation logic in `main.js` (lines 150-189)

### Animations & Effects

**AOS (Animate On Scroll):**
```html
<div data-aos="fade-up" data-aos-delay="100">
  Content here
</div>
```

**Available animations:**
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- Delay: `data-aos-delay="100"` (milliseconds)

**Swiper Configuration:**
Located in `main.js`:
- `heroSwiper` (lines 63-81) - Hero carousel
- `certificationsSwiper` (lines 84-104) - Certifications
- `partnersSwiper` (lines 107-126) - Partner logos

## Browser Support

- **Chrome/Edge:** Latest 2 versions
- **Firefox:** Latest 2 versions
- **Safari:** Latest 2 versions (macOS/iOS)
- **Mobile browsers:** iOS Safari, Chrome Android

## Performance Optimization

**Current optimizations:**
- CDN-hosted libraries for faster loading
- Minimal custom CSS/JS
- AOS animations with `once: true` (animate once)
- Smooth scrolling with CSS
- Lazy loading for images (when implemented)

**Future improvements:**
- Image optimization (WebP format)
- Critical CSS inlining
- Service Worker for offline support
- Font subsetting for Vietnamese characters

## Troubleshooting

**Issue:** Swiper slider not working
**Solution:** Ensure Swiper CSS and JS are loaded before `main.js`

**Issue:** Icons not displaying
**Solution:** Check Remix Icon CDN link in `<head>`

**Issue:** Animations not triggering
**Solution:** Verify AOS is initialized in `main.js` and CSS is loaded

**Issue:** Mobile menu not toggling
**Solution:** Check `mobileMenuBtn` and `mobileMenu` IDs match in HTML/JS

## License

Copyright © 2026 Chứng Nhận Việt. All rights reserved.

## Support

For technical support or questions:
- **Email:** info@chungnhanviet.vn
- **Phone:** 0123 456 789
