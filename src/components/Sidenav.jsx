import { useState , useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineMail, AiOutlineProject } from "react-icons/ai";
import { MdWorkHistory } from "react-icons/md";
import { FaInfoCircle, FaRegWindowClose } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const scrollToTop = () => window.scrollTo(0,0);
    if (!nav) scrollToTop();

  }),[location.pathname, nav]  

  const handleNav = () => {
    setNav(!nav);
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
    <AnimatePresence>
      {nav && (
        <motion.div
          key={'nav'}
          initial={{ scale: 0, opacity: 0, x: '100%', y: '-100%'}}
          animate={ { scale: 1, opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 200, damping: 20 }}
          exit={{ scale: 0, opacity: 0, x: '100%', y: '-100%'}}
          onClick={handleNav}
          className="fixed top-0 backdrop-blur-sm left-0 w-full h-screen bg-zinc-100/30 flex flex-col justify-center items-center z-20 md:hidden"
        >
          <Link
            to="/"
            className="w-[75%] flex  justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </Link>
          <Link
            to="/about"
            className="w-[75%] flex  justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FaInfoCircle size={20} />
            <span className="pl-4">About</span>
          </Link>
          <Link
            to="/work"
            className="w-[75%] flex  justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <MdWorkHistory size={20} />
            <span className="pl-4">Work History</span>
          </Link>
          <Link
            to="/projects"
            className="w-[75%] flex  justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </Link>
          <Link
            to="/contact"
            className="w-[75%] flex  justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </Link>
        </motion.div>
      )}
      </AnimatePresence>
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
    </nav>
  );
};

export default Sidenav;
