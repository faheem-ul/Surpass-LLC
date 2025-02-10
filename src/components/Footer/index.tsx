// import React from "react";
// import Image from "next/image";

// import Text from "../UI/Text";
// import Button from "../UI/Button";

// import logo from "@/public/images/footer/logo.svg";
// import phone from "@/public/images/footer/call.svg";
// import clock from "@/public/images/footer/clock.svg";
// import location from "@/public/images/footer/location.svg";

// const Footer = () => {
//   return (
//     <div className="bg-gradient-to-br from-[#033C8B] to-[#000000] text-white pt-10 pb-6">
//       <div className="max-w-[1270px] mx-auto px-5 ">
//         <div className="flex justify-between items-start gap-16">
//           <div className="w-full max-w-[315px]">
//             <Image src={logo} alt="logo" className="mt-2 w-[215px] " />
//           </div>

//           <div className="w-full max-w-[247px]">
//             <Text className="text-white text-[26px] font-semibold mb-[20px]">
//               Get In Touch
//             </Text>
//             <div className="flex w-full gap-[14px] justify-start items-center">
//               <Image src={phone} alt="phone" className="w-[24px]" />
//               <Text className="text-[15px] leading-[28px] font-normal font-Segoe text-white">
//                 (855) 321-4567
//               </Text>
//             </div>
//             <div className="flex w-full gap-[24px] justify-start items-center my-[43px]">
//               <Image src={clock} alt="phone" />
//               <Text className="text-[15px] leading-[25px] font-normal font-Segoe text-white">
//                 09:00 am – 05:00 pm
//               </Text>
//             </div>
//             <div className="flex w-full gap-[24px] justify-start items-center my-[43px]">
//               <Image src={location} alt="phone" />
//               <Text className="text-[15px] leading-[21px] font-normal font-Segoe text-white">
//                 1550 Larimer Street, <br /> Suite 932, <br /> Denver, CO 80202
//               </Text>
//             </div>
//           </div>

//           {/* Stay connected */}
//           <div className="relative right-[41px]">
//             <Text className="text-white text-[26px] font-semibold mb-[66px]">
//               Stay Connected
//             </Text>

