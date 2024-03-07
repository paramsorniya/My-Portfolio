import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },

  animate: {
    x: "-220%",

    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Param Sorniya</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and UI Designer
          </motion.h1>
          <div className="buttons">
            <motion.button variants={textVariants}>
              See the latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Web Designer , Blockchain
      </motion.div>
      <div className="imageContainer">
        <img className="img" src="5.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
