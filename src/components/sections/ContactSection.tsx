import React from 'react';

const ContactSection = () => {
  return (
    <section id='contact' className='py-16 md:py-24'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center'>
          <div className='max-w-xl opacity-0 animate-fade-in text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Contact Us</h2>
            <p className='text-lg text-gray-600 mb-0'>
              Interested in learning more about ReLeaf or partnering with us?
            </p>
            <p className='text-lg text-gray-600 mb-8'>
              Get in touch with our team today.
            </p>
            <div className='space-y-4'>
              <p className='text-xl'>
                <strong>Email:</strong>{' '}
                <a
                  href='mailto:hello@releaf-financial.com'
                  className='text-releaf-green hover:underline'>
                  hello@releaf-financial.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
