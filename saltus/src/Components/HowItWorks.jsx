import React from "react";
import Number1 from "../assets/icons/Number1.png";
import Number2 from "../assets/icons/Number2.png";
import Number3 from "../assets/icons/Number3.png";
import Number4 from "../assets/icons/Number4.png";
import Number5 from "../assets/icons/Number5.png";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 1 });
  return (
    
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="w-full bg-[#F9F9F9] p-6  mb-10 "
      id="how-it-works"
    >
      <div className="flex items-center justify-center">
        <div className="bg-[#ECF4F8] text-center px-4 w-40 py-1 text-[#274C78] font-[500] text-[14px]">
          HOW IT WORKS
        </div>
      </div>

      <div className="mt-5">
        <h1 className="text-center text-[#274C78] text-[30px] font-[700] ">
          Simple Steps to Improve Team Alignment
        </h1>
        <p className="text-[#7F8695] text-[15px] leading-relaxed md:text-[17px] text-center font-[400] mt-5">
          Sign up, set your goals, and watch your team’s work transform
        </p>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-center gap-7 mt-10">
        {[
          {
            img: Number1,
            title: "Sign Up",
            text: "Sign up as a Super Administrator and then invite your team.",
          },
          {
            img: Number2,
            title: "Set company goals",
            text: "Set mission, vision, objectives and key goals of your company.",
          },
          {
            img: Number3,
            title: "Share task",
            text: "Teams share weekly/monthly updates on work done.",
          },
          {
            img: Number4,
            title: "Aligned Impact",
            text: "A 200-word story connecting work to company’s mission.",
          },
          {
            img: Number5,
            title: "Generate Reports",
            text: "Create detailed reports for leaders and investors in minutes.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: index * 0.2 }}
            className="flex flex-col items-center"
          >
            <img src={item.img} alt="" className="w-[65px]" />
            <h3 className="mt-5 font-[600] text-[20px] text-[#172E48]">
              {item.title}
            </h3>
            <p className="mt-3 text-center text-[15px] text-[#414552] font-normal w-[270px]">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HowItWorks;
