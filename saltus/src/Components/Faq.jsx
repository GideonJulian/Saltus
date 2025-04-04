import React from "react";
import FaqData from "../utils/FaqData";
import { useState } from "react";
import { Link } from "react-router-dom";
const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleOpenFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div id="faq" className="p-1 md:p-10  flex justify-center mb-5 md:justify-between md:flex-row flex-col ">
      <div className="">
        <div className="bg-[#ECF4F8]  text-center px-4 w-52 py-0 text-[#274C78] font-[500] text-[14px]">
          WANT TO KNOW MORE
        </div>
        <div className="">
          <h1 className="font-[500] text-center md:text-left   text-[28px] md:text-[64px] font-sans text-[#1F3D60] mt-5 md:w-[530px] leading-none lmd:eading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-[#414552] text-[15px] md:text-[16px]  md:block font-normal mt-5">
            Couldn’t find what you were looking for? write to us at
           <Link className="text-[#4A6A90]" to={'Ceo@saltuscorp.com<'}>  hello@saltusco.com</Link>
          </p>
        </div>
      </div>
      <div className="md:m-0 m-auto px-2">
        {FaqData.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[500px] bg-white rounded-lg shadow-md mt-5 px-5 py-4 transition-all duration-300"
          >
            {/* Question Row */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleOpenFaq(index)}
              aria-expanded={openFaq === index}
            >
              <h3 className="font-medium text-[16px] text-[#172E48]">
                {item.title}
              </h3>
              <i
                className={`bi ${
                  openFaq === index ? "bi-dash" : "bi-plus"
                } text-lg`}
              ></i>
            </div>

            {/* Answer Section (Animated) */}
            <div
              className={`overflow-hidden transition-max-height duration-300 ${
                openFaq === index ? "max-h-[500px] mt-3" : "max-h-0"
              }`}
            >
              <p className="text-[15px] text-[#7F8695] font-normal">
                {item.answer}
              </p>
              {item.answer2 && (
                <p className="text-[15px] text-[#7F8695] font-normal mt-3">
                  {item.answer2}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Faq;
