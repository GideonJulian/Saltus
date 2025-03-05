import React, { useState } from "react";
import Header from "../Components/Header";
import DropMenu from "../Components/DropMenu";
import Hero from "../Components/Hero";
import WhyUs from "../Components/WhyUs";
import Number1 from "../assets/icons/Number1.png";
import Number2 from "../assets/icons/Number2.png";
import Number3 from "../assets/icons/Number3.png";
import Number4 from "../assets/icons/Number4.png";
import Number5 from "../assets/icons/Number5.png";
import HowItWorks from "../Components/HowItWorks";
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
