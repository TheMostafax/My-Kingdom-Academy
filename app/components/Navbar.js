import Link from 'next/link'
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="text-white font-bold text-xl">My Kingdom Academy</div>
            </Link>
          </div>
          <div className="md:hidden">
            <button className="mobile-menu-button">
              <svg viewBox="0 0 20 20" fill="currentColor" className="menu-icon w-6 h-6">
                
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/#about">
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</div>
              </Link>
              <Link href="/#staff">
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Staff</div>
              </Link>
              <Link href="/#services">
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</div>
              </Link>
              <Link href="/#course">
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Courses</div>
              </Link>
              <Link href="/#contact">
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</div>
              </Link>
              <Link href="/#student">
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Students</div>
              </Link>
              <Link href="/#contact">
                <div className="text-white hover:bg-blue-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium bg-blue-800">Register</div>
              </Link>
              
            </div>
          </div>
        </div>
     </div>
     <div className="md:hidden mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/#about">
            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Us</div>
          </Link>
          <Link href="/#staff">
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Staff</div>
              </Link>
          <Link href="/#services">
            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</div>
          </Link>
          <Link href="/#course">
            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Courses</div>
          </Link>
          <Link href="/#contact">
            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</div>
          </Link>
          <Link href="/#student">
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Students</div>
              </Link>
          <Link href="/#contact">
            <div className="text-white hover:bg-blue-400 hover:text-black block px-3 py-2 rounded-md text-base font-medium bg-blue-800">Register</div>
          </Link>
        </div>      
      </div>
    </nav>
  );
};

export default Navbar;