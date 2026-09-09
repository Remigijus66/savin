import { Link } from "react-router-dom";
import { useLang } from "../i18n";

export default function CtaSusisiekime() {
  const { t, path } = useLang();

  return (
    <div className="page-cta">
      <Link to={path.susisiekime} className="cta-button">
        {t.ui.ctaLabel}
      </Link>
    </div>
  );
}
