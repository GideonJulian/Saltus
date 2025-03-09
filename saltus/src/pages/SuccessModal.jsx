import React from "react";
import logo from "../assets/icons/SALTUS..png";
import icon from "../assets/icons/succsesIcon.png";
import { useNavigate } from "react-router-dom";
const SuccessModal = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-[#F8FAFB] h-screen  flex items-center justify-center w-full md:p-2 p-3 flex-col">
    
        <div className="logo mb-5 ">
          <img src={logo} alt="" />
        </div>
        <div className="bg-white rounded-lg shadow-lg shadow-[#0C0C0D0D] w-full md:w-1/2 px-4 flex items-center justify-center flex-col gap-5 py-7  md:px-7 md:py-7 ">
          <img src={icon} className="w-[60px]" alt="" />
          <div>
            <h1 className="font-[800] text-[35px] text-[#1F3D60] ">
              You're in
            </h1>
          </div>
          <div>
            <p className="text-center font-[400] text-[16px] text-[#7F8695] w-[280px] md:w-[460px]">
             Thanks for joining, we're excited to have you on board. Keep an eye on your inbox for early access invitations and special offers. 
              
            </p>
          </div>
            <button onClick={()=> navigate('/')} className="text-center w-full px-4 py-3 rounded-md bg-[#274C78] text-white font-[600px] text-[16px] shadow-sm shadow-[#3C425714]">
            Back to Homepage{" "}
          </button>
        </div>
      
    </div>
  );
};

export default SuccessModal;
