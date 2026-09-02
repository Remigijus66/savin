import { Link } from "react-router-dom";
import { kasEsu, routes, susisiekime } from "../content/site";
import "./Intro.css";

export default function Intro() {
  return (
    <section className="intro-section" id="intro">
      <div className="intro-grid">
        <div className="intro-photo">
          <img
            src="/images/_DSC7683.jpg"
            alt="Jolita Palekaitė, geštaltinės psichoterapijos praktikė"
            width={1364}
            height={2046}
          />
        </div>

        <div className="intro-text">
          <p className="intro-greeting">{kasEsu.greeting}</p>
          <h1 className="intro-name">Jolita Palekaitė</h1>
          <div className="intro-dash" />
          <p className="intro-lead">{kasEsu.intro}</p>

          <div className="intro-actions">
            <Link to={routes.kasEsu} className="cta-button">
              {kasEsu.teaserLink}
            </Link>
            <Link to={routes.susisiekime} className="cta-button cta-button-solid">
              {susisiekime.title}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
