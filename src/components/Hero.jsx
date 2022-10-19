import React from 'react';
import Logo from '../img/logo.svg';
import HeroIllustration from '../img/illustration-intro.svg';

const Hero = () => {
  return (
    <div>
        <nav className='relative container mx-auto p-6'>
            <div className='flex items-center justify-between'>
                <div className='pt-2'>
                    <img src={Logo} alt="company logo"/>
                </div>
                <div className='hidden md:flex space-x-6'>
                    <a href='#' className='hover:text-darkGrayishBlue'>Pricing</a>
                    <a href='#' className='hover:text-darkGrayishBlue'>Product</a>
                    <a href='#' className='hover:text-darkGrayishBlue'>About Us</a>
                    <a href='#' className='hover:text-darkGrayishBlue'>Careers</a>
                    <a href='#' className='hover:text-darkGrayishBlue'>Community</a>
                </div>
                <div>
                    <a className='hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full  hover:bg-brightRedLight'>Get Started</a>
                </div>
            </div>
        </nav>
        <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
            <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
                <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
                    Bring everyone together to build better products
                </h1>
                <p className='mx-w-sm text-center text-darkGrayishBlue md:text-left'>
                    Manage makes it simple for software teams to plan day-to-day tasks
                    while keeping the larger team goals in view.
                </p>
                <div className='flex justify-center md:justify-start'>
                    <a className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full  hover:bg-brightRedLight'>Get Started</a>
                </div>
            </div>
            <div className='md:w-1/2'>
                <img src={HeroIllustration} alt="Hero section illustration"/>
            </div>
        </div>
    </div>
  )
}

export default Hero