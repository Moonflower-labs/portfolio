import About from "../components/About";
import Services from "../components/Services";

const Info = () => {
  return (
    <div className="min-h-screen bg-slate-300 flex flex-col">
      <About />
      <Services />
    </div>
  );
};

export default Info;
