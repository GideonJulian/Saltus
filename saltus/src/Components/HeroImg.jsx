import React from "react";
import grp1 from "../assets/images/grp1.png";
import grp2 from "../assets/images/grp2.png";
import grp3 from "../assets/images/grp3.png";
import grp4 from "../assets/images/grp4.png";
import { motion } from "framer-motion";
const HeroImg = () => {
  return (
    <div className="m-auto mt-16">
      {/* First Image */}
      <motion.div
        className="md:mb-20 mb-5 m-auto ml-[10%]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <img src={grp3} alt="" />
      </motion.div>

      {/* Second Image */}
      <motion.div
        className="ml-[40%]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <img src={grp2} alt="" />
      </motion.div>

      {/* Third & Fourth Images */}
      <div className="flex md:gap-20 items-center md:flex-row flex-col">
        <motion.img
          src={grp1}
          alt=""
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        />
        <motion.img
          src={grp4}
          alt=""
          className="md:w-[300px] ml-12 md:ml-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default HeroImg;
