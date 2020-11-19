import React from "react";
import "../styles.css";
import home from "../components/images/twoEyed.png";
import about from "../components/images/trimmedAbout.png";
import wiki from "../components/images/wiki.png";
import modOne from "../components/images/modOne.png";
import modTwo from "../components/images/modTwo.png";
import modThree from "../components/images/modThree.png";
import modFive from "../components/images/modFour.png";
import modSix from "../components/images/modFive.png";

function Home() {
  return (
    <div className="home">
      <div className="container">
      <div className="main">
            <a href="/">
                <img id="homePic" src={home} alt="Home" />
            </a>
            <a href="/About">
                <img id="aboutPic" src={about} alt="About" />
            </a>
            <a href="/Wiki">
                <img id="wikiPic" src={wiki} alt="Wiki" />
            </a>
            <a href="/modOne">
                <img id="modOnePic" src={modOne} alt="Module 1" />
            </a>
            <a href="/modTwo">
                <img id="modTwoPic" src={modTwo} alt="Module 2" />
            </a>
            <a href="/modThree">
                <img id="modThreePic" src={modThree} alt="Module 3" />
            </a>
            <a href="/modFive">
                <img id="modFivePic" src={modFive} alt="Module 5" />
            </a>
            <a href="/modSix">
                <img id="modSixPic" src={modSix} alt="Module 6" />
            </a>
        </div>
      </div>
    </div>
    
  );
}

export default Home;