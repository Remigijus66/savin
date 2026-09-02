import CtaSusisiekime from "../components/CtaSusisiekime";
import { kurKvieciu } from "../content/site";
import "./Page.css";

export default function KurKvieciu() {
  return (
    <main className="page">
      <div className="page-container">
        <h1 className="page-title">{kurKvieciu.title}</h1>

        <section className="page-section">
          <h2>{kurKvieciu.terapija.title}</h2>
          <div className="page-dash" />
          {kurKvieciu.terapija.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

          <CtaSusisiekime />
        </section>

        <section className="page-section">
          <h2>{kurKvieciu.principai.title}</h2>
          <div className="page-dash" />
          <p>{kurKvieciu.principai.intro}</p>

          <div className="page-cards">
            {kurKvieciu.principai.items.map((item) => (
              <article key={item.title} className="page-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <CtaSusisiekime />
        </section>

        <section className="page-section">
          <h2>{kurKvieciu.koTiketis.title}</h2>
          <div className="page-dash" />
          <ol className="page-steps">
            {kurKvieciu.koTiketis.items.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ol>

          <CtaSusisiekime />
        </section>
      </div>
    </main>
  );
}
