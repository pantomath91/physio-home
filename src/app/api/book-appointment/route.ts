import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// Google Calendar configuration
const oauth2Client = new OAuth2Client({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: process.env.GOOGLE_REDIRECT_URI,
});

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

// WhatsApp Business API configuration
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;

async function sendWhatsAppMessage(to: string, message: string) {
  try {
    const response = await fetch(
      `https://graph.facebook.com/v17.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: to,
          type: 'text',
          text: { body: message },
        }),
      }
    );

    if (!response.ok) {
      throw new Error('WhatsApp message failed');
    }
  } catch (error) {
    console.error('WhatsApp message error:', error);
  }
}

async function createCalendarEvent(
  name: string,
  email: string,
  phone: string,
  date: string,
  time: string,
  packageName: string
) {
  try {
    const event = {
      summary: `Physiotherapy Appointment - ${name}`,
      description: `
Client: ${name}
Phone: ${phone}
Email: ${email}
Package: ${packageName}
      `.trim(),
      start: {
        dateTime: `${date}T${time}:00`,
        timeZone: 'Asia/Kolkata',
      },
      end: {
        dateTime: `${date}T${time}:00`,
        timeZone: 'Asia/Kolkata',
      },
      attendees: [
        { email: process.env.ADMIN_EMAIL },
        { email: email },
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 30 },
        ],
      },
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      sendUpdates: 'all',
    });

    return response.data;
  } catch (error) {
    console.error('Calendar event creation error:', error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      address,
      message,
      preferredDate,
      preferredTime,
      package: selectedPackage,
    } = body;

    // Validate required fields
    if (!name || !phone || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the booking details
    const bookingDetails = `
New Booking Request:
Name: ${name}
Phone: ${phone}
Email: ${email}
Address: ${address}
Date: ${preferredDate}
Time: ${preferredTime}
Package: ${selectedPackage?.name || 'Not specified'}
Price: ${selectedPackage?.price || 'Not specified'}
Message: ${message || 'No additional message'}
    `.trim();

    // Create calendar event
    let calendarEvent;
    try {
      calendarEvent = await createCalendarEvent(
        name,
        email,
        phone,
        preferredDate,
        preferredTime,
        selectedPackage?.name || 'Not specified'
      );
    } catch (calendarError) {
      console.error('Calendar event creation failed:', calendarError);
    }

    // Send WhatsApp notification to admin
    try {
      await sendWhatsAppMessage(
        process.env.ADMIN_WHATSAPP_NUMBER!,
        `New Booking Request:\n${bookingDetails}`
      );
    } catch (whatsappError) {
      console.error('Admin WhatsApp notification failed:', whatsappError);
    }

    // Send email to admin
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: 'New Booking Request',
        text: bookingDetails,
        html: `
          <h2>New Booking Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Date:</strong> ${preferredDate}</p>
          <p><strong>Time:</strong> ${preferredTime}</p>
          <p><strong>Package:</strong> ${selectedPackage?.name || 'Not specified'}</p>
          <p><strong>Price:</strong> ${selectedPackage?.price || 'Not specified'}</p>
          <p><strong>Message:</strong> ${message || 'No additional message'}</p>
          ${calendarEvent ? `<p><strong>Calendar Event:</strong> <a href="${calendarEvent.htmlLink}">View in Calendar</a></p>` : ''}
        `,
      });
    } catch (emailError) {
      console.error('Admin email notification failed:', emailError);
    }

    // Send confirmation to customer
    if (email) {
      try {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'Booking Confirmation',
          text: `Thank you ${name} for booking with us! We will contact you shortly to confirm your appointment for ${preferredDate} at ${preferredTime}.`,
          html: `
            <h2>Booking Confirmation</h2>
            <p>Dear ${name},</p>
            <p>Thank you for booking with us! We have received your booking request for:</p>
            <p><strong>Date:</strong> ${preferredDate}</p>
            <p><strong>Time:</strong> ${preferredTime}</p>
            <p>We will contact you shortly to confirm your appointment.</p>
            ${calendarEvent ? `<p>You can add this appointment to your calendar: <a href="${calendarEvent.htmlLink}">Add to Calendar</a></p>` : ''}
            <p>Best regards,<br>Your Physiotherapy Team</p>
          `,
        });
      } catch (customerEmailError) {
        console.error('Customer email notification failed:', customerEmailError);
      }
    }

    // Send WhatsApp confirmation to customer
    try {
      await sendWhatsAppMessage(
        phone,
        `Thank you ${name} for booking with us! We will contact you shortly to confirm your appointment for ${preferredDate} at ${preferredTime}.`
      );
    } catch (customerWhatsappError) {
      console.error('Customer WhatsApp notification failed:', customerWhatsappError);
    }

    return NextResponse.json(
      { message: 'Booking request received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
} 