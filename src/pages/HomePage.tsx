// import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Gestalt from "../sections/Gestalt";
import Duk from "../sections/Duk";
import Contact from "../sections/Contact";

export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Services />
      <Gestalt />
      <Duk />
      <Contact />
    </>
  );
}