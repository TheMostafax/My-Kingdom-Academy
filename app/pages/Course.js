import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Python from '../public/assets/courses/py.png';
import HTMl from '../public/assets/courses/html.png'
import Flu from '../public/assets/courses/flutter.png'
import Dat from '../public/assets/courses/data.png'
import Rea from '../public/assets/courses/react.png'
import Ang from '../public/assets/courses/ang.png'
import Nex from '../public/assets/courses/next.png'
import CSH from '../public/assets/courses/c.png'
import PHP from '../public/assets/courses/php.png'


const Course = () => {
  return (
    <div name='course' className='w-full text-gray-300 bg-gradient-to-b from-black to-blue-900'>
      <div className='text-center'>
          <h1 className='text-4xl font-bold border-b-4 border-blue-600 mb-4 inline-block my-5'>Our Available Courses</h1>
        </div>
      
      <div className='max-w-5xl mx-auto p-4 grid grid-cols-3 gap-4'>
        
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <div className='mx-auto mt-4 mb-2'>
            <Image src={Python} alt='Python icon' width={300} height={300} />
          </div>
          <p className='text-lg'>Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation via the off-side rule. Pythonis dynamically typed and garbage-collected.</p>
          <p className="text-yellow-300">Price : 300 $ </p>
          <button className="bg-yellow-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded m-4">
          <Link href="/#contact">Apply Now</Link>
          </button>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <div className='mx-auto mt-4 mb-2'>
            <Image src={HTMl} alt='HTML icon' width={300} height={300} />
          </div>
          <p className='text-lg'>HTML is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.</p>
          <p className="text-yellow-300">Price : 100 $ </p>
          <button className="bg-yellow-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded m-4">
          <Link href="/#contact">Apply Now</Link>
          </button>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <div className='mx-auto mt-4 mb-2'>
            <Image src={Rea} alt='React icon' width={300} height={300} />
          </div>
          <p className='text-lg'>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.</p>
          <p className="text-yellow-300">Price : 250 $ </p>
          <button className="bg-yellow-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded m-4">
          <Link href="/#contact">Apply Now</Link>
          </button>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <div className='mx-auto mt-4 mb-2'>
            <Image src={Ang} alt='Angular icon' width={300} height={300} / >
          </div>
          <p className='text-lg'>Angular is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.</p>
          <p className="text-yellow-300">Price : 250 $ </p>
          <button className="bg-yellow-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded m-4">
          <Link href="/#contact">Apply Now</Link>
          </button>
       </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <div className='mx-auto mt-4 mb-2'>
            <Image src={Flu} alt='Flutter icon' width={300} height={300} />
          </div>
          <p className='text-lg'>Flutter is an open-source UI software development kit created by Google. It is used to develop cross-platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a single codebase. First described in 2015, Flutter was released in May 2017.</p>
          <p className="text-yellow-300">Price : 200 $ </p>
          <button className="bg-yellow-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded m-4">
          <Link href="/#contact">Apply Now</Link>
          </button>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <div className='mx-auto mt-4 mb-2'>
            <Image src={Dat} alt='Data icon' width={300} height={300} />
          </div>
          <p className='text-lg'>In computer science, a data structure is a data organization, management, and storage format that is usually chosen for efficient access to data.</p>
          <p className="text-yellow-300">Price : 150 $ </p>
          <button className="bg-yellow-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded m-4">
          <Link href="/#contact">Apply Now</Link>
          </button>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <div className='mx-auto mt-4 mb-2'>
            <Image src={Nex} alt='Next.js icon' width={300} height={300} />
          </div>
          <p className='text-lg'>Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.</p>
          <p className="text-yellow-300">Price : 275 $ </p>
          <button className="bg-yellow-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded m-4">
          <Link href="/#contact">Apply Now</Link>
          </button>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <div className='mx-auto mt-4 mb-2'>
            <Image src={CSH} alt='Data icon' width={300} height={300} />
          </div>
          <p className='text-lg'>C# is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines</p>
          <p className="text-yellow-300">Price : 150 $ </p>
          <button className="bg-yellow-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded m-4">
          <Link href="/#contact">Apply Now</Link>
          </button>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <div className='mx-auto mt-4 mb-2'>
            <Image src={PHP} alt='Data icon' width={300} height={300} />
          </div>
          <p className='text-lg'>PHP is a general-purpose scripting language geared toward web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by The PHP Group.</p>
          <p className="text-yellow-300">Price : 150 $ </p>
          <button className="bg-yellow-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded m-4">
          <Link href="/#contact">Apply Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;