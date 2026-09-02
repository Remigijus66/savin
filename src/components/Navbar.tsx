import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Link, NavLink } from "react-router-dom";
import { pageOrder } from "../content/site";
import { useLang } from "../i18n";
import "./Navbar.css";

export default function Navbar() {
  const { t, path, otherLang, otherPath } = useLang();

  const [open, setOpen] = useState(false);

  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleClick = () => setOpen(false);

  useEffect(() => {
  supabase.auth.getUser().then(({ data }) => {
    // setUser(data.user);
    if (data.user) {
  setUser(data.user);
  loadRole(data.user.id);
}
  });

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      setUser(session?.user ?? null);
    }
  );

  return () => subscription.unsubscribe();
}, []);

async function loadRole(userId: string) {
  const { data } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .single();

  setIsAdmin(data?.role === "admin");
}

async function logout() {
  await supabase.auth.signOut();
  setUser(null);
  window.location.href = "/";
}

  return (
    <nav className="navbar">
      <div className="nav-content"
    
      >
 
          <div
            style={{
              marginLeft: "20px",
              width: "54px",
              height: "48px",
              backgroundImage: `url(./Savin-logo.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
    
          </div>



        {/* Desktop links */}
        <div className="nav-links">
        {pageOrder.map((id) => (
            <NavLink
              key={id}
              to={path[id]}
              end
              className={({ isActive }) => (isActive ? "active" : undefined)}
              onClick={handleClick}
            >
              {t.nav[id]}
            </NavLink>
          ))}

          <Link
            to={otherPath}
            className="lang-switch"
            hrefLang={otherLang}
            title={t.ui.languageTitle}
            onClick={handleClick}
          >
            {t.ui.languageLabel}
          </Link>
            {isAdmin && (
    <>
      <Link to="/clients">
        Klientai
      </Link>
      <Link to="/admin/availability">
        Tvarkaraštis 
      </Link>

      <button onClick={logout}>
        Logout
      </button>
    </>
  )}
        </div>

        {/* Mobile button */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

{/* <span > tel: +370 600 00000 </span> */}
      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
       {pageOrder.map((id) => (
            <NavLink
              key={id}
              to={path[id]}
              end
              className={({ isActive }) => (isActive ? "active" : undefined)}
              onClick={handleClick}
            >
              {t.nav[id]}
            </NavLink>
          ))}

          <Link
            to={otherPath}
            className="lang-switch"
            hrefLang={otherLang}
            title={t.ui.languageTitle}
            onClick={handleClick}
          >
            {t.ui.languageLabel}
          </Link>
           {isAdmin && (
    <>
      <Link to="/admin/availability">
        Admin
      </Link>

      <button
    
        onClick={logout}
        // style={{
        //   background: "none",
        //   border: "none",
        //   cursor: "pointer",
        //   color: "var(--color-primary)",
        // }}
      >
        Logout
      </button>
    </>
  )}
        </div>
      )}

    </nav>
  );
}