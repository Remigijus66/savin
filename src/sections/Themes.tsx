import Section from "../components/Section";

export default function Themes() {

  function ColorSample({
  variable,
  label,
}: {
  variable: string;
  label: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          backgroundColor: `var(${variable})`,
          width: "6rem",
          height: "6rem",
          border: "2px solid rgb(32, 2, 2)",
        }}
      />

      <span>{label}</span>
    </div>
  );
}


  return (
    <Section id="about" background="light"    
    //  justifyContent="center"
  // alignItems="flex-end"

  >
      <div  style={{ padding: "3rem", border: "1px solid rgb(236, 10, 10)"}}>
        <h2>root colors</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: "1rem", margin: "2rem 0"}}>
          {/* <span style={{minWidth: "10rem"}}>color-palette-????</span> */}
  <ColorSample
    variable="--color-primary"
    label="primary"
  />
    <ColorSample
    variable="--color-secondary"
    label="secondary"
  />

  <ColorSample
    variable="--color-accent"
    label="accent"
  />

  <ColorSample
    variable="--color-muted"
    label="muted"
  />
 <ColorSample
    variable="--color-dark"
    label="dark"
  /> 
   <ColorSample
    variable="--text-primary"
    label="txt-primary"
  />

  <ColorSample
    variable="--text-light"
    label="txt-light"
  />

  <ColorSample
    variable="--background-main"
    label="background-main"
  />
  <ColorSample
    variable="--background-section"
    label="background-section"
  />
  <ColorSample
    variable="--border-color"
    label="border-color"
  />

        </div>
        <h2>themes</h2>
        <div className="theme-first" style={{display: "flex", gap: "1rem", margin: "2rem 0"}}>
          <span style={{minWidth: "10rem"}}>theme-first</span>
<ColorSample
    variable="--color-primary"
    label="primary"
  />
    <ColorSample
    variable="--color-secondary"
    label="secondary"
  />

  <ColorSample
    variable="--color-accent"
    label="accent"
  />
  <ColorSample
    variable="--color-muted"
    label="muted"
  />
</div>
        <div className="theme-forest" style={{display: "flex", gap: "1rem", margin: "2rem 0"}}>
          <span style={{minWidth: "10rem"}}>theme-forest</span>
<ColorSample
    variable="--color-primary"
    label="primary"
  />
    <ColorSample
    variable="--color-secondary"
    label="secondary"
  />

  <ColorSample
    variable="--color-accent"
    label="accent"
  />
</div>
        <div className="theme-ocean" style={{display: "flex", gap: "1rem", margin: "2rem 0"}}>
          <span style={{minWidth: "10rem"}}>theme-ocean</span>
<ColorSample
    variable="--color-primary"
    label="primary"
  />
    <ColorSample
    variable="--color-secondary"
    label="secondary"
  />

  <ColorSample
    variable="--color-accent"
    label="accent"
  />
<ColorSample
    variable="--color-muted"
    label="muted"
  />
    <ColorSample
    variable="--color-dark"
    label="dark"
  />
    <ColorSample
    variable="--text-primary"
    label="text-primary"
  />

  <ColorSample
    variable="--border-color"
    label="border"
  />
</div>
        <div className="theme-minimal" style={{display: "flex", gap: "1rem", margin: "2rem 0"}}>
          <span style={{minWidth: "10rem"}}>theme-minimal</span>
<ColorSample
    variable="--color-primary"
    label="primary"
  />
    <ColorSample
    variable="--color-secondary"
    label="secondary"
  />

  <ColorSample
    variable="--color-accent"
    label="accent"
  />
  <ColorSample
    variable="--color-muted"
    label="muted"
  />
  <ColorSample
    variable="--color-dark"
    label="dark"
  />
    <ColorSample
    variable="--text-primary"
    label="text-primary"
  />

  <ColorSample
    variable="--border-color"
    label="border"
  />

        </div>

        <span> button sample </span>
        <button>Click me</button>
        
         </div>

    </Section>
  );
}