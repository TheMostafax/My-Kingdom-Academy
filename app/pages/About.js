import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 bg-black'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-5xl tracking-widest text-[#ffffff]'>
            About Us
          </p>
          <h2 className='py-4 text-red-500 text-2xl'>Who we are?</h2>
          <p className='py-2 text-white'>
          Kingdom Academy is an  academy that   provides  Courses for over 7 years to more than 5000 Student.We are pleased to offer you our educational platform, Kingdom-Academy, which is specialized in giving educational and training courses for all academic and orientation levels, in addition to university materials by specialized and experienced teachers in the field of education, in addition to providing an academic course platform by participating in the search for jobs and partners and providing All practical and administrative services and systems are professional.
          </p>
         
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
