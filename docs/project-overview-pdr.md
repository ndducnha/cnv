# Project Overview & Product Development Requirements (PDR)

## Project Information

**Project Name:** CNV (Chứng Nhận Việt) Website
**Version:** 1.0.0
**Type:** Static Marketing Website
**Language:** Vietnamese
**Target Platform:** Web (Desktop, Tablet, Mobile)

## Project Goals

### Primary Objectives
1. **Establish Online Presence** - Create a professional web presence for CNV certification services
2. **Generate Leads** - Provide clear contact methods and consultation CTAs to attract potential clients
3. **Educate Prospects** - Explain ISO certification services and benefits to Vietnamese businesses
4. **Build Credibility** - Showcase company credentials, certifications, and client success

### Business Outcomes
- Increase brand awareness in Vietnamese ISO certification market
- Drive consultation requests from SMEs and enterprises
- Reduce customer acquisition costs through self-service information
- Support sales team with educational content and service details

## Target Audience

### Primary Audience
**Vietnamese SMEs & Enterprises** seeking ISO certification:
- Manufacturing companies
- Service providers
- Food & beverage businesses
- Healthcare facilities
- Technology companies

### Audience Characteristics
- **Language:** Vietnamese speakers (business professionals)
- **Technical Level:** Basic to intermediate web users
- **Decision Makers:** Business owners, quality managers, compliance officers
- **Pain Points:** Need certification for compliance, market access, or competitive advantage
- **Goals:** Understand certification process, costs, timeline, and benefits

### Secondary Audience
- International businesses operating in Vietnam
- Government procurement officers
- Industry partners and associations

## Key Features

### 1. Homepage (index.html)
- **Hero Slider** - Multi-slide carousel showcasing key services and value propositions
- **About Section** - Company introduction with key statistics (1000+ clients, 50+ experts)
- **Why Choose Us** - 4-card grid highlighting competitive advantages
- **Services Overview** - 8 certification services with icon cards
- **Certifications Display** - Swiper carousel of accreditations and recognitions
- **Partners Showcase** - Client logo carousel
- **CTA Section** - Prominent consultation request with phone number
- **News/Blog** - Latest updates and articles (3 featured posts)

### 2. About Page (about.html)
- **Company Overview** - Mission, vision, and credentials
- **Capability Section** - Service scope and expertise areas
- **Company Culture** - Values and work environment
- **Team Highlights** - Expert staff and qualifications

### 3. Services Page (services.html)
- **ISO 9001:2015** - Quality management system certification
- **ISO 14001:2015** - Environmental management
- **ISO 45001:2018** - Occupational health & safety
- **ISO 22000:2018** - Food safety management
- **ISO 27001:2022** - Information security
- **QCVN Certification** - Vietnamese national technical regulations
- **HACCP** - Food hazard analysis
- **Consulting Services** - System implementation support

Each service includes:
- Description and benefits
- Requirements and process
- Target industries
- Call-to-action for consultation

### 4. Contact Page (contact.html)
- **Contact Form** - Name, email, phone, service selection, message
- **Direct Contact Methods** - Phone, email, office hours
- **Office Location** - Address with map integration capability
- **Social Media Links** - Facebook, LinkedIn, YouTube

### 5. Shared Components
- **Fixed Header** - Sticky navigation with logo, menu, language toggle, CTA button
- **Mobile Menu** - Responsive hamburger menu for mobile devices
- **Footer** - 4-column layout with services, support, contact info, social links
- **Back to Top Button** - Smooth scroll to top (appears on scroll)

## Success Criteria

### Functional Requirements
- [x] Responsive design works on all device sizes (320px - 1920px+)
- [x] All navigation links functional and accessible
- [x] Forms include client-side validation
- [x] Page load time under 3 seconds on 3G connection
- [x] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [x] Smooth animations and transitions

### User Experience
- [x] Clear information hierarchy and navigation
- [x] Professional visual design aligned with brand
- [x] Accessible content (WCAG 2.1 AA considerations)
- [x] Fast, responsive interactions
- [x] Mobile-first responsive design

### Business Metrics (Post-Launch)
- **Traffic Goals:** 500+ monthly visitors within 3 months
- **Engagement:** Average session duration > 2 minutes
- **Conversion:** 5%+ contact form submission rate
- **SEO:** Rank in top 10 for "chứng nhận ISO Việt Nam" keywords
- **Mobile Usage:** 60%+ traffic from mobile devices

## Technical Requirements

### Performance
- Total page size: < 2MB per page
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- CDN-hosted assets for faster global delivery

### SEO & Accessibility
- Semantic HTML5 markup
- Meta tags (title, description) on all pages
- Descriptive alt text for images
- Structured heading hierarchy (H1-H6)
- Mobile-friendly (responsive design)
- Fast loading speed
- HTTPS deployment (via GitHub Pages)

### Browser Support
- Modern browsers (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)
- Graceful degradation for older browsers

### Deployment
- Static file hosting (GitHub Pages)
- Custom domain support capability
- Easy content updates (HTML editing)
- Version control with Git

## Design Principles

### Visual Identity
- **Professional & Trustworthy** - Clean layout, credible imagery
- **Vietnamese-First** - Language, cultural context, business practices
- **Modern & Accessible** - Contemporary design, readable typography
- **Brand Colors** - Blue (#0A8FDC) for trust, Orange (#F5841F) for energy

### Content Strategy
- **Clear Value Proposition** - Lead with benefits for businesses
- **Educational Approach** - Explain complex ISO concepts simply
- **Social Proof** - Statistics, certifications, implied client success
- **Action-Oriented** - Multiple CTAs throughout user journey

### User Journey
1. **Awareness** - Homepage hero introduces CNV and services
2. **Interest** - About section builds credibility and trust
3. **Consideration** - Services page details offerings and benefits
4. **Decision** - Contact CTAs enable consultation requests
5. **Retention** - News/updates provide ongoing engagement

## Constraints & Dependencies

### Technical Constraints
- Static site only (no backend/database)
- CDN dependency for libraries (requires internet)
- Form submissions require external service integration (future)
- No CMS (content updates require HTML editing)

### Content Dependencies
- High-quality images (currently using placeholder URLs)
- Actual client logos for partner showcase
- Real news articles and blog content
- Professional photography of team/office

### Timeline Assumptions
- **Phase 1 (Complete):** Static site development
- **Phase 2 (Future):** Form backend integration
- **Phase 3 (Future):** CMS implementation for non-technical updates
- **Phase 4 (Future):** Blog/news system with dynamic content

## Future Enhancements

### Short-term (1-3 months)
- Integrate contact form with email service (EmailJS, Formspree)
- Add Google Analytics for traffic tracking
- Implement Google Maps for office location
- Add real client testimonials and case studies
- Create blog/news content management system

### Medium-term (3-6 months)
- Multi-language support (English version)
- Certificate verification system
- Online quote calculator
- FAQ section with accordion UI
- Live chat widget integration

### Long-term (6-12 months)
- Client portal for certification tracking
- Document download center
- Video content and tutorials
- Webinar registration system
- Full CMS migration (WordPress, Strapi, etc.)

## Maintenance Plan

### Regular Updates
- **Content:** Monthly news articles, service updates
- **Dependencies:** Quarterly CDN library version checks
- **SEO:** Monthly keyword and ranking monitoring
- **Security:** SSL certificate renewal, dependency updates

### Success Monitoring
- Monthly traffic and conversion reports
- Quarterly user feedback collection
- Annual comprehensive site audit
- Continuous A/B testing of CTAs and layouts
