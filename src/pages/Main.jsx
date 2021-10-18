import React from "react";
import About from "../components/About";
import Certificates from "../components/Certificates";
import Contacts from "../components/Contacts";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";

function Main () {
  return(
    <main className="content">
      <Home/>
      <About/>
      <Certificates/>
      <Portfolio/>
      <Contacts/>
    </main>
  );
}

export default Main;