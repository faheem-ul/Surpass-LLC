"use client";
import React, { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

import Text from "@/components/UI/Text";
import Button from "@/components/UI/Button";
import MyModal from "@/components/UI/Modal";

import PolygonSvg from "./PolygonSvg";

import ourvalue from "@/public/images/home/ourvalue.png";
import businessplan from "@/public/images/home/business-plan.png";
import whychooseus from "@/public/images/home/whyshouldchoose.png";
import mission from "@/public/images/home/mission.png";
import bg from "@/public/images/bg.png";

type ModalContent = {
  text?: string;
  image?: StaticImageData;
};

const HomeHero = () => {
  const [selectedText, setselectedText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  console.log(isModalOpen);

  const modalContentMapping: Record<string, ModalContent> = {
    "Chief Cloud Officer": {
      // text: "Details about Chief Cloud Officer role...",
      // image: ourvalue,
    },
    "Business Plan": {
      // text: "Detailed business plans and strategy...",
      image: businessplan,
    },
    "Construction Accounting": {
      // text: "Information on construction accounting...",
      // image: ourvalue,
    },
    "I .T": {
      // text: "Information about IT services...",
    },
    "Construction Payroll": {
      // text: "How we handle construction payroll...",
    },
    "Human Resources": {
      // text: "Our approach to human resources...",
    },
    "Why You Should Choose Us ?": {
      // text: "Reasons to choose our company...",
      image: whychooseus,
    },
    Articles: {
      // text: "Read our latest articles...",
      // image: ourvalue,
    },
    "Our Values": {
      // text: "Read our latest articles...",
      image: ourvalue,
    },
    "The Mission": {
      // text: "What we stand for...",
      image: mission,
    },
  };

  const handleOpenModal = (text: string) => {
    // console.log(text);
    const content = modalContentMapping[text];
    // console.log(content?.text);
    setIsModalOpen(true);
    setModalContent(content);
    // console.log(modalContent);
    setselectedText(text);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setselectedText("");
  };
  // console.log(modalContent.text);
  return (
    <div className="relative w-full h-full z-10">
      <Image
        className="absolute top-[-250px] left-0 w-full h-full object-cover z-0"
        src={bg}
        alt=""
        // width={1440}
        // height={424}
      />
      <div className="w-full h-full flex justify-center items-center px-5 bg-black pt-[68px] overflow-hidden z-10">
        <div className="w-full max-w-[1440px] flex justify-center items-center">
          <div className="w-full flex justify-center items-center mb-[222px] mob:flex-col">
            <div className="w-full max-w-[50%] mob:max-w-full">
              <Text className="text-[42px] font-bold z-10 relative text-white">
                Mutual Rapport &
              </Text>
              <Text className="text-[72px] z-10 relative mt-[-20px] text-[#1198CE] font-medium">
                Surpass LLC
              </Text>
              <div className="w-[213px] border border-[#0B619D] mt-[26px] z-10 relative"></div>
              <Text className="text-white font-normal text-[20px] z-10 relative mt-[19px] mb-[77px]">
                Moving Forward Strategically!
              </Text>
              <div className="flex gap-5">
                <Button className="w-[166px] h-[42px] text-white rounded-[90px] relative font-bold bg-gradient-to-b from-[#1197CE] to-[#0B619D]">
                  Get Started
                </Button>
                <Button className="relative w-[166px] h-[42px] font-bold bg-black text-[#119AD0] rounded-[90px] p-[2px]">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#1199CF] to-[#0B619D] rounded-[90px]"></span>
                  <span className="relative flex items-center justify-center w-full h-full bg-black rounded-[90px]">
                    More Info.
                  </span>
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-1 w-full max-w-[58%] mob:max-w-full relative">
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
                <PolygonSvg text="I .T" onClick={handleOpenModal} />
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
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-easing="ease-in-sine"
              >
                <PolygonSvg text="Who We Are" onClick={handleOpenModal} />
                <PolygonSvg text="" onClick={handleOpenModal} />
                <PolygonSvg text="" onClick={handleOpenModal} />
                <PolygonSvg text="Q & A" onClick={handleOpenModal} />
              </div>
              <div
                className="flex flex-col gap-2 relative bottom-[5px] left-[-96px]"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-easing="ease-in-sine"
              >
                <PolygonSvg text="The Mission" onClick={handleOpenModal} />
                <PolygonSvg text="" onClick={handleOpenModal} />
                <PolygonSvg text="" onClick={handleOpenModal} />
              </div>
              <div
                className="flex flex-col gap-2 relative bottom-[-53px] left-[-120px]"
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-easing="ease-in-sine"
              >
                <PolygonSvg text="" onClick={handleOpenModal} />
                <PolygonSvg text="" onClick={handleOpenModal} />
                <PolygonSvg text="Articles" onClick={handleOpenModal} />
              </div>
              <div
                className="flex flex-col gap-2 relative bottom-[6px] left-[-145px]"
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-easing="ease-in-sine"
              >
                <PolygonSvg text="" onClick={handleOpenModal} />
              </div>
              <MyModal
                title={selectedText}
                isOpen={!!selectedText}
                closeModal={handleCloseModal}
              >
                <Text className="text-white relative z-10 font-medium text-[20px] mx-auto w-full mt-[26px] max-w-[421px] ">
                  {modalContent?.text}
                </Text>
                {modalContent?.image && (
                  <div className="mt-6">
                    <Image
                      src={modalContent.image}
                      alt="Modal Content"
                      // width={500}
                      // height={300}
                      className="object-cover px-5 pb-10"
                      data-aos="fade-up"
                      data-aos-duration="700"
                      data-aos-easing="ease-in-sine"
                    />
                  </div>
                )}
              </MyModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
