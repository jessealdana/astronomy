import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";
import titleBackground from "../components/images/events1.png";
import pageOne from "../components/images/mp8.png";

function Events(props) {
    return (
      <div className="myBook">
        <Navigation />
          <HTMLFlipBook width={1000} height={1000} style={{marginLeft: "auto", marginRight: "auto"}}>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${titleBackground})`, width: "1000px", height: "1000px"}}>Page 1</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageOne})`, width: "1000px", height: "1000px"}}>Page 2</div>
            </div>
          </div>
          </HTMLFlipBook>
    </div>
  );
}

export default Events