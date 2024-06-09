import { NextResponse } from "next/server";
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend('your_resend_api_key');

export async function POST(request) {
  // Parse the incoming request body
  const body = await request.json();
  
  try {
    const { from, to, subject, html } = body;
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    if (error) {
      console.error({ error });
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    // If successful, return the data
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}