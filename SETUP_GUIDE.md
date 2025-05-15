# Physio Home Visit - Integration Setup Guide

This guide provides step-by-step instructions for setting up Google Calendar and WhatsApp Business integrations for the Physio Home Visit booking system.

## Table of Contents
1. [Google Calendar Integration](#google-calendar-integration)
2. [WhatsApp Business Integration](#whatsapp-business-integration)
3. [Environment Variables Setup](#environment-variables-setup)
4. [Testing the Integration](#testing-the-integration)

## Google Calendar Integration

### 1. Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "New Project"
3. Name it "Revive Physiotherapy"
4. Click "Create"

### 2. Enable Google Calendar API
1. In the project dashboard, click "Enable APIs and Services"
2. Search for "Google Calendar API"
3. Click "Enable"

### 3. Create OAuth Credentials
1. Go to "Credentials" in the left menu
2. Click "Create Credentials" > "OAuth client ID"
3. Choose "Web application"
4. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
5. Click "Create"
6. Save the Client ID and Client Secret

### 4. Get Refresh Token
1. Go to [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/)
2. Click the gear icon (⚙️) in the top right
3. Check "Use your own OAuth credentials"
4. Enter your Client ID and Client Secret
5. Select "Google Calendar API v3" from the scope list
6. Click "Authorize APIs"
7. Click "Exchange authorization code for tokens"
8. Copy the refresh token

## WhatsApp Business Integration

### 1. Create Meta Business Account
1. Go to [Meta Business](https://business.facebook.com/)
2. Click "Create Account"
3. Follow the setup process

### 2. Set Up WhatsApp Business
1. In Business Manager, go to "Business Settings"
2. Click "Accounts" > "WhatsApp accounts"
3. Click "Add" > "Create WhatsApp account"
4. Follow the verification process

### 3. Get API Credentials
1. Go to [Meta Developers](https://developers.facebook.com/)
2. Create a new app (Business type)
3. Add WhatsApp product to your app
4. Get your:
   - WhatsApp Business Account ID
   - Phone Number ID
   - Permanent Access Token

## Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```env
# Google Calendar
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback/google
GOOGLE_REFRESH_TOKEN=your_refresh_token

# WhatsApp Business
WHATSAPP_TOKEN=your_permanent_access_token
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
ADMIN_WHATSAPP_NUMBER=your_whatsapp_number

# Email (Gmail)
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_app_specific_password
```

### Gmail Setup for Email Notifications
1. Go to your Google Account settings
2. Enable 2-Step Verification if not already enabled
3. Go to Security > App passwords
4. Create a new app password for "Physio Home Visit"
5. Use this password in EMAIL_PASS

## Testing the Integration

### 1. Test Calendar Integration
1. Make a test booking through the website
2. Verify that:
   - Calendar event is created
   - Email notifications are sent
   - Calendar invites are received
   - Event details are correct

### 2. Test WhatsApp Integration
1. Make a test booking
2. Verify that:
   - Admin receives notification
   - Customer receives confirmation
   - Message formatting is correct
   - All booking details are included

## Important Notes

### Calendar Events
- Default duration: 1 hour
- Reminders: 24 hours and 30 minutes before
- Timezone: Asia/Kolkata
- Location: Client's address from booking

### WhatsApp Messages
- Format: Text messages with booking details
- Includes: Date, time, address, package details
- Fallback: Email if WhatsApp fails

### Email Notifications
- Sent to both admin and customer
- Includes booking confirmation
- Contains calendar invite
- Provides contact information

## Troubleshooting

### Common Issues
1. **Calendar Events Not Creating**
   - Check OAuth credentials
   - Verify refresh token
   - Ensure calendar API is enabled

2. **WhatsApp Messages Not Sending**
   - Verify phone number format
   - Check access token
   - Ensure WhatsApp Business is verified

3. **Email Notifications Not Working**
   - Verify Gmail credentials
   - Check app password
   - Ensure SMTP settings are correct

## Support

For technical support or questions about the integration:
- Email: kavitajoshi2406@gmail.com
- Phone: +91 7017421438

## Updates and Maintenance

Regular maintenance tasks:
1. Check OAuth token validity
2. Monitor WhatsApp API limits
3. Update environment variables if needed
4. Test integrations monthly

---

*Last updated: [Current Date]* 