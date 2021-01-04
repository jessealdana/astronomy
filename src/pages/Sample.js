import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";
// import titleBackground from "../components/images/eventsOne1.png";
// import pageOne from "../components/images/mpEight1.png";

function Events(props) {
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
              <img src="https://photos.smugmug.com/photos/i-g7ZBf2d/0/22058032/X2/i-g7ZBf2d-X2.png" alt="Page One" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-r6H8XKG/0/336402a5/M/i-r6H8XKG-M.png"  alt="Page Two" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
        </HTMLFlipBook>
    </div>
  );
}

export default Events