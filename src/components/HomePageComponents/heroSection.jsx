import React from 'react'
import Image from "../../assets/hero-img.gif"
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import HeroButton from '../GlobalComponents/HeroButton';
const HeroSection = () => {
  return (
    <div>
      <div className="bg-cover bg-hero opacity-95 z-0 shadow-sm py-10">
        <div className="flex flex-row items-center pl-20 lg:pl-96 gap-12">
        <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24 ">
          <h1 className="font-bold text-white text-5xl md:text-6xl bg-gradient-to-r from-[#127CA6] to-[#458C3A] bg-clip-text text-transparent">
            Teknofest Pakistan
          </h1>
          <div className="max-w-4xl">
            <p className="mt-4 text-white text-lg flex gap-2">
              <span className="mt-1"><SlCalender/></span><span>12th and 13th October 2024</span>
            </p>
            <p className="mt-5 text-white text-lg flex gap-2">
              <span className="mt-1"><IoLocationOutline/></span><span>Expo Center Karachi, Hall 3 & 4</span>
            </p>
            <h2 className="mt-5 text-white text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Empowering innovation, igniting future leaders. Teknofest Pakistan – where technology meets limitless possibilities  
            </h2>
          </div>

        <div className="flex flex-row wrap my-5 gap-10">
        <HeroButton text = "BOOKKARU"/>
        <HeroButton text ="GRAB YOUR PASS"/>
      </div>
      <div className="flex flex-row gap-5">
      <HeroButton text = "SEE COMPETITIONS"/>
      <HeroButton text = "PROJECT REGISTRATION"/>
      </div>
        </div>
        <div>
          <img src={Image} className="w-3/6"/>
        </div>
        </div>
      </div>

      
    </div>
  )
}

export default HeroSection