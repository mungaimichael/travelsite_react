import React from "react";
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Register from "./Components/Register";
import Hero from "./Components/Hero";
import SectionTwo from "./Components/SectionTwo";
import TripPackage from "./Components/TripPackage";

const App = () => {
  return (
    <Router>
      <Header />
      <Hero />
      <SectionTwo />
      <TripPackage />
      <Register />
    </Router>
  );
};

export default App;
