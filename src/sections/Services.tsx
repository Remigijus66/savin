import Section from "../components/Section";

export default function Services() {
  return (
    <Section id="services">
   <div  style={{ padding: "3rem", border: "1px solid rgb(236, 10, 10)"}}>
        <h2>Paslaugos</h2>

        <ul style={{ fontSize: 22, listStyle: "none" }}>
          <li>Individuali psichoterapija</li>
          <li>Emocinės savijautos stiprinimas</li>
          <li>Santykių konsultavimas</li>
          <li>Krizių palaikymas ir gilinimas</li>
        </ul>
      </div>
    </Section>
  );
}