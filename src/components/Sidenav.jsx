import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineMail, AiOutlineProject } from "react-icons/ai";
import { MdWorkHistory } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <LuMenuSquare
        size={42}
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] rounded-sm  text-pink-800  p-1  md:hidden cursor-pointer"
      />
      {nav && (
        <div
          onClick={handleNav}
          className="fixed top-0 left-0 w-full h-screen bg-white/30 flex flex-col justify-center items-center z-20"
        >
          <Link
            onClick={scrollToTop}
            to="/"
            className="w-[75%] flex  justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </Link>
          <Link
            onClick={scrollToTop}
            to="/about"
            className="w-[75%] flex  justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FaInfoCircle size={20} />
            <span className="pl-4">About</span>
          </Link>
          <Link
            onClick={scrollToTop}
            to="/work"
            className="w-[75%] flex  justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <MdWorkHistory size={20} />
            <span className="pl-4">Work History</span>
          </Link>
          <Link
            onClick={scrollToTop}
            to="/projects"
            className="w-[75%] flex  justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </Link>
          <Link
            onClick={scrollToTop}
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
            onClick={scrollToTop}
            to="/"
            className="rounded-full shadow-lg shadow-gray-600 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={25} />
          </Link>
          <Link
            onClick={scrollToTop}
            to="/about"
            className="rounded-full shadow-lg shadow-gray-600 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FaInfoCircle size={25} />
          </Link>
          <Link
            onClick={scrollToTop}
            to="/work"
            className="rounded-full shadow-lg shadow-gray-600 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <MdWorkHistory size={25} />
          </Link>
          <Link
            onClick={scrollToTop}
            to="/projects"
            className="rounded-full shadow-lg shadow-gray-600 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={25} />
          </Link>
          <Link
            onClick={scrollToTop}
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
