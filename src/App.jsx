import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import WorkHistory from "./pages/WorkHistory";
import Footer from "./components/Footer";
import Info from "./pages/Info";
function App() {
  const location = useLocation()
  return (
    <>
      <Sidenav />
      <AnimatePresence>
            <Routes location={location} key={location.key}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<Info />} />
        <Route path="/work" element={<WorkHistory />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
