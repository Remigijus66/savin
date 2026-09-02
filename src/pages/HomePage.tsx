import { Link } from "react-router-dom";
import Intro from "../sections/Intro";
import { duk, kasEsu, kurKvieciu, routes, susisiekime } from "../content/site";
import "./Home.css";

const teasers = [
  {
    title: kasEsu.title,
    text: kasEsu.teaser,
    linkLabel: kasEsu.teaserLink,
    to: routes.kasEsu,
    variant: "bg1",
  },
  {
    title: kurKvieciu.title,
    text: kurKvieciu.teaser,
    linkLabel: kurKvieciu.teaserLink,
    to: routes.kurKvieciu,
    variant: "bg2",
  },
  {
    title: duk.title,
    text: duk.intro,
    linkLabel: duk.teaserLink,
    to: routes.duk,
    variant: "bg3",
  },
];

export default function HomePage() {
  return (
    <>
      <Intro />

      <section className="home-section">
        <div className="home-container">
          <div className="home-grid">
            {teasers.map((teaser) => (
              <article key={teaser.to} className={`home-card ${teaser.variant}`}>
                <h3>{teaser.title}</h3>
                <div className="dash" />
                <p>{teaser.text}</p>
                <Link to={teaser.to} className="home-card-link">
                  {teaser.linkLabel} →
                </Link>
              </article>
            ))}
          </div>

          <div className="home-contact">
            <h3>{susisiekime.title}</h3>
            <p>{susisiekime.teaser}</p>
            <Link to={routes.susisiekime} className="cta-button">
              {susisiekime.teaserLink}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
