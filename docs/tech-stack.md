# Tech Stack - Chứng Nhận Việt Website

## Quyết định: Pure Static HTML/CSS/JS

### Lý do chọn
- **GitHub Pages**: Zero build step, deploy trực tiếp
- **Đơn giản**: Không cần Node.js, không dependencies
- **Bảo trì dễ**: Chỉnh sửa HTML trực tiếp
- **Performance**: Không JS framework overhead

### Stack chi tiết

| Layer | Technology | Lý do |
|-------|------------|-------|
| Markup | HTML5 | Semantic, SEO-friendly |
| Styling | Tailwind CSS (CDN) | Utility-first, responsive nhanh |
| Icons | Remix Icon (CDN) | Miễn phí, đẹp, lightweight |
| Carousel | Swiper.js (CDN) | Touch-friendly, responsive |
| Animation | AOS (CDN) | Scroll animations đơn giản |
| Fonts | Google Fonts | Be Vietnam Pro + Montserrat |

### CDN Links
```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Remix Icons -->
<link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" rel="stylesheet">

<!-- Swiper -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- AOS Animation -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Cấu trúc thư mục
```
cnv/
├── index.html          # Homepage
├── about.html          # Giới thiệu
├── services.html       # Dịch vụ
├── contact.html        # Liên hệ
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero/
│   │   └── services/
│   ├── css/
│   │   └── custom.css  # Custom styles
│   └── js/
│       └── main.js     # Custom scripts
└── docs/               # Documentation
```

### Deployment
```bash
# GitHub Pages - Settings > Pages > Source: main branch
# Website live at: https://username.github.io/cnv/
```

### Color Palette (Based on Logo)
- **Primary Blue**: #0A8FDC (từ logo)
- **Orange Accent**: #F5841F (từ logo)
- **Dark Gray**: #4A4A4A (text)
- **Light Blue**: #E8F4FC (backgrounds)
- **White**: #FFFFFF

---
**Decision Date**: January 2025
