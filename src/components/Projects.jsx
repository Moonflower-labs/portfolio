/* eslint-disable no-unused-vars */
import React from "react";
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
    <div id="projects" className="max-w-[1024px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center  text-pink-700">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
        temporibus voluptatibus! Hic, quos neque magni illum explicabo eos quae
        doloremque id mollitia aut inventore deserunt facilis nesciunt quidem
        alias blanditiis.
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
        />

        <ProjectItem
          img={florImg}
          title="Membership Site with Stripe API"
          link="https://la-flor-blanca.onrender.com"
          icons={
            <>
              <AiFillHtml5 />
              <FaCss3 />
              <FaBootstrap />
              <RiJavascriptLine />
              <FaPython />
            </>
          }
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
        />
      </div>
    </div>
  );
};
export default Projects;
