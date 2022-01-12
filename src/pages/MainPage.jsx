import React from "react";
import Certificates from "../components/Certificates";
import Home from "../components/Home";

function MainPage () {
  return(
    <main className="content">
      <Home/>
      <Certificates/>
    </main>
  );
}

export default MainPage;