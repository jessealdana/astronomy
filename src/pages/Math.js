import React from "react";
import ReactPlayer from 'react-player';
import "../styles.css"
import Navigation from "../components/Navigation"
import { PDFViewer } from '@react-pdf/renderer'; 
import MayanMath from "../components/MayanMath/index";

function Math() {
    return (
        <div className="math">
            <Navigation />
                <div className="container">
                    <div className="row" style={{marginTop: "20%"}}>
                        <div className="module col-sm-6">
                            <PDFViewer style={{postion: "relative", marginLeft: "-40vh", height: "75vh", width: "45vw", paddingRight: "0"}}>
                                <MayanMath />
                            </PDFViewer>
                        </div>
                        <div className="video col-sm-6">                        
                            <ReactPlayer 
                                style={{postion: "relative", marginTop: "30%", marginLeft: "7vw"}}
                                url="https://youtu.be/2U9JsZJVqnA" 
                            />
                        </div>
                    </div>
                </div>
        </div>
    )

}

export default Math;