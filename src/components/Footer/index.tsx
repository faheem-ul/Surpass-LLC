import React from "react";
import Image from "next/image";

import Text from "../UI/Text";
import Button from "../UI/Button";

// import fb from "@/public/images/footer/fb.svg";
// import twitter from "@/public/images/footer/twitter.svg";
// import instagram from "@/public/images/footer/insta.svg";
// import linkedin from "@/public/images/footer/linkedin.svg";
import logo from "@/public/images/footer/logo.svg";
import phone from "@/public/images/footer/call.svg";
import clock from "@/public/images/footer/clock.svg";
import location from "@/public/images/footer/location.svg";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-[#033C8B] to-[#000000] text-white pt-10 pb-6">
      <div className="max-w-[1270px] mx-auto px-5 ">
        <div className="flex justify-between items-start gap-16">
          {/* Left Section - Logo and Description */}
          <div className="w-full max-w-[315px]">
            <Image src={logo} alt="logo" className="h-[191px] w-[315px] " />

            {/* <div className="flex space-x-[60px]">
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
            </div> */}
          </div>

          {/* Center Section - Links */}
          {/* <div className="flex flex-col space-y-4 mt-[118px]">
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
          </div> */}

          {/* Right Section - Contact */}
          <div className="w-full max-w-[247px]">
            <Text className="text-white text-[26px] font-semibold mb-[66px]">
              Get In Touch
            </Text>
            <div className="flex w-full gap-[24px] justify-start items-center">
              <Image src={phone} alt="phone" />
              <Text className="text-[15px] leading-[28px] font-normal font-Segoe text-white">
                (855) 321-4567
              </Text>
            </div>
            <div className="flex w-full gap-[24px] justify-start items-center my-[43px]">
              <Image src={clock} alt="phone" />
              <Text className="text-[15px] leading-[25px] font-normal font-Segoe text-white">
                Open today <br /> 09:00 am – 05:00 pm
              </Text>
            </div>
            <div className="flex w-full gap-[24px] justify-start items-center my-[43px]">
              <Image src={location} alt="phone" />
              <Text className="text-[15px] leading-[21px] font-normal font-Segoe text-white">
                1550 Larimer Street, <br /> Suite 932, <br /> Denver, CO 80202
              </Text>
            </div>
          </div>

          {/* Stay connected */}
          <div className="relative right-[41px]">
            <Text className="text-white text-[26px] font-semibold mb-[66px]">
              Stay Connected
            </Text>

            <div className="relative ">
              <input
                type="email"
                placeholder="connect@mrsurpass.com"
                className="px-[18px] w-[252px] py-2 mr-[20px] rounded-[100px] absolute h-[38px] text-black text-[10px] font-Segoe"
              />
              <Button className="bg-[#1197CD] w-[88px] text-[12px] absolute right-[-69px] h-[38px] rounded-r-[100px] text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border border-[#FFFFFF] mt-[80px] "></div>
      {/* Footer Bottom */}
      <div className=" flex justify-center px-5 mt-[19px]">
        <Text className="text-[14px] font-bold text-white mb-3">
          Copyright. All rights reserved 2025
        </Text>
        {/* <Text className="text-[12px] text-white">MR SURPPASS LLC </Text> */}
      </div>
    </div>
  );
};

export default Footer;
