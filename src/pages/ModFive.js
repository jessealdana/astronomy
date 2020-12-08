import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";
import titleBackground from "../components/images/cpOne1.png";
import pageOne from "../components/images/cpTwo1.png";
import pageTwo from "../components/images/cpThree1.png";
import pageThree from "../components/images/mpEight1.png";

function ModFive(props) {
  return (
    <div className="myBook">
      <Navigation />
        <HTMLFlipBook width={600} height={600} style={{marginLeft: "auto", marginRight: "auto"}}>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${titleBackground})`, width: "600px", height: "600px"}}>Page 1</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageOne})`, width: "600px", height: "600px"}}>Page 2</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageTwo})`, width: "600px", height: "600px"}}>Page 3</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageThree})`, width: "600px", height: "600px"}}>Page 4</div>
            </div>
          </div>
        </HTMLFlipBook>
    </div>
  );
}

export default ModFive;