import React from "react";
import Navigation from "../components/Navigation";
import "../styles.css";
import HTMLFlipBook from "react-pageflip";
import titleBackground from "../components/images/2012pOne1.png";
import pageOne from "../components/images/2012pTwo1.png";
import pageTwo from "../components/images/2012pThree1.png";
import pageThree from "../components/images/2012pFour1.png";
import pageFour from "../components/images/2012pFive1.png";
import pageFive from "../components/images/2012pSix1.png";
import pageSix from "../components/images/2012pSeven1.png";
import pageSeven from "../components/images/2012pEight1.png";
import pageEight from "../components/images/2012pNine1.png";
import pageNine from "../components/images/2012pTen1.png";
import pageTen from "../components/images/2012pEleven1.png";
import pageEleven from "../components/images/2012pTwelve1.png";
import pageTwelve from "../components/images/2012pThirteen1.png";
import pageThirteen from "../components/images/2012pFourteen1.png";
import pageFourteen from "../components/images/2012pFifteen1.png";
import pageFifteen from "../components/images/2012pSixteen1.png";
import pageSixteen from "../components/images/2012pSeventeen1.png";
import pageSeventeen from "../components/images/2012pEighteen1.png";
import pageEighteen from "../components/images/2012pNineteen1.png";
import pageNineteen from "../components/images/2012pTwenty1.png";
import pageTwenty from "../components/images/2012pTwentyone1.png";
import pageTwentyOne from "../components/images/2012pTwentytwo1.png";
import pageTwentyTwo from "../components/images/2012pTwentythree1.png";
import pageTwentyThree from "../components/images/2012pTwentyfour1.png";
import pageTwentyFour from "../components/images/2012pTwentyfive1.png";
import pageTwentyFive from "../components/images/2012pTwentysix1.png";
import pageTwentySix from "../components/images/2012pTwentyseven1.png";
import pageTwentySeven from "../components/images/mpEight1.png";

function ModFour(props) {
  return (
    <div className="myBook">
      <Navigation />
        <HTMLFlipBook width={400} height={400} style={{marginLeft: "auto", marginRight: "auto", marginTop: "5%"}}>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${titleBackground})`, width: "400px", height: "400px"}}>Page 1</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageOne})`, width: "400px", height: "400px"}}>Page 2</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageTwo})`, width: "400px", height: "400px"}}>Page 3</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageThree})`, width: "400px", height: "400px"}}>Page 4</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageFour})`, width: "400px", height: "400px"}}>Page 5</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageFive})`, width: "400px", height: "400px"}}>Page 6</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageSix})`, width: "400px", height: "400px"}}>Page 7</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageSeven})`, width: "400px", height: "400px"}}>Page 8</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageEight})`, width: "400px", height: "400px"}}>Page 9</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageNine})`, width: "400px", height: "400px"}}>Page 10</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageTen})`, width: "400px", height: "400px"}}>Page 11</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageEleven})`, width: "400px", height: "400px"}}>Page 12</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageTwelve})`, width: "400px", height: "400px"}}>Page 13</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageThirteen})`, width: "400px", height: "400px"}}>Page 14</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageFourteen})`, width: "400px", height: "400px"}}>Page 15</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageFifteen})`, width: "400px", height: "400px"}}>Page 16</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageSixteen})`, width: "400px", height: "400px"}}>Page 17</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageSeventeen})`, width: "400px", height: "400px"}}>Page 18</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageEighteen})`, width: "400px", height: "400px"}}>Page 19</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageNineteen})`, width: "400px", height: "400px"}}>Page 20</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageTwenty})`, width: "400px", height: "400px"}}>Page 21</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageTwentyOne})`, width: "400px", height: "400px"}}>Page 22</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageTwentyTwo})`, width: "400px", height: "400px"}}>Page 23</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageTwentyThree})`, width: "400px", height: "400px"}}>Page 24</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageTwentyFour})`, width: "400px", height: "400px"}}>Page 25</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageTwentyFive})`, width: "400px", height: "400px"}}>Page 26</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageTwentySix})`, width: "400px", height: "400px"}}>Page 27</div>
            </div>
          </div>
          <div className="demoPage">
            <div className="pageContent">
              <div className="page-image" style={{backgroundImage: `url(${pageTwentySeven})`, width: "400px", height: "400px"}}>Page 28</div>
            </div>
          </div>
        </HTMLFlipBook>
    </div>
  );
}

export default ModFour;