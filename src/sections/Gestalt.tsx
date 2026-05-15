import Section from "../components/Section";

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
    <Section id="gestalt" background="light" height="100vh">
<div
  style={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  }}
>
  {/* Top Photo */}
  <div
    style={{
      flex: 1,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <img
      src="/sea1.jpg"
      alt="Geštalto terapija"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  </div>

  {/* Middle Text */}
  <div
    style={{
      flex: 1.2,
      background: "var(--background-main)",
      padding: "3rem 4rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <p
      style={{
        fontSize: "clamp(2rem, 4vw, 3rem)",
        lineHeight: 1.2,
        marginBottom: "2rem",
        color: "var(--color-primary)",
      }}
    >
      Apie{" "}
      <strong style={{ color: "var(--color-accent)" }}>
        geštalto
      </strong>{" "}
      psichoterapiją
    </p>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      {gestaltText.map((text, index) => (
        <p
          key={index}
          style={{
            margin: 0,
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "var(--color-muted)",
          }}
        >
          {text}
        </p>
      ))}
    </div>
  </div>

  {/* Bottom Photo */}
  <div
    style={{
      flex: 1,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <img
      src="/sea2.jpg"
      alt="Rami terapinė aplinka"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  </div>
</div>
    </Section>
  );
}