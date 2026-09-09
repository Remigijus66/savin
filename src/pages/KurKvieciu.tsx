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

        <p className="page-eyebrow">{kurKvieciu.title}</p>

        <section className="page-section">
          <h1>{kurKvieciu.terapija.title}</h1>
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
              {kurKvieciu.principai.items.map((item) => (
            
        <div key={item.title} >
          <h3>{item.title}</h3>
          {/* <div className="page-dash" /> */}
          <p>{item.text}</p>
          </div>
            ))}
          </section>
      
      
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
