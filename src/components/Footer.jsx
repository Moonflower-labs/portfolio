import { FaPython, FaReact, FaHtml5, FaNode } from "react-icons/fa";
import { DiCss3, DiMysql } from "react-icons/di";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="flex flex-row flex-wrap w-full  bg-zinc-800 text-orange-200 items-center justify-around">
      <div className="px-4 py-4 flex flex-row gap-4">
        <FaHtml5 size={26} />
        <DiCss3 size={26} />
        <RiJavascriptFill size={26} />
        <BiLogoTypescript size={26} />
        <FaNode size={26} />
        <FaReact size={26} />
        <FaPython size={26} />
        <SiTailwindcss size={26} />
        <DiMysql size={26} />
        <BiLogoPostgresql size={26} />
      </div>
      <div className="bg-gradient-to-r from-gray-500 to-[#aa2055]  hover:scale-[1.025] ease-in duration-200 p-1 mb-3 rounded-md text-sm">
        &copy; Moonflower Labs {year}
      </div>
    </footer>
  );
};

export default Footer;
