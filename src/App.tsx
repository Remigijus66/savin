

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import seaImage from "./assets/sea.jpg";
import "./App.css"; // import global CSS
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contacts";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Services from "./sections/Services";

export default function App() {
  return (
    // <Router>
 <>
 {/* <div className="container"> */}
      <Navbar />


      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="contact">
        <Contact />
      </section>
 {/* </div> */}
    </>
    // </Router>
  );
}
