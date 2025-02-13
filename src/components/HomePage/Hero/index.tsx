"use client";
import React, { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

import Text from "@/components/UI/Text";
import Button from "@/components/UI/Button";
import MyModal from "@/components/UI/Modal";
import Navbar from "@/components/Navbar";

import PolygonSvg from "./PolygonSvg";

import ourvalue from "@/public/images/home/ourvalue.png";
import businessplan from "@/public/images/home/business-plan.png";
import whychooseus from "@/public/images/home/whyshouldchoose.png";
import mission from "@/public/images/home/mission.png";

type ModalContent = {
  text?: string | string[];
  image?: StaticImageData;
  video?: string;
};

const HomeHero = () => {
  const [selectedText, setselectedText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  console.log(isModalOpen);

  const modalContentMapping: Record<string, ModalContent> = {
    "Chief Cloud Officer": {
      text: "Guide CFOs and construction controllers on how to leverage the virtual tools, shortage space, and technology (phones, computers, tablets) to  better manage resources, re-think the way the company operates and responds to risk. The service develops (or improving upon) the  company's digital accounting assets, security management, resource utilization, and offer maximum value to the owners, accounting staff, including an auditor portal, if necessary.",

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
    "Why Choose Us": {
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

    "Financial Resilience Manager": {
      text: "A Financial Resilience Coordinator works on developing and achieving the company’s financial goals by providing guidance and advice on money management.This is a tailored financial service that focuses on the company’s debts, budgets, and cash flow needs to enable the company to make informed financial decisions as well as optimizing resources.",
      // image: ourvalue,
    },

    "Backup Support": {
      text: [
        "Construction Accountant – transitionary period for the company where an accountant is not available but day-to-day tasks need to be handled. ",
        "Payroll Processor – due to an employee’s family or medical leave of absence, employee terminates, or limited resources for special projects, the company needs temporary support.",
        "Data Backlog – banking and credit card reconciliations are backed up or incomplete. Dedicated and skilled accountant is needed for the catch-up process.",
        "Credit Card Data Upload into Sage – large volume of credit card transitions are unreconciled and need to be uploaded into Sage. Special Project, please contact us for additional information.",
        "Other Services – a number of other events can occur for a company that result in a need for temporary assistance. Please contact us.",
      ],
    },
    Video: {
      text: "Watch our introductory video.",
      video: "/images/home/modal-video.mp4", // Update with your actual video path
    },
  };

  const handleOpenModal = (text: string) => {
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
    <div className="relative w-full min-h-[100vh]">
      <video
        className="absolute left-0 top-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/home/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Navbar />
      <div className="w-full h-full flex justify-center items-center px-5  pt-[68px] overflow-hidden z-10">
        <div className="w-full max-w-[1270px] flex justify-center items-center">
          <div className="w-full flex justify-center items-center mb-[222px] mob:flex-col">
            <div
              className="w-full max-w-[50%] mob:max-w-full"
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-easing="ease-in-sine"
            >
              <Text className="text-[42px] font-bold z-10 relative text-white">
                Mutual Rapport &
              </Text>
              <Text className="text-[72px] z-10 relative mt-[-20px] text-[#1198CE] font-semibold">
                Surpass LLC
              </Text>
              <div className="w-[213px] border border-[#0B619D] mt-[26px] z-10 relative"></div>
              <Text className="text-white font-normal text-[20px] z-10 relative mt-[19px] mb-[40px]">
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
            <div className="flex items-center gap-1 w-full max-w-[54%] mob:max-w-full relative">
              <div
                className="relative top-[48px] right-[-15px]"
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
                className="flex flex-col"
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
                className="flex flex-col relative top-[48px] left-[-18px]"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-sine"
              >
                <PolygonSvg
                  text="Construction Payroll"
                  onClick={handleOpenModal}
                />
                <PolygonSvg text="Human Resources" onClick={handleOpenModal} />
                <PolygonSvg text="Why Choose Us" onClick={handleOpenModal} />
              </div>
              <div
                className="flex flex-col relative top-[48px] left-[-35px]"
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
                className="flex flex-col relative bottom-[-1px] left-[-52px]"
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
                className="flex flex-col relative bottom-[0px] left-[-68px]"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-easing="ease-in-sine"
              >
                <PolygonSvg text="The Mission" onClick={handleOpenModal} />
                <PolygonSvg text="" onClick={handleOpenModal} />
                <PolygonSvg text="" onClick={handleOpenModal} />
              </div>
              <div
                className="flex flex-col relative bottom-[-46px] left-[-84px]"
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-easing="ease-in-sine"
              >
                <PolygonSvg text="" onClick={handleOpenModal} />
                <PolygonSvg text="" onClick={handleOpenModal} />
                <PolygonSvg text="Articles" onClick={handleOpenModal} />
              </div>
              <div
                className="flex flex-col relative bottom-[2px] left-[-101px]"
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-easing="ease-in-sine"
              >
                <PolygonSvg text="Video" onClick={handleOpenModal} />
              </div>
              <MyModal
                title={selectedText}
                isOpen={!!selectedText}
                closeModal={handleCloseModal}
                classname={`${
                  modalContent?.video
                    ? "max-w-[850px] px-12 pb-10"
                    : "max-w-[515px]"
                }`}
              >
                <div className="no-scrollbar">
                  {modalContent?.text && !modalContent?.video && (
                    <Text className="text-white font-medium text-[14px] mx-auto w-full mt-[26px] max-w-[421px] pb-10">
                      {modalContent?.text}
                    </Text>
                  )}

                  {modalContent?.image && (
                    <div>
                      <Image
                        src={modalContent.image}
                        alt="Modal Content"
                        className="pb-[0px] rounded-b-[34px]"
                        data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-sine"
                      />
                    </div>
                  )}

                  {modalContent?.video && (
                    <div className="w-full flex justify-center items-center">
                      <video
                        className="w-full shadow-lg "
                        controls
                        autoPlay
                        loop
                        muted
                      >
                        <source src={modalContent.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>
              </MyModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
