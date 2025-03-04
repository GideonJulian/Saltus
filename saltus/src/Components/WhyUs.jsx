import React from "react";

import FeatureGrid from "./FeatureGrid";

const WhyUs = () => {
  return (
    <div className="w-full grid place-items-center p-3 md:p-6 mb-20">
      <div className="bg-[#F8FAFB] p-4 md;p-7 rounded-lg w-[100%] md:w-[90%]">
        <div className="flex items-center justify-center">
          <div className="bg-[#ECF4F8] px-4 w-40  py-1 text-[#274C78] font-[500] text-[14px]">
            WHY CHOOSE US
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-center text-[#274C78] text-[25px] font-[700]">
            Align Your Team, Amplify Your Impact
          </h1>
          <p className="text-[#7F8695] text-[15px] leading-none md:text-[17px] text-center font-[400]">
            Capture tasks across your organization, assess their alignment with
            company goals, share weekly 200 word progress stories to your teams.
            Deliver key reports to management and investors.
          </p>
        </div>
        <div className=" ">
          <FeatureGrid />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
