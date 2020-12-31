import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import ReactPlayer from 'react-player';

function Astronaut() {
    return(
        <div className="myVid">
            <Navigation />
            <div className="row">
                <ReactPlayer 
                    style={{position: "relative", marginTop: "2vh", marginLeft: "auto", marginRight: "auto", zIndex: "2"}}
                    url="https://youtu.be/wWJaSbkxmU4" 
                />
                </div>
        </div>
    )
}

export default Astronaut