import React from "react";
import "./app.scss";
import Navbar from "./components/Navbar";
import Test from "./Test";
import Hero from "./components/Hero";
import Parallax from "./components/Parallax";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
const App = () => {
  return (
    <div>
      <Cursor></Cursor>
      <section id="HomePage">
        <Navbar></Navbar>
        <Hero></Hero>
      </section>
      <section id="Services">
        {" "}
        <Parallax type="services" />
      </section>
      <section> <Services/></section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio></Portfolio>
      <section id="Contact"> <Contact></Contact></section>
    </div>
  );
};

export default App;
