import React from "react";
// import Navigation from "../components/Navigation";
import "../styles.css";
import home from "../components/images/ceAkatl.png";
import collab from "../components/images/collab.png";
import sample from "../components/images/events.png"


export default function Wiki() {
  return (
    <>
    <div className="wiki">
      <div className="container">
        <div className="main">
            <a href="/">
                <img id="homePic" src={home} alt="Home" />
            </a>
            <a href="/sample">
                <img id="samplePic" src={sample} alt="Events" />
            </a>
            <a href="/aboutWiki">
              <img id="wikiTitle" src={collab} alt="Wiki" />
            </a>
            <a href="/nasa">
              <img id="nasaPic" src="https://photos.smugmug.com/photos/i-NCQNQrZ/0/b030d820/X2/i-NCQNQrZ-X2.png" alt="Wiki" />
            </a>
        </div>
      </div>
    </div>
    </>
  );
}