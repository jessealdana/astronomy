import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";
import titleBackground from "../components/images/mp7.png";
import pageOne from "../components/images/mp8.png";
import ReactPlayer from 'react-player';

function TwoSixtyClass(props) {
    return(
        <div className="myBook">
            <Navigation>
                <HTMLFlipBook width={1000} height={1000} style={{marginLeft: "auto", marginRight: "auto"}}>
                <div className="demoPage">
                    <div className="pageContent">
                        <div className="page-image" style={{backgroundImage: `url(${titleBackground})`, width: "1000px", height: "1000px"}}>Page 1</div>
                    </div>
                </div>
                <div className="demoPage">
                    <div className="container">
                    <div className="video col-sm-6">
                        <div className="page-image" style={{backgroundImage: `url(${pageOne})`, width: "1000px", height: "1000px"}}> 
                            <div className="row">                       
                            <ReactPlayer 
                                style={{postion: "relative", marginTop: "30%", marginLeft: "7vw"}}
                                url="https://jessealdana.smugmug.com/FirstClass/n-m3jz5k/i-jB2Htwr" 
                            />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </HTMLFlipBook>
            </Navigation>
        </div>
    );
}

export default TwoSixtyClass
