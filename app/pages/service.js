import Tea from '../public/assets/courses/teacher.png'
import Spo from '../public/assets/courses/sport.png'
import Aca from '../public/assets/courses/comp.png'
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      title: 'Certified Teachers',
   
      icon: Tea
    },
    {
      title: 'Sports Events',
      icon: Spo
    },
    {
      title: 'Academic Competitions',
  
      icon: Aca
    },
  ];

  return (
    <div name='services' className='w-full md:h-screen bg-gray-200 py-10'>
      <div className='max-w-5xl mx-auto '>
        <div className='text-center'>
          <h1 className='text-4xl font-bold border-b-4 border-blue-600 mb-4 inline-block text-black'>Our Services</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {services.map((service) => (
            <div key={service.title} className="bg-white shadow-lg rounded-lg overflow-hidden text-black">
               <div className='shadow-md hover:scale-110 duration-500'>
               <div className='mx-auto mt-4 mb-2'>
                  <Image src={service.icon} alt={service.title} width={300} height={300} />
                </div>
         
      
              <div className="p-4 my-12">
                
                <h3 className="text-xl font-semibold">{service.title}</h3>
    
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;