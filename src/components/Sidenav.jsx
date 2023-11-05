import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineProject,
} from "react-icons/ai";
import { MdWorkHistory } from "react-icons/md";
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
      {nav && (
        <div
          onClick={handleNav}
          className="fixed top-0 left-0 w-full h-screen bg-white/30 flex flex-col justify-center items-center z-20"
        >
          <Link
            onClick={handleNav}
            to="/"
            className="w-[75%] flex  justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </Link>
          <Link
            onClick={handleNav}
            to="/about"
            className="w-[75%] flex  justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FaInfoCircle size={20} />
            <span className="pl-4">About</span>
          </Link>
          <Link
            onClick={handleNav}
            to="/work"
            className="w-[75%] flex  justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <MdWorkHistory size={20} />
            <span className="pl-4">Work History</span>
          </Link>
          <Link
            onClick={handleNav}
            to="/projects"
            className="w-[75%] flex  justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </Link>
          <Link
            onClick={handleNav}
            to="/contact"
            className="w-[75%] flex  justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </Link>
        </div>
      )}

      <div className="md:block hidden items-center fixed top-[4%] lg:top-[25%] z-10 h-screen">
        <div className="flex flex-col">
          <Link
            to="/"
            className="rounded-full shadow-lg shadow-gray-600 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={25} />
          </Link>
          <Link
            to="/about"
            className="rounded-full shadow-lg shadow-gray-600 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FaInfoCircle size={25} />
          </Link>
          <Link
            to="/work"
            className="rounded-full shadow-lg shadow-gray-600 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <MdWorkHistory size={25} />
          </Link>
          <Link
            to="/projects"
            className="rounded-full shadow-lg shadow-gray-600 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={25} />
          </Link>
          <Link
            to="/contact"
            className="rounded-full shadow-lg shadow-gray-600 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
