import { useState } from "react";

export default function Navbar({ onThemeChange }: any) {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backdropFilter: "blur(8px)",
        background: "rgba(255,255,255,0.3)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
    //  display: "flex",
    
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 20px",
          maxWidth: "1400px",
          // margin: "0 auto",
        }}
      >
        {/* Logo */}
        {/* <div style={{ fontWeight: 600, color: "var(--color-primary)" }}>
         Logo 
      <select  style={{ marginLeft: "20px" }} onChange={(e) => onThemeChange(e.target.value)}>
  <option value="theme-first">Natural</option>
  <option value="theme-forest">Forest</option>
  <option value="theme-ocean">Ocean</option>
  <option value="theme-minimal">Minimal</option>
</select>
        </div> */}
          <div
            style={{
              marginLeft: "20px",
              width: "54px",
              height: "48px",
              // borderRadius: "50%",
              // background:
              //   "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
               backgroundImage: `url(./Savin-logo.png)`,
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
              // color: "var(--text-accent)",
              // fontSize: "18px",
              // fontFamily: "'Cormorant Garamond', serif",
              // boxShadow: "0 4px 18px rgba(0,0,0,0.15)",
              // flexShrink: 0,
                        backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
    
          </div>



        {/* Desktop links */}
        <div className="nav-links">
          <a href="#hero" onClick={handleClick}>Pradžia</a>
          <a href="#about" onClick={handleClick}>Apie mane</a>
          <a href="#services" onClick={handleClick}>Paslaugos</a>
          <a href="#gestalt" onClick={handleClick}>Geštaltas</a>
          <a href="#duk" onClick={handleClick}>D.U.K.</a>
          <a href="#contact" onClick={handleClick}>Kontaktai</a>
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
          <a href="#hero" onClick={handleClick}>Pradžia</a>
          <a href="#about" onClick={handleClick}>Apie mane</a>
          <a href="#services" onClick={handleClick}>Paslaugos</a>
          <a href="#pricing" onClick={handleClick}>Apie Geštalto psichoterapiją</a>
          <a href="#duk" onClick={handleClick}>D.U.K.</a>
          <a href="#contact" onClick={handleClick}>Kontaktai</a>
        </div>
      )}

      {/* Styles */}
      <style>{`
        .nav-links {
          display: flex;
          gap: 20px;
        }

        .nav-links a {
          text-decoration: none;
          // color: #22352C;
          color: var(--color-primary);
          font-weight: 500;
          transition: 0.2s;
        }

        .nav-links a:hover {
          // color: #A23D01;
          color: var(--color-accent);
          transform: translateY(-1px);
        }

        .menu-btn {
          display: none;
          font-size: 26px;
          background: none;
          border: none;
          cursor: pointer;
          // color: #22352C;
          color: var(--color-primary);
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 790px) {
          .nav-links {
            display: none;
          }

          .menu-btn {
            display: block;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            padding: 10px 20px;
            gap: 12px;
            background: rgba(255,255,255,0.9);
            border-top: 1px solid rgba(0,0,0,0.08);
          }

          .mobile-menu a {
            text-decoration: none;
            // color: var(--color-primary);
            color: var(--color-primary);
            font-weight: 500;
          }
        }
      `}</style>
    </nav>
  );
}