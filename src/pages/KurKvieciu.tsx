import CtaSusisiekime from "../components/CtaSusisiekime";
import { useLang } from "../i18n";
import "./Page.css";

export default function KurKvieciu() {
  const { t } = useLang();
  const kurKvieciu = t.kurKvieciu;

  return (
    <main className="page">
      <div className="page-container">
        {/* <h1 className="page-title">{kurKvieciu.title}</h1> */}

        <h1 className="page-eyebrow">{kurKvieciu.title}</h1>

        <section className="page-section">
          <h2>{kurKvieciu.terapija.title}</h2>
          <div className="page-dash" />
          {kurKvieciu.terapija.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

          {/* <CtaSusisiekime /> */}
        </section>

        <section className="page-section">
          <h2>{kurKvieciu.principai.title}</h2>
          <div className="page-dash" />
          <p>{kurKvieciu.principai.intro}</p>
          </section>
      
            {kurKvieciu.principai.items.map((item) => (
            
        <section className="page-section">
          <h2>{item.title}</h2>
          <div className="page-dash" />
          <p>{item.text}</p>
          </section>
            ))}
          {/* </div> */}

          {/* <CtaSusisiekime /> */}

        <section className="page-section">
          <h2>{kurKvieciu.koTiketis.title}</h2>
          <div className="page-dash" />
          <ul className="page-steps">
            {kurKvieciu.koTiketis.items.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>

          <CtaSusisiekime />
        </section>
      </div>
    </main>
  );
}
