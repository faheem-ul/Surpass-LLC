"use client";
import Image from "next/image";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";

import Text from "./Text";

import modalSvg from "@/public/images/modal.svg";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const MyModal: React.FC<ModalProps> = ({
  title,
  children,
  isOpen,
  closeModal,
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
              <Dialog.Panel className="w-full relative max-w-[515px] min-h-[442px] mob:max-w-full transform  bg-[#74757AB2]/70 rounded-[35px] mob:rounded-[10px]">
                <div className="w-full flex justify-end items-end">
                  {/* <button
                    type="button"
                    className=" rounded-md border border-transparent hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 duration-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    <RxCross2 className="text-[#34C4CA] text-[30px] font-bold" />
                  </button> */}
                </div>
                <Image
                  src={modalSvg}
                  alt="modal svg"
                  className="mx-auto mt-[-80px] relative"
                />
                <div className="flex justify-center items-center absolute mt-[-90px] w-full">
                  <Text className=" font-medium text-[12px] mob:text-[12px] leading-[18px] text-[#fff] text-center w-[100px] mob:leading-[45px]">
                    {title}
                  </Text>
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
