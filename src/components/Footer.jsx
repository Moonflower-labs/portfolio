import { FaPython, FaReact, FaHtml5, FaNode } from "react-icons/fa";
import { DiCss3, DiMysql } from "react-icons/di";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss, SiFlask, SiDjango } from "react-icons/si";

const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row flex-wrap w-full overflow-x-hidden bg-zinc-800 text-orange-200 items-center justify-around border-t-[1px] border-t-orange-200">
      <div className="px-2 py-4 flex flex-row flex-grow gap-3 my-2">
        <FaHtml5 size={24} />
        <DiCss3 size={24} />
        <RiJavascriptFill size={24} />
        <BiLogoTypescript size={24} />
        <FaNode size={24} />
        <FaReact size={24} />
        <FaPython size={24} />
        <SiDjango size={24} />
        <SiFlask size={24} />
        <SiTailwindcss size={24} />
        <DiMysql size={24} />
        <BiLogoPostgresql size={24} />
      </div>
      <div className="bg-gradient-to-r from-gray-500 to-[#aa7120] p-1 my-2 rounded-md text-sm md:me-3">
        &copy; Moonflower Labs {year}
      </div>
    </footer>
  );
};

export default Footer;
