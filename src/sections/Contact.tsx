import Section from "../components/Section";

const contactItems = [
  {
    label: "Telefonas",
    value: "+370 650 11233",
  },
  {
    label: "El. paštas",
    value: "jolita@savin.lt",
  },
  {
    label: "Adresas",
    value: "Liepyno g. 12, Vilnius",
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      background="image"
      imageUrl="/liepyno.png"
      justifyContent="flex-end"
      alignItems="flex-end"
    >
      <div
        // className="theme-ocean"
        style={{
          margin: "3rem",
          marginTop: "30rem",
          padding: "3rem",
          maxWidth: "520px",
          borderRadius: "28px",
          background: "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(210, 161, 110, 0.45)",
          boxShadow: "0 10px 40px rgba(35, 46, 32, 0.18)",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            marginBottom: "2rem",
            fontSize: "2.6rem",
            color: "var(--color-primary)",
          }}
        >
          Kontaktai
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.8rem",
          }}
        >
          {contactItems.map((item, index) => (
            <div key={index}>
              <p
                style={{
                  margin: 0,
                  marginBottom: "0.4rem",
                  fontSize: "0.95rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                }}
              >
                {item.label}
              </p>

              <p
                style={{
                  margin: 0,
                  fontSize: "1.3rem",
                  lineHeight: 1.6,
                  color: "var(--color-dark)",
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}