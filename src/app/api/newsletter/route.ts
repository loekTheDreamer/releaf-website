import { NextResponse } from 'next/server';
import mailchimp, { ErrorResponse } from '@mailchimp/mailchimp_marketing';
import crypto from 'crypto';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
});

const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

type ErrorType = {
  response: {
    error: {
      text: string;
    };
  };
};

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    console.log(email);
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!MAILCHIMP_AUDIENCE_ID) {
      return NextResponse.json(
        { error: 'Audience ID is required' },
        { status: 400 }
      );
    }

    // Generate MD5 hash of lowercase email for subscriber hash
    const subscriberHash = crypto
      .createHash('md5')
      .update(email.toLowerCase())
      .digest('hex');

    // Use setListMember which handles both insert and update
    const response = await mailchimp.lists.setListMember(
      MAILCHIMP_AUDIENCE_ID,
      subscriberHash,
      {
        email_address: email,
        status_if_new: 'subscribed', // Status for new members
        merge_fields: {
          FNAME: email
        }
      }
    );

    // Add tags separately
    await mailchimp.lists.updateListMemberTags(
      MAILCHIMP_AUDIENCE_ID,
      subscriberHash,
      {
        tags: [{ name: 'newsletter', status: 'active' }]
      }
    );

    console.log('response:', response);

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error) {
    console.log('error: ', error);
    // @todo handle errors here:
    const parsedError = JSON.parse(
      (error as ErrorType).response.error.text
    ) as ErrorResponse;

    console.log('error: ', parsedError);

    return NextResponse.json({ success: false, error: parsedError.detail });
  }
}
