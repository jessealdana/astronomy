import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";

function ModSix(props) {
  return (
    <div className="myBook">
      <Navigation />
      <HTMLFlipBook 
          width={500} 
          height={500} 
          style={{marginLeft: "auto", marginRight: "auto", marginTop: "5%"}}
        >
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-T2WZmZW/0/e4878e2a/X2/i-T2WZmZW-X2.png" alt="Page One" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-RPwd3kb/0/8fcbf8ec/X2/i-RPwd3kb-X2.png"  alt="Page Two" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-fCCxvSk/0/8378deb9/X2/i-fCCxvSk-X2.png"  alt="Page Three" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-k3jKtQC/0/4d9b63a8/X2/i-k3jKtQC-X2.png"  alt="Page Four" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-zKfRSQP/0/80434158/X2/i-zKfRSQP-X2.png" alt="Page Five" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-dxNcwL2/0/3ee4144f/X2/i-dxNcwL2-X2.png" alt="Page Six" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
        </HTMLFlipBook>
    </div>
  );
}

export default ModSix;