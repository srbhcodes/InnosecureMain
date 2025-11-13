# Innosecure Website

A modern React-based website for Innosecure - a global business consulting and technology solutions company.

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router Dom** - Client-side routing
- **CSS3** - Styling with CSS variables

## 📁 Project Structure

```
InnosecureMain/
├── public/
│   └── img/                    # Images and assets
│
├── src/
│   ├── components/             # React components
│   │   ├── common/             # Shared components (Navbar, Footer, ScrollToTop)
│   │   └── home/               # Homepage section components
│   │
│   ├── pages/                  # Page components (routes)
│   │   ├── services/           # Individual service pages
│   │   ├── industries/         # Individual industry pages
│   │   └── insights/            # Insight detail pages
│   │
│   ├── layouts/                # Layout components
│   │   └── MainLayout.jsx      # Main layout wrapper
│   │
│   ├── styles/                 # CSS files
│   │   ├── base/               # Variables, reset, globals
│   │   ├── components/         # Component-specific styles
│   │   └── pages/               # Page-specific styles
│   │
│   ├── data/                   # Static data files
│   │   ├── homeData.js         # Homepage data
│   │   └── insightsData.js      # Insights data
│   │
│   ├── routes.jsx              # Route configuration
│   └── main.jsx                # Entry point
│
└── README.md                   # This file
```

## 📄 Key Pages

### Main Pages
- **Home** (`src/pages/Home.jsx`) - Homepage with hero, services, stats, testimonials
- **About** (`src/pages/About.jsx`) - Company information and values
- **Contact** (`src/pages/Contact.jsx`) - Contact form and information
- **Services** (`src/pages/Services.jsx`) - Services overview
- **Industries** (`src/pages/Industries.jsx`) - Industries overview

### Service Pages (7)
Located in `src/pages/services/`:
- Generative AI, Blockchain & Web3, Data Engineering, Cloud Engineering, App Development, Managed Services, Intelligent Automation

### Industry Pages (12)
Located in `src/pages/industries/`:
- Aerospace, Automotive, Banking, Education, Healthcare, High Tech, Hospitality, Insurance, Logistics, Media, Retail, Tour & Travel

## 🎨 Component Organization

### Homepage Sections
All homepage sections are modularized in `src/components/home/`:
- `HeroSection.jsx` - Hero with typing effect and animated dots
- `TrustedBySection.jsx` - Certifications
- `ServiceBenefitsSection.jsx` - Interactive service benefits
- `ServiceTilesSection.jsx` - Service tiles grid
- `StatsSection.jsx` - Statistics display
- `IndustriesSection.jsx` - Industries grid
- `ITInitiativeSection.jsx` - IT initiatives
- `PartnersSection.jsx` - Partner logos
- `ClientsSection.jsx` - Client logos carousel
- `ConversionStatsSection.jsx` - Conversion metrics
- `TestimonialsSection.jsx` - Client testimonials
- `FeaturedInsightsSection.jsx` - Insights carousel
- `ContactCTASection.jsx` - Contact CTA

## 🛠️ Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit: `http://localhost:5173`

### Build
```bash
npm run build
npm run preview
```

## 📝 Key Features

- **Modular Architecture** - Homepage broken into reusable section components
- **Responsive Design** - Mobile-first approach
- **Modern UI** - Glassmorphism effects, gradients, animations
- **Interactive Elements** - Typing effects, animated dots, carousels
- **Dynamic Routing** - React Router for navigation
- **Data Centralization** - Static data in dedicated files

## 📞 Contact Information

**USA:**
- Phone: (773) 231-8084
- Address: 1021 E Lincolnway, Suite #6810, Cheyenne, Wyoming 82001

**India:**
- Phone: +91 8223083773
- Address: 1121, 1st Floor, Indore, Indore 452010

**Email:** info@innosecure.com

---

**Copyright © 2016 Innosecure LLC. All rights reserved.**
