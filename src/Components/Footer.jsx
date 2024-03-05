import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div
        style={{ fontFamily: "sans-serif" }}
        className="text-gray-400 flex justify-center items-center w-full bg-slate-900 h-80"
      >
        <div className="flex md:w-[80%] h-full items-center">
          <div className="text-sm flex md:w-[90%] space-x-6 lg:space-x-6 justify-between border-0 h-[70%] border-white">
            <div className="w-[90%] space-y-2 border-[0px] border-yellow-500">
              <span className="text-sm lg:text-base text-white">
                CATEGORIES
              </span>
              <div className="text-xs lg:text-sm flex flex-col justify-start space-y-3">
                <span className="hover:text-blue-500 duration-200 cursor-pointer">
                  Web Builder
                </span>
                <span className="hover:text-blue-500 duration-200 cursor-pointer">
                  Hosting
                </span>
                <span className="hover:text-blue-500 duration-200 cursor-pointer">
                  Data Center
                </span>
                <span className="hover:text-blue-500 duration-200 cursor-pointer">
                  Robotic - Automation
                </span>
              </div>
            </div>
            <div className="w-[90%] space-y-2 border-[0px] border-yellow-500">
              <span className="text-sm lg:text-base text-white">CONTACT</span>
              <div className="text-xs lg:text-sm flex flex-col justify-start space-y-3">
                <span className="hover:text-blue-500 duration-200 cursor-pointer">
                  Contact
                </span>
                <span className="hover:text-blue-500 duration-200 cursor-pointer">
                  Privacy Policy
                </span>
                <span className="hover:text-blue-500 duration-200 cursor-pointer">
                  Terms of Service
                </span>
                <span className="hover:text-blue-500 duration-200 cursor-pointer">
                  Categories
                </span>
                <span className="hover:text-blue-500 duration-200 cursor-pointer">
                  About
                </span>
              </div>
            </div>
            <div className="w-[90%] h-2/3 flex items-center border-[0px] border-yellow-500">
              <div className="flex">
                <div className="text-xs lg:text-sm flex items-center">
                  <span>United States</span>
                  <MdKeyboardArrowDown size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
