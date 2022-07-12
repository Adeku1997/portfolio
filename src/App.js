import React, { useRef, useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import { Switch, Route } from "react-router-dom";
import {TweenMax} from "gsap";

import "./app.css";
// import "locomotive-scroll/dist/locomotive-scroll.css"
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const App = () => {
  const [click, setClick] = useState(false);
  const app = useRef(null);

  useEffect(() => {
    TweenMax.to('.hero', 0, { css: { visibility: "visible" } });
  },[]);

  return (
    <main className="hero" ref={app}>
      {" "}
      <div>
        <NavBar click={click} setClick={setClick} />
        <Switch>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </main>
  );
};

export default App;
