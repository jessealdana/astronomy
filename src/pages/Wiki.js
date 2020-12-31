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
              <img id="nasaPic" src="https://photos.smugmug.com/photos/i-NCQNQrZ/0/b030d820/X2/i-NCQNQrZ-X2.png" alt="NASA" />
            </a>
            <img id="vidPic" src="https://photos.smugmug.com/photos/i-hcB2Kxr/0/dd3ec551/X3/i-hcB2Kxr-X3.png" alt="Video" />
            <a href="/astronaut">
              <img id="astroPic" src="https://photos.smugmug.com/photos/i-gmcBbGB/0/12c094d0/X3/i-gmcBbGB-X3.png" alt="Astronaut" />
            </a>
            <a href="/chol">
              <img id="cholPic" src="https://photos.smugmug.com/photos/i-rkCqQ2C/0/e6256fac/X3/i-rkCqQ2C-X3.png" alt="Chol" />
            </a>
            <a href="/kaquix">
              <img id="kaquixPic" src="https://photos.smugmug.com/photos/i-kCScWsx/0/8bf926c4/X3/i-kCScWsx-X3.png" alt="Kaquix" />
            </a>
            <a href="/lunar">
              <img id="lunarPic" src="https://photos.smugmug.com/photos/i-Kv9c4VF/0/c3af5521/X3/i-Kv9c4VF-X3.png" alt="Lunar" />
            </a>
            <a href="/xultun1">
              <img id="xultun1Pic" src="https://photos.smugmug.com/photos/i-TWfhFmH/0/8ebd8bda/X3/i-TWfhFmH-X3.png" alt="Xultun1" />
            </a>
            <a href="/here">
              <img id="herePic" src="https://photos.smugmug.com/photos/i-qJ7xfmJ/0/99923505/X3/i-qJ7xfmJ-X3.png" alt="Here" />
            </a>
            <a href="/xultun2">
              <img id="xultun2Pic" src="https://photos.smugmug.com/photos/i-GN4xwsX/0/cf97d457/X3/i-GN4xwsX-X3.png" alt="Xultun2" />
            </a>
            <a href="/moons">
              <img id="moonsPic" src="https://photos.smugmug.com/photos/i-SRbtzjb/0/fda37881/X3/i-SRbtzjb-X3.png" alt="Moons" />
            </a>
            <a href="/eclipses">
              <img id="eclipsesPic" src="https://photos.smugmug.com/photos/i-rmM7S4b/0/5afdd4c6/X3/i-rmM7S4b-X3.png" alt="Eclipses" />
            </a>
        </div>
      </div>
    </div>
    </>
  );
}