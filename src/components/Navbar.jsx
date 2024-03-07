import React from "react";
import "./navbar.scss";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
  <Sidebar></Sidebar>
      <div className="wrapper">
        <motion.span initial={{ opacity: 0, scale: 0.5 }}
        animate={{opacity:1, scale: 1}}
        transition={{duration:0.5}}
        >
          Param Sorniya
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/param-sorniya-2b53b9247/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.instagram.com/param_nama_8/?hl=en">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://github.com/paramsorniya">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
