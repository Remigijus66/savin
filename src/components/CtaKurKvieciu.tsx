import { Link } from "react-router-dom";
import { useLang } from "../i18n";

export default function CtaKurKvieciu() {
  const { t, path } = useLang();

  return (
    <div className="page-cta">
      <Link to={path.kurKvieciu} className="cta-button">
        {t.ui.ctaKurKvieciuLabel}
      </Link>
    </div>
  );
}
