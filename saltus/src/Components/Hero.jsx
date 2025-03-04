import React from "react";
import grp1 from '../assets/images/grp1.png'
import grp2 from '../assets/images/grp2.png'
import grp3 from '../assets/images/grp3.png'
import grp4 from '../assets/images/grp4.png'
const Hero = () => {
  return (
    <div className="bg-[#f0eeee] min-h-screen flex md:p-16 px-3 pt-20 md:flex-row flex-col   w-full ">
      <div className="md:mt-48 mt-5">
        <h1 className="font-[700] md:text-5xl text-[35px] text-[#1F3D60] md:w-[650px] w-[360px] leading-snug lmd:eading-normal">
          Stop Operating in Silos, Keep Your Entire Company on the Same Page
        </h1>
        <p className="text-[#1F3D60] mt-6 leading-none font-normal md:text-[16px] text-[14px] md:w-[650px] w-[361px]">
          Ensure alignment with your company’s mission, vision, and goals.
          Improve visibility across your organization. Keep teams, management,
          and investors focused on shared objectives. Show your team why their
          work matters.
        </p>
        <div className="relative bg-white pl-6 pr-3  md:py-3  py-2 mt-7 rounded-full flex items-center justify-between shadow-lg shadow-[#0D0A2C0F] w-full max-w-[640px] mx-auto">
          {/* Input Field */}
          <input
            type="text"
            className="w-full md:w-[400px] outline-none text-[16px] placeholder-gray-400"
            placeholder="Enter your email"
          />

          {/* Button */}
          <button className="px-6 md:px-12 py-2  md:py-3 rounded-full bg-primary text-white font-medium text-[16px] whitespace-nowrap">
            Join Waitlist
          </button>
        </div>
      </div>
      <div className="m-auto mb-10 "> 
        <div className="md:mb-20 mb-5 m-auto ml-[10%]">
          <img src={grp3} alt="" />
        </div>
        <div className="ml-[40%]">
          <img src={grp2} alt="" />
        </div>
        <div className="flex md:gap-20 items-center md:flex-row flex-col "> 
          <img src={grp1} alt="" />
          <img src={grp4} alt="" className="md:w-[300px] ml-12 md:ml-0"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
