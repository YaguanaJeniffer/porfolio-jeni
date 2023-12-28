// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
    const { email, subject, message } = await req.json();
    try {
        const data = await resend.emails.send({
        from: fromEmail,
        to: ['jeniyaguana@gmail.com'],
        subject: subject,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>Thank you for contacting us!</p>
                    <p>New message submitted:</p>
                    <p>{ email }</p>
                    <p>{message}</p>
                </>
            )
        });

        return NextResponse.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}