# Locrave - Marketing Website

A production-ready, modern marketing website for the Locrave mobile application. Built with React 18, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, glassmorphic UI with smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with semantic elements and ARIA labels
- **Type Safe**: Written in TypeScript with strict mode enabled

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Router DOM** - Client-side routing
- **Vite** - Fast build tooling

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/faizcasm/Locrave.git
cd Locrave
```

2. Install dependencies:
```bash
npm install
```

3. Add your logo:
   - Place your logo as `public/logo.png`
   - Recommended size: 512x512px or larger
   - Format: PNG with transparent background

## 🏃 Running the Project

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally.

## 📁 Project Structure

```
├── public/
│   └── logo.png              # App logo (to be added)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx    # Navigation with blur-on-scroll
│   │   │   ├── Footer.tsx    # Footer with links
│   │   │   └── Layout.tsx    # Main layout wrapper
│   │   ├── home/
│   │   │   ├── Hero.tsx      # Hero section with animations
│   │   │   ├── Features.tsx  # Features grid
│   │   │   ├── HowItWorks.tsx # How it works section
│   │   │   ├── TrustSection.tsx # Trust & safety
│   │   │   └── DownloadCTA.tsx # Download call-to-action
│   │   └── ui/
│   │       ├── Button.tsx    # Reusable button component
│   │       ├── Card.tsx      # Glassmorphic card component
│   │       └── AnimatedSection.tsx # Scroll animation wrapper
│   ├── pages/
│   │   ├── Home.tsx          # Home page
│   │   ├── Features.tsx      # Features page
│   │   ├── Download.tsx      # Download page
│   │   └── About.tsx         # About page
│   ├── styles/
│   │   └── globals.css       # Global styles and utilities
│   ├── App.tsx               # Main app with routing
│   └── main.tsx              # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization Guide

### Update Store Links
In `src/pages/Download.tsx`, update the placeholder links:
```tsx
// Replace # with actual store links
<motion.a href="YOUR_PLAY_STORE_LINK" ...>
<motion.a href="YOUR_APP_STORE_LINK" ...>
```

### Change Brand Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: { DEFAULT: '#4DB6AC' }, // Teal
  mint: { DEFAULT: '#81C784' },    // Mint Green
  ocean: { DEFAULT: '#4FC3F7' },   // Ocean Blue
}
```

### Add App Screenshots
1. Add screenshots to `public/` folder
2. Update phone mockup sections in components
3. Replace placeholder content with actual images

### Customize Content
- **Hero Section**: Edit `src/components/home/Hero.tsx`
- **Features**: Edit `src/components/home/Features.tsx`
- **About Content**: Edit `src/pages/About.tsx`

## 🎨 Design System

### Colors
- **Primary (Teal)**: `#4DB6AC` - Main brand color
- **Mint Green**: `#81C784` - Secondary accent
- **Ocean Blue**: `#4FC3F7` - Tertiary accent
- **Grays**: 50, 100, 200, 700, 900

### Typography
- **Font Family**: Inter (loaded from Google Fonts)
- **Headings**: Bold, large sizes (4xl-6xl)
- **Body**: Regular weight, comfortable line-height

### Custom Classes
- `.glass` - Glassmorphic effect with backdrop blur
- `.gradient-bg` - Gradient background
- `.text-gradient` - Gradient text effect

### Animations
- Smooth fade-in and slide-up on scroll
- Hover effects on cards and buttons
- Floating elements with infinite animations
- Page transitions with Framer Motion

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Or connect your GitHub repo for automatic deployments

### Deploy to GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📝 License

This project is open source and available for use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ for stronger neighborhoods**
