import React from "react";
import About from "../components/About";
import Certificates from "../components/Certificates";
import Home from "../components/Home";

function MainPage () {
  return(
    <main className="content">
      <Home/>
      <About/>
      <Certificates/>
    </main>
  );
}

export default MainPage;