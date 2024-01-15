import { motion } from "framer-motion";
import About from "../components/About";
import Services from "../components/Services";

const Info = () => {
  const routeVariants = {
    initial: {
       opacity:0,
       filter:'blur(10px)'
    },
    final: {
       opacity:1,
       filter:'blur(0px)'
    },
    exit: {
      filter:'blur(10px)'
    }
  }
  return (
    <motion.div
      variants={routeVariants}
      initial={'initial'}
      animate={'final'}
      transition={{ duration: 0.6 }}
      exit={'exit'}
      className="min-h-screen bg-slate-300 flex flex-col">
      <About />
      <Services />
    </motion.div>
  );
};

export default Info;
