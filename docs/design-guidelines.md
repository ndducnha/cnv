# CNV Design Guidelines

**Chung Nhan Viet** - Vietnamese ISO/QCVN certification company. Geometric triangles symbolize precision, structure, interconnection.

## Color Palette

### Primary (from Logo)
| Name | Hex | Usage |
|------|-----|-------|
| Primary Blue | `#0A8FDC` | Headers, CTAs, links |
| Dark Blue | `#1E5F8A` | Footer bg, hover states |
| Light Blue | `#69C8F2` | Accents, highlights |

### Accent
| Name | Hex | Usage |
|------|-----|-------|
| Orange | `#F5841F` | Secondary CTAs, badges |
| Light Orange | `#F8A64B` | Hover states, icons |

### Neutrals
| Name | Hex | Usage |
|------|-----|-------|
| Text Primary | `#333333` | Body text |
| Text Secondary | `#5A5A5A` | Captions, meta |
| Border | `#E5E7EB` | Dividers, inputs |
| Background | `#F8FAFC` | Page bg |

### Gradients
```css
--gradient-blue: linear-gradient(135deg, #0A8FDC 0%, #1E5F8A 100%);
--gradient-hero: linear-gradient(135deg, #0A8FDC 0%, #69C8F2 50%, #F5841F 100%);
```

## Typography

### Font Stack
```css
--font-heading: 'Be Vietnam Pro', system-ui, sans-serif;
--font-body: 'Montserrat', system-ui, sans-serif;
```

### Scale
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| h1 | 48px | 700 | 1.2 |
| h2 | 36px | 600 | 1.3 |
| h3 | 24px | 600 | 1.4 |
| h4 | 20px | 600 | 1.4 |
| Body | 16px | 400 | 1.6 |
| Small | 14px | 400 | 1.5 |

**Vietnamese**: Line-height 1.6 min for diacritical marks. Test: "Chung Nhan Viet - Dich vu chung nhan ISO"

## Spacing System (Base: 4px)

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Icon gaps |
| sm | 8px | Tight spacing |
| md | 16px | Default gaps |
| lg | 24px | Card padding |
| xl | 32px | Section gaps |
| 2xl | 48px | Component spacing |
| 3xl | 80px | Section padding |

## Components

### Buttons
```html
<!-- Primary -->
<button class="bg-[#0A8FDC] hover:bg-[#1E5F8A] text-white px-6 py-3 rounded-lg font-semibold">
  Lien he tu van
</button>
<!-- Secondary -->
<button class="border-2 border-[#F5841F] text-[#F5841F] hover:bg-[#F5841F] hover:text-white px-6 py-3 rounded-lg font-semibold">
  Tim hieu them
</button>
```
- Min height: 48px | Border radius: 8px | Font: 16px semibold

### Cards
```html
<div class="bg-white rounded-xl shadow-md hover:shadow-lg p-6 transition-shadow">
  <!-- Content -->
</div>
```
- Shadow: `0 4px 6px -1px rgba(0,0,0,0.1)` | Radius: 12px | Padding: 24px

### Navigation
- Fixed header: 72px height
- Layout: Logo left | Nav center | Language right
- Dropdown: white bg, shadow-lg, 8px radius
- Mobile: hamburger, slide-in drawer

### Footer
- Background: `#1E5F8A` | Text: white (80% opacity secondary)
- 4-column desktop, stacked mobile

## Section Layout

### Header (72px)
`[Logo] -------- [Nav Items] -------- [VN|EN]`

### Hero
- Full-width carousel | Min: 500px desktop, 400px mobile
- Overlay gradient for text | CTA left-aligned

### About
`[Image 50%] | [Text 50%]` - Reverse on alternates, rounded-xl images

### Why Choose Us
`[Card] [Card] [Card] [Card]` - 4-col desktop, 2-col tablet, 1-col mobile

### Services Grid
```
[Card] [Card] [Card] [Card]
[Card] [Card] [Card] [Card]
```
- Icon 48px + title + description | Hover: lift + border accent

### Partners
- Logo carousel, auto-scroll | Grayscale default, color hover
- 6 visible desktop, 3 tablet, 2 mobile

### Contact
`[Form 60%] | [Map + Info 40%]`

### Footer
`[Logo+About] [Services] [Support] [Contact]`

## Responsive

| Breakpoint | Width | Columns |
|------------|-------|---------|
| Mobile | < 640px | 1 |
| Tablet | 640-1024px | 2 |
| Desktop | > 1024px | 4 |

**Container**: max-width 1280px | Padding: 16px/24px/32px

## Animations

### Scroll (AOS)
- `fade-up`: cards, sections | `fade-right/left`: alternating
- Duration: 600ms | Offset: 100px

### Hover
- Buttons: darken 10% | Cards: translateY(-4px) + shadow | Links: 200ms

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

## Accessibility
- Contrast: 4.5:1 text, 3:1 large | Focus: 2px solid `#0A8FDC`
- Touch targets: 44x44px min | Alt text required | Semantic HTML

## Tailwind Config

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0A8FDC', dark: '#1E5F8A', light: '#69C8F2' },
        accent: { DEFAULT: '#F5841F', light: '#F8A64B' },
        neutral: { text: '#333333', muted: '#5A5A5A', border: '#E5E7EB' }
      },
      fontFamily: {
        heading: ['Be Vietnam Pro', 'system-ui', 'sans-serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif']
      }
    }
  }
}
```

## File Naming
- Images: `section-description.webp` (e.g., `hero-certification.webp`)
- Icons: `icon-name.svg` | Pages: `kebab-case.html`

---
**Version**: 1.0 | **Updated**: January 2025
