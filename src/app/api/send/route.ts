import process from 'node:process'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

import { EmailTemplate } from '@/components/templates/email'

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Define email addresses
const TEAM_EMAIL = 'lead@ieeespac.ca'
const FORM_SUBMISSION_EMAIL = 'formsubmission@ieeespac.ca'

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json()

    // Send email to team
    const emailToTeam = await resend.emails.send({
      from: `${body.fullName} <${FORM_SUBMISSION_EMAIL}>`,
      to: TEAM_EMAIL,
      subject: body.subject,
      react: EmailTemplate({ message: body.message, toTeam: true }),
      text: '',
      reply_to: body.email,
    })

    // If email to team is successful, send confirmation email to sender
    if (emailToTeam.data?.id) {
      await resend.emails.send({
        from: `SPAC 2024 Team <${FORM_SUBMISSION_EMAIL}>`,
        to: body.email,
        subject: 'SPAC 2024 - Thank you for your message!',
        react: EmailTemplate({
          fullName: body.fullName,
          subject: body.subject,
          message: body.message,
          toTeam: false,
        }),
        text: '',
        reply_to: TEAM_EMAIL,
      })
    }

    // Return success response
    return NextResponse.json(emailToTeam)
  }
  catch (error) {
    // Log and return error response
    console.error('Error sending email:', error)
    return NextResponse.json({ error })
  }
}
