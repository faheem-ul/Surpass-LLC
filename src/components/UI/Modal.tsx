"use client";
import Image from "next/image";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { RxCross2 } from "react-icons/rx";

import Text from "./Text";

import modalSvg from "@/public/images/modal.svg";
import { cn } from "@/lib/utils";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  classname: string;
  closeModal: () => void;
}

const MyModal: React.FC<ModalProps> = ({
  title,
  children,
  isOpen,
  closeModal,
  classname,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[10001]" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#000000E5]/90 mob:hidden" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full w-full items-center justify-center py-4 px-6 mob:px-4 text-center mob:bg-[#565C67]/50 mob:bg-opacity-60">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={cn(
                  "w-full relative max-w-[515px]  border-[4px] border-white max-h-[600px] mob:max-w-full transform  bg-[#74757AB2]/70 rounded-[35px] mob:rounded-[10px]",
                  classname
                )}
              >
                <div className="w-full flex justify-end items-end">
                  {/* <button
                    type="button"
                    className=" rounded-md border border-transparent hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 duration-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    <RxCross2 className="text-[#34C4CA] text-[30px] font-bold" />
                  </button> */}
                </div>
                <div
                  className=""
                  data-aos="fade-down"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-sine"
                >
                  <div className="relative w-full flex justify-center">
                    <Image
                      src={modalSvg}
                      alt="modal svg"
                      className="mx-auto mt-[-80px] relative"
                    />
                    <div className="absolute inset-0 mt-[-80px] flex items-center justify-center">
                      <Text className="font-bold text-[12px] mob:text-[12px] leading-[18px] text-[#fff] text-center w-[100px]">
                        {title}
                      </Text>
                    </div>
                  </div>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MyModal;
