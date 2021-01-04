import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";

function MyBook(props) {
  return (
    <div className="myBook">
      <Navigation />
        <HTMLFlipBook 
          width={500} 
          height={500} 
          style={{marginLeft: "auto", marginRight: "auto", marginTop: "2vh"}}
        >
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-vWdmk28/0/b7947127/X2/i-vWdmk28-X2.png" alt="Page One" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-kGtsz8B/0/5b54261d/X2/i-kGtsz8B-X2.png"  alt="Page Two" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-nLq5BW4/0/41eef0cc/X2/i-nLq5BW4-X2.png"  alt="Page Three" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-r6H8XKG/0/336402a5/M/i-r6H8XKG-M.png"  alt="Page Four" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
        </HTMLFlipBook>
        <br />
        <br />
        <Footer />
    </div>
  );
}

export default MyBook;