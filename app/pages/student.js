import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Sara from '../public/assets/courses/1.png'
import Lara from '../public/assets/courses/3.png'
import Paulo from '../public/assets/courses/2.png'

const Student = () => {

    const messages = [
        {
        
          name: 'Sara David',
          icon: Sara,
          message: '"I have learned so much from the teachers at this academy. They are knowledgeable, patient, and always willing to help."'
        },
        {
       
          name: 'Paulo Smith',
          icon: Paulo,
          message: '"The support staff at this academy are amazing. They have helped me with everything."'
        },
        {
         
          name: 'Lara Thomas',
          icon: Lara,
          message: '"I am so grateful for the opportunities I have had at this academy. The extracurricular activities have allowed me to explore my interests and make new friends."'
        }
      ];
      
  return (
    <div id='student' className='w-full md:h-screen p-2 flex items-center py-16 bg-black'>
     <div className='max-w-5xl mx-auto '>
        <div className='text-center'>
          <h1 className='text-4xl font-bold border-b-4 border-blue-600 mb-4 inline-block text-white'>Student Says About Us</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {messages.map((message) => (
            <div key={message.title} className="bg-gray-400 shadow-lg rounded-lg overflow-hidden text-black">
               <div className=''>
               <div className='mx-auto mt-4 mb-2'>
                  <Image src={message.icon} alt={message.title} width={500} height={500} />
                </div>
         
      
              <div className="p-4 my-12">
                
              
                <h3 className="text-xl font-semibold">{message.message}</h3>
                <h5 className="text-xl font-semibold text-red-700">{message.name}</h5>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Student;
