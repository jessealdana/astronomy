import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";
import titleBackground from "../components/images/pageFour1.png";
import pageOne from "../components/images/pageFive1.png";
import pageTwo from "../components/images/pageSix1.png";
import pageThree from "../components/images/mpEight2.png";
// import pageFour from "../components/images/pageFour1.png";
// import pageFive from "../components/images/pageFive1.png";
// import pageSix from "../components/images/pageSix1.png";
// import pageSeven from "../components/images/mpEight1.png";

function MyBook(props) {
  return (
    <div className="myBook">
      <Navigation />
        <HTMLFlipBook width={500} height={500} style={{marginLeft: "auto", marginRight: "auto", marginTop: "5%"}}>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${titleBackground})`, width: "500px", height: "500px"}}>Page 1</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageOne})`, width: "500px", height: "500px"}}>Page 2</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageTwo})`, width: "500px", height: "500px"}}>Page 3</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageThree})`, width: "500px", height: "500px"}}>Page 4</div>
            </div>
          </div>
          {/* <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageFour})`, width: "500px", height: "500px"}}>Page 5</div>
            </div>
          </div> */}
          {/* <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageFive})`, width: "500px", height: "500px"}}>Page 6</div>
            </div>
          </div> */}
          {/* <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageSix})`, width: "500px", height: "500px"}}>Page 7</div>
            </div>
          </div> */}
          {/* <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageSeven})`, width: "500px", height: "500px"}}>Page 8</div>
            </div>
          </div> */}
        </HTMLFlipBook>
        <Footer />
    </div>
  );
}

export default MyBook;