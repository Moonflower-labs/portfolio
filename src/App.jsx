import { Routes, Route } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WorkHistory from "./components/WorkHistory";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Sidenav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<WorkHistory />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
