import React from "react";
import { useNavigate } from "react-router-dom";
import HeroImg from "./HeroImg";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F9F9F9] min-h-[100vh] flex md:p-16 px-5 pt-20 md:flex-row flex-col w-full max-w-[100%] justify-center">
      <div className="md:mt-20 mt-5  md:text-left">
        <h1 className="font-[700] md:text-[56px] text-[29px] text-[#1F3D60] md:w-[620px] max-w-[100%] leading-[1.2]">
          Stop Operating in Silos, Keep Your Entire Company on the Same Page
        </h1>

        <p className="text-[#7F8695] mt-6 font-normal md:text-[16px] text-[14px] md:w-[650px] max-w-[90%]">
          Ensure alignment with your company’s mission, vision, and goals.
          Improve visibility across your organization. Keep teams, management,
          and investors focused on shared objectives. Show your team why their
          work matters.
        </p>
        <button
          onClick={() => navigate("/join")}
          className="px-10 md:px-12 py-2 mt-10 md:py-3 rounded-full shadow-lg bg-primary text-white font-medium text-[16px] whitespace-nowrap"
        >
          Join Waitlist
        </button>
      </div>
      <div className="flex md:justify-center md:ml-5 mt-10 md:mt-0">
        <HeroImg className="w-[90%] md:w-auto max-w-[400px]" />
      </div>
    </div>
  );
};

export default Hero;
