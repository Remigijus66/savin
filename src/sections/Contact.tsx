import Section from "../components/Section";

export default function Contact() {
  return (
    <Section id="contact"   background="image" imageUrl="/liepyno.png"  
       justifyContent="flex-end"
  alignItems="flex-end"
  >
   <div>
        <h2 style={{  color: "#A23D01"  }}>Kontaktai</h2>

        <p style={{ fontSize: 24, color: "#A23D01" }}>
          +370 650 11233
        </p>

        <p style={{ fontSize: 24, color: "#A23D01" }}>
          jolita@savin.lt
        </p>
      </div>
    </Section>
  );
}