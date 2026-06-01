import Section from "../components/Section";
import "./Services.css";

const intro = `Geštaltinė psichoterapija yra unikalus požiūris į psichoterapiją, kuris pabrėžia sąmoningumą, atsakomybę ir dabarties patirtį. Ši terapijos forma skatina žmones būti sąmoningais savo jausmų, minčių ir elgesio atžvilgiu, taip pat skatinti atsakomybę už savo gyvenimą ir santykius. Geštaltinė psichoterapija siekia padėti žmonėms atrasti savo autentiškumą, išlaisvinti kūrybiškumą ir kurti prasmingus santykius su savimi ir kitais.`;
const services = [
  {
    title: "Individuali psichoterapija",
    description:
      "Saugi erdvė tyrinėti savo jausmus, santykius ir gyvenimo iššūkius bei ieškoti gilesnio ryšio su savimi.",
  },
  {
    title: "Santykių konsultavimas",
    description:
      "Pagalba geriau suprasti tarpusavio santykių dinamiką, emocinius poreikius ir kurti atviresnį bendravimą.",
  },
  {
    title: "Emocinės savijautos stiprinimas",
    description:
      "Palaikymas susiduriant su nerimu, įtampa, perdegimu ar gyvenimo pokyčiais bei ieškant vidinės pusiausvyros.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="services-section"
    >
      <></>
      <div className="services-grid">
        <div
          className="services-image"
          style={{ backgroundImage: "url('./mountain1.jpg')" }}
        ></div>
        <div className="services-card">
          <h3>Paslaugos</h3>
          <p>{intro}</p>
        </div>
      </div>
      <div className="services-container">

    
          <div className="services-title-wrapper">
            <h2 className="heading-xl">Terapijų rūšys</h2>
          </div>
        
          <div className="services-list">
           {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3 className="service-title" >{service.title}</h3>
                <p className="service-text">{service.description}</p>
              </div>
            ))}
          </div>
      
      </div>
    </section>
  );
}
