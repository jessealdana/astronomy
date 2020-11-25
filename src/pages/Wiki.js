import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import wiki from "../components/images/wiki.png";
import sample from "../components/images/sample.png"
import popol from "../components/images/popol.png";

export default function Wiki() {
  return (
    <>
    <Navigation />
    <div className="home">
      <div className="container">
        <div className="main">
            <a href="/sample">
                <img id="samplePic" src={sample} alt="Sample" />
            </a>
            <img id="wikiTitle" src={wiki} alt="Wiki" />
            <a href="/popol">
                <img id="anotherPopolVuh" src={popol} alt="Another Popol Vuh" />
            </a>
        </div>

      </div>
    </div>
    </>
  );
}