import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";
import titleBackground from "../components/images/title1.png";
import pageOne from "../components/images/pageOne1.png";
import pageTwo from "../components/images/pageTwo1.png";
import pageThree from "../components/images/pageThree1.png";
import pageFour from "../components/images/pageFour1.png";
import pageFive from "../components/images/pageFive1.png";
import pageSix from "../components/images/pageSix1.png";
import pageSeven from "../components/images/mpEight1.png";

function MyBook(props) {
  return (
    <div className="myBook">
      <Navigation />
        <HTMLFlipBook width={400} height={400} style={{marginLeft: "auto", marginRight: "auto", marginTop: "5%"}}>
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
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageSix})`, width: "400px", height: "400px"}}>Page 7</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageSeven})`, width: "400px", height: "400px"}}>Page 8</div>
            </div>
          </div>
        </HTMLFlipBook>
    </div>
  );
}

export default MyBook;