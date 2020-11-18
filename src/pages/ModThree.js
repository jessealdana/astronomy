import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";
import titleBackground from "../components/images/sp1.png";
import pageOne from "../components/images/sp2.png";
import pageTwo from "../components/images/sp3.png";
import pageThree from "../components/images/ap4.png";
import pageFour from "../components/images/ap5.png";
import pageFive from "../components/images/ap6.png";

function ModThree(props) {
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
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageFour})`, width: "1000px", height: "1000px"}}>Page 5</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageFive})`, width: "1000px", height: "1000px"}}>Page 6</div>
            </div>
          </div>
        </HTMLFlipBook>
    </div>
  );
}

export default ModThree;