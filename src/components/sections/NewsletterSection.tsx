import NewsletterInputButton from '@/components/Buttons/NewsletterInputButton';
import Image from 'next/image';
import { NoiseLight } from '../utils/Noise';
import { NewsLetterFormInput } from '@/components/Buttons/NewsletterInputButton';
import { useState } from 'react';

export const NewsletterSection = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const newsLetterSignup = async (data: NewsLetterFormInput) => {
    const { email } = data;
    console.log('email: ', email);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email
        })
      });
      if (response.status === 200) {
        setIsSuccess(true);
      }

      const data = await response.json();
      console.log('date: ', data);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <section id='newsletter' className='flex flex-col sm:flex-row w-full'>
      <div className='flex-1 bg-[#E3FC9A] min-h-[125px] sm:min-h-[320px] relative'>
        <NoiseLight />
        <div className='absolute inset-0 flex items-center justify-center p-8'>
          <Image
            src='/images/newsletter.png'
            alt='Envelope'
            width={283}
            height={204}
            className='w-[100px] h-auto sm:w-[283px]'
          />
        </div>
      </div>
      <div className='flex-1 bg-[#E3FC9A] min-h-[125px] sm:min-h-[320px] flex flex-col justify-center items-start sm:p-8 lg:p-12'>
        <NewsletterInputButton
          newsLetterSignup={newsLetterSignup}
          isSuccess={isSuccess}
        />
      </div>
    </section>
  );
};

export default NewsletterSection;
