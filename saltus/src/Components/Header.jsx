import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/icons/SALTUS..png'
import { useNavigate } from "react-router-dom";
const Header = ({onOpen}) => {
  const navigate = useNavigate();
  return (
    <div className="w-full p-6 px-8 bg-white shadow-md fixed z-10 top-0 flex justify-between items-center">
      <div className="logo">
        {/* <h1 className="font-bold ">SALTUS.</h1> */}
        <img src={logo} alt="" />
      </div>
      <ul className="md:flex items-center hidden gap-10">
        <div className="links hidden md:flex items-center gap-10 ">
          <li>
            <Link className="text-[16px] font-sans font-[500] text-[#414552]">
              Why Choose us{" "}
            </Link>
          </li>
          <li>
            <Link className="text-[16px] font-sans font-[500] text-[#414552]">
              How it works{" "}
            </Link>
          </li>
          <li>
            <Link className="text-[16px] font-sans font-[500] text-[#414552]">
              Contact us
            </Link>
          </li>
        </div>
        <button onClick={()=> navigate('/join ')} className="px-4 py-3 bg-primary rounded-full text-sm font-[600] text-white">
          Join our wailist
        </button>
      </ul>
      <div className="md:hidden block" onClick={onOpen}>
        <i class="bi bi-list"></i>
      </div>
    </div>
  );
};

export default Header;
