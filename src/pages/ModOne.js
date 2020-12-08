import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";
import titleBackground from "../components/images/mpOne1.png";
import pageOne from "../components/images/mpTwo1.png";
import pageTwo from "../components/images/mpThree1.png";
import pageThree from "../components/images/mpFour1.png";
import pageFour from "../components/images/mpFive1.png";
import pageFive from "../components/images/mpSix1.png";
import pageSix from "../components/images/mpSeven1.png";
import pageSeven from "../components/images/mpEight1.png";
import ReactPlayer from 'react-player';


function ModOne(props) {
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
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageFour})`, width: "600px", height: "600px"}}>Page 5</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageFive})`, width: "600px", height: "600px"}}>Page 6</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageSix})`, width: "600px", height: "600px"}}>Page 7</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="container">
              <div className="video col-sm-6">
                <div className="page-image" style={{backgroundImage: `url(${pageSeven})`, width: "600px", height: "600px"}}> 
                    <div className="row">                       
                      <ReactPlayer 
                          style={{postion: "relative", marginTop: "20%", marginLeft: "1vw"}}
                          url="https://youtu.be/2U9JsZJVqnA" 
                      />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </HTMLFlipBook>
    </div>
  );
}

export default ModOne