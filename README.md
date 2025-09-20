# Physio Home Visit - Next.js Website

A modern, responsive website built with Next.js 14, featuring optimized image loading, WhatsApp integration, and comprehensive physiotherapy service information.

## 🚀 Technical Overview

This is a Next.js application with TypeScript, featuring:
- **App Router**: Next.js 14 with App Router architecture
- **Image Optimization**: Custom image components with Sharp optimization
- **Performance**: Optimized bundle size and loading strategies
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Integration**: WhatsApp API and email notifications

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd physio-home
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📱 Features

### Core Functionality
- Responsive design for all devices
- Image optimization with Next.js Image component
- WhatsApp integration for appointment booking
- Contact form with email notifications
- SEO optimized pages
- Performance optimized with lazy loading

### Image Management
- Optimized image loading with custom components
- WebP format support for better performance
- Image preloading for critical assets
- Fallback handling for failed image loads
- Shimmer loading states

### User Experience
- Smooth animations and transitions
- Loading states and error handling
- Mobile-first responsive design
- Accessibility features
- Fast page load times

## 🔧 Environment Variables

The application requires the following environment variables for full functionality:

```env
# WhatsApp API Configuration
WHATSAPP_API_URL=your_whatsapp_api_url
WHATSAPP_TOKEN=your_whatsapp_token

# Email Configuration
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password

# Google APIs (if using Google services)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── api/            # API routes for booking and notifications
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # Reusable React components
│   ├── BookingModal.tsx
│   ├── OptimizedImage.tsx
│   ├── WhatsAppButton.tsx
│   └── ...
└── hooks/             # Custom React hooks
    └── useAnalytics.ts
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Manual Deployment

```bash
npm run build
npm start
```

## ⚡ Performance Optimizations

### Image Optimization
- **Sharp Integration**: Automatic image processing and optimization
- **WebP/AVIF Support**: Modern image formats for better compression
- **Lazy Loading**: Images load only when needed
- **Responsive Images**: Different sizes for different screen sizes
- **Custom Components**: OptimizedImage, BasicImage, and ReliableImage components

### Bundle Optimization
- **Tree Shaking**: Unused code elimination
- **Code Splitting**: Automatic route-based splitting
- **Package Optimization**: Optimized imports for @heroicons/react and framer-motion
- **Compression**: Gzip compression enabled

### Caching Strategy
- **Static Assets**: 1-year cache for images and static files
- **API Routes**: Appropriate cache headers
- **CDN Ready**: Optimized for CDN deployment

### SEO & Accessibility
- **Meta Tags**: Comprehensive SEO metadata
- **Open Graph**: Social media optimization
- **Structured Data**: Schema.org markup ready
- **Accessibility**: WCAG compliant components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary. All rights reserved.

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**: Check if images exist in `/public/images/` directory
2. **Build errors**: Ensure all environment variables are set
3. **WhatsApp integration**: Verify API credentials and tokens
4. **Email functionality**: Check SMTP configuration

### Development Tips

- Use `npm run dev` for development with hot reload
- Use `npm run build` to test production build locally
- Check browser console for any runtime errors
- Use Next.js built-in performance monitoring
