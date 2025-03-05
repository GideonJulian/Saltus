import React, { useState } from "react";
import Header from "../Components/Header";
import DropMenu from "../Components/DropMenu";
import Hero from "../Components/Hero";
import WhyUs from "../Components/WhyUs";

import HowItWorks from "../Components/HowItWorks";
import Faq from "../Components/Faq";
const Home = () => {
  const [dropMenuState, setDropMenuSTate] = useState(false);
  const handleOpenDropMenu = () => {
    setDropMenuSTate(!dropMenuState);
  };
  const closeDropMenu = () => {
    setDropMenuSTate(false);
  };
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
        <div>
          <Faq />
        </div>
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
