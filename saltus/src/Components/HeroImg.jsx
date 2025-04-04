import React from "react";
import grp1 from "../assets/images/grp1.jpg";
import grp2 from "../assets/images/grp2.jpg";
import grp3 from "../assets/images/grp3.jpg";
import grp4 from "../assets/images/grp4.jpg";
import { motion } from "framer-motion";
const HeroImg = () => {
  return (
    <div className="m-auto md:mt-16 mt-1 flex flex-col items-center justify-center">
    {/* First Image */}
    <motion.div
      className="md:mb-20 mb-5 md:ml-[10%] mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <img src={grp3} alt="" className="w-[220px] max-w-[300px] md:w-[300px]" />
    </motion.div>
  
    {/* Second Image */}
    <motion.div
      className="md:ml-[40%] mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      <img src={grp2} alt="" className="w-[190px] md:m-0 ml-32 max-w-[300px] md:w-[300px]" />
    </motion.div>
  
    {/* Third & Fourth Images */}
    <div className="flex md:gap-20 gap-3  md:flex-row flex-col mt-5">
      <motion.img
        src={grp1}
        alt=""
        className="w-[210px] mr-10 max-w-[300px] md:w-[290px]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
      />
      <motion.img
        src={grp4}
        alt=""
        className="w-[200px] ml-10 max-w-[250px] md:w-[290px] md:ml-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
      />
    </div>
  </div>
  
  );
};

export default HeroImg;
