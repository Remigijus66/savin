
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// https://www.magnific.com/

import "./App.css"; // import global CSS
// import Navbar from "./components/Navbar";
// import About from "./sections/About";
// import Contact from "./sections/Contact";
// import Hero from "./sections/Hero";
// import Gestalt from "./sections/Gestalt";
// import Services from "./sections/Services";
// import Duk from "./sections/Duk";
// import { useState } from "react";

import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import AdminLoginPage from "./pages/AdmLoginPage";
import AdminPage from "./pages/AdmPage";  

import { Helmet } from "react-helmet-async";

import { useEffect } from "react";


import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminAvailability from "./pages/AdminAvailability";
import MainLayout from "./components/MainLayout";

// type Theme = "theme-experimental" | "theme-forest" |"theme-ocean" | "theme-dark";


export default function App() {


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
    
    <div>
 {/* Reikia perkelti Helmet į atskirą komponentą, kad būtų galima dinamiškai keisti meta duomenis pagal puslapį. Šiuo metu Helmet yra App komponente, todėl meta duomenys yra bendri visiems puslapiams. Reikėtų sukurti atskirą komponentą, pvz., SEO, kuris priimtų props ir nustatytų meta duomenis pagal puslapį./ */}
  <Helmet>

  <title>
    Geštaltinė psichoterapija Vilniuje | Jolita Palekaitė
  </title>

  <meta
    name="description"
    content="Geštaltinė psichoterapija Vilniuje. Individualios konsultacijos, emocinė pagalba, santykių sunkumai, nerimas ir asmeninis augimas."
  />

  <meta
    name="keywords"
    content="psichoterapija Vilniuje, geštalto terapija, psichologas Vilnius"
  />

</Helmet>

      {/* <Navbar  />
        <Booking />
        <Hero />
        <About />
        <Services />
        <Gestalt />
        <Duk />
        <Contact /> */}

         
   <Routes>
      <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking"    element={
          <ProtectedRoute adminOnly>
            <BookingPage />
          </ProtectedRoute>
        } />



      <Route
        path="/admin"
        element={
          <ProtectedRoute adminOnly>
            <AdminPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/availability"
        element={
          <ProtectedRoute adminOnly>
            <AdminAvailability />
          </ProtectedRoute>
        }
      />
      </Route>
            <Route path="/loooooogggiiiiiinnnnnn" element={<AdminLoginPage />} />
    </Routes>
  
        
    </div>
   
  );
}

