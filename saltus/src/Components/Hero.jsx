import React from "react";

import HeroImg from "./HeroImg";
const Hero = () => {
  return (
    <div className="bg-[#f0eeee] min-h-screen flex md:p-16 px-3 pt-20 md:flex-row flex-col   w-full ">
      <div className="md:mt-48 mt-5">
        <h1 className="font-[700] md:text-5xl text-[29px] text-[#1F3D60] md:w-[650px] w-[320px] leading-snug lmd:eading-normal">
          Stop Operating in Silos, Keep Your Entire Company on the Same Page
        </h1>
        <p className="text-[#1F3D60] mt-6 leading-none font-normal md:text-[16px] text-[14px] md:w-[650px] w-[361px]">
          Ensure alignment with your company’s mission, vision, and goals.
          Improve visibility across your organization. Keep teams, management,
          and investors focused on shared objectives. Show your team why their
          work matters.
        </p>
        <button className="px-10 md:px-12 py-2 mt-10 md:py-3 rounded-full bg-primary text-white font-medium text-[16px] whitespace-nowrap">
          Join Waitlist
        </button>
      </div>
      <div className="mt-">
        <HeroImg />
      </div>
    </div>
  );
};

export default Hero;
