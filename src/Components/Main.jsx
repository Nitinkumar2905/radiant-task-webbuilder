import React from "react";
import {
  IoIosCheckmarkCircleOutline,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import desktop from "../images/desktop.png";
import { IoDiamondOutline } from "react-icons/io5";

const Main = () => {
  return (
    <>
      <div
        style={{ fontFamily: "sans-serif" }}
        className="flex justify-center w-full h-full"
      >
        <div className="flex  flex-col items-start border-0 border-black  w-[90%] lg:w-[80%]">
          <div className="flex flex-col items-start w-full">
            <div className="text-xl md:text-4xl lg:text-5xl w-full py-6 ">
              Best Website builders in the US
            </div>
            <div className="opacity-80 flex justify-between w-full h-12 border-y-[1px] border-gray-300 ">
              <div className="flex items-center">
                <span className="flex text-xs md:text-sm lg:text-base items-center">
                  <IoIosCheckmarkCircleOutline />
                  &nbsp; last Updated
                </span>
                &nbsp; - &nbsp;
                <span className="flex text-xs md:text-sm lg:text-base items-center">
                  Febuary 22, 2020
                </span>
                &nbsp; &nbsp;
                <span className="hidden text-sm lg:text-base md:flex items-center">
                  <IoIosInformationCircleOutline />
                  &nbsp;Advertising Disclosure
                </span>
              </div>
              <div className="flex text-xs md:text-sm lg:text-base items-center">
                Top Relevant <MdKeyboardArrowDown size={20} />
              </div>
            </div>
          </div>
          <div className="opacity-80 flex w-full border-0 h-16 items-center border-black">
            <div className="flex md:space-x-6 md:w-[90%]">
              <span className="px-2 text-[.70rem] md:text-sm lg:text-base md:px-2 lg:px-3 hover:text-blue-500 cursor-pointer">
                Tools
              </span>
              <span className="px-2 text-[.70rem] md:text-sm lg:text-base md:px-2 lg:px-3 hover:text-blue-500 cursor-pointer">
                AWS Builder
              </span>
              <span className="px-2 text-[.70rem] md:text-sm lg:text-base md:px-2 lg:px-3 hover:text-blue-500 cursor-pointer">
                Start Build
              </span>
              <span className="px-2 text-[.70rem] md:text-sm lg:text-base md:px-2 lg:px-3 hover:text-blue-500 cursor-pointer">
                Build Supplies
              </span>
              <span className="px-2 text-[.70rem] md:text-sm lg:text-base md:px-2 lg:px-3 hover:text-blue-500 cursor-pointer">
                Tooling
              </span>
              <span className="px-2 text-[.70rem] md:text-sm lg:text-base md:px-2 lg:px-3 hover:text-blue-500 cursor-pointer">
                BlueHosting
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center bg-gray-100 p-1 w-full opacity-80">
            <span className="flex items-center text-xs lg:text-sm lg:px-3">
              Home &nbsp; &nbsp;
              <MdOutlineKeyboardArrowRight size={20} />
            </span>
            <span className="flex items-center text-xs lg:text-sm lg:px-3">
              Hosting for all &nbsp; &nbsp;
              <MdOutlineKeyboardArrowRight size={20} />
            </span>
            <span className="flex items-center text-xs lg:text-sm lg:px-3">
              Hosting &nbsp; &nbsp;
              <MdOutlineKeyboardArrowRight size={20} />
            </span>
            <span className="flex items-center text-xs lg:text-sm lg:px-3">
              Hosting6 &nbsp; &nbsp;
              <MdOutlineKeyboardArrowRight size={20} />
            </span>
            <span className="text-xs lg:text-sm">Hosting5</span>
          </div>
          <div className="text-sm lg:text-base flex flex-col space-y-8  rounded-md opacity-80 my-10 items-start w-full">
            {/* 1st one */}
            <div className="relative flex flex-col md:flex-row bg-white justify-between w-full">
              {/* tag for best choice */}
              <div className="flex absolute p-[.35rem] text-white space-x-1 rounded-r-md -top-3  bg-orange-600">
                <GoTrophy color="white" />{" "}
                <span className="flex text-xs font-medium tracking-wide">
                  Best Choice
                </span>
              </div>
              {/* other content */}
              <div className="mt-6 relative space-x-1">
                <span>1</span>
                <div className="border-0 space-y-1 border-black flex flex-col items-center ">
                  <img src={desktop} className="w-[55%]" alt="" />
                  <span className="text-xs lg:text-base">Builder 1</span>
                </div>
              </div>
              <div className="lg:w-1/2 py-3 px-3 ">
                <div className="flex flex-col items-start">
                  <div className="flex flex-wrap w-full">
                    <span className="font-semibold">
                      WixPro 72-inch Responsive Website Builder&nbsp;
                    </span>
                    - Comprehensive
                  </div>
                  <p>
                    Digital Platform Creation Tool, Streamlined Design Interface
                    for Professional for Websites and Online Stores (Black/Blue)
                  </p>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold my-2">Main highlights</span>
                  <p className="px-2">
                    [What You Get]:Receive the WixPro website builder suite,
                    access to premium design templates, an extensive library of
                    widgets and apps , and detailed step by step guides.
                  </p>
                </div>
                <button className="my-2 text-blue-500 flex items-center">
                  Show more <MdKeyboardArrowDown />
                </button>
              </div>
              <div className="relative flex flex-col items-center h-60 lg:h-full pb-4 justify-between lg:w-[25%] border-0 border-black">
                <div className="w-fit flex flex-col justify-center items-center space-y-1 bg-blue-50 p-6 relative h-fit border-0 rounded-b-lg">
                  <IoIosInformationCircleOutline className="absolute top-4 right-6 opacity-80" />{" "}
                  <span className="text-3xl">9.8</span>{" "}
                  <span className="text-blue-800">Exceptional</span>
                  <div className="flex space-x-1">
                    <FaStar color="orange" size={12}></FaStar>
                    <FaStar color="orange" size={12}></FaStar>
                    <FaStar color="orange" size={12}></FaStar>
                    <FaStar color="orange" size={12}></FaStar>
                    <FaStar color="orange" size={12}></FaStar>
                  </div>
                </div>
                <div className="w-[80%]">
                  <button className="w-full py-2 px-8 rounded-md bg-blue-600 hover:bg-blue-700 text-white ">
                    View
                  </button>
                </div>
              </div>
            </div>
            {/* 2nd one */}
            <div className="relative flex flex-col md:flex-row bg-white justify-between w-full">
              {/* tag for best choice */}
              <div className="flex absolute p-[.35rem] text-white space-x-1 rounded-r-md -top-3  bg-orange-600">
                <IoDiamondOutline color="white" />{" "}
                <span className="flex text-xs font-medium tracking-wide">
                  Best Value
                </span>
              </div>
              {/* other content */}
              <div className="mt-6 relative space-x-1">
                <span>2</span>
                <div className="border-0 space-y-1 border-black flex flex-col items-center ">
                  <img src={desktop} className="w-[55%]" alt="" />
                  <span>Builder 2</span>
                </div>
              </div>
              <div className="lg:w-1/2 py-3 px-3 ">
                <div className="flex flex-col items-start">
                  <div className="flex flex-wrap w-full">
                    <span className="font-semibold">
                      SiteCraft 68-inch Ulimate Web Design Studio
                    </span>
                    - Advanced Site
                  </div>
                  <p>
                    Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic
                    Websites and E-commerce Platforms (Green/White)
                  </p>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold my-2">Main highlights</span>
                  <p className="px-2">
                    [What You Get]: Gain access to the SiteCraft design studio,
                    featuring a robust selection of design elements, SEO
                    optimization tools, and e-commerce integrations.
                  </p>
                </div>
                <button className="my-2 text-blue-500 flex items-center">
                  Show more <MdKeyboardArrowDown />
                </button>
              </div>
              <div className="relative flex flex-col items-center h-60 lg:h-full pb-4 justify-between lg:w-[25%] border-0 border-black">
                <div className="w-fit flex flex-col justify-center items-center space-y-1 bg-blue-50 p-6 relative h-fit border-0 rounded-b-lg">
                  <IoIosInformationCircleOutline className="absolute top-4 right-6 opacity-80" />{" "}
                  <span className="text-3xl">9.5</span>{" "}
                  <span className="text-blue-800">Excellent</span>
                  <div className="flex space-x-1">
                    <FaStar color="orange" size={12}></FaStar>
                    <FaStar color="orange" size={12}></FaStar>
                    <FaStar color="orange" size={12}></FaStar>
                    <FaStar color="orange" size={12}></FaStar>
                    <FaStar color="orange" size={12}></FaStar>
                  </div>
                </div>
                <div className="w-[80%]">
                  <button className="w-full py-2 px-8 rounded-md bg-blue-600 hover:bg-blue-700 text-white ">
                    View
                  </button>
                </div>
              </div>
            </div>
            {/* 3rd one */}
            <div className="relative flex flex-col md:flex-row bg-white justify-between w-full">
              {/* other content */}
              <div className="mt-6 relative space-x-1 border-0 border-black">
                <span>3</span>
                <div className="border-0 space-y-1 border-black flex flex-col items-center ">
                  <img src={desktop} className="w-[55%]" alt="" />
                  <span>Builder 3</span>
                </div>
              </div>
              <div className="lg:w-1/2 py-3 px-3 ">
                <div className="flex flex-col items-start">
                  <div className="flex flex-wrap w-full">
                    <span className="font-semibold">
                      WixPro 72-Inch Responsive Website Builder
                    </span>
                    - Comprehensive
                  </div>
                  <p>
                    Digital Platform Creation Tool, Streamlined Design Interface
                    for Professional Websites and Online Stores (Black/Blue)
                  </p>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold my-2">Main highlights</span>
                  <p className="px-2">
                    [What You Get]: Receive the WixPro website builder suite,
                    access to premium design templates, an extensive library of
                    widgets and apps, and detailed step-by-step guides.
                  </p>
                </div>
                <button className="my-2 text-blue-500 flex items-center">
                  Show more <MdKeyboardArrowDown />
                </button>
              </div>
              <div className="relative flex flex-col items-center h-60 lg:h-full pb-4 justify-between lg:w-[25%] border-0 border-black">
                <div className="w-fit flex flex-col justify-center items-center space-y-1 bg-blue-50 p-6 relative h-fit border-0 rounded-b-lg">
                  <IoIosInformationCircleOutline className="absolute top-4 right-6 opacity-80" />{" "}
                  <span className="text-3xl">9.3</span>{" "}
                  <span className="text-blue-800">Exceptional</span>
                  <div className="flex space-x-1">
                    <FaStar color="orange" size={12}></FaStar>
                    <FaStar color="orange" size={12}></FaStar>
                    <FaStar color="orange" size={12}></FaStar>
                    <FaStar color="orange" size={12}></FaStar>
                    <FaStar color="orange" size={12}></FaStar>
                  </div>
                </div>
                <div className="w-[80%]">
                  <button className="w-full py-2 px-8 rounded-md bg-blue-600 hover:bg-blue-700 text-white ">
                    View
                  </button>
                </div>
              </div>
            </div>
            {/* 4th one */}
            <div className="relative flex flex-col md:flex-row bg-white justify-between w-full">
              {/* other content */}
              <div className="mt-6 relative space-x-1 border-0 border-black">
                <span>4</span>
                <div className="border-0 space-y-1 border-black flex flex-col items-center ">
                  <img src={desktop} className="w-[55%]" alt="" />
                  <span>CDK</span>
                </div>
              </div>
              <div className="lg:w-1/2 py-3 px-3 w-full ">
                <div className="flex flex-col items-start w-full">
                  <div className="flex flex-wrap w-full">
                    <span className="font-semibold">
                      CDK Responsive Builder
                    </span>
                    - An extensive library of widgets and apps,
                  </div>
                  <p className="w-full">and detailed step-by-step guides</p>
                  <span className="text-slate-800 text-xs p-1 bg-blue-100">
                    26% Off
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold my-2">Main highlights</span>
                  <div className="p-2 bg-red-100 rounded-md">
                    <p className="space-x-2 p-1">
                      <span className="bg-white text-blue-600 p-1">9.9</span>
                      <span>Building Responsive</span>
                    </p>
                    <p className="space-x-2 p-1">
                      <span className="bg-white text-blue-600 p-1">8.9</span>
                      <span>Cool</span>
                    </p>
                    <p className="space-x-2 p-1">
                      <span className="bg-white text-blue-600 p-1">8.9</span>
                      <span>Docs</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <span className="font-semibold my-2">Why we love it</span>
                  <div className="px-2">
                    <p className="flex items-center space-x-2 p-1">
                      <FaCheck color="skyBlue"></FaCheck>
                      <span>Documentation</span>
                    </p>
                    <p className="flex items-center space-x-2 p-1">
                      <FaCheck color="skyBlue"></FaCheck>
                      <span>Easy Use</span>
                    </p>
                    <p className="flex items-center space-x-2 p-1">
                      <FaCheck color="skyBlue"></FaCheck>
                      <span>Out of Box</span>
                    </p>
                  </div>
                </div>
                <button className="my-2 text-blue-500 flex items-center">
                  Show more <MdKeyboardArrowDown />
                </button>
              </div>

              <div className="relative flex flex-col items-center h-60 lg:h-full pb-4 justify-between lg:w-[25%] border-0 border-black">
                <div className="w-fit flex flex-col justify-center items-center space-y-1 bg-blue-50 p-6 relative h-fit border-0 rounded-b-lg">
                  <IoIosInformationCircleOutline className="absolute top-4 right-6 opacity-80" />{" "}
                  <span className="text-3xl">9.1</span>{" "}
                  <span className="text-blue-800">Very Good</span>
                  <div className="flex space-x-1">
                    <FaStar color="orange" size={12}></FaStar>
                    <FaStar color="orange" size={12}></FaStar>
                    <FaStar color="orange" size={12}></FaStar>
                    <FaStar color="orange" size={12}></FaStar>
                  </div>
                </div>
                <div className="w-[80%]">
                  <button className="w-full py-2 px-8 rounded-md bg-blue-600 hover:bg-blue-700 text-white ">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* related deals box */}
          <div className="w-full my-10">
            <span className="flex text-2xl lg:text-3xl opacity-90">
              Related deals you might like for
            </span>
            <div className="text-sm lg:text-base flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-3 lg:space-x-8 my-10  justify-center lg:justify-between w-full">
              <div className="w-full md:w-[70%] lg:w-[90%] space-y-4 bg-white rounded-md border-0 border-black h-full pb-2">
                <div className="w-full flex items-center mt-10 justify-center">
                  <img src={desktop} className="w-[50%]" alt="" />
                </div>
                <div className="text-gray-500 flex flex-col items-start p-4 space-y-2">
                  <div className="text-blue-900 space-x-2 w-fit">
                    <span className="bg-gray-100 p-2 text-xs rounded-md">
                      20% Off
                    </span>
                    <span className="bg-gray-100 p-2 text-xs rounded-md">
                      Limited time
                    </span>
                  </div>
                  <span className="font-semibold text-lg w-full text-center">
                    Webbuilder 1
                  </span>
                  <span className="text-">
                    Computer Modern classic with wix support
                  </span>
                  <div className="flex items-end justify-end space-x-3">
                    <span className="text-xl">$39.96</span>
                    <span className="text-sm">$49.96</span>
                    <span className="text-red-600 text-sm">(20% Off)</span>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 duration-200 opacity-80 text-white p-2 rounded-md">
                    View Deal
                  </button>
                </div>
              </div>
              <div className="w-full md:w-[70%] lg:w-[90%] space-y-4 bg-white rounded-md border-0 border-black h-full pb-2">
                <div className="w-full flex items-center mt-10 justify-center">
                  <img src={desktop} className="w-[50%]" alt="" />
                </div>
                <div className="text-gray-500 flex flex-col items-start p-4 space-y-2">
                  <div className="text-blue-900 space-x-2 w-fit">
                    <span className="bg-gray-100 p-2 text-xs rounded-md">
                      20% Off
                    </span>
                    <span className="bg-gray-100 p-2 text-xs rounded-md">
                      Limited time
                    </span>
                  </div>
                  <span className="font-semibold text-lg w-full text-center">
                    Webbuilder 1
                  </span>
                  <span className="text-">
                    Computer Modern classic with wix support
                  </span>
                  <div className="flex items-end justify-end space-x-3">
                    <span className="text-xl">$39.96</span>
                    <span className="text-sm">$49.96</span>
                    <span className="text-red-600 text-sm">(20% Off)</span>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 duration-200 opacity-80 text-white p-2 rounded-md">
                    View Deal
                  </button>
                </div>
              </div>
              <div className="w-full md:w-[70%] lg:w-[90%] space-y-4 bg-white rounded-md border-0 border-black h-full pb-2">
                <div className="w-full flex items-center mt-10 justify-center">
                  <img src={desktop} className="w-[50%]" alt="" />
                </div>
                <div className="text-gray-500 flex flex-col items-start p-4 space-y-2">
                  <div className="text-blue-900 space-x-2 w-fit">
                    <span className="bg-gray-100 p-2 text-xs rounded-md">
                      20% Off
                    </span>
                    <span className="bg-gray-100 p-2 text-xs rounded-md">
                      Limited time
                    </span>
                  </div>
                  <span className="font-semibold text-lg w-full text-center">
                    Webbuilder 1
                  </span>
                  <span className="text-">
                    Computer Modern classic with wix support
                  </span>
                  <div className="flex items-end justify-end space-x-3">
                    <span className="text-xl">$39.96</span>
                    <span className="text-sm">$49.96</span>
                    <span className="text-red-600 text-sm">(20% Off)</span>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 duration-200 opacity-80 text-white p-2 rounded-md">
                    View Deal
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* sign up link box */}
          <div className="text-sm lg:text-base flex flex-col md:flex-row justify-between w-full h-32 my-10 items-center">
            <span className="text-xl lg:text-3xl opacity-70">
              Sign up and get exclusive special deals
            </span>
            <div className="flex bg-white rounded-md">
              <input
                type="email"
                className="focus:outline-none focus:placeholder:text-gray-500 placeholder:text-transparent px-2"
                placeholder="Enter your email"
              />
              <button className="bg-blue-600 hover:bg-blue-700 opacity-80 rounded-r-lg text-white  py-2 px-4">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
