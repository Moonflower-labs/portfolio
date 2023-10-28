import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WorkHistory from "./components/WorkHistory";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <About />
      <WorkHistory />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
