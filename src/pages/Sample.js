import React from "react";
import Navigation from "../components/Navigation";
import { PDFViewer } from '@react-pdf/renderer'; 
import MyDocument from "../components/MyDocument/index";
import "../styles.css";


export default function Sample() {
  return (
    <div className="about">
      <Navigation />
      <div className="container">
        <div className="row" style={{marginTop: "20%"}}>
                        <div className="module col-sm-6">
                            <PDFViewer style={{postion: "relative", marginLeft: "-40vh", height: "75vh", width: "45vw", paddingRight: "0"}}>
                                <MyDocument />
                            </PDFViewer>
                        </div>
                        <div className="masthead col-sm-6">                        
                            <h1>Sample</h1>
                            <br />
                            <h3>by Sample</h3>
                            <br />
                            <h3>at Sample Elementary</h3>
                            <br />
                            <p>This sample is for demonstration purposes only</p>
                        </div>
        </div>
      </div>
    </div>
  );
}