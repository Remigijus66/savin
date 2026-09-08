import { Link } from "react-router-dom";
import { contactDetails, pageOrder } from "../content/site";
import { useLang } from "../i18n";
import "./Footer.css";

export default function Footer() {
  const { t, path } = useLang();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/logo-mark.svg" alt="" className="footer-mark" />
          <p className="footer-name">{t.ui.name}</p>
          <p className="footer-tagline">{t.ui.tagline}</p>
        </div>

        <nav className="footer-col">
          {/* <h3>{t.footer.pagesTitle}</h3> */}
          <ul>
            {pageOrder.map((id) => (
              <li key={id}>
                <Link to={path[id]}>{t.nav[id]}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          {/* <h3>{t.footer.contactTitle}</h3> */}
          <ul>
            <li className="footer-address">{t.contact.address}</li>
            <li>
              <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}>
                {contactDetails.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {t.ui.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
