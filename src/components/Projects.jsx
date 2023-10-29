import ProjectItem from "./ProjectItem";
import beautyImg from "../assets/beauty.jpeg";
import weatherImg from "../assets/weatherApp.jpeg";
import florImg from "../assets/florBlanca.jpeg";
import gameImg from "../assets/game.jpeg";
import notesImg from "../assets/notesApp.jpeg";

import { AiFillHtml5 } from "react-icons/ai";
import { RiJavascriptLine } from "react-icons/ri";
import { FaPython, FaCss3, FaBootstrap } from "react-icons/fa";

const projectData = [
  {
    id: 1,
    img: beautyImg,
    title: "Natural Theraphy",
    link: "https://moonflower-labs.github.io/Moonflowerlabs/Paula/index.html",
    icons: [
      <AiFillHtml5 key={1} />,
      <FaCss3 key={2} />,
      <FaBootstrap key={3} />,
      <RiJavascriptLine key={4} />,
    ],
    action: "Visit Site",
    info: "Front end business site, HTML, CSS, Javascript and Bootstrap 5.",
  },
  {
    id: 2,
    img: weatherImg,
    title: "Weather App",
    link: "https://moonflower-labs.github.io/Moonflowerlabs/weatherApp/index.html",
    icons: [
      <AiFillHtml5 key={1} />,
      <FaCss3 key={2} />,
      <FaBootstrap key={3} />,
      <RiJavascriptLine key={4} />,
    ],
    action: "Check Weather",
    info: "Weather application using the Open Weather API.",
  },
  {
    id: 3,
    img: florImg,
    title: "Membership Site with Stripe API",
    link: "https://laflorblanca.com",
    icons: [
      <AiFillHtml5 key={1} />,
      <FaCss3 key={2} />,
      <FaBootstrap key={3} />,
      <RiJavascriptLine key={4} />,
      <FaPython key={5} />,
    ],
    action: "Visit Site",
    info: "Python (Flask) webb app. Postgresql Database and Stripe API.",
  },
  {
    id: 4,
    img: gameImg,
    title: "Flip Card Game",
    link: "https://moonflower-labs.github.io/Moonflowerlabs/flipcardGame/index.html",
    icons: [
      <AiFillHtml5 key={1} />,
      <FaCss3 key={2} />,
      <FaBootstrap key={3} />,
      <RiJavascriptLine key={4} />,
    ],
    action: "Play Game",
    info: "Fun project built with Vanilla Javascript.",
  },
  {
    id: 5,
    img: notesImg,
    title: "Notes App",
    link: "https://moonflower-labs.github.io/Moonflowerlabs/notesApp/index.html",
    icons: [
      <AiFillHtml5 key={1} />,
      <FaCss3 key={2} />,
      <FaBootstrap key={3} />,
      <RiJavascriptLine key={4} />,
    ],
    action: "Try Out",
    info: "Notess app using Local Storage, built in Vanilla JS and Bootstrap 5.",
  },
];

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
        {projectData ? (
          <div className="grid sm:grid-cols-2 gap-12 ">
            {projectData.map((project) => (
              <ProjectItem
                key={project.id}
                img={project.img}
                title={project.title}
                link={project.link}
                icons={project.icons}
                info={project.info}
                action={project.action}
              />
            ))}
          </div>
        ) : (
          <p className="text-center mx-auto">
            No projects avaliable to display
          </p>
        )}
      </div>
    </section>
  );
};
export default Projects;
