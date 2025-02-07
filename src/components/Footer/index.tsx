import React from "react";
import Image from "next/image";

import Text from "../UI/Text";

import fb from "@/public/images/footer/fb.svg";
import twitter from "@/public/images/footer/twitter.svg";
import instagram from "@/public/images/footer/insta.svg";
import linkedin from "@/public/images/footer/linkedin.svg";
import logo from "@/public/images/footer/logo.svg";
import phone from "@/public/images/footer/call.svg";
import clock from "@/public/images/footer/clock.svg";
import location from "@/public/images/footer/location.svg";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-[#033C8B] to-[#000000] text-white pt-10 pb-6">
      <div className="max-w-[1440px] mx-auto px-5 ">
        <div className="flex justify-between items-start gap-16">
          {/* Left Section - Logo and Description */}
          <div className="w-full max-w-[315px]">
            <Image src={logo} alt="logo" className="h-[191px] w-[315px] " />
            <Text className="text-white text-[22px] leading-[28px] font-normal mt-[44px] mb-[78px]">
              Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum.
            </Text>
            <div className="flex space-x-[60px]">
              <a href="#" className="text-xl">
                <Image src={fb} alt="fb" />
              </a>
              <a href="#" className="text-xl">
                <Image src={twitter} alt="fb" />
              </a>
              <a href="#" className="text-xl">
                <Image src={instagram} alt="fb" />
              </a>
              <a href="#" className="text-xl">
                <Image src={linkedin} alt="fb" />
              </a>
            </div>
          </div>

          {/* Center Section - Links */}
          <div className="flex flex-col space-y-4 mt-[118px]">
            <div className="font-semibold">
              <Text className="text-white text-[30px] font-semibold mb-[66px]">
                Helpful Links
              </Text>
            </div>
            <ul className="space-y-[18px] text-[22px] leading-[28px] font-normal font-montserrat">
              <li className="">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Testimonial</a>
              </li>
              <li>
                <a href="#">Who We Are</a>
              </li>
            </ul>
          </div>

          {/* Right Section - Contact */}
          <div className="w-full max-w-[247px] mt-[118px]">
            <Text className="text-white text-[30px] font-semibold mb-[66px]">
              Get In Touch
            </Text>
            <div className="flex w-full gap-[24px] justify-start items-center">
              <Image src={phone} alt="phone" />
              <Text className="text-[16px] leading-[28px] font-normal font-montserrat text-white">
                (855) 321-4567
              </Text>
            </div>
            <div className="flex w-full gap-[24px] justify-start items-center my-[43px]">
              <Image src={clock} alt="phone" />
              <Text className="text-[16px] leading-[28px] font-normal font-montserrat text-white">
                Open today <br /> 09:00 am – 05:00 pm
              </Text>
            </div>
            <div className="flex w-full gap-[24px] justify-start items-center my-[43px]">
              <Image src={location} alt="phone" />
              <Text className="text-[16px] leading-[28px] font-normal font-montserrat text-white">
                1550 Larimer Street, <br /> Suite 932, <br /> Denver, CO 80202
              </Text>
            </div>
          </div>

          {/* Stay connected */}
          <div className="mt-[118px]">
            <Text className="text-white text-[30px] font-semibold mb-[66px]">
              Stay Connected
            </Text>

            <input
              type="email"
              placeholder="Enter email"
              className="px-5 py-2 rounded-l-[100px] w-72 text-black"
            />
            <button className="bg-[#1197CD] px-4 py-2 rounded-r-[100px] text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="w-full border border-[#FFFFFF] mt-[80px] "></div>
      {/* Footer Bottom */}
      <div className=" flex justify-between max-w-[1440px] px-5 mt-2">
        <Text className="text-[12px] text-white">Copyright © 2025</Text>
        <Text className="text-[12px] text-white">MR SURPPASS LLC </Text>
      </div>
    </div>
  );
};

export default Footer;
