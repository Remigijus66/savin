import Section from "../components/Section";
import "./Gestalt.css";

const gestaltText = [
  `Geštalto psichoterapija orientuojasi į žmogaus patirtį „čia ir dabar“,
  padeda geriau suvokti savo emocijas, poreikius ir santykį su aplinka.
  Terapijoje svarbus sąmoningumas, autentiškas kontaktas ir gebėjimas
  pastebėti savo vidinius išgyvenimus.`,

  `Šis terapijos metodas skatina gilesnį savęs pažinimą bei padeda atrasti
  naujus būdus būti santykyje su savimi ir kitais. Geštalto terapijoje
  daug dėmesio skiriama žmogaus unikalumui, asmeninei atsakomybei ir
  galimybei kurti pilnavertiškesnį gyvenimą.`,
];

export default function Gestalt() {
  return (
    <section id="gestalt" className="gestalt-section">
      <div className="gestalt-grid" style={{ minHeight: "600px" }}>
        <div className="gestalt-card bg1">
          <h3>Geštalto psichoterapija</h3>
          <p>{gestaltText[0]}</p>
        </div>
      
        <div
          className="gestalt-image"
          style={{ backgroundImage: "url('./sunrise-shore.jpg')" }}
        ></div>
      </div>
    </section>
  );
}
