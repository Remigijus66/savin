import { Link } from "react-router-dom";
import Intro from "../sections/Intro";
import { useLang } from "../i18n";
import "./Home.css";

export default function HomePage() {
  const { t, path } = useLang();

  const teasers = [
    {
      title: t.kasEsu.title,
      text: t.kasEsu.teaser,
      linkLabel: t.kasEsu.teaserLink,
      to: path.kasEsu,
      variant: "bg1",
    },
    {
      title: t.kurKvieciu.title,
      text: t.kurKvieciu.teaser,
      linkLabel: t.kurKvieciu.teaserLink,
      to: path.kurKvieciu,
      variant: "bg2",
    },
    // {
    //   title: t.duk.title,
    //   text: t.duk.intro,
    //   linkLabel: t.duk.teaserLink,
    //   to: path.duk,
    //   variant: "bg3",
    // },
  ];

  return (
    <>
      <Intro />

      <section className="home-section">
        <div className="home-container">
          <div className="home-grid">
            {teasers.map((teaser) => (
              <article key={teaser.to} className={`home-card ${teaser.variant}`}>
                <h2>{teaser.title}</h2>
                <div className="dash" />
                <p>{teaser.text}</p>
                <Link to={teaser.to} className="home-card-link">
                  {teaser.linkLabel} →
                </Link>
              </article>
            ))}
          </div>

          <div className="home-contact">
            {/* <h3>{t.susisiekime.title}</h3> */}
            <p>{t.susisiekime.teaser}</p>
            <Link to={path.susisiekime} className="cta-button">
              {t.susisiekime.title}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
