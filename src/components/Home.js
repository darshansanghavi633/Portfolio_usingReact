import React from "react";
import Skills from "./Skills";

export default function Home() {
  return (
    <div className="container" style={{ marginTop: "180px" }}>
      <div className="clearfix">
        <img
          src="/SHIRT PIC.1.jpg"
          className="col-md-6 float-md-end mb-3 ms-md-3  profile_pic"
          alt="..."
          style={{}}
        />

        <div className="home1">
          <p className="hello">Hello : ) I am </p>
          <h1 className="username">Darshan Sanghavi</h1>
          <h2 className="field">Full Stack - Web Developer</h2>
          <p className="information" style={{ marginTop: "15px" }}>
            Computer Science student. I consider my self a responsible and
            orderly person. You will find my skills and links to projects in
            below section.
          </p>
          <p className="information">
            As a full stack MERN developer, I am a master of all trades in the
            web development world. I specialize in building dynamic and
            intuitive web applications using the latest technologies and
            techniques.
          </p>
          <p className="information">
            From crafting beautiful user interfaces with React to designing
            efficient and scalable backends with Node.js and Express, I possess
            a broad range of skills that allow me to bring complex ideas to
            life.
          </p>
          <p className="information">
            I thrive in an environment where I can collaborate with talented
            individuals and utilize my problem-solving skills to tackle new
            challenges. With a strong attention to detail and a passion for
            delivering high-quality work, I am committed to delivering
            cutting-edge solutions that exceed expectations.
          </p>
          <p className="information">
            So, if you're looking for a creative and innovative full stack MERN
            developer who can bring your ideas to life, I'm your go-to person.
            Let's build something amazing together!
          </p>
        </div>
      </div>
      <Skills/>
    </div>
  );
}
