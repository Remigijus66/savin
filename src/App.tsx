

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TherapistPage from "./pages/TherapistPage";
import "./App.css"; // import global CSS

export default function App() {
  return (
    <Router>
      <section

  style={{
    backgroundImage: "url('/mist.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // full viewport height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white", // adjust for readability
    textAlign: "center",
    padding: "2rem",
    width:" 100vw"
  }}
>
  <div className="therapist-info bg-black bg-opacity-50 p-6 rounded-xl">
    {/* <h2 style={ {color: 'black'} } >Tinklapis šuo metu tvarkomas</h2> */}
    <p style={ {fontSize: '40px', color: 'blue'} } >Jolita Palekaitė</p>
    <p style={ {fontSize: '40px' , color: 'blue'} }> +370 650 11233</p>
    <p style={ {fontSize: '40px', color: 'blue'} }> jolita@savin.lt</p>
    {/* <p className="subtitle text-lg">Psichologė, terapeutė</p>
    <p>
      Esu Jolita Palekaitė, specializuojanti individualioje psichoterapijoje,
      emocinės sveikatos stiprinime bei gyvenimo kokybės gerinime.
      Dirbu padėdama žmonėms atrasti vidinę ramybę, įveikti iššūkius
      ir geriau suprasti save.
    </p> */}
  </div>
</section>
    </Router>
  );
}
