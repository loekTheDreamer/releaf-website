import React from 'react';
import { Noise } from '../utils/Noise';

const FooterSection = () => {
  return (
    <footer id='footer' className='relative bg-[#4F6229] text-white py-12'>
      <Noise />
      <div className='container mx-auto px-4 flex flex-col md:flex-row md:text-sm justify-between gap-4 relative z-10'>
        <h4 className='text-[#F9FFE6]'>Releaf 2025 © All rights reserved.</h4>
        <div className='flex flex-col md:flex-row gap-2 md:gap-8'>
          <a href='#telcos' className='text-[#F9FFE6]'>
            Telco Opportunity
          </a>
          <a href='#our-solution' className='text-[#F9FFE6]'>
            Our Solution
          </a>
          <a href='#how-it-works' className='text-[#F9FFE6]'>
            How it works
          </a>
          <a href='#our-team' className='text-[#F9FFE6]'>
            Our Team
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
