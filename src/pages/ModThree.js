import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";
import titleBackground from "../components/images/spOne1.png";
import pageOne from "../components/images/spTwo1.png";
import pageTwo from "../components/images/spThree1.png";
import pageThree from "../components/images/apFour1.png";
import pageFour from "../components/images/apFive1.png";
import pageFive from "../components/images/apSix1.png";

function ModThree(props) {
  return (
    <div className="myBook">
      <Navigation />
        <HTMLFlipBook width={400} height={400} style={{marginLeft: "auto", marginRight: "auto"}}>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${titleBackground})`, width: "400px", height: "400px"}}>Page 1</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageOne})`, width: "400px", height: "400px"}}>Page 2</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageTwo})`, width: "400px", height: "400px"}}>Page 3</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageThree})`, width: "400px", height: "400px"}}>Page 4</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageFour})`, width: "400px", height: "400px"}}>Page 5</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageFive})`, width: "400px", height: "400px"}}>Page 6</div>
            </div>
          </div>
        </HTMLFlipBook>
    </div>
  );
}

export default ModThree;