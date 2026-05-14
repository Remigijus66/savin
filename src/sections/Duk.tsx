import Section from "../components/Section";

export default function Duk() {
  return (
    <Section id="duk" justifyContent="flex-start"
  alignItems="flex-start">
    <div  style={{ padding: "3rem", border: "1px solid rgb(236, 10, 10)"}}>
        <h2>DUK</h2>
        <p>Klausimėliai</p>

                <div style={{display: "flex", gap: "1rem", margin: "2rem 0"}}>
          <span style={{minWidth: "10rem"}}>color-palette-????</span>
<div  className="p0c1"  style={{width: "1.5rem", padding: "3rem", border: "2px solid rgb(32, 2, 2)"}} ></div>
<div  className="p0c2"  style={{width: "1.5rem", padding: "3rem", border: "2px solid rgb(32, 2, 2)"}} ></div>
<div  className="p0c3" style={{width: "1.5rem", padding: "3rem", border: "2px solid rgb(32, 2, 2)"}} ></div>
<div  className="p0c4"  style={{width: "1.5rem", padding: "3rem", border: "2px solid rgb(32, 2, 2)"}} ></div>

        </div>
      </div>
    </Section>
  );
}