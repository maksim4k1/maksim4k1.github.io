import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";

function AboutPage () {
  return(
    <main className="content">
      <Home image={true}/>
      <About/>
      <Skills/>
    </main>
  );
}

export default AboutPage;