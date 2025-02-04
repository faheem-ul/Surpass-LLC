"use client";
import React, { useState } from "react";
import Image from "next/image";

import Text from "@/components/UI/Text";
import Button from "@/components/UI/Button";
import MyModal from "@/components/UI/Modal";

import PolygonSvg from "./PolygonSvg";
import bg from "@/public/images/bg.png";

const HomeHero = () => {
  const [selectedText, setselectedText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (text: string) => {
    setIsModalOpen(true);
    setselectedText(text);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="relative w-full h-full z-10">
      <Image
        className="absolute top-[-180px] left-0 w-full h-full object-cover z-0"
        src={bg}
        alt=""
        width={1440}
        height={424}
      />
      <div className="w-full h-full flex justify-center items-center px-5 bg-black pt-[169px] overflow-hidden z-10">
        <div className="w-full max-w-[1440px] flex justify-center items-center">
          <div className="w-full flex justify-center items-center mb-[222px] mob:flex-col">
            <div className="w-full max-w-[50%] mob:max-w-full">
              <Text className="text-[60px] font-bold z-10 relative bg-gradient-to-r from-[#0B68A3] to-[#EEEEEE] text-transparent bg-clip-text">
                Mutual Rapport & <br />
                Surpass LLC ok
              </Text>
              <div className="w-[213px] border border-[#0B619D] mt-6 z-10 relative"></div>
              <Text className="text-white font-medium text-[22px] z-10 relative mt-[19px] mb-[77px]">
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
            <div className="flex items-center gap-1 w-full max-w-[61%] mob:max-w-full relative">
              <div
                className="relative top-[60px] right-[-23px]"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-easing="ease-in-sine"
              >
                <PolygonSvg
                  text="Chief Cloud Officer"
                  onClick={handleOpenModal}
                />
              </div>
              <div
                className="flex flex-col gap-2"
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-easing="ease-in-sine"
              >
                <PolygonSvg text="Business Plan" onClick={handleOpenModal} />
                <PolygonSvg
                  text="Construction Accounting"
                  onClick={handleOpenModal}
                />
                <PolygonSvg text="I .T" />
              </div>
              <div
                className="flex flex-col gap-2 relative top-[55px] left-[-25px]"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-sine"
              >
                <PolygonSvg
                  text="Construction Payroll"
                  onClick={handleOpenModal}
                />
                <PolygonSvg text="Human Resources" onClick={handleOpenModal} />
                <PolygonSvg
                  text="Why You Should Choose Us ?"
                  onClick={handleOpenModal}
                />
              </div>
              <div
                className="flex flex-col gap-2 relative top-[55px] left-[-50px]"
                data-aos="fade-right"
                data-aos-duration="900"
                data-aos-easing="ease-in-sine"
              >
                <PolygonSvg text="Our Values" onClick={handleOpenModal} />
                <PolygonSvg text="Backup Support" onClick={handleOpenModal} />
                <PolygonSvg
                  text="Business Consulting"
                  onClick={handleOpenModal}
                />
                <PolygonSvg
                  text="Financial Resilience Manager"
                  onClick={handleOpenModal}
                />
              </div>
              <div
                className="flex flex-col gap-2 relative bottom-[6px] left-[-73px]"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
              >
                <PolygonSvg text="Who We Are" onClick={handleOpenModal} />
                <PolygonSvg text="" onClick={handleOpenModal} />
                <PolygonSvg text="" onClick={handleOpenModal} />
                <PolygonSvg text="Q & A" onClick={handleOpenModal} />
              </div>
              <div
                className="flex flex-col gap-2 relative bottom-[5px] left-[-96px]"
                data-aos="fade-right"
                data-aos-duration="1100"
                data-aos-easing="ease-in-sine"
              >
                <PolygonSvg text="The Mission" onClick={handleOpenModal} />
                <PolygonSvg text="" onClick={handleOpenModal} />
                <PolygonSvg text="" onClick={handleOpenModal} />
              </div>
              <div
                className="flex flex-col gap-2 relative bottom-[-53px] left-[-120px]"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
              >
                <PolygonSvg text="" onClick={handleOpenModal} />
                <PolygonSvg text="" onClick={handleOpenModal} />
                <PolygonSvg text="Articles" onClick={handleOpenModal} />
              </div>
              <div
                className="flex flex-col gap-2 relative bottom-[6px] left-[-145px]"
                data-aos="fade-right"
                data-aos-duration="1300"
                data-aos-easing="ease-in-sine"
              >
                <PolygonSvg text="" onClick={handleOpenModal} />
              </div>
              <MyModal
                title={selectedText}
                isOpen={isModalOpen}
                closeModal={handleCloseModal}
              >
                <Text className="text-white font-medium text-[20px] mx-auto w-full mt-[26px] max-w-[421px] ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </Text>
              </MyModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
