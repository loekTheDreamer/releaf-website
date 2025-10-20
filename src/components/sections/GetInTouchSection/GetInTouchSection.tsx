import Image from 'next/image';
import ContactForm, { ContactFormInput } from './elements/ContactForm';
import { Noise } from '@/components/utils/Noise';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import SuccessModal from './elements/SuccessModal';
import { useState } from 'react';

const handleLinkedInClick = () => {
  window.open('https://www.linkedin.com/company/releaf-financial/', '_blank');
};

const GetInTouchSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contactUs = async (data: ContactFormInput) => {
    const { email, firstName, lastName, region, inquiry, message } = data;
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          region,
          inquiry,
          message
        })
      });

      const data = await response.json();
      console.log('date: ', data);

      // Show success modal if status is 200
      if (response.status === 200) {
        setIsModalOpen(true);
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <section
      id='get-in-touch'
      className='relative min-h-screen bg-[#4F6229] flex items-center justify-center py-16 md:py-24'>
      <Noise />
      <div className='container mx-auto px-4 relative z-10'>
        {/* Desktop layout - side by side */}
        <div className='hidden lg:flex flex-row justify-between gap-8'>
          <div className='flex flex-col justify-between h-[756px]'>
            <h1 className='text-5xl text-white'>Get in Touch!</h1>
            <Image
              className='opacity-6'
              src='/svgs/green_leaf.svg'
              alt='Green leaf'
              width={159}
              height={219}
            />
            <div className='text-white text-2xl max-w-[700px] flex flex-col gap-4'>
              <h3>We&apos;re building the future.</h3>
              <h3>
                If you are interested as a partner, an investor, or a believer
                in what&apos;s next, please reach out.
              </h3>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <h3 className='text-white font-semibold text-2xl'>
                Also connect with us on{' '}
                <span
                  className='text-[#CDF660] cursor-pointer'
                  onClick={handleLinkedInClick}>
                  LinkedIn
                </span>
              </h3>
              <div className='cursor-pointer' onClick={handleLinkedInClick}>
                <LinkedInIcon className='text-[#CDF660]' size={50} />
              </div>
            </div>
          </div>

          <div className='text-center text-[#f1ffbf] relative p-1 w-[719px] h-[756px]'>
            {/* Form content with background */}
            <div className='relative z-0 bg-[#475B24] p-6 z-10 h-[750px]'>
              <ContactForm contactUs={contactUs} />
            </div>
            {/* Border image wrapper - on top */}
            <Image
              src='/images/border.png'
              alt=''
              fill
              sizes='(max-width: 768px) 100vw, 719px'
              className='object-fill pointer-events-none z-10'
            />
          </div>
        </div>

        {/* Mobile/Tablet layout - single column */}
        <div className='lg:hidden flex flex-col items-start gap-6 mx-auto'>
          {/* Header with title and leaf icon */}
          <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='text-4xl md:text-5xl text-white'>Get in Touch!</h1>
            <Image
              className='opacity-10'
              src='/svgs/green_leaf.svg'
              alt='Green leaf'
              width={80}
              height={110}
            />
          </div>

          {/* Description text */}
          <div className='text-white text-base md:text-lg flex flex-col gap-2'>
            <p>We&apos;re building the future.</p>
            <p>
              If you are interested as a partner, an investor, or a believer in
              what&apos;s next, please reach out.
            </p>
          </div>

          {/* Form with border */}
          <div className='text-center text-[#f1ffbf] relative p-1 w-full'>
            {/* Form content with background */}
            <div className='relative z-0 bg-[#3C5512] p-6 z-10 h-[750px]'>
              <ContactForm contactUs={contactUs} />
            </div>
            {/* Border image wrapper - on top */}
            <Image
              src='/images/border.png'
              alt=''
              fill
              sizes='(max-width: 768px) 100vw, 719px'
              className='object-fill pointer-events-none z-10'
            />
          </div>

          {/* LinkedIn connection */}
          <div className='flex flex-row gap-2 items-center'>
            <p className='text-white text-sm md:text-base'>
              Also connect with us on{' '}
              <span
                className='text-[#CDF660] cursor-pointer font-semibold'
                onClick={handleLinkedInClick}>
                LinkedIn
              </span>
            </p>
            <div className='cursor-pointer' onClick={handleLinkedInClick}>
              <LinkedInIcon className='text-[#CDF660]' size={32} />
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default GetInTouchSection;
