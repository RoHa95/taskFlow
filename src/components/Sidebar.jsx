import React from 'react'

// icons
import { IoCalendarOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { FaTasks } from "react-icons/fa";
import { RiDashboard2Line } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";

function Sidebar() {
  return (
    <>
    <div className="sm:mx-8 my-10 flex flex-col gap-y-5">
              <div className=" cursor-pointer flex flex-col md:flex-row items-center justify-center sm:justify-start sm:gap-x-4 text-gray-400">
                <RxDashboard
                  id="nav-h-item"
                  className="text-base lg:text-3xl text-gray-400"
                />
                <span className="text-xs md:text-base lg:text-base">Home</span>
              </div>
              <div className=" cursor-pointer flex flex-col md:flex-row items-center justify-center sm:justify-start sm:gap-x-4 text-gray-400">
                <FaTasks
                  id="nav-h-item"
                  className=" text-base lg:text-3xl text-gray-400"
                />
                <span className="text-xs md:text-base lg:text-base">Tasks</span>
              </div>
              <div className=" cursor-pointer flex flex-col md:flex-row items-center justify-center sm:justify-start sm:gap-x-4 text-gray-400">
                <RiDashboard2Line
                  id="nav-h-item"
                  className=" text-base lg:text-3xl text-gray-400"
                />
                <span className="text-xs md:text-base lg:text-base">Dashboard</span>
              </div>
              <div className=" cursor-pointer flex flex-col md:flex-row items-center justify-center sm:justify-start sm:gap-x-4 text-gray-400">
                <IoCalendarOutline
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
    </>
  )
}

export default Sidebar