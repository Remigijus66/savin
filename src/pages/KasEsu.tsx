import CtaSusisiekime from "../components/CtaSusisiekime";
import { kasEsu } from "../content/site";
import "./Page.css";

export default function KasEsu() {
  return (
    <main className="page">
      <div className="page-container">
        <h1 className="page-title">{kasEsu.title}</h1>

        <p className="page-lead">
          {kasEsu.greeting}
          <br />
          {kasEsu.intro}
        </p>

        <section className="page-section">
          <h2>{kasEsu.kelias.title}</h2>
          <div className="page-dash" />
          {kasEsu.kelias.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </section>

        <section className="page-section">
          <h2>{kasEsu.studijos.title}</h2>
          <div className="page-dash" />
          {kasEsu.studijos.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

          {kasEsu.studijos.groups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <ul className="page-list">
                {group.items.map((item, index) => (
                  <li key={index}>
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.text}
                      </a>
                    ) : (
                      item.text
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <CtaSusisiekime />
        </section>

        <section className="page-section">
          <h2>{kasEsu.gyvenimas.title}</h2>
          <div className="page-dash" />
          {kasEsu.gyvenimas.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

          <CtaSusisiekime />
        </section>
      </div>
    </main>
  );
}
