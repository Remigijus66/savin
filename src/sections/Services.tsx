import Section from "../components/Section";

export default function Services() {
  return (
    <Section id="services">
      <div>
        <h2>Paslaugos</h2>

        <ul style={{ fontSize: 22, listStyle: "none" }}>
          <li>Individuali psichoterapija</li>
          <li>Emocinės savijautos stiprinimas</li>
          <li>Santykių konsultavimas</li>
          <li>Krizių palaikymas</li>
        </ul>
      </div>
    </Section>
  );
}