/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ProjectItem = ({ img, title, link, icons }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl group hover:bg-gradient-to-r from-gray-500 to-[#aa2055] ease-in duration-200">
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
    </div>
  );
};

export default ProjectItem;
