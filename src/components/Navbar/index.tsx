"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";

import Drawer from "../UI/Drawer";
import logo from "../../../public/icons/logo.svg";
// import { useTabContext } from "@/contexts/TabContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const { activeTab, setActiveTab } = useTabContext();

  // console.log(activeTab);
  const currentPath = usePathname();
  // console.log(currentPath);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  // const handleMenuClick = (path: string) => {
  //   setActiveTab(path);
  //   onClose(); // Close the drawer after setting the active tab
  // };
  useEffect(() => {
    if (isOpen) {
      const listItems = document.querySelectorAll(".list-items");
      gsap.set(listItems, { opacity: 0, x: 20 });
      gsap.to(listItems, {
        delay: 0.5,
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  return (
    <>
      <nav className="relative min-h-[80px] z-50 w-full">
        <div className="flex justify-center items-center w-full min-h-[80px]">
          <div className="relative max-w-[1232px] min-h-[80px] w-full flex flex-wrap items-center justify-between mx-auto py-4">
            <div className="flex justify-between w-full gap-[35px] mob:px-5 pb-4">
              <Link
                href="/"
                className="flex mob:justify-start space-x-3 mob:w-[140px] rtl:space-x-reverse"
              >
                <Image src={logo} alt="Flowbite Logo" width={204} height={75} />
              </Link>
              <div className="flex xl:pr-4 xl:hidden pt-6">
                <button
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 bg-gray-700 dark:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>

                <div
                  className={`${
                    isOpen ? "block" : "hidden"
                  } w-full md:block md:w-auto`}
                  id="navbar-default"
                >
                  <ul className="font-normal mob:absolute mob:top-[100px] items-center mob:px-4 mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[50px] md:flex-row rtl:space-x-reverse md:mt-0 tab:bg-black">
                    {/* <li>
                      <Link href="/" onClick={() => setActiveTab("/")} className={`block text-[14px] font-montserrat font-normal leading-[17.07px] ${activeTab === "/" ? "text-accentGreen font-semibold" : "text-[#151515]"}`}>
                        HOME
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        href="/who-we-are"
                        // onClick={() => setActiveTab("/who-we-are")}
                        className={`block text-[14px] font-montserrat font-normal leading-[17.07px] ${
                          currentPath === "/who-we-are"
                            ? "text-accentGreen font-semibold"
                            : "text-[#151515]"
                        }`}
                      >
                        Who We Are
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/what-we-do"
                        // onClick={() => setActiveTab("/what-we-do")}
                        className={`block text-[14px] font-montserrat font-normal leading-[17.07px] ${
                          currentPath === "/what-we-do"
                            ? "text-accentGreen font-semibold"
                            : "text-[#151515]"
                        }`}
                      >
                        What We Do
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers"
                        // onClick={() => setActiveTab("/careers")}
                        className={`block text-[14px] font-montserrat font-normal leading-[17.07px] ${
                          currentPath === "/careers"
                            ? "text-accentGreen font-semibold"
                            : "text-[#151515]"
                        }`}
                      >
                        CAREERS AT TACTIQ
                      </Link>
                    </li>
                    {/* <li className="xl:hidden">
                      <Link href="/contact">
                        <button className="uppercase px-[23px] h-[44px] rounded-[4px] bg-[#30434D] border-[#30434D] border text-[14px] font-montserrat font-bold leading-[25.5px] text-[#FFFFFF]">
                          CONTACT US
                        </button>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="hidden xl:block">
                <div className="relative cursor-pointer flex" onClick={onOpen}>
                  <button
                    type="button"
                    className="inline-flex items-center w-10 h-10 justify-center text-sm border border-[#fff]/90 bg-[#fff] text-[#00297A] rounded-lg"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </button>
                </div>
                <Drawer isOpen={isOpen} onClose={onClose}>
                  <ul className="font-normal w-full z-50 flex flex-col py-4 gap-0">
                    {["/who-we-are", "/what-we-do", "/careers"].map((path) => (
                      <a
                        href={path}
                        key={path}
                        // onClick={() => handleMenuClick(path)}
                        // onClick={() => setActiveTab(path)}
                        className={`block text-[20px] font-montserrat font-medium leading-[25.5px] ${
                          currentPath === path
                            ? "text-accentGreen font-semibold"
                            : "text-[#FFFFFF]"
                        }`}
                      >
                        <li className="flex justify-center py-[15px] list-items">
                          {/* {path === '/' ? 'HOME' : path.slice(1).toUpperCase()} */}
                          {path.slice(1).toUpperCase()}
                        </li>
                        <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>
                      </a>
                    ))}
                    {/* <a
                          href="/contact"
                          className="flex justify-center  text-[16px]  font-normal leading-7 text-[#FFFFFF] font-montserrat"
                        >
                          <li className="hidden xl:block mt-5 list-items">
                            <button className=" hidden xl:block  px-[23px] py-[11px] rounded-[4px] bg-accentGreen text-[15px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] ">
                            CONTACT US
                            </button>
                          </li>
                        </a> */}
                  </ul>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
