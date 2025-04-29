import React from 'react';

const QuoteSection = () => {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center'>
          <div className='mt-8 text-center max-w-3xl opacity-0 animate-fade-in animate-delay-200'>
            <p className='text-4xl font-medium text-gray-700 italic'>
              "When phones become part of the network, people become part of the
              solution."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
