import ProjectItem from "./ProjectItem";
import beautyImg from "../assets/beauty.jpeg";
import weatherImg from "../assets/weatherApp.jpeg";
import florImg from "../assets/florBlanca.jpeg";
import gameImg from "../assets/game.jpeg";
import notesImg from "../assets/notesApp.jpeg";

import { AiFillHtml5 } from "react-icons/ai";
import { RiJavascriptLine } from "react-icons/ri";
import { FaPython, FaCss3, FaBootstrap } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className=" bg-slate-300">
      <div className="max-w-[1024px] m-auto md:pl-20 p-4 py-16 bg-slate-300">
        <h1 className="text-4xl font-bold text-center  text-pink-700">
          Projects
        </h1>
        <p className="text-center py-8">
          These are some of the projects delivered.
        </p>
        <div className="grid sm:grid-cols-2 gap-12 ">
          <ProjectItem
            img={beautyImg}
            title="Natural Theraphy"
            link="https://moonflower-labs.github.io/Moonflowerlabs/Paula/index.html"
            icons={
              <>
                <AiFillHtml5 />
                <FaCss3 />
                <FaBootstrap />
                <RiJavascriptLine />
              </>
            }
            info="Front end business site, HTML, CSS, Javascript and Bootstrap 5."
          />

          <ProjectItem
            img={weatherImg}
            title="Weather App"
            link="https://moonflower-labs.github.io/Moonflowerlabs/weatherApp/index.html"
            icons={
              <>
                <AiFillHtml5 />
                <FaCss3 />
                <FaBootstrap />
                <RiJavascriptLine />
              </>
            }
            info="Weather application using the Open Weather API."
          />

          <ProjectItem
            img={florImg}
            title="Membership Site with Stripe API"
            link="https://laflorblanca.com"
            icons={
              <>
                <AiFillHtml5 />
                <FaCss3 />
                <FaBootstrap />
                <RiJavascriptLine />
                <FaPython />
              </>
            }
            info="Python (Flask) webb app.
            Postgresql Database and Stripe API."
          />

          <ProjectItem
            img={gameImg}
            title="Flip Card Game"
            link="https://moonflower-labs.github.io/Moonflowerlabs/flipcardGame/index.html"
            icons={
              <>
                <AiFillHtml5 />
                <FaCss3 />
                <FaBootstrap />
                <RiJavascriptLine />
              </>
            }
            info="Fun project built with Vanilla Javascript."
          />

          <ProjectItem
            img={notesImg}
            title="Notes App"
            link="https://moonflower-labs.github.io/Moonflowerlabs/notesApp/index.html"
            icons={
              <>
                <AiFillHtml5 />
                <FaCss3 />
                <FaBootstrap />
                <RiJavascriptLine />
              </>
            }
            info="Notess app using Local Storage, built in Vanilla JS and Bootstrap 5."
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
