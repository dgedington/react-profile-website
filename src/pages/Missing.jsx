import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          404 Page Not Found
        </h1><br/>
        <h2 className='text-2xl sm:text-4xl font-bold text-[#8892b0]'>
          The page you were looking for does not exist. Try returning to the Home page.
        </h2>
        <br/>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600'>
            <Link to='/'>Return to Home Page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Missing;