import Image from 'next/image';
import Staf from '../public/assets/courses/staff.png'
const Staff = () => {
 

  return (
    <div id='staff' className='w-full md:h-screen p-2 flex items-center py-16 bg-blue-900'>
    <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-5'>
    <div className='w-full h-auto m-auto  flex items-center justify-center p-4'>
        <Image src={Staf} width={1000} height={1000} className='rounded-xl' alt='/' />
      </div>
      <div className='col-span-2 my-5'>
        <p className='uppercase text-5xl tracking-widest text-[#ffffff]'>
            Our Staff
        </p>
        
        <p className='py-2 text-white my-10 text-1xl'>
        Our staff comprises experienced educators, subject matter experts, and support staff who work together to ensure that our students receive the best possible education and support. Each member of our team brings their unique talents and expertise to the table, allowing us to offer a diverse range of services and programs to meet the needs of our students.
        </p>
       
      </div>
      
    </div>
  </div>
  );
};

export default Staff;