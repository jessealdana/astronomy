import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";
import titleBackground from "../components/images/cp1.png";
import pageOne from "../components/images/cp2.png";
import pageTwo from "../components/images/cp3.png";
import pageThree from "../components/images/mp8.png";

function ModFive(props) {
  return (
    <div className="myBook">
      <Navigation />
        <HTMLFlipBook width={1000} height={800}>
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
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageTwo})`, width: "1000px", height: "1000px"}}>Page 3</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageThree})`, width: "1000px", height: "1000px"}}>Page 4</div>
            </div>
          </div>
        </HTMLFlipBook>
    </div>
  );
}

export default ModFive;