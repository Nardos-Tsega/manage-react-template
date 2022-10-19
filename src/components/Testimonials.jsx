import React from 'react'
import Testimonialscontainer from './Testimonialscontainer'

const Testimonials = () => {
  return (
    <section id='testimonials'>
        <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
            <h2 className='text-4xl font-bold text-center'>
                What's Different About Manage?
            </h2>
            <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
                <Testimonialscontainer />
                <Testimonialscontainer />
                <Testimonialscontainer />
            </div>
        </div>
    </section >
  )
}

export default Testimonials