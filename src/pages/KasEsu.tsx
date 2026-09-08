import CtaKurKvieciu from "../components/CtaKurKvieciu";
import CtaSusisiekime from "../components/CtaSusisiekime";
import RichText from "../components/RichText";
import { useLang } from "../i18n";
import "./Page.css";

export default function KasEsu() {
  const { t } = useLang();
  const kasEsu = t.kasEsu;

  return (
    <main className="page">
      <div className="page-container">
        {/* <h1 className="page-title">{kasEsu.title}</h1> */}

        <h1 className="page-eyebrow">{kasEsu.title}</h1>

        {/* <p className="page-lead">
          {kasEsu.greeting}
          <br />
          {kasEsu.intro}
        </p> */}

        <section className="page-section">
          <h2>{kasEsu.kelias.title}</h2>
          <div className="page-dash" />
          {kasEsu.kelias.paragraphs.map((text, index) => (
            <p key={index}>
              <RichText text={text} links={kasEsu.links} />
            </p>
          ))}
        </section>

        <section className="page-section">
          <h2>{kasEsu.studijos.title}</h2>
          <div className="page-dash" />
          {kasEsu.studijos.paragraphs.map((text, index) => (
            <p key={index}>
              <RichText text={text} links={kasEsu.links} />
            </p>
          ))}

          {kasEsu.studijos.groups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <ul className="page-list">
                {group.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* <CtaSusisiekime /> */}
        </section>

        <section className="page-section">
          <h2>{kasEsu.gyvenimas.title}</h2>
          <div className="page-dash" />
          {kasEsu.gyvenimas.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

          <CtaKurKvieciu />
        </section>
      </div>
    </main>
  );
}
