import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wiki from "./pages/Wiki";
import ModOne from "./pages/ModOne";
import ModTwo from "./pages/ModTwo";
import ModThree from "./pages/ModThree";
import ModFour from "./pages/ModFour"
import ModFive from "./pages/ModFive";
import ModSix from "./pages/ModSix";
import Sample from "./pages/Sample";
import AnotherPopolVuh from "./pages/AnotherPopolVuh"
import AboutWiki from "./pages/AboutWiki"


export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
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
        </Switch>
      </Router>
    </div>
  );
}
