import React from "react";
import FeatureGrid from "./FeatureGrid";

const WhyUs = () => {
  return (
    <section id="why-choose-us" className="w-full grid place-items-center md:p-6 mb-20 mt-28">
      <div className="bg-[#F8FAFB]  md:p-7 md:pt-16 rounded-2xl w-[100%] md:w-[90%]">
        <div className="flex items-center justify-center">
          <div className="bg-[#ECF4F8] px-4 w-40 py-1 text-[#274C78] font-[500] text-[14px]">
            WHY CHOOSE US
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-center text-[#0b0c0c] text-[25px] font-[700] mb-4">
            Align Your Team, Amplify Your Impact
          </h1>
          <p className="text-[#7F8695] text-[15px] max-w-[780px] leading-snug md:text-[17px] m-auto text-center font-[400]">
            Capture tasks across your organization, assess their alignment with
            company goals, share weekly 200-word progress stories with your teams.
            Deliver key reports to management and investors.
          </p>
        </div>
        <div className="px-2 mt-6">
          <FeatureGrid />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
