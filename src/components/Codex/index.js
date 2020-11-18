import React from "react";
import { ListItem } from "../List/index";

function Codex ({  title, author, location, description, pdflink }) {
    return (
        <ListItem>
                    <div className="math">
            <Navigation />
                <div className="container">
                    <div className="row" style={{marginTop: "20%"}}>
                        <div className="module col-sm-6">
                            <PDFViewer style={{postion: "relative", marginLeft: "-40vh", height: "75vh", width: "45vw", paddingRight: "0"}}>
                                src={pdflink}
                            </PDFViewer>
                        </div>
                        <div className="masthead col-sm-6">                        
                            <h1>{title}</h1>
                            <br />
                            <h3>by {author}</h3>
                            <br />
                            <h3>at {location}</h3>
                            <br />
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
        </div>
        </ListItem>
    )
}
export default Codex