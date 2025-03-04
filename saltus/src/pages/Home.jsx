import React, { useState } from "react";
import Header from "../Components/Header";
import DropMenu from "../Components/DropMenu";
import Hero from "../Components/Hero";
const Home = () => {
  const [dropMenuState, setDropMenuSTate] = useState(false);
  const handleOpenDropMenu = () => {
    setDropMenuSTate(!dropMenuState);
  };
  const closeDropMenu = () => { 
    setDropMenuSTate(false);
  }
  return (
    <div className="text-primary font-bold text-2xl">
      <div>
        <Header onOpen={handleOpenDropMenu} />
      </div>
      <div>
        <Hero />
      </div>
      <div>{dropMenuState && <DropMenu isOpen={dropMenuState} onClose={closeDropMenu}/>}</div>
    </div>
  );
};

export default Home;
