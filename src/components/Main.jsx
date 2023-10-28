import { TypeAnimation } from "react-type-animation";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import bgImage from "../assets/dbackground.jpeg";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-right"
        src={bgImage}
      />
      <div className="w-full text-yellow-50 h-screen absolute top-0 left-0 bg-white/20">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-violet-400">
            Moonflower Labs
          </h1>
          <h2 className="flex flex-col sm:text-3xl text-2xl pt-4 text-yellow-200">
            <p className="hover:animate-pulse">
              Web Solutions for small companies
            </p>
            <TypeAnimation
              sequence={[
                "Front End",
                1000,
                "Back End",
                1000,
                "Databases",
                1000,
                "API's",
                1000,
              ]}
              wrapper="span"
              speed={40}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex gap-4 justify-center pt-6 max-w-[200px] w-full">
            <a
              className="cursor-pointer hover:scale-110 ease-in duration-200"
              href="https://www.linkedin.com/in/alex-santiago-234537286"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              className="cursor-pointer hover:scale-110 ease-in duration-200"
              href="https://github.com/Moonflower-labs"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
