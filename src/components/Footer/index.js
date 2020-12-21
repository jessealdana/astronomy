import React from "react";
import "./style.css";

function Footer(props) {
return (
<div className="footer">
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="navbar-link" href="https://www.ccs.ucsb.edu/">UCSB College of Creative Studies</a>
                    </li>
                    <li className="space">
                        <p>through</p>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-link" href="https://www.nativeskywatchers.com/">Native SkyWatchers</a>
                    </li>
                </ul>
            {/* </div>
        </div>
    </nav> */}
</div>
);
}
export default Footer