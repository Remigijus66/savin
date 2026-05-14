import Section from "../components/Section";
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
    <Section id="services" background="light">
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        {/* Top Images */}
        <div
          // style={{
          //   display: "grid",
          //   gridTemplateColumns: "1fr 1fr",
          //   gap: "1.5rem",
          // }}
        >
          <img
            src="/mountain1.jpg"
            alt="Psichoterapijos konsultacija"
            style={{
              width: "100%",
              height: "320px",
              objectFit: "cover",
              borderRadius: "24px",
              border: "1px solid var(--border-color)",
              boxShadow: "0 10px 30px rgba(35, 46, 32, 0.08)",
            }}
          />
{/* 
          <img
            src="/mountain2.jpg"
            alt="Rami terapinė aplinka"
            style={{
              width: "100%",
              height: "320px",
              objectFit: "cover",
              borderRadius: "24px",
              border: "1px solid var(--border-color)",
              boxShadow: "0 10px 30px rgba(35, 46, 32, 0.08)",
            }}
          /> */}
        </div>

        {/* Heading */}
        <div
          style={{
            maxWidth: "700px",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "1rem",
              color: "var(--color-primary)",
            }}
          >
            Paslaugos
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "var(--color-muted)",
              margin: 0,
            }}
          >
   {intro}
          </p>
        </div>

        {/* Service Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                padding: "2rem",
                borderRadius: "24px",
                background: "var(--background-main)",
                border: "1px solid var(--border-color)",
                boxShadow: "0 8px 24px rgba(35, 46, 32, 0.05)",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "1rem",
                  fontSize: "1.4rem",
                  color: "var(--color-dark)",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  lineHeight: 1.8,
                  color: "var(--color-muted)",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}