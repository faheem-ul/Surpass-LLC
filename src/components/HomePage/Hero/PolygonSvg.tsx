"use client";

import React from "react";

import Text from "@/components/UI/Text";
import useDisclosure from "@/components/UI/useDisclosure";

interface Props {
  text: string;
  onClick?: (text: string) => void;
}

const PolygonSvg: React.FC<Props> = ({ text, onClick }) => {
  const { onOpen } = useDisclosure();
  return (
    <div
      className="relative group flex justify-center items-center hover:text-white cursor-default"
      onClick={() => {
        if (onClick) {
          onClick(text);
        }
        onOpen(); // Ensure modal opens even if text is empty
      }}
    >
      {/* Background SVG (First SVG) */}
      <svg
        className="transition-all w-[97px] h-[97px] relative group-hover:scale-[1.45] duration-1000 group-hover:z-[100] origin-center text-[#1196CD] group-hover:text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 120"
        style={{ overflow: "visible" }}
      >
        <path
          fill="currentColor"
          className="transition-all duration-100"
          d="M1.50859 58.5447C-0.283327 55.447 -0.283327 51.6279 1.50859 48.5302L26.6753 5.02431C28.4628 1.93438 31.7617 0.0315537 35.3314 0.0315536L85.6984 0.0315514C89.2681 0.0315512 92.567 1.93438 94.3545 5.0243L119.521 48.5302C121.313 51.6279 121.313 55.447 119.521 58.5447L94.3545 102.051C92.567 105.141 89.2681 107.043 85.6984 107.043L35.3314 107.043C31.7617 107.043 28.4628 105.141 26.6753 102.051L1.50859 58.5447Z"
        />
      </svg>

      {/* Foreground SVG (Second SVG - Outline) */}
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute hover:origin-center stroke-white top-[-1.5px] left-[6.4px] group-hover:left-[9%] group-hover:top-[-3%] w-[94px] h-[94px] group-hover:stroke-[#88CCE7] group-hover:scale-[1.45] transition-all group-hover:z-[100] duration-1000"
        viewBox="0 0 120 100"
      >
        <path
          d="M4.77197 51.0425C3.51763 48.8742 3.51763 46.2008 4.77197 44.0324L26.3711 6.69383C27.6223 4.53089 29.9316 3.19891 32.4303 3.19891L75.6621 3.19891C78.1609 3.19891 80.4701 4.53089 81.7213 6.69384L103.32 44.0324C104.575 46.2008 104.575 48.8742 103.32 51.0425L81.7213 88.3811C80.4702 90.5441 78.1609 91.876 75.6621 91.876L32.4303 91.876C29.9316 91.876 27.6223 90.5441 26.3711 88.3811L4.77197 51.0425Z"
          strokeWidth="4"
        />
      </svg>

      {/* Centered Text */}
      <div className="absolute w-full h-full top-[-5px] flex justify-center items-center left-[0px] px-[22px]">
        <Text className="text-[10px] font-Segoe transition-all leading-[13px] group-hover:text-black font-semibold group-hover:scale-[1.45] group-hover:z-[100] duration-1000 text-center text-white">
          {text}
        </Text>
      </div>
    </div>
  );
};

export default PolygonSvg;
