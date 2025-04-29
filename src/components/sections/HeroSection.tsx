import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

const HeroSection = () => {
  return (
    <section className='relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-900 overflow-hidden'>
      {/* Background Artwork with Gradient */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/70 to-gray-900'></div>
        <img
          src='/lovable-uploads/e6e9a1e3-e819-47a2-aa1a-50dd6669215a.png'
          alt='Background Art'
          className='w-full h-full object-cover object-center opacity-30'
        />
      </div>

      <div className='container px-4 md:px-6 relative z-10'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
          <div className='flex-1 max-w-md opacity-0 animate-fade-in animate-delay-300'>
            {/* <img 
              src="/lovable-uploads/081cd264-99dc-40c0-93c8-195d6f4dc448.png" 
              alt="ReLeaf App" 
              className="w-2/3 mx-auto h-auto drop-shadow-xl"
            /> */}

            <img
              src='/lovable-uploads/9eabdee3-872b-4d9b-ac6a-d65f068107dc.png'
              alt='ReLeaf App Interface'
              className='w-full h-auto rounded-lg'
            />
          </div>
          <div className='flex-1'>
            <div className='opacity-0 animate-fade-in'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-6 text-white'>
                <span className='text-releaf-green'>ReLeaf, Inc.</span>
              </h1>
              <p className='text-xl text-gray-200 mb-8 max-w-lg font-bold'>
                Delivering Low-Cost, Sustainable Payments to Low and
                Middle-Income Countries
              </p>
              <p className='text-lg text-gray-300 mb-8 max-w-lg'>
                Our mission is to provide affordable and environmentally
                sustainable peer-to-peer payment solutions using innovative
                blockchain technology.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  size='lg'
                  onClick={() =>
                    document
                      .getElementById('product')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }>
                  Learn More
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
                <Button
                  variant='secondary'
                  size='lg'
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }>
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
