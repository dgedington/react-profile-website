import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-orange-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Daniel Edington
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm am Web Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I am hard at work devloping my skills. Currently I am focused on
          learning to design responsive web applications.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600'>
            <Link to='/work'>View Work</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;