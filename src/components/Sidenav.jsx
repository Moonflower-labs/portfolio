/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineProject,
} from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        size={30}
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] rounded-sm border-2 border-orange-300 text-orange-300  p-1  md:hidden"
      />
      {nav ? (
        <div
          onClick={handleNav}
          className="fixed top-0 left-0 w-full h-screen bg-white/30 flex flex-col justify-center items-center z-20"
        >
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex  justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            className="w-[75%] flex  justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FaInfoCircle size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex  justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex  justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg shadow-gray-600 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={25} />
          </a>{" "}
          <a
            href="#about"
            className="rounded-full shadow-lg shadow-gray-600 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FaInfoCircle size={25} />
          </a>{" "}
          <a
            href="#projects"
            className="rounded-full shadow-lg shadow-gray-600 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={25} />
          </a>{" "}
          <a
            href="#contact"
            className="rounded-full shadow-lg shadow-gray-600 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
