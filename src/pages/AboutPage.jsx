import React from "react";
import Home from "../components/Home";
import About from "../components/About";

function AboutPage () {
  return(
    <main className="content">
      <Home image={true}/>
      <About/>
    </main>
  );
}

export default AboutPage;