import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";

function ModFive(props) {
  return (
    <div className="myBook">
      <Navigation />
      <HTMLFlipBook 
          width={500} 
          height={500} 
          style={{marginLeft: "auto", marginRight: "auto", marginTop: "5%"}}
        >
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-dKDBgJm/0/4e615a0b/X2/i-dKDBgJm-X2.png" alt="Page One" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-S9rWgXQ/0/a6ce3113/X2/i-S9rWgXQ-X2.png"  alt="Page Two" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-rgnVXf3/0/589e6a46/X2/i-rgnVXf3-X2.png"  alt="Page Three" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-r6H8XKG/0/336402a5/M/i-r6H8XKG-M.png"  alt="Page Four" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
        </HTMLFlipBook>
    </div>
  );
}

export default ModFive;