import React from "react";
import logo from "../assets/icons/SALTUS..png";
import { Link } from "react-router-dom";
import facebook from "../assets/icons/facebook.png";
import Vector from "../assets/icons/Vector.png";
import instagram from "../assets/icons/instagram.png";
import telegram from "../assets/icons/telegram.png";
const Footer = () => {
  return (
    <div className="w-full p-3 bg-white" id="contact-us">
      <div className="container flex flex-col md:flex-row md:mb-8 mb-0 px-4 md:px-7 py-10 justify-between  mx-auto">
        <div>
          <div className="logo mb-3 ">
            <img src={logo} alt="" />
          </div>
          <p className="font-[400] text-[14px] md:text-[16px] text-[#707070] w-[350px] md:w-[443px]">
            Improving organizational outcomes by aligning teams to a single goal
          </p>
        </div>
        <div className="flex gap-12 md:mt-0 mt-10 md:gap-40 md:flex-row  ">
          <div>
            <h3 className="text-[#303850] font-[500] mb-4">INFO</h3>
            <ul>
              <li className="mb-4">
                <Link className="text-[#707070] text-[13px] md:text-[16px]">
                  Why choose us
                </Link>
              </li>
              <li className="mb-4">
                <Link className="text-[#707070] text-[13px] md:text-[16px]">
                  How it works
                </Link>
              </li>
              <li>
                <Link className="text-[#707070] text-[13px] md:text-[16px]">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#303850] font-[500] mb-4">Contact</h3>
            <div>
              <li className="list-none mb-4">
                <a
                  className="text-[#4A6A90]  text-[13px] md:text-[16px]"
                  href="mailto:https://hello@saltusco.com"
                >
                  {" "}
                  hello@saltusco.com
                </a>
                {/* <a href="https://hello@saltusco.com">google</a> */}
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom md:px-28  py-6 flex flex-col md:flex-row md:mb-8 mb-0 items-center px-7 justify-center md:justify-between  mx-auto">
        <div>
          <h3 className="text-[#303850] text-[15px] font-[400]">
            © 2025 — Copyright
          </h3>
        </div>
        <div>
          <ul className="flex gap-8 items-center mt-3">
            <li>
              <img src={facebook} alt="" className="w-[20px] md:w-[25px]" />
            </li>
            <li>
              <img src={Vector} alt="" className="w-[20px] md:w-[25px]" />
            </li>
            <li>
              <img src={instagram} alt="" className="w-[20px] md:w-[25px]" />
            </li>
            <li>
              <img src={telegram} alt="" className="w-[20px] md:w-[25px]" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
