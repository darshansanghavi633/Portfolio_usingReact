import React from "react";
import Accordian from "./Accordian";
import DarkVariantExample from "./DarkVariantExample";
export default function Projects() {
  return (
    <div className="container text-center" style={{ marginTop: "150px" }}>
      <h1 style={{ color: "yellowgreen" }}>Projects</h1>
      <p style={{ fontSize: "large" }}>
        A project is complete when it starts working for you, rather than you
        working for it. Some replicas and personal projects which I developed.
      </p>
      <div className="container">
        <h2 style={{ color: "#66fcf1" }}>Replicas</h2>
        <p style={{ fontSize: "large" }}>
          Cloning a project is perfectly acceptable as long as you use it as a
          learning opportunity to understand how to engineer features.
        </p>
        <h3 style={{ color: "#66fcf1" ,display:"flex"}}>1. News App</h3>
        <DarkVariantExample
          img1="/NewsApp/Page1.png"
          img2="/NewsApp/Page2.png"
          img3="/NewsApp/Page3.png"
          img4="/NewsApp/Page4.png"
        />
        <Accordian
          description="This is a news app named NewsMonkey where news are fetched from an API conataining all genres of news. News which fetch are real and fresh from trusted authorities mention in red. User can read the news description and if it gains his/her interest can click on read more to view entire article on it. The navbar consist of the different genres of news, suppose a user wants to read news related to only sports or technology can go to that tab through navbar. Also there is infinite scroll where news are continously. "
          learning="How to add our own customize spinner when its loading. How to use Infinite scroll instead of next and previous button. Card component of bootstrap. How routing is done using react-router-dom "
        />
        <h3 style={{ color: "#66fcf1" ,display:"flex"}}>2. TextUtils</h3>
        <DarkVariantExample
          img1="/Textutils/Page1.png"
          img2="/Textutils/Page2.png"
          img3="/Textutils/Page3.png"
          img4="/Textutils/Page4.png"
        />
        <Accordian
          description="Textutil is a powerful tool that can save time and effort when working with text files, especially for those who frequently need to perform these types of tasks. User can convert text to upper case , lower case , remove spaces, copy text to clipboard and clear text."
          learning="Textutil is my first react project where i learned lots of things about react how components work, how to pass props, what are hooks, what's the need of learning react js, how usestate hook is used, how to add dark mode in react js."
        />
        <h3 style={{ color: "#66fcf1" ,display:"flex"}}>3. E-Dashboard</h3>
        <DarkVariantExample
          img1="/E-Dashboard/Page1.png"
          img2="/E-Dashboard/Page2.png"
          img3="/E-Dashboard/Page3.png"
          img4="/E-Dashboard/Page4.png"
        />
        <Accordian
          description="E-Dashboard display a list of product , you can update , delete and add product through this dashboard. Data is stored in a mongodb database. "
          learning="How Node JS works, how to connect to database, how to make API's. Restful API's. Use of Express JS. How to make models using mongoose , set routes using express and use nodemon to save time. "
        />
      </div>
      <div className="container">
        <h2 style={{ color: "#66fcf1" }}>Personal Projects</h2>
        <p style={{ fontSize: "large" }}>
          The more projects one make more things he learn and faster he gets in it.
        </p>
        <h3 style={{ color: "#66fcf1" ,display:"flex"}}>1. Covid Data Explorer</h3>
        <DarkVariantExample
          img1="/Covid/Page1.png"
          img2="/Covid/Page2.png"
          img3="/Covid/Page3.png"
          img4="/Covid/Page4.png"
        />
        <Accordian
          description="Covid Data Explorer keep track of covid data how many cases, deaths, recovery has occured in a country. The data is fetched from an API."
          learning="How to fetch API. How to resolve promises. Asynchronous nature of JS."
        />
        <h3 style={{ color: "#66fcf1" ,display:"flex"}}>2. Portfolio (using React)</h3>
        <DarkVariantExample
          img1="/Portfolio/Page1.png"
          img2="/Portfolio/Page2.png"
          img3="/Portfolio/Page3.png"
          img4="/Portfolio/Page4.png"
        />
        <Accordian
          description="A portfolio is a collection of materials that demonstrates your skills, experience, and accomplishments. The purpose of a portfolio is to provide evidence of your abilities and expertise, as well as to demonstrate your style, creativity, and unique perspective. "
          learning="Used bootstrap and Reusability of components. How to use cards, accordian and carousel."
        />
        <h3 style={{ color: "#66fcf1" ,display:"flex"}}>3. Crickbet</h3>
        <DarkVariantExample
          img1="/Crickbet/Page1.png"
          img2="/Crickbet/Page2.png"
          img3="/Crickbet/Page3.png"
          img4="/Crickbet/Page4.png"
        />
        <Accordian
          description="Crickbet is a betting website , where user place there bets on the team and on winning gain some points depending on the odds of bet. The game is handled by admin and a leaderboard is maintian to show the user who's point are more or who is leading in this game."
          learning="How MERN stack project is made, complex models of database, maintain Restful API's. Much more !"
        />
      </div>
    </div>
  );
}
