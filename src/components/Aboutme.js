import React from "react";
import Button from 'react-bootstrap/Button';
import {FaFile,FaLinkedin,FaGithub,FaInstagramSquare} from 'react-icons/fa'
export default function Aboutme() {
  return (
    <div className="container"  style={{ marginTop: "180px" }}>
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
          <p className="information">
            Apart from being a web developer I like to talk to people, get to know them. I also love to listen music and go to concerts. I like to play cricket. 
          </p>
        </div>
        <div className="text-center" >
        <Button href="/Resume.pdf" target="blank" variant="outline-info" className="iconbutton"><h4> Resume <FaFile/></h4></Button>
        <div className="conatiner text-center" style={{marginTop:"10px"}}>
        <Button href="https://www.linkedin.com/in/darshan-sanghavi-b93899235/" className="iconbutton" target="blank" variant="outline-info"><h4><FaLinkedin style={{color: "#0A66C2",height:"30px",width:"30px"}}/></h4></Button>
        <Button href="https://github.com/darshansanghavi633?tab=repositories" className="iconbutton" target="blank" variant="outline-info"><h4><FaGithub style={{color: "#fff",height:"30px",width:"30px"}}/></h4></Button>
        <Button href="https://www.instagram.com/x_darshann_x/" target="blank" className="iconbutton" variant="outline-info"><h4><FaInstagramSquare style={{color: "#DD2A7B",height:"30px",width:"30px"  }}/></h4></Button>
        </div>
        </div>
      </div>
    </div>
  );
}
