import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only enable scroll effect on desktop (lg breakpoint is 1024px)
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop && window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'pt-2' : 'bg-white'
      }`}>
      <div
        className={`container mx-auto transition-all duration-300 ${
          isScrolled
            ? 'max-w-4xl bg-white rounded-full shadow-lg pl-5 pr-3'
            : 'px-4 lg:px-6'
        }`}>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex items-center flex-shrink-0'>
            <a href='#' className='flex items-center'>
              <Image
                src='/Logo.svg'
                alt='ReLeaf Logo'
                width={100}
                height={100}
                className='h-10 w-10'
              />
              <span className='ml-2 text-xl font-bold text-gray-900'>
                RELEAF
              </span>
            </a>
          </div>

          {/* Center Navigation Links */}
          <div className='hidden lg:flex lg:items-center lg:space-x-8 flex-1 justify-center'>
            <a
              href='#telcos'
              className='text-gray-900 hover:text-releaf-green transition-colors duration-300'>
              Telco Opportunity
            </a>
            <a
              href='#our-solution'
              className='text-gray-900 hover:text-releaf-green transition-colors duration-300'>
              Our Solution
            </a>
            <a
              href='#how-it-works'
              className='text-gray-900 hover:text-releaf-green transition-colors duration-300'>
              How it works
            </a>
            <a
              href='#our-team'
              className='text-gray-900 hover:text-releaf-green transition-colors duration-300'>
              Our Team
            </a>
          </div>

          {/* CTA Button */}
          <div className='hidden lg:flex lg:items-center flex-shrink-0'>
            <a
              href='#get-in-touch'
              className='bg-[#75A709] hover:bg-[#5a7a1e] text-white px-6 py-2.5 rounded-full transition-colors duration-300 font-medium'>
              Get in touch
            </a>
          </div>
          <div className='lg:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-releaf-green focus:outline-none'
              aria-expanded='false'>
              <Menu className='h-6 w-6' />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='lg:hidden bg-white'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <a
              href='#telcos'
              className='block px-3 py-2 text-base font-medium text-gray-900 hover:text-releaf-green'
              onClick={() => setIsOpen(false)}>
              Telco Opportunity
            </a>
            <a
              href='#our-solution'
              className='block px-3 py-2 text-base font-medium text-gray-900 hover:text-releaf-green'
              onClick={() => setIsOpen(false)}>
              Our Solution
            </a>
            <a
              href='#how-it-works'
              className='block px-3 py-2 text-base font-medium text-gray-900 hover:text-releaf-green'
              onClick={() => setIsOpen(false)}>
              How it works
            </a>
            <a
              href='#our-team'
              className='block px-3 py-2 text-base font-medium text-gray-900 hover:text-releaf-green'
              onClick={() => setIsOpen(false)}>
              Our Team
            </a>
            <a
              href='#get-in-touch'
              className='block px-3 py-2 text-base font-medium text-gray-900 hover:text-releaf-green'
              onClick={() => setIsOpen(false)}>
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
