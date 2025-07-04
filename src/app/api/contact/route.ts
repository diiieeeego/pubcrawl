// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, message, attendees, date } = await req.json();

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Or your verified domain email
      to: 'pubcrawlzadarinfo@gmail.com',
      subject: `Message from ${name}`,
      replyTo: email,
      text: `Novi upit za Vas od ${name}, \nEmail: ${email} \nMobitel: ${phone}\nDatum: ${date}\nBroj osoba: ${attendees}\n ${message}\n\nVaš resend dev team <3`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Email failed' }), { status: 500 });
  }
}
