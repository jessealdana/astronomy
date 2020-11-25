import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";
import titleBackground from "../components/images/mp1.png";
import pageOne from "../components/images/mp2.png";
import pageTwo from "../components/images/mp3.png";
import pageThree from "../components/images/mp4.png";
import pageFour from "../components/images/mp5.png";
import pageFive from "../components/images/mp6.png";
import pageSix from "../components/images/mp7.png";
import pageSeven from "../components/images/mp8.png";
import ReactPlayer from 'react-player';


function ModOne(props) {
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
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageSix})`, width: "1000px", height: "1000px"}}>Page 7</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="container">
              <div className="video col-sm-6">
                <div className="page-image" style={{backgroundImage: `url(${pageSeven})`, width: "1000px", height: "1000px"}}> 
                    <div className="row">                       
                      <ReactPlayer 
                          style={{postion: "relative", marginTop: "30%", marginLeft: "7vw"}}
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