import { motion } from "framer-motion";
import React from "react";

const Test = () => {
  return (
    <div className="course">
      <motion.div
        className="box"
        intial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1}}
        transition={{ duration: 2}}
        whileInView={{opacity:1, scale:2}}
      
      ></motion.div>
    </div>
  );
};

export default Test;
