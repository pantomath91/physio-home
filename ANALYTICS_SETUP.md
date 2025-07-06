# 📊 Analytics Setup Guide for Physio Home Visit Website

## 🎯 Overview
This guide will help you set up comprehensive analytics to track user behavior, conversions, and business metrics for your physiotherapy website.

## 🚀 Recommended Free Analytics Stack

### 1. **Google Analytics 4 (GA4) - Primary Analytics**
**Setup Steps:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new account for "Physio Home Visit"
3. Create a new property for your website
4. Get your Measurement ID (format: G-XXXXXXXXXX)
5. Replace `GA_MEASUREMENT_ID` in `src/app/layout.tsx` with your actual ID

**What it tracks:**
- Page views and user sessions
- User demographics and behavior
- Conversion tracking (WhatsApp bookings)
- Real-time data
- Mobile vs desktop usage
- Traffic sources (Google, social media, direct)

### 2. **Google Search Console - SEO Performance**
**Setup Steps:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your website property
3. Verify ownership (usually via DNS or HTML tag)
4. Submit your sitemap

**What it tracks:**
- Search performance and rankings
- Click-through rates from search
- Search queries people use
- Mobile usability issues
- Core Web Vitals performance

### 3. **Hotjar - User Behavior Analysis**
**Setup Steps:**
1. Go to [Hotjar](https://www.hotjar.com/)
2. Create a free account
3. Add your website
4. Get your tracking code
5. Add to your website (optional - for heatmaps)

**What it tracks:**
- Heatmaps (where users click)
- Session recordings
- Form analytics
- User behavior patterns

## 📈 Key Metrics to Track

### **Business Metrics:**
- **Conversion Rate**: WhatsApp bookings / Total visitors
- **Lead Generation**: Quick message clicks / Total visitors
- **Engagement**: Time on site, pages per session
- **Bounce Rate**: Single-page sessions

### **User Behavior:**
- **Most Popular Pages**: Which services get most interest
- **Drop-off Points**: Where users leave the site
- **Mobile vs Desktop**: Device preferences
- **Geographic Data**: Where your visitors are from

### **Conversion Funnel:**
1. **Landing Page Views** → Homepage visits
2. **Service Interest** → Service page views
3. **Contact Intent** → WhatsApp button clicks
4. **Booking Attempts** → Form interactions
5. **Successful Bookings** → WhatsApp messages sent

## 🔧 Implementation Details

### **Current Tracking Setup:**
✅ **Page Views**: Automatic tracking via GA4
✅ **WhatsApp Bookings**: Custom event tracking
✅ **Quick Messages**: Custom event tracking
✅ **Scroll Depth**: 25%, 50%, 75%, 100% tracking
✅ **Phone Calls**: Click tracking on phone numbers

### **Events Being Tracked:**
- `whatsapp_booking` - When someone books via WhatsApp
- `whatsapp_quick_message` - When someone sends a quick message
- `phone_call` - When someone clicks phone number
- `scroll_depth` - How far users scroll on pages
- `service_interest` - When users interact with service sections

## 📊 Setting Up Goals in GA4

### **1. WhatsApp Booking Goal:**
- Event: `whatsapp_booking`
- Category: Engagement
- Value: 1 (each booking)

### **2. Quick Message Goal:**
- Event: `whatsapp_quick_message`
- Category: Engagement
- Value: 0.5 (lead generation)

### **3. Phone Call Goal:**
- Event: `phone_call`
- Category: Engagement
- Value: 0.5 (lead generation)

## 🎯 Custom Reports to Create

### **1. Booking Performance Dashboard:**
- Daily/weekly booking trends
- Package preference analysis
- Geographic booking data
- Device type for bookings

### **2. User Journey Analysis:**
- Entry pages → Exit pages
- Time to first booking
- Pages viewed before booking
- Drop-off points

### **3. Service Interest Report:**
- Most viewed service sections
- Service page engagement
- Service-specific conversions

## 🔍 Advanced Tracking (Optional)

### **1. UTM Parameters for Marketing:**
Track different marketing campaigns:
```
https://yourwebsite.com/?utm_source=google&utm_medium=cpc&utm_campaign=physiotherapy
```

### **2. Enhanced E-commerce Tracking:**
Track package selections and pricing:
- Package selection events
- Pricing page views
- Package comparison behavior

### **3. A/B Testing Setup:**
Test different:
- Call-to-action buttons
- Pricing displays
- Service descriptions
- Contact forms

## 📱 Mobile Analytics

### **Mobile-Specific Metrics:**
- Mobile booking conversion rate
- Mobile vs desktop user behavior
- Mobile page load times
- Mobile form completion rates

## 🚨 Important Privacy Considerations

### **GDPR Compliance:**
- Add cookie consent banner
- Allow users to opt-out of tracking
- Document data collection practices
- Implement data retention policies

### **Cookie Policy:**
- Inform users about analytics cookies
- Provide opt-out mechanisms
- Update privacy policy

## 📈 Monthly Analytics Review

### **Weekly Checks:**
- Booking conversion rates
- Website traffic trends
- Popular content/pages
- User feedback and issues

### **Monthly Analysis:**
- Overall business performance
- Marketing campaign effectiveness
- Website optimization opportunities
- Competitive analysis

## 🛠️ Troubleshooting

### **Common Issues:**
1. **No data showing**: Check GA4 Measurement ID
2. **Events not tracking**: Verify gtag function exists
3. **Incorrect data**: Check for duplicate tracking codes
4. **Mobile issues**: Test on actual devices

### **Testing Tools:**
- Google Analytics Debugger (Chrome extension)
- Google Tag Assistant
- Browser developer tools
- Real-time GA4 reports

## 📞 Support Resources

- [Google Analytics Help Center](https://support.google.com/analytics/)
- [GA4 Implementation Guide](https://developers.google.com/analytics/devguides/collection/ga4)
- [Google Search Console Help](https://support.google.com/webmasters/)
- [Hotjar Documentation](https://help.hotjar.com/)

---

## 🎯 Next Steps

1. **Set up GA4** with your Measurement ID
2. **Configure goals** for bookings and leads
3. **Set up Google Search Console** for SEO tracking
4. **Create custom dashboards** for key metrics
5. **Set up weekly/monthly reporting** schedule
6. **Implement A/B testing** for optimization

This analytics setup will give you comprehensive insights into your website performance and help you optimize for better conversions! 🚀 