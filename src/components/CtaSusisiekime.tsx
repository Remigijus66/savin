import { Link } from "react-router-dom";
import { ctaLabel, routes } from "../content/site";

export default function CtaSusisiekime() {
  return (
    <div className="page-cta">
      <Link to={routes.susisiekime} className="cta-button">
        {ctaLabel}
      </Link>
    </div>
  );
}
