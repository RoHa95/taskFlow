import React from "react";

// icons
import { CgAlbum } from "react-icons/cg";

//components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Maincontext from "../components/Maincontext";

function Home() {
  return (
    <div className=" w-screen h-screen grid grid-cols-12 grid-rows-12 sm:grid-rows-8 border-collapse border-gray-300 xl:max-w-7xl mx-auto xl:border xl:my-3 xl:border-gray-300 xl:rounded-4xl dark:bg-dark">
      {/* logo container */}
      <div
        id="nav-col"
        className=" col-span-2 md:col-span-3 lg:col-span-2 row-span-1  border-b border-r border-gray-300 gap-x-1 lg:gap-x-2 flex items-center justify-center text-indigo-500 font-bold"
      >
        <CgAlbum className="pt-0.5 text-2xl" />
        <span className="hidden sm:inline md:text-lg lg:text-xl">TaskFLOW</span>
      </div>
      {/* navbar container */}
      <div
        id="nav-col-1"
        className=" col-span-10 md:col-span-9 lg:col-span-10 w-full row-span-1 border-b border-gray-300 flex items-center justify-between px-4"
      >
        <Navbar />
      </div>
      {/* sidebar container */}
      <div
        id="nav-col"
        className=" col-span-2 md:col-span-3 lg:col-span-2 row-span-11 sm:row-span-7  border-r border-gray-300"
      >
        <Sidebar />
      </div>
      {/* main content container */}
      <div
        id="nav-col-1"
        className="px-4 py-6 lg:px-10 lg:py-8 col-span-10 md:col-span-9 lg:col-span-10 row-span-11 sm:row-span-7 flex flex-col items-center justify-start w-full"
      >
        <Maincontext />
      </div>
    </div>
  );
}

export default Home;
