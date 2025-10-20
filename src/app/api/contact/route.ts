import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';
import crypto from 'crypto';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
});

export async function POST(request: Request) {
  const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  if (!MAILCHIMP_AUDIENCE_ID) {
    console.log('MAILCHIMP_AUDIENCE_ID is not defined');
    return NextResponse.json(
      { error: 'Audience ID is required' },
      { status: 400 }
    );
  }

  const { email, firstName, lastName, region, inquiry, message } =
    await request.json();

  if (!email || !firstName || !message) {
    return NextResponse.json(
      { error: 'Email, name, and message are required' },
      { status: 400 }
    );
  }

  try {
    // Generate MD5 hash of lowercase email for subscriber hash
    const subscriberHash = crypto
      .createHash('md5')
      .update(email.toLowerCase())
      .digest('hex');

    // Use setListMember which handles both insert and update
    await mailchimp.lists.setListMember(MAILCHIMP_AUDIENCE_ID, subscriberHash, {
      email_address: email,
      status_if_new: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        FREGION: region,
        FINQUIRY: inquiry || 'No inquiry',
        FMESSAGE: message.substring(0, 255)
      }
    });

    // Add tags
    await mailchimp.lists.updateListMemberTags(
      MAILCHIMP_AUDIENCE_ID,
      subscriberHash,
      {
        tags: [
          { name: 'contact-form', status: 'active' },
          { name: 'needs-reply', status: 'active' }
        ]
      }
    );

    // Add full message as a note
    try {
      await mailchimp.lists
        // @ts-expect-error - Mailchimp types may be incomplete
        .members(MAILCHIMP_AUDIENCE_ID, subscriberHash)
        .notes.create({
          note: `Contact Form (${new Date().toLocaleString()}):\n\nRegion: ${
            region || 'Not specified'
          }\nInquiry: ${inquiry || 'Not specified'}\n\n${message}`
        });
    } catch (noteError) {
      console.error('Failed to add note:', noteError);
      // Continue even if note fails
    }

    return NextResponse.json(
      { message: 'Thank you! We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Mailchimp Error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
