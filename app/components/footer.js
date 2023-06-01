import React from 'react'
import Link from 'next/link'
const footer = () => {
  return (
    <div className=" text-gray-400 bg-gradient-to-b from-blue-900 to-black">
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h2 className="font-bold text-lg mb-2">Contact</h2>
          <a href="mailto:mh1546226@gmail.com" target="_blank" className="inline-block mr-4 text-white ">
            <i className="far fa-envelope text-white"></i> Email
          </a>
        </div>
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h2 className="font-bold text-lg mb-2">Social Media</h2>
          <a href="https://www.instagram.com/" target="_blank" className="inline-block mr-4 text-white">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.linkedin.com/" target="_blank" className="inline-block mr-4 text-white">
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
         
        </div>
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h2 className="font-bold text-lg mb-2">Links</h2>
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
         
        </div>
      </div>
    </div>
  </div>
  )
}

export default footer
