/* eslint-disable no-unused-vars */
import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WorkHistory from "./components/WorkHistory";
import About from "./components/About";
function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <About />
      <WorkHistory />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
