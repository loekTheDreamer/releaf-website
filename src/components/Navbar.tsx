import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed top-0 w-full bg-white z-50 shadow-sm'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <a href='#' className='flex items-center'>
                <img
                  src='/lovable-uploads/9ceeaba1-4572-4e8a-aad2-6cac77f0d666.png'
                  alt='ReLeaf Logo'
                  className='h-10 w-10'
                />
                <span className='ml-2 text-xl font-medium text-gray-900'>
                  ReLeaf Financial
                </span>
              </a>
            </div>
          </div>
          <div className='hidden md:flex md:items-center md:space-x-6'>
            <a
              href='#product'
              className='text-gray-900 hover:text-releaf-green transition-colors duration-300'>
              Product
            </a>

            <a
              href='#features'
              className='text-gray-900 hover:text-releaf-green transition-colors duration-300'>
              Features
            </a>
            <a
              href='#market'
              className='text-gray-900 hover:text-releaf-green transition-colors duration-300'>
              Market
            </a>
            <a
              href='#team'
              className='text-gray-900 hover:text-releaf-green transition-colors duration-300'>
              Team
            </a>
            <a
              href='#contact'
              className='text-gray-900 hover:text-releaf-green transition-colors duration-300'>
              Contact
            </a>
          </div>
          <div className='md:hidden'>
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
        <div className='md:hidden bg-white shadow-lg'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <a
              href='#product'
              className='block px-3 py-2 text-base font-medium text-gray-900 hover:text-releaf-green'
              onClick={() => setIsOpen(false)}>
              Product
            </a>
            <a
              href='#features'
              className='block px-3 py-2 text-base font-medium text-gray-900 hover:text-releaf-green'
              onClick={() => setIsOpen(false)}>
              Features
            </a>
            <a
              href='#market'
              className='block px-3 py-2 text-base font-medium text-gray-900 hover:text-releaf-green'
              onClick={() => setIsOpen(false)}>
              Market
            </a>
            <a
              href='#team'
              className='block px-3 py-2 text-base font-medium text-gray-900 hover:text-releaf-green'
              onClick={() => setIsOpen(false)}>
              Team
            </a>
            <a
              href='#contact'
              className='block px-3 py-2 text-base font-medium text-gray-900 hover:text-releaf-green'
              onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
