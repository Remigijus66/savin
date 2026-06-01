
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
import { useState } from "react";

import { Helmet } from "react-helmet-async";

import { useEffect } from "react";
type Theme = "theme-experimental" | "theme-forest" |"theme-ocean" | "theme-dark";


export default function App() {
  const [theme, setTheme] = useState<Theme>("theme-experimental");

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

useEffect(() => {
  const script = document.createElement("script");
  script.type = "application/ld+json";

  script.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: "Jolita Palekaitė",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Liepyno g. 11",
      addressLocality: "Vilnius",
      postalCode: "08108",
      addressCountry: "LT",
    },
    telephone: "+37065011233",
    email: "jolita@savin.lt",
    url: "https://savin.lt",
  });

  document.head.appendChild(script);

  return () => {
    document.head.removeChild(script);
  };
}, []);

  return (
    
    <div className={theme} >
    <Helmet>

  <title>
    Geštaltinė psichoterapija Vilniuje | Jolita Palekaitė
  </title>

  {/* <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Psychologist",
      name: "Jolita Palekaitė",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Liepyno g. 11",
        addressLocality: "Vilnius",
        postalCode: "08108",
        addressCountry: "LT",
      },
      telephone: "+37065011233",
      email: "jolita@savin.lt",
      url: "https://yoursite.lt",
    })}
  </script> */}

  {/* <script type="application/ld+json">
  {`
    {
      "@context": "https://schema.org",
      "@type": "Psychologist",
      "name": "Jolita Palekaitė",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Liepyno g. 11",
        "addressLocality": "Vilnius",
        "postalCode": "08108",
        "addressCountry": "LT"
      },
      "telephone": "+37065011233",
      "email": "jolita@savin.lt",
      "url": "https://yoursite.lt"
    }
  `}
</script> */}

  <meta
    name="description"
    content="Geštaltinė psichoterapija Vilniuje. Individualios konsultacijos, emocinė pagalba, santykių sunkumai, nerimas ir asmeninis augimas."
  />

  <meta
    name="keywords"
    content="psichoterapija Vilniuje, geštalto terapija, psichologas Vilnius"
  />

</Helmet>

      <Navbar  />
        <Hero />
        <About />
        <Services />
        <Gestalt />
        <Duk />
        <Contact />
    </div>
   
  );
}

