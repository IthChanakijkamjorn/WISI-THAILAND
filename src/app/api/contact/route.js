import { NextResponse } from 'next/server';

const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';
const RECAPTCHA_MIN_SCORE = 0.5;

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, company, inquiryType, message, recaptchaToken } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!recaptchaToken) {
      return NextResponse.json({ error: 'Missing reCAPTCHA token' }, { status: 400 });
    }

    if (!process.env.RECAPTCHA_SECRET_KEY) {
      return NextResponse.json({ error: 'reCAPTCHA is not configured' }, { status: 500 });
    }

    const recaptchaVerification = await fetch(RECAPTCHA_VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: recaptchaToken,
      }),
    });

    const recaptchaResult = await recaptchaVerification.json();

    if (
      !recaptchaVerification.ok ||
      !recaptchaResult.success ||
      typeof recaptchaResult.score !== 'number' ||
      recaptchaResult.score < RECAPTCHA_MIN_SCORE
    ) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'WISI Thailand <noreply@wisithailand.com>',
        to: ['admin@wisithailand.com', 'wisisales@wisithailand.com'],
        subject: `New enquiry from ${fullName}`,
        html: `
          <h2>New Contact Form Submission — WISI Thailand</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!res.ok) {
      const resBody = await res.text();
      return NextResponse.json({ error: resBody }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
