import { Routes, Route } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import WorkHistory from "./pages/WorkHistory";
import Footer from "./components/Footer";
import Info from "./pages/Info";
function App() {
  return (
    <>
      <Sidenav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<Info />} />
        <Route path="/work" element={<WorkHistory />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
