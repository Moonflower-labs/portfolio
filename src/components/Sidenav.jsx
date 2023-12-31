import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineMail, AiOutlineProject } from "react-icons/ai";
import { MdWorkHistory } from "react-icons/md";
import { FaInfoCircle, FaRegWindowClose } from "react-icons/fa";
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
    <nav>
      <LuMenuSquare
        size={36}
        onClick={handleNav}
        className={`fixed top-4 right-4 z-[99] text-orange-300 md:hidden cursor-pointer ${
          !nav ? "block" : "hidden"
        }`}
      />
      <FaRegWindowClose
        size={34}
        onClick={handleNav}
        className={`fixed top-4 right-4 z-[99] text-purple-400 md:hidden cursor-pointer ${
          nav ? "block" : "hidden"
        }`}
      />

      {nav && (
        <div
          onClick={handleNav}
          className="fixed top-0 backdrop-blur-sm left-0 w-full h-screen bg-zinc-100/30 flex flex-col justify-center items-center z-20 md:hidden"
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
    </nav>
  );
};

export default Sidenav;
