import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='w-full bg-gradient-to-b from-white to-blue-900  '>
      <div className='max-w-[1240px] mx-auto px-4 py-16'>
      <div className='text-center'>
          <h1 className='text-4xl font-bold border-b-4 border-blue-600 mb-4 inline-block text-black'>Register Now</h1>
        </div>
        <h2 className='text-2xl font-medium text-center text-black mb-8'>
          Registration Form
        </h2>
        <div className='max-w-md mx-auto'>
          <div className='w-full border-4 border-black rounded-xl p-6'>
            <form
            
            >
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                <div className='flex flex-col'>
                  <label
                    className='uppercase text-sm font-medium mb-2 text-black'
                    htmlFor='name'
                  >
                    Name
                  </label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 w-full focus:outline-none focus:border-blue-500 text-black'
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Name'
                    required
                  />
                </div>
                <div className='flex flex-col'>
                  <label
                    className='uppercase text-sm font-medium mb-2 text-black'
                    htmlFor='phone'
                  >
                    Phone Number
                  </label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 w-full focus:outline-none focus:border-blue-500 text-black'
                    type='text'
                    name='phone'
                    id='phone'
                    placeholder='phone'
                    required
                  />
                </div>
              </div>
              <div className='flex flex-col mb-6'>
                <label
                  className='uppercase text-sm font-medium mb-2 text-black'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  className='border-2 rounded-lg p-3 flex border-gray-300 w-full focus:outline-none focus:border-blue-500 text-black'
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  required
                />
              </div>
              <div className='flex flex-col mb-6'>
                <label
                  className='uppercase text-sm font-medium mb-2 text-black'
                  htmlFor='subject'
                >
                  Select a Course
                </label>
                <select
                  className='border-2 rounded-lg p-3 flex border-gray-300 text-black w-full focus:outline-none focus:border-blue-500'
                  name='subject'
                  id='subject'
                  required
                >
                  <option value=''>Select a course</option>
                  <option value='Python'>Python</option>
                  <option value='html'>HTML</option>
                  <option value='Flutter'>Flutter</option>
                  <option value='Data'>Data Structure</option>
                  <option value='Angular'>Angular</option>
                  <option value='React'>React JS</option>
                  <option value='Next'>Next JS</option>
                  <option value='C#'>C#</option>
                  <option value='PHP'>PHP</option>
                </select>
              </div>
              <div className='flex flex-col mb-6'>
                <label
                  className='uppercase text-sm font-medium mb-2 text-black'
                  htmlFor='message'
                >
                  Message
                </label>
                <textarea
                  className='border-2 rounded-lg p-3 border-gray-300 w-full focus:outline-none focus:border-blue-500 text-black'
                  rows='5'
                  name='message'
                  id='message'
                  placeholder='Message'
                  required
                ></textarea>
              </div>
              <button className='w-full p-4 font-medium text-white bg-red-500 rounded-lg hover:bg-green-600 focus:outline-none focus:bg-red-600'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact