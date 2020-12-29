import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";
import pageSeven from "../components/images/mpEight2.png";
import ReactPlayer from 'react-player';

function ModThree(props) {
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
              <img src="https://photos.smugmug.com/photos/i-bm2Dnjh/0/09e176dd/X2/i-bm2Dnjh-X2.png" alt="Page One" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-GfCNK7D/0/a881ab8e/X2/i-GfCNK7D-X2.png"  alt="Page Two" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-gXZWzPJ/0/01daf33a/X2/i-gXZWzPJ-X2.png"  alt="Page Three" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-LRX7VKM/0/3a012687/X2/i-LRX7VKM-X2.png"  alt="Page Four" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-tJHdfdr/0/de4a4088/X2/i-tJHdfdr-X2.png" alt="Page Five" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-mKs9NPK/0/b232fb1e/X2/i-mKs9NPK-X2.png" alt="Page Six" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-3Thwkgr/0/M/i-3Thwkgr-M.png" alt="Page Seven" style={{width: "550px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="container">
              <div className="video">
                <div className="page-image" style={{backgroundImage: `url(${pageSeven})`, width: "500px", height: "500px"}}> 
                    <div className="row">                       
                      <ReactPlayer 
                          style={{position: "relative", marginTop: "16%", marginLeft: "1vw"}}
                          url="https://youtu.be/tTpprVa23mo" 
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

export default ModThree;

