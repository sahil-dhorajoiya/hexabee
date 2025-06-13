'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" py-4 fixed top-0 w-full z-50">
      <div className="header-main container mx-auto flex justify-between items-center  px-4 lg:px-20 " style={{ background: ' linear-gradient(90deg, #fffdf9 0%, #fff7e6 100%)', border: '1px solid rgba(252, 217, 162, 0.3)' }}>
        <div className="flex items-center">
          <Image 
            src="/images/img_artboard_1100_1layerstyle.svg" 
            alt="Hexibee Logo" 
            width={292} 
            height={80} 
            className="h-12 w-auto"
          />
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-600 font-semibold">
              Solution
              <Image 
                src="/images/img_frame_black_900_25x25.svg" 
                alt="Dropdown" 
                width={25} 
                height={25} 
                className="ml-1"
              />
            </button>
          </div>
          
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-600 font-semibold">
              Features
              <Image 
                src="/images/img_frame_black_900_25x25.svg" 
                alt="Dropdown" 
                width={25} 
                height={25} 
                className="ml-1"
              />
            </button>
          </div>
          
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-600 font-semibold">
              Integration
              <Image 
                src="/images/img_frame_black_900_25x25.svg" 
                alt="Dropdown" 
                width={25} 
                height={25} 
                className="ml-1"
              />
            </button>
          </div>
          
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-600 font-semibold">
              Resources
              <Image 
                src="/images/img_frame_black_900_25x25.svg" 
                alt="Dropdown" 
                width={25} 
                height={25} 
                className="ml-1"
              />
            </button>
          </div>
        </nav>

        <div className="hidden lg:flex items-center">
          <Button 
            variant="primary" 
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-6 py-3 rounded-full border border-yellow-400"
          >
            Book A Demo
          </Button>
        </div>

        <button 
          className="lg:hidden flex items-center"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-4">
            <Link href="#" className="block text-[#000000] hover:text-blue-600">Solution</Link>
            <Link href="#" className="block text-[#000000] hover:text-blue-600">Features</Link>
            <Link href="#" className="block text-[#000000] hover:text-blue-600">Integration</Link>
            <Link href="#" className="block text-[#000000] hover:text-blue-600">Resources</Link>
            <Button variant="primary" className="w-full mt-4">Book A Demo</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;