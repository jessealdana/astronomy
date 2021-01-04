import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import Wiki from "./pages/Wiki";
import ModOne from "./pages/ModOne";
import ModTwo from "./pages/ModTwo";
import ModThree from "./pages/ModThree";
import ModFour from "./pages/ModFour"
import ModFive from "./pages/ModFive";
import ModSix from "./pages/ModSix";
import Sample from "./pages/Sample";
import AnotherPopolVuh from "./pages/AnotherPopolVuh";
import AboutWiki from "./pages/AboutWiki";
import Nasa from "./pages/Nasa";
import Astronaut from "./pages/Astronaut";
import Chol from "./pages/Chol";
import Kaquix from "./pages/Kaquix";
import Lunar from "./pages/Lunar";
import Xultun1 from "./pages/Xultun1";
import Xultun2 from "./pages/Xultun2";
import Moons from "./pages/Moons";
import Eclipses from "./pages/Eclipses";


export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          {/* <Route path="/contact" exact component={() => <Contact />} /> */}
          <Route path="/wiki" exact component={() => <Wiki />} />
          <Route path="/modOne" exact component={() => <ModOne />} />
          <Route path="/modTwo" exact component={() => <ModTwo />} />
          <Route path="/modThree" exact component={() => <ModThree />} />
          <Route path="/modFour" exact component={() => <ModFour />} />
          <Route path="/modFive" exact component={() => <ModFive /> } />
          <Route path="/modSix" exact component={() => <ModSix />} />
          <Route path="/sample" exact component={() => <Sample />} />
          <Route path="/popol" exact component={() => <AnotherPopolVuh />} />
          <Route path="/aboutWiki" exact component={() => <AboutWiki />} />
          <Route path="/nasa" exact component={() => <Nasa />} />
          <Route path="/astronaut" exact component={() => <Astronaut />} />
          <Route path="/chol" exact component={() => <Chol />} />
          <Route path="/kaquix" exact component={() => <Kaquix />} />
          <Route path="/lunar" exact component={() => <Lunar />} />
          <Route path="/xultun1" exact component={() => <Xultun1 />} />
          <Route path="/xultun2" exact component={() => <Xultun2 />} />
          <Route path="/moons" exact component={() => <Moons />} />
          <Route path="/eclipses" exact component={() => <Eclipses />} />
        </Switch>
      </Router>
    </div>
  );
}
