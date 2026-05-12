
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css"; // import global CSS
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Gestalt from "./sections/Gestalt";
import Services from "./sections/Services";
import Duk from "./sections/Duk";

export default function App() {
  return (
    // <Router>
 <>
      <Navbar />
        <Hero />
        <About />
        <Services />
        <Gestalt />
        <Duk />
        <Contact />
    </>
    // </Router>
  );
}
