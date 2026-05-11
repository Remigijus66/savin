import Section from "../components/Section";

export default function About() {
  return (
    <Section id="about" background="light">
      <div style={{ maxWidth: 800 }}>
        <h2>Apie mane</h2>

        <p style={{ fontSize: 22, lineHeight: 1.6 }}>
          Esu Geštaltinės psichoterapijos praktikė, padedanti žmonėms
          suprasti emocijas, santykius ir vidinius procesus.
        </p>
      </div>
    </Section>
  );
}