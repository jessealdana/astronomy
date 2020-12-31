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
              <img src="https://photos.smugmug.com/photos/i-nx9R9zm/0/4b44e5dd/M/i-nx9R9zm-M.png" alt="Page One" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-6NPbXzs/0/6293ce17/M/i-6NPbXzs-M.png"  alt="Page Two" style={{width: "500px", height: "500px"}}></img>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <img src="https://photos.smugmug.com/photos/i-FVkQB8W/0/6f3c5e1f/M/i-FVkQB8W-M.png"  alt="Page Three" style={{width: "500px", height: "500px"}}></img>
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