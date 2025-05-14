import { NextResponse } from 'next/server';

// CallMeBot configuration
const CALLMEBOT_API_KEY = process.env.CALLMEBOT_API_KEY;
const DOCTOR_WHATSAPP_NUMBER = process.env.DOCTOR_WHATSAPP_NUMBER;

export async function POST(request: Request) {
  try {
    const bookingData = await request.json();
    
    // Format the message for the doctor
    const doctorMessage = `New appointment request from ${bookingData.name}
Phone: ${bookingData.phone}
Email: ${bookingData.email}
Date: ${bookingData.date}
Time: ${bookingData.time}
Service: ${bookingData.service}`;

    // Send WhatsApp message to doctor using CallMeBot
    const doctorResponse = await fetch(
      `https://api.callmebot.com/whatsapp.php?phone=${DOCTOR_WHATSAPP_NUMBER}&text=${encodeURIComponent(doctorMessage)}&apikey=${CALLMEBOT_API_KEY}`
    );

    if (!doctorResponse.ok) {
      throw new Error('Failed to send WhatsApp message to doctor');
    }

    // Format the message for the patient
    const patientMessage = `Your appointment has been confirmed!
Name: ${bookingData.name}
Date: ${bookingData.date}
Time: ${bookingData.time}`;

    // Send WhatsApp message to patient using CallMeBot
    const patientResponse = await fetch(
      `https://api.callmebot.com/whatsapp.php?phone=${bookingData.phone}&text=${encodeURIComponent(patientMessage)}&apikey=${CALLMEBOT_API_KEY}`
    );

    if (!patientResponse.ok) {
      throw new Error('Failed to send WhatsApp message to patient');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending WhatsApp notification:', error);
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500 }
    );
  }
} 