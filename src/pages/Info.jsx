import { motion } from "framer-motion";
import About from "../components/About";
import Services from "../components/Services";

const Info = () => {
  return (
    <motion.div
      // variants={routeVariants}
      initial={{opacity:0,filter:'blur(10px)'}}
      animate={{opacity:1,filter:'blur(0px)',transition:{duration:0.3}}}
      exit={{backgroundColor:"rgb(167 139 250)",opacity:0,transition:{duration:0}}}
      className="min-h-screen bg-slate-300 flex flex-col">
      <About />
      <Services />
    </motion.div>
  );
};

export default Info;
