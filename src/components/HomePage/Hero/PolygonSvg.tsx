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
      {/* <MyModal title="something" isOpen={isOpen} closeModal={onClose}>
        <Text className=" text-[#34C4CA] text-[30px] mb-5 mob:text-[20px] font-semibold">
          This is modal
        </Text>
      </MyModal> */}
      {/* Background SVG (First SVG) */}

      {/* 124 110 112 98 */}
      <svg
        // width="120"
        // height="108"
        fill="none"
        className="fill-white transition-all w-[120px] h-[108px] relative group-hover:scale-[1.45] duration-1000 group-hover:fill-[#1196CD] group-hover:z-[100]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.50859 58.5447C-0.283327 55.447 -0.283327 51.6279 1.50859 48.5302L26.6753 5.02431C28.4628 1.93438 31.7617 0.0315537 35.3314 0.0315536L85.6984 0.0315514C89.2681 0.0315512 92.567 1.93438 94.3545 5.0243L119.521 48.5302C121.313 51.6279 121.313 55.447 119.521 58.5447L94.3545 102.051C92.567 105.141 89.2681 107.043 85.6984 107.043L35.3314 107.043C31.7617 107.043 28.4628 105.141 26.6753 102.051L1.50859 58.5447Z" />
      </svg>

      {/* Foreground SVG (Second SVG - Outline) */}
      <svg
        // width="108"
        // height="96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute  stroke-[#88CCE7] w-[108px] h-[96px] group-hover:stroke-white group-hover:scale-[1.45] transition-all group-hover:z-[100] duration-1000"
      >
        <path
          d="M4.77197 51.0425C3.51763 48.8742 3.51763 46.2008 4.77197 44.0324L26.3711 6.69383C27.6223 4.53089 29.9316 3.19891 32.4303 3.19891L75.6621 3.19891C78.1609 3.19891 80.4701 4.53089 81.7213 6.69384L103.32 44.0324C104.575 46.2008 104.575 48.8742 103.32 51.0425L81.7213 88.3811L84.3182 89.8833L81.7213 88.3811C80.4702 90.5441 78.1609 91.876 75.6621 91.876L32.4303 91.876C29.9316 91.876 27.6223 90.5441 26.3711 88.3811L4.77197 51.0425Z"
          strokeWidth="4"
        />
      </svg>

      {/* Centered Text */}
      <div className="absolute w-full h-full top-[3px] flex justify-center items-center left-[-1px] px-5">
        <Text className="text-[11px] font-medium group-hover:text-white transition-all group-hover:scale-[1.45] group-hover:z-[100] duration-1000 text-center text-black">
          {text}
        </Text>
      </div>
    </div>
  );
};

export default PolygonSvg;
