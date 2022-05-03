import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const template = process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const key = process.env.REACT_APP_YOUR_PUBLIC_KEY;

  console.log(key, template)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default_service', template, form.current, key)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-orange-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below to contact me.</p>
            </div>
            <input className='my-4 bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <input className='my-4 bg-[#ccd6f6] p-2' type="text" placeholder='Subject' name='subject'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-orange-600 hover:border-orange-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's communicate</button>
        </form>
    </div>
  )
}

export default Contact