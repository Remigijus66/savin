import Section from "../components/Section";

export default function Contact() {
  return (
    <Section id="contact"   background="image" imageUrl="/liepyno.png"  
       justifyContent="flex-end"
  alignItems="flex-end"
  >
        <div className="theme-ocean" style={{ padding: "3rem", border: "1px solid rgb(236, 10, 10)"}}>
        <h2 style={{  color: "var(--color-accent)"  }}>Kontaktai</h2>

        <p style={{ fontSize: 24, color: "var(--color-accent)" }}>
          +370 650 11233
        </p>

        <p style={{ fontSize: 24, color: "var(--color-accent)" }}>
          jolita@savin.lt
        </p>
      </div>
    </Section>
  );
}