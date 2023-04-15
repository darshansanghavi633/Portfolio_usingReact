import React from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import Aboutme from "./Aboutme";
import Contactme from "./Contactme";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="container" style={{ marginTop: "180px" }}>
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Contactme/>
      <Footer/>
    </div>
  );
}
