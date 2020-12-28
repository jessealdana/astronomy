import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";
// import titleBackground from "https://jessealdana.smugmug.com/CeAkatl/i-mFxhxsv";
// import pageOne from "https://jessealdana.smugmug.com/CeAkatl/i-3fSdchn";
// import pageTwo from "https://jessealdana.smugmug.com/CeAkatl/i-kdd9DbD";
// import pageThree from "https://jessealdana.smugmug.com/CeAkatl/i-5cB9LM7";
// import pageFour from "https://jessealdana.smugmug.com/CeAkatl/i-jgXgsSc";
// import pageFive from "https://jessealdana.smugmug.com/CeAkatl/i-xmzWSrh";
// import pageSix from "https://jessealdana.smugmug.com/CeAkatl/i-3Thwkgr";
// import pageSeven from "https://jessealdana.smugmug.com/CeAkatl/i-r6H8XKG";
import ReactPlayer from 'react-player';


function ModOne(props) {
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
              <img src="https://photos.smugmug.com/photos/i-mFxhxsv/0/M/i-mFxhxsv-M.png" alt="Page One" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-3fSdchn/0/M/i-3fSdchn-M.png"  alt="Page Two" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-kdd9DbD/0/M/i-kdd9DbD-M.png"  alt="Page Three" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-5cB9LM7/0/M/i-5cB9LM7-M.png"  alt="Page Four" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-jgXgsSc/0/M/i-jgXgsSc-M.png" alt="Page Five" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-xmzWSrh/0/M/i-xmzWSrh-M.png" alt="Page Six" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-3Thwkgr/0/M/i-3Thwkgr-M.png" alt="Page Seven" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="container">
              <div className="video col-sm-6">
                <img src="https://photos.smugmug.com/photos/i-r6H8XKG/0/M/i-r6H8XKG-M.png" alt="Page Eight" style={{width: "500px", height: "500px"}}></img>
                    <div className="row" style={{height: "500px", width: "500px", marginTop: "-40vh"}}>                       
                      <ReactPlayer 
                          style={{postion: "relative", marginLeft: "1vw", zIndex: "2"}}
                          url="https://youtu.be/2U9JsZJVqnA" 
                      />
                    </div>

              </div>
            </div>
          </div>
        </HTMLFlipBook>
    </div>
  );
}

export default ModOne