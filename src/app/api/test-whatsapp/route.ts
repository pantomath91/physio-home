import { NextResponse } from 'next/server';

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
const DOCTOR_WHATSAPP_NUMBER = process.env.DOCTOR_WHATSAPP_NUMBER;

export async function GET() {
  try {
    // Test message
    const message = {
      messaging_product: "whatsapp",
      to: DOCTOR_WHATSAPP_NUMBER,
      type: "template",
      template: {
        name: "appointment_notification",
        language: {
          code: "en"
        },
        components: [
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: "Test Patient"
              },
              {
                type: "text",
                text: "+1234567890"
              },
              {
                type: "text",
                text: "test@example.com"
              },
              {
                type: "text",
                text: "2024-03-20"
              },
              {
                type: "text",
                text: "10:00 AM"
              },
              {
                type: "text",
                text: "General Physiotherapy"
              }
            ]
          }
        ]
      }
    };

    // Send test message
    const response = await fetch(
      `https://graph.facebook.com/v17.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message)
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error('WhatsApp API Error:', error);
      return NextResponse.json(
        { error: 'Failed to send test message', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Test message sent successfully' 
    });
  } catch (error) {
    console.error('Error sending test message:', error);
    return NextResponse.json(
      { error: 'Failed to send test message' },
      { status: 500 }
    );
  }
} 