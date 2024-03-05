import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [hamburgerToggle, setHamburgerToggle] = useState("hidden");
  const handleHamburgerToggle = (e) => {
    e.preventDefault();
    if (hamburgerToggle === "hidden") {
      setHamburgerToggle("flex");
    } else {
      setHamburgerToggle("hidden");
    }
  };
  return (
    <>
      <div
        className="z-10 sticky top-0 border-black w-full flex justify-center py-2 lg:h-16 bg-slate-900 border-2"
        style={{ fontFamily: "sans-serif" }}
      >
        <div className="w-full md:w-[90%] flex justify-center border-0 border-white">
          <div className="flex flex-col md:flex-row items-center justify-between md:justify-around w-full  md:w-[90%] border-0 border-white">
            <div className="flex items-center justify-between md:justify-around w-full md:w-[20%] px-4 ">
              <div className="relative md:hidden ">
                <RxHamburgerMenu
                  color="white"
                  size={30}
                  onClick={handleHamburgerToggle}
                />
              </div>
              {/* search bar */}
              <div className="rounded px-2 py-[2px] bg-white flex items-center justify-around">
                <FaSearch className="opacity-55"></FaSearch>
                <input
                  className="focus:outline-none"
                  type="search"
                  name=""
                  id=""
                />
              </div>
            </div>
            {/* nav links */}
            <div className="hidden md:flex flex-col md:flex-row text-sm space-x-12 items-center text-gray-300">
              <li className="list-none hover:text-blue-500 duration-300 cursor-pointer">
                Categories
              </li>
              <li className="list-none hover:text-blue-500 duration-300 cursor-pointer">
                Website Builders
              </li>
              <li className="list-none hover:text-blue-500 duration-300 cursor-pointer">
                Today's deals
              </li>
            </div>
            {/* mobile nav bar */}
            <div
              className={`${hamburgerToggle} md:hidden mt-4 flex-row text-sm space-x-12 items-center text-gray-300`}
            >
              <li className="list-none focus:text-blue-500">Categories</li>
              <li className="list-none focus:text-blue-500">
                Website Builders
              </li>
              <li className="list-none focus:text-blue-500">Today's deals</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
