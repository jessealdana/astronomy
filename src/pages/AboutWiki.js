import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";

function AboutWiki(props) {
  return (
    <div className="myBook">
      <Navigation />
        <HTMLFlipBook 
          width={500} 
          height={500} 
          style={{marginLeft: "auto", marginRight: "auto", marginTop: "2vh"}}
        >
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-3Thwkgr/0/b1618f48/M/i-3Thwkgr-M.png" alt="Page One" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-pZH7SQN/0/22b1814a/X2/i-pZH7SQN-X2.png"  alt="Page Two" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
        </HTMLFlipBook>
    </div>
  );
}


export default AboutWiki;