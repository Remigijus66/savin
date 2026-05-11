

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import TherapistPage from "./pages/TherapistPage";
// import seaImage from "./assets/sea.jpg";
import "./App.css"; // import global CSS

export default function App() {
  return (
    // <Router>
      <section

  style={{
    backgroundImage: "url('/mist.jpg')",
    // backgroundImage: `url(${seaImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // full viewport height
    display: "flex",
    // alignItems: "center",
      alignItems: "top",
    justifyContent: "center",
   
    color: "white", // adjust for readability
    textAlign: "center",
    // textAlign: "top",
    // padding: "2rem",
    width:" 100vw"
  }}
>
  {/* color: '#22352C' */}
  {/* color: '#927420' */}
  {/* color: '#A23D01' */}
  {/* color: '#624621' */}
  <div >
    {/* <h2 style={ {color: 'black'} } >Tinklapis šuo metu tvarkomas</h2> */}

    <h1 style={ { color: '#22352C'} } >Geštaltinė psichoterapija</h1>
  
    <p style={ {fontSize: '40px', color: '#A23D01', marginBottom: '0'} } >Jolita Palekaitė</p>
    <p style={ {fontSize: '40px' , color: '#A23D01', margin: '0'} }> +370 650 11233</p>
    <p style={ {fontSize: '40px', color: '#A23D01', margin: '0'} }> jolita@savin.lt</p>
    {/* <p className="subtitle text-lg">Psichologė, terapeutė</p>
    <p>
      Esu Jolita Palekaitė, specializuojanti individualioje psichoterapijoje,
      emocinės sveikatos stiprinime bei gyvenimo kokybės gerinime.
      Dirbu padėdama žmonėms atrasti vidinę ramybę, įveikti iššūkius
      ir geriau suprasti save.
    </p> */}
  </div>
</section>
    // </Router>
  );
}
