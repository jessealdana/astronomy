import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import collab from "../components/images/collab.png";
import sample from "../components/images/events.png"
import popol from "../components/images/popol.png";

export default function Wiki() {
  return (
    <>
    <Navigation />
    <div className="home">
      <div className="container">
        <div className="main">
            <a href="/sample">
                <img id="samplePic" src={sample} alt="Events" />
            </a>
            <a href="/aboutWiki">
              <img id="wikiTitle" src={collab} alt="Wiki" />
            </a>
            <a href="/popol">
                <img id="anotherPopolVuh" src={popol} alt="Another Popol Vuh" />
            </a>
        </div>

      </div>
    </div>
    </>
  );
}