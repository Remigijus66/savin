
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
import { useState } from "react";
import Navbar1 from "./components/navbar1";

type Theme = "theme-first" | "theme-forest" |"theme-ocean" | "theme-dark";


export default function App() {
    const [theme, setTheme] = useState<Theme>("theme-first");

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };
  return (
    // <Router>

    // <div className="theme-first">
    <div className={theme} >
  
      <Navbar  />
{/*   
      <Navbar1 onThemeChange={toggleTheme} /> */}
        <Hero />
        <About />
        <Services />
        <Gestalt />
        {/* <Duk /> */}
        {/* <Contact /> */}
        {/* <Themes /> */}
    </div>
   
    // </Router>
  );
}

