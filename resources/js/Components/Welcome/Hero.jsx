import { Link } from '@inertiajs/react'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="flex items-center dark:bg-dots-lighter lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-32 py-0 overflow-hidden">
    <div className="container mx-auto h-full">
      <div className="flex items-center h-full pt-8">
        {/* Left */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <h1 className="text-4xl text-center leading-[44px] md:text-5xl md:leading-tight lg:text-left lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
          Enjoy Your Morning Coffee
          </h1>
          <p className="pt-4 font-normal pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
          A new concrentrate cold brew coffee with concrentrate ready to Drink, and Brew-it - Yourself products available nationwide.
          enjoy the perfect batch of cold.
          </p>
          <a href='#order' className='px-4 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg font-semibold text-lg flex justify-center items-center gap-3'>
            Get Your Coffee <FaArrowRight />
          </a>
        </div>
           {/* Right */}
          <div className="hidden w-full lg:flex flex-1 justify-end items-end h-full">
            <img src='/storage/images/hero.png' className="h-[70vh] rounded-md" alt="" />
          </div>
      </div>
    </div>
  </section>
  )
}

export default Hero