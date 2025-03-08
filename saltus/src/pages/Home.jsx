import React, { useState } from "react";
import Header from "../Components/Header";
import DropMenu from "../Components/DropMenu";
import Hero from "../Components/Hero";
import WhyUs from "../Components/WhyUs";

import HowItWorks from "../Components/HowItWorks";
import Faq from "../Components/Faq";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [dropMenuState, setDropMenuSTate] = useState(false);
  const handleOpenDropMenu = () => {
    setDropMenuSTate(!dropMenuState);
  };
  const closeDropMenu = () => {
    setDropMenuSTate(false);
  };
  const navigate = useNavigate();
  return (
    <div className="text-primary font-bold text-2xl">
      <div>
        <Header onOpen={handleOpenDropMenu} />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <WhyUs />
      </div>
      <div className="w-full bg-[#F9F9F9] p-6 mb-10">
        <div>
          <HowItWorks />
        </div>
      </div>
      <div>
        <Faq />
      </div>
        <div className="w-full bg-primary p-7 flex items-center flex-col h-[300px] justify-center mb-5 ">
          <h1 className="md:text-[40px] text-[32px] font-600] text-center text-white">
            Get Started On Saltus Today!
          </h1>
          <button onClick={()=> navigate('/join')} className="px-4 py-3 bg-white rounded-full text-sm font-[600] text-black mt-5">
            Join our waitlist
          </button>
        </div>
      <div>
        {dropMenuState && (
          <DropMenu isOpen={dropMenuState} onClose={closeDropMenu} />
        )}
      </div>
    </div>
  );
};

export default Home;
