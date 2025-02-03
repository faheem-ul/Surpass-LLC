import React from "react";

import Text from "@/components/UI/Text";
import Button from "@/components/UI/Button";
import PolygonSvg from "./PolygonSvg";

const HomeHero = () => {
  return (
    <div className="w-full h-full flex justify-center items-center px-5 bg-black pt-[169px] overflow-hidden ">
      <div className="w-full max-w-[1440px] flex justify-center items-center">
        <div className="w-full flex justify-center items-center mb-[222px]">
          <div className="w-full max-w-[50%]">
            <Text className="text-[60px] font-bold bg-gradient-to-r from-[#0B68A3] to-[#EEEEEE] text-transparent bg-clip-text">
              Mutual Rapport & <br />
              Surpass LLC
            </Text>
            <div className="w-[213px] border border-[#0B619D] mt-6"></div>
            <Text className="text-white font-medium text-[22px] mt-[19px] mb-[77px]">
              Moving Forward Strategically!
            </Text>
            <div className="flex gap-5">
              <Button className="w-[200px] h-[51px] text-white rounded-[90px] font-bold bg-gradient-to-r from-[#1197CE] to-[#0B619D]">
                Get Started
              </Button>
              <Button className="w-[200px] h-[51px] font-bold bg-black rounded-[90px] border border-[#1199CF]">
                More Info.
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full max-w-[61%] relative">
            <div className="relative top-[60px] right-[-23px]">
              <PolygonSvg text="Chief Cloud Officer" />
            </div>
            <div className="flex flex-col gap-2">
              <PolygonSvg text="Business Plan" />
              <PolygonSvg text="Construction Accounting" />
              <PolygonSvg text="I .T" />
            </div>
            <div className="flex flex-col gap-2 relative top-[55px] left-[-25px]">
              <PolygonSvg text="Construction Payroll" />
              <PolygonSvg text="Human Resources" />
              <PolygonSvg text="Why You Should Choose Us ?" />
            </div>
            <div className="flex flex-col gap-2 relative top-[55px] left-[-50px]">
              <PolygonSvg text="Our Values" />
              <PolygonSvg text="Backup Support" />
              <PolygonSvg text="Business Consulting" />
              <PolygonSvg text="Financial Resilience Manager" />
            </div>
            <div className="flex flex-col gap-2 relative bottom-[6px] left-[-73px]">
              <PolygonSvg text="Who We Are" />
              <PolygonSvg />
              <PolygonSvg />
              <PolygonSvg text="Q & A" />
            </div>
            <div className="flex flex-col gap-2 relative bottom-[5px] left-[-96px]">
              <PolygonSvg text="The Mission" />
              <PolygonSvg />
              <PolygonSvg />
            </div>
            <div className="flex flex-col gap-2 relative bottom-[-53px] left-[-120px]">
              <PolygonSvg />
              <PolygonSvg />
              <PolygonSvg text="Articles" />
            </div>
            <div className="flex flex-col gap-2 relative bottom-[6px] left-[-145px]">
              <PolygonSvg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
