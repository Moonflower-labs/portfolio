/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ProjectItem = ({ img, title, link }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-300 to-[#8c30e7] ease-in duration-200">
      <img
        src={img}
        alt={title}
        className=" rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-yellow-100 tracking-wider text-center">
          {title}
        </h3>
        <a href={link}>
          <p className="text-center p-2 my-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            Visit
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
