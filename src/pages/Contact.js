import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";
import titleBackground from "../components/images/contact1.png";
import pageOne from "../components/images/contact2.png";

function Contact(props) {
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
          </HTMLFlipBook>
    </div>
  );
}

export default Contact