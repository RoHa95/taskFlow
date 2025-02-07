import React from "react";

//icons
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

function Navbar() {
  return (
    <div className=" fixed grid grid-cols-12 grid-rows-1 justify-between items-center bg-white container px-12 border-b border-gray-300">
      <div className=" flex col-span-2 justify-start items-center border-r border-gray-300">
        {/* <ul className=" flex text-txdark gap-x-3">
          <li>Profile</li>
          <li>Dashboard</li>
          <li>Home</li>
        </ul> */}
        <span className=" text-xl px-6 py-2 text-indigo-600 font-bold">
          TaskFLOW
        </span>
        <MdKeyboardDoubleArrowRight className="text-xl text-gray-500 font-thin" />
      </div>
      <div>
        <div className=" flex justify-between items-center bg-white rounded-2xl px-4">
          <input
            className="w-full outline-0"
            type="text"
            placeholder="Search..."
          />
          <CiSearch className=" font-bold text-xl cursor-pointer" />
        </div>

        <div className=" flex items-center gap-x-2">
          <div>
            <CgProfile className=" text-2xl text-white" />
          </div>
          <div>
            <IoSunnyOutline className=" text-2xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
