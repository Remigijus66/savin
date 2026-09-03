import { Link } from "react-router-dom";
import { useLang } from "../i18n";
import "./Intro.css";

export default function Intro() {
  const { t, path } = useLang();

  return (
    <section className="intro-section" id="intro">
      <div className="intro-grid">
        <div className="intro-photo">
          <img
            src="/images/_DSC7683.jpg"
            alt={t.ui.photoAlt}
            width={1364}
            height={2046}
          />
        </div>

        <div className="intro-text">
          <p className="intro-greeting">{t.kasEsu.greeting}</p>
          <h1 className="intro-name">{t.ui.name}</h1>
          <div className="intro-dash" />
          <p className="intro-lead">
            {t.kasEsu.intro}{" "}
            {t.kasEsu.introCta.before}
            <Link to={path.kasEsu} className="inline-link">
              {t.kasEsu.introCta.link}
            </Link>
            {t.kasEsu.introCta.after}
          </p>

          <div className="intro-actions">
            <Link to={path.susisiekime} className="cta-button cta-button-solid">
              {t.susisiekime.title}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
