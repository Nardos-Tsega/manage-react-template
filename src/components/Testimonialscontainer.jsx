import React from 'react';
import anisha from '../img/avatar-anisha.png';

const Testimonialscontainer = () => {
  return (
    <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
        <img src={anisha} alt='avatar' className='w-16 -mt-14' />
        <h5>Hello world</h5>
    </div>
  )
}

export default Testimonialscontainer