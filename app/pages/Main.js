import Link from 'next/link';
import React from 'react';


const Main = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-black to-blue-900'>

      
   
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
     
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>
        My Kingdom Academy
      </h1>
      
      <p className='text-red-500 py-4 max-w-[700px] text-2xl'>
      Hai King! What are you waiting for ?
      </p>
      <div className='inline-flex rounded-md shadow-sm'>
     

<button className="text-black group border-2 px-6 py-3 my-2 mr-4 flex items-center bg-gray-200 border-black hover:bg-pink-600 hover:border-yellow-200">
    <Link href="/#contact">Join Now</Link></button>
        <div>
        <button className='text-white  border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-200 hover:border-black hover:text-black'>
        <a id
        href="https://instagram.com/" legacyBehavior >Follow Us </a>
        </button>
        </div>
        
      </div>
    </div>
  </div>
  );
};

export default Main;
