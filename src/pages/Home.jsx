import React, { useEffect, useState } from "react";

// icons
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoAtCircle, IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { CgAlbum } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { RiDashboard2Line } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";

function Home() {
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
  const navHandler = (e) => {
    // document.getElementById("nav-h-details").classList.toggle("hidden");
  };
  return (
    <div className=" w-screen h-screen grid grid-cols-12 grid-rows-12 sm:grid-rows-8 border-collapse border-gray-300 xl:max-w-7xl mx-auto xl:border xl:my-3 xl:border-gray-300 xl:rounded-4xl dark:bg-dark">
      <div
        id="nav-col"
        className=" col-span-2 md:col-span-3 lg:col-span-2 row-span-1  border-b border-r border-gray-300 gap-x-1 lg:gap-x-2 flex items-center justify-center text-indigo-500 font-bold"
      >
        <CgAlbum className="pt-0.5 text-2xl" />
        <span className="hidden sm:inline md:text-lg lg:text-xl">TaskFLOW</span>
      </div>
      <div
        id="nav-col-1"
        className=" col-span-10 md:col-span-9 lg:col-span-10 w-full row-span-1 border-b border-gray-300 flex items-center justify-between px-4"
      >
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
              <span className="text-sm text-gray-400 font-semibold">
                SignIn
              </span>
            </div>
            <div className=" w-8 h-8 rounded-full flex items-center justify-center border-2 dark:border-txdark border-black md:ml-2">
              <CgProfile className=" text-2xl text-gray-400 w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="nav-col"
        className=" col-span-2 md:col-span-3 lg:col-span-2 row-span-11 sm:row-span-7  border-r border-gray-300"
      >
        <div className="sm:mx-8 my-10 flex flex-col gap-y-5">
          <div className=" cursor-pointer flex flex-col md:flex-row items-center justify-center sm:justify-start sm:gap-x-4 text-gray-400">
            <RxDashboard
              onClick={navHandler}
              id="nav-h-item"
              className="text-base lg:text-3xl text-gray-400"
            />
            <span className="text-xs md:text-base lg:text-base">Home</span>
          </div>
          <div className=" cursor-pointer flex flex-col md:flex-row items-center justify-center sm:justify-start sm:gap-x-4 text-gray-400">
            <FaTasks
              onClick={navHandler}
              id="nav-h-item"
              className=" text-base lg:text-3xl text-gray-400"
            />
            <span className="text-xs md:text-base lg:text-base">Tasks</span>
          </div>
          <div className=" cursor-pointer flex flex-col md:flex-row items-center justify-center sm:justify-start sm:gap-x-4 text-gray-400">
            <RiDashboard2Line
              onClick={navHandler}
              id="nav-h-item"
              className=" text-base lg:text-3xl text-gray-400"
            />
            <span className="text-xs md:text-base lg:text-base">Dashboard</span>
          </div>
          <div className=" cursor-pointer flex flex-col md:flex-row items-center justify-center sm:justify-start sm:gap-x-4 text-gray-400">
            <IoCalendarOutline
              onClick={navHandler}
              id="nav-h-item"
              className=" text-base lg:text-3xl text-gray-400"
            />
            <span className="text-xs md:text-base lg:text-base">Calendar</span>
          </div>
        </div>
        <div className="flex items-center md:justify-start md:px-8 justify-center">
          <ul>
            <li className="text-gray-400 pb-2">
              <FaCircle className="text-blue-500 md:inline" /> tag 1
            </li>
            <li className="text-gray-400 pb-2">
              <FaCircle className="text-purple-500 md:inline" /> tag 1
            </li>
            <li className="text-gray-400 pb-2">
              <FaCircle className="text-pink-500 md:inline" /> tag 1
            </li>
            <li className="text-gray-400 pb-2">
              <FaCircle className="text-orange-500 md:inline" /> tag 1
            </li>
          </ul>
        </div>
      </div>
      <div
        id="nav-col-1"
        className="px-4 py-6 lg:px-10 lg:py-8 col-span-10 md:col-span-9 lg:col-span-10 row-span-11 sm:row-span-7 flex flex-col items-center justify-start w-full"
      >
        <div className="flex items-center justify-between w-full h-8">
          <div className="flex gap-x-2 h-full">
            <select
              name="filter"
              id="filter"
              className="border rounded-md pb-1 border-gray-400 text-gray-500 dark:text-txdark dark:bg-gray-500/40 h-full"
            >
              <option value="option1" className="text-gray-400">
                option1
              </option>
            </select>
            <select
              name="time"
              id="time"
              className="border rounded-md pb-1 border-gray-400 text-gray-500 dark:text-txdark dark:bg-gray-500/40 h-full"
            >
              <option value="today" className="text-gray-400">
                today
              </option>
            </select>
          </div>

          <div className="h-full">
            <button className="border rounded-md pb-1 h-full border-gray-400 text-gray-500 dark:text-txdark dark:bg-gray-500/40 px-2">
              share
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full sm:flex-row mt-12 gap-x-3 gap-y-3 h-screen overflow-y-scroll">
          {/* task 1 */}
          <div className=" w-full flex flex-col bg-gray-500/10 dark:bg-gray-500/40 p-3 rounded-md">
            <div className=" flex items-center justify-between border-b-3 border-indigo-500 pb-2">
              <div className="flex items-center dark:text-txdark">
                <FaCircle className=" text-indigo-500 mr-2 text-xs" />
                To Do
                <span className="bg-gray-500/20 dark:bg-dark-part w-4 h-4 rounded-full flex items-center justify-center ml-3 text-xs text-gray-600 dark:text-txdark">
                  4
                </span>
              </div>
              <div className=" text-indigo-500 bg-indigo-400/20 rounded-sm w-5 h-5 flex items-center justify-center pb-1">
                +
              </div>
            </div>
            <div className="py-3 flex flex-col gap-y-2">
              <div className="bg-white dark:bg-dark rounded-md p-2 flex items-center justify-between cursor-pointer">
                <span className="text-gray-400 dark:text-txdark">task 1</span>
                <div className="text-indigo-400 dark:text-black dark:bg-indigo-400 border rounded-md text-xs px-1 pb-0.5">
                  tag 1
                </div>
              </div>
              <div className="bg-white dark:bg-dark rounded-md p-2 flex items-center justify-between cursor-pointer">
                <span className="text-gray-400 dark:text-txdark">task 1</span>
                <div className="text-indigo-400 dark:text-black dark:bg-indigo-400 border rounded-md text-xs px-1 pb-0.5">
                  tag 1
                </div>
              </div>
            </div>
          </div>
          {/* task 2 */}
          <div className=" w-full flex flex-col bg-gray-500/10 dark:bg-gray-500/40 p-3 rounded-md">
            <div className=" flex items-center justify-between border-b-3 border-orange-500 pb-2">
              <div className="flex items-center dark:text-txdark">
                <FaCircle className=" text-orange-500 mr-2 text-xs" />
                To Do
                <span className="bg-gray-500/20 dark:bg-dark-part w-4 h-4 rounded-full flex items-center justify-center ml-3 text-xs text-gray-600 dark:text-txdark">
                  4
                </span>
              </div>
              {/* <div className=" text-orange-500 bg-orange-400/20 rounded-sm w-5 h-5 flex items-center justify-center pb-1">
                +
              </div> */}
            </div>
            <div className="py-3 flex flex-col gap-y-2">
              <div className="bg-white dark:bg-dark rounded-md p-2 flex items-center justify-between cursor-pointer">
                <span className="text-gray-400 dark:text-txdark">task 1</span>
                <div className="text-orange-400 dark:text-black dark:bg-orange-400 border rounded-md text-xs px-1 pb-0.5">
                  tag 1
                </div>
              </div>
              <div className="bg-white dark:bg-dark rounded-md p-2 flex items-center justify-between cursor-pointer">
                <span className="text-gray-400 dark:text-txdark">task 1</span>
                <div className="text-orange-400 dark:text-black dark:bg-orange-400 border rounded-md text-xs px-1 pb-0.5">
                  tag 1
                </div>
              </div>
            </div>
          </div>
          {/* task 3 */}
          <div className=" w-full flex flex-col bg-gray-500/10 dark:bg-gray-500/40 p-3 rounded-md">
            <div className=" flex items-center justify-between border-b-3 border-green-500 pb-2">
              <div className="flex items-center dark:text-txdark">
                <FaCircle className=" text-green-500 mr-2 text-xs" />
                To Do
                <span className="bg-gray-500/20 dark:bg-dark-part w-4 h-4 rounded-full flex items-center justify-center ml-3 text-xs text-gray-600 dark:text-txdark">
                  4
                </span>
              </div>
              {/* <div className=" text-green-500 bg-indigo-400/20 rounded-sm w-5 h-5 flex items-center justify-center pb-1">
                +
              </div> */}
            </div>
            <div className="py-3 flex flex-col gap-y-2">
              <div className="bg-white dark:bg-dark  rounded-md p-2 flex items-center justify-between cursor-pointer">
                <span className="text-gray-400 dark:text-txdark">task 1</span>
                <div className="text-green-400 dark:text-black dark:bg-green-400 border rounded-md text-xs px-1 pb-0.5">
                  tag 1
                </div>
              </div>
              <div className="bg-white dark:bg-dark rounded-md p-2 flex items-center justify-between cursor-pointer">
                <span className="text-gray-400 dark:text-txdark">task 1</span>
                <div className="text-green-400 dark:text-black dark:bg-green-400 border rounded-md text-xs px-1 pb-0.5">
                  tag 1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
