import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import wiki from "../components/images/wiki.png";
import sample from "../components/images/sample.png"

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
        </div>

      </div>
    </div>
    </>
  );
}