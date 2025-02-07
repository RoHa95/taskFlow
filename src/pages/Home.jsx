import React from "react";

// icons
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { CgAlbum } from "react-icons/cg";

function Home() {
  const clickHandler = (e) => {
    document.getElementById("search-dynamic").classList.toggle("flex");
    document.getElementById("search-dynamic").classList.toggle("hidden");
  };
  return (
    <div className=" w-screen h-screen grid grid-cols-12 grid-rows-8 border-collapse border-gray-300 3xl:max-w-7xl mx-auto 3xl:border 3xl:my-3 3xl:border-gray-300 3xl:rounded-4xl">
      <div className=" col-span-2 row-span-1  border-b border-r border-gray-300 gap-x-1 lg:gap-x-2 flex items-center justify-center text-indigo-500 font-bold">
        <CgAlbum className="pt-0.5 text-2xl" />
        <span className="hidden sm:inline md:text-lg lg:text-xl">TaskFLOW</span>
      </div>
      <div className=" col-span-10 w-full row-span-1 border-b border-gray-300 flex items-center justify-between px-4">
        <div className=" justify-between items-center bg-gray-100 md:w-xs w-md h-1/2 rounded-sm px-4 hidden sm:flex">
          <input
            className="w-full outline-0"
            type="text"
            placeholder="Search..."
          />
          <CiSearch className=" font-bold text-2xl text-gray-400 cursor-pointer" />
        </div>

        <div className=" relative flex items-center w-full justify-end gap-x-2">
          <div className="flex items-center gap-x-2 md:gap-x-4">
            <CiSearch
              onClick={clickHandler}
              className=" text-2xl md:text-3xl text-gray-600 md:text-gray-400 sm:hidden"
            />
            <IoMoonOutline className="text-xl md:text-2xl text-gray-600 md:text-gray-400" />
            <IoCalendarOutline className=" text-xl md:text-2xl text-gray-600 md:text-gray-400" />
            <IoIosNotificationsOutline className=" text-2xl md:text-3xl text-gray-600 md:text-gray-400" />
            <div
              id="search-dynamic"
              className=" absolute sm:hidden hidden top-8 left-0 justify-between items-center bg-gray-100 rounded-sm"
            >
              <input
                className="w-full outline-0 px-1 text-sm"
                type="text"
                placeholder="Search..."
              />
              <CiSearch className=" font-bold text-xl text-gray-400 cursor-pointer" />
            </div>
          </div>
          <div className=" flex items-center md:mr-10">
            <div className="hidden md:flex flex-col items-center justify-center ml-8">
              <span className="text-sm text-gray-900 font-semibold">
                SignUp
              </span>
              <span className="text-sm text-gray-400 font-semibold">
                SignIn
              </span>
            </div>
            <div className=" w-8 h-8 rounded-full flex items-center justify-center border-2 border-black md:ml-2">
              <CgProfile className=" text-2xl text-gray-400 w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 row-span-7  border-r border-gray-300">
        <div className="mx-8 my-10">
          <div className=" flex items-center gap-x-4 text-gray-400">
            <BiCategoryAlt className=" text-3xl text-gray-400" />
            Home
          </div>
        </div>
      </div>
      <div className="col-span-10 row-span-7 ">lskdlkldksl</div>
    </div>
  );
}

export default Home;