//             <div className="relative ">
//               <input
//                 type="email"
//                 placeholder="connect@mrsurpass.com"
//                 className="px-[18px] w-[252px] py-2 mr-[20px] rounded-[100px] absolute h-[38px] text-black text-[10px] font-Segoe"
//               />
//               <Button className="bg-[#1197CD] w-[88px] text-[12px] absolute right-[-69px] h-[38px] rounded-r-[100px] text-white">
//                 Subscribe
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full border border-[#FFFFFF] mt-[80px] "></div>

//       <div className=" flex justify-center px-5 mt-[19px]">
//         <Text className="text-[14px] font-bold text-white mb-3">
//           Copyright. All rights reserved 2025
//         </Text>
//       </div>
//     </div>
//   );
// };

// export default Footer;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Text from "../UI/Text";
import Button from "../UI/Button";

import logo from "@/public/icons/logo.svg";
// import { useTabContext } from "@/contexts/TabContext";
// import twitter from "@/public/icons/twitter.svg";
// import intsa from "@/public/icons/instagaram.svg";
// import fb from "@/public/icons/facebook.svg";
const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  // const { activeTab, setActiveTab } = useTabContext();
  const currentPath = usePathname();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
        }),
      });

      if (response.ok) {
        setResponseMessage("Thank you for your submission!");
        alert("You Have Subscribed successfully!");
      } else {
        setResponseMessage("Failed to submit. Please try again later.");
      }
    } catch (error) {
      console.log(error);
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-t from-[#000000] to-[#033C8B] pt-16 pb-6 px-5">
      <div className="flex justify-center overflow-hidden">
        <div className="max-w-[1153px] w-full flex flex-wrap justify-between">
          <div className="flex-col w-full max-w-[207px]">
            {/* <Text className="text-[#D5D8DD] text-[24px] font-semibold mob:text-[22px]">
              About
            </Text> */}
            {/* <Text className="text-[#FFFFFF]  leading-[25.89px] text-[14px] mt-4 mob:mt-2">
              At TACTIQ, we transform organizations by seamlessly blending
              cutting-edge technology with strategic insight.
            </Text> */}
            <div className="mt-2 mob:hidden">
              <Image src={logo} alt="" width={170} />
            </div>
          </div>
          <div className="flex-col w-full max-w-[207px] mob:mt-5 ]">
            <Text className="text-[#D5D8DD] text-[20px] font-semibold mob:text-[22px] mb-4 mob:mb-2">
              Sitemap
            </Text>

            <Link
              href="/"
              className={`  leading-[25.89px] text-[14px] uppercase font-Segoe  text-[#FFFFFF] mob:text-[15px]  ${
                currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
              } `}
            >
              {/* <Text className=""> */}
              Home
              {/* </Text> */}
            </Link>
            <br />
            <Link
              href="/"
              className={`text-[#FFFFFF]  leading-[25.89px] text-[14px] uppercase font-Segoe  font-normal  mob:text-[15px]  ${
                currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
              }`}
            >
              About Us
            </Link>
            <br />
            <Link
              href="/"
              className={`text-[#FFFFFF]  leading-[25.89px] text-[14px] uppercase font-Segoe  font-normal  mob:text-[15px]  ${
                currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
              }`}
            >
              Testimonials
            </Link>

            <br />
            <Link
              href="/"
              className={`text-[#FFFFFF]  leading-[25.89px] text-[14px] uppercase font-Segoe  font-normal  mob:text-[15px]  ${
                currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
              }`}
            >
              Who We Are
            </Link>

            <br />
            <Link
              href="/"
              className={`text-[#FFFFFF]  leading-[25.89px] text-[14px] uppercase font-Segoe  font-normal  mob:text-[15px] ${
                currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
              }`}
            >
              Contact Us
            </Link>
            <br />

            {/* <Text className="text-[#FFFFFF]  leading-[25.89px]   mt-1 text-[14px] uppercase">
              Statement
            </Text> */}
          </div>
          <div className="flex-col w-full max-w-[256px] mob:mt-5">
            <Text className="text-[#D5D8DD] text-[20px] font-semibold mob:text-[22px]">
              Address
            </Text>
            <Text className="text-[#FFFFFF]  leading-[25.89px] text-[14px] mt-4 mob:mt-2">
              1550 Larimer Street, Suite 932, <br /> Denver, CO 80202
            </Text>
            <Text className="text-[#D5D8DD] text-[20px] font-semibold mob:text-[22px] mt-[12px]">
              Contact US
            </Text>

            <Text className="text-[#FFFFFF] leading-[25.89px] text-[14px] mt-2">
              {" "}
              <a href="tel: (855) 321-4567">(855) 321-4567</a>
            </Text>
          </div>
          <div className="flex-col w-full max-w-[297px] mob:mt-5">
            <Text className="text-[#D5D8DD] text-[20px] font-semibold mob:text-[22px]">
              Newsletter
            </Text>
            <Text className="text-[#FFFFFF]  leading-[25.89px] text-[14px] mt-4 mob:mt-2">
              Stay in the loop with the latest updates!
            </Text>
            <form className="flex mt-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#FFFFFF] placeholder:text-[16px] placeholder:text-[#6B6B6B] py-1 pl-2 pr-3 max-w-[190px] rounded-l-[4px] outline-none"
              />
              <Button
                className=" bg-[#0e86be] w-[130px] h-[36px] rounded-l-0 rounded-r-[4px] "
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "subscribing..." : "Subscribe"}
              </Button>
            </form>
            {responseMessage && (
              <p className="text-center text-[#4fb848] mt-4 font-Segoe">
                {responseMessage}
              </p>
            )}
            <div className=" flex items-center mob:justify-center gap-[21px] mt-10 mob:w-full">
              <div className="mob:block hidden">
                <Image src={logo} alt="" width={230} height={74} />
              </div>
              {/* <div className="flex items-center mob:w-full gap-[21px] ">
                <Image src={twitter} alt="" width={24.52} height={24.52} />
                <Image src={intsa} alt="" width={24.52} height={24.52} />
                <Image src={fb} alt="" width={24.52} height={24.52} />
                </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20 mob:justify-start">
        <div className="flex justify-between items-center mob:w-[140px] mob:gap-8 w-full max-w-[1170px]">
          <div className="flex-col  w-full">
            <hr className="border-t-1  w-full border-gray-400 my-4" />
          </div>
          <div className=" flex justify-center min-w-[300px]">
            <Text className="text-white/80 flex shirnk-0 text-center">
              Copyright © 2025 SURPASS LLC
            </Text>
          </div>
          <div className="flex-col  w-full">
            <hr className="border-t-1 w-full  border-gray-400 my-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
