
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// https://www.magnific.com/

import "./App.css"; // import global CSS
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Gestalt from "./sections/Gestalt";
import Services from "./sections/Services";
import Duk from "./sections/Duk";
import Themes from "./sections/Themes";

export default function App() {
  return (
    // <Router>

    <div className="theme-first">
  
      <Navbar />
        <Hero />
        <About />
        <Services />
        <Gestalt />
        <Duk />
        <Contact />
        <Themes />
    </div>
   
    // </Router>
  );
}
