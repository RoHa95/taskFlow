import React, { useEffect, useState } from "react";

//icons
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";

function Navbar() {
  const userTheme = localStorage.getItem("theme");
  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (userTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [mode]);

  const clickHandler = (e) => {
    document.getElementById("search-dynamic").classList.toggle("flex");
    document.getElementById("search-dynamic").classList.toggle("hidden");
  };
  
  const darkmodeHandler = (e) => {
    console.log(e.currentTarget.dataset.mode);

    if (e.currentTarget.dataset.mode === "moon") {
      // document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setMode("dark");
      document.querySelector("#moon").classList.add("hidden");
      document.querySelector("#sun").classList.remove("hidden");
    }
    if (e.currentTarget.dataset.mode === "sun") {
      // document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      setMode("light");
      document.querySelector("#moon").classList.remove("hidden");
      document.querySelector("#sun").classList.add("hidden");
    }
  };

  return (
    <>
      <div className=" justify-between items-center bg-gray-100 dark:bg-gray-500/40 dark:text-txdark md:w-xs w-md h-1/2 rounded-sm px-4 hidden sm:flex">
        <input
          className="w-full outline-0"
          type="text"
          placeholder="Search..."
        />
        <CiSearch className=" font-bold text-2xl text-gray-400 cursor-pointer" />
      </div>

      <div className=" relative flex items-center w-full justify-end gap-x-2">
        <div className="flex items-center gap-x-3 md:gap-x-4">
          <CiSearch
            onClick={clickHandler}
            className=" text-2xl md:text-3xl text-gray-600 md:text-gray-400 sm:hidden"
          />
          <div>
            <IoMoonOutline
              onClick={darkmodeHandler}
              data-mode="moon"
              id="moon"
              className="text-xl md:text-2xl text-gray-600 md:text-gray-400"
            />
            <IoSunnyOutline
              onClick={darkmodeHandler}
              data-mode="sun"
              id="sun"
              className="text-xl md:text-2xl text-gray-600 md:text-gray-400 hidden"
            />
          </div>

          <IoCalendarOutline className=" text-xl md:text-2xl text-gray-600 md:text-gray-400" />
          <IoIosNotificationsOutline className=" text-2xl md:text-3xl text-gray-600 md:text-gray-400" />
          <div
            id="search-dynamic"
            className=" absolute sm:hidden hidden top-8 left-0 justify-between items-center bg-gray-100 rounded-sm"
          >
            <input
              className="w-full h-10 outline-0 px-1 text-sm"
              type="text"
              placeholder="Search..."
            />
            <CiSearch className="font-bold text-xl text-gray-400 cursor-pointer" />
          </div>
        </div>
        <div className=" flex items-center md:mr-10">
          <div className="hidden md:flex flex-col items-center justify-center ml-8">
            <span className="text-sm text-gray-900 dark:text-txdark font-semibold">
              SignUp
            </span>
            <span className="text-sm text-gray-400 font-semibold">SignIn</span>
          </div>
          <div className=" w-8 h-8 rounded-full flex items-center justify-center border-2 dark:border-txdark border-black md:ml-2">
            <CgProfile className=" text-2xl text-gray-400 w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
