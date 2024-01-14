import { motion } from "framer-motion";
import ProjectItem from "../components/ProjectItem";
import beautyImg from "../assets/beauty.jpeg";
import weatherImg from "../assets/weatherApp.jpeg";
import florImg from "../assets/florBlanca.jpeg";
import gameImg from "../assets/game.jpeg";
import notesImg from "../assets/notesApp.jpeg";
import todoImg from "../assets/todoApp.jpeg";
import nextDashboard from "../assets/nextjs-dashboard.jpeg";

import Pagination from "../components/Pagination";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { RiJavascriptLine } from "react-icons/ri";
import { FaPython, FaCss3, FaBootstrap } from "react-icons/fa";
import { BiLogoTypescript, BiLogoReact } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { useState, useCallback, useEffect } from "react";

const projectData = [
  {
    id: 1,
    img: nextDashboard,
    title: "NextJS Dashboard",
    link: "https://nextjs-dashboard-lilac-ten.vercel.app/dashboard",
    icons: [
      <BiLogoReact key={1} />,
      <SiTailwindcss key={2} />,
      <TbBrandNextjs key={3} />,
      <BiLogoTypescript key={4} />,
    ],
    action: "Visit Site",
    info: "Dasboard website deployed in Vercel with Postgres database",
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    img: florImg,
    title: "Subscriptions/E-commerce Site",
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
    id: 5,
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
    id: 6,
    img: todoImg,
    title: "Todo App",
    link: "https://todo-app-a5f0c.web.app",
    icons: [
      <AiFillHtml5 key={1} />,
      <FaCss3 key={2} />,
      <BiLogoTypescript key={3} />,
    ],
    action: "Try Out",
    info: "Todo app built with Typescript.",
  },
  {
    id: 7,
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(projectData.length / itemsPerPage);
  const handlePreviousPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage - 1);
  }, []);

  const handleNextPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when changing pages
  }, [currentPage]);

  return (
    <motion.section 
      // variants={routeVariants}
      initial={{opacity:0,filter:'blur(10px)'}}
      animate={{opacity:1,filter:'blur(0px)',transition:{duration:0.3}}}
      exit={{backgroundColor:"rgb(167 139 250)",opacity:0,transition:{duration:0}}}
      id="projects" 
      className="min-h-screen bg-slate-300">
      <div className="max-w-[1024px] m-auto md:pl-20 p-4 py-16 bg-slate-300">
        <h1 className="text-4xl font-bold text-center  text-pink-700">
          Projects
        </h1>
        <p className="text-center py-8">
          These are just a few examples of the diverse projects we have
          delivered to our clients.
        </p>
        {projectData ? (
          <div className="grid sm:grid-cols-2 gap-12 ">
            {projectData
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((project) => (
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
      {projectData && projectData.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
        />
      )}
    </motion.section>
  );
};
export default Projects;
