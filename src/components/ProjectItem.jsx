/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ProjectItem = ({ img, title, link, icons, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClik = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl group hover:bg-gradient-to-r from-gray-500 to-[#aa2055] ease-in duration-200 overflow-hidden">
      <img
        src={img}
        alt={title}
        className=" rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-yellow-100 tracking-wider text-center">
          {title}
        </h3>
        <div className="flex text-gray-300 w-full max-w-full justify-around pt-4">
          {icons}
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <p className="text-center p-2 my-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            Visit
          </p>
        </a>
      </div>
      <p
        className="text-sm text-amber-400 hidden group-hover:block  font-bol absolute bottom-2 end-4 cursor-pointer"
        onClick={handleClik}
      >
        more info
      </p>
      {showInfo && (
        <>
          <div className="w-full h-full absolute bg-zinc-800  text-yellow-50 flex justify-center items-center ">
            <p className="p-4 text-center">
              {info ? info : "No info available"}
            </p>
            <span
              className="cursor-pointer  text-white absolute top-1 end-1"
              onClick={handleClik}
            >
              <AiOutlineCloseCircle size={22} />
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectItem;
