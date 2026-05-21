import { useEffect, useState } from "react";

export default function Navbar1({ onThemeChange }: any) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 120,
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 40px)",
        maxWidth: "1450px",
        zIndex: 1000,
        transition: "all 0.35s ease",

        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",

        background: scrolled
          ? "rgba(255,255,255,0.78)"
          : "rgba(255,255,255,0.38)",

        border: "1px solid rgba(255,255,255,0.25)",

        boxShadow: scrolled
          ? "0 10px 35px rgba(0,0,0,0.12)"
          : "0 6px 25px rgba(0,0,0,0.08)",

        borderRadius: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 30px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          {/* Improvised elegant logo */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "22px",
              fontFamily: "'Cormorant Garamond', serif",
              boxShadow: "0 4px 18px rgba(0,0,0,0.15)",
              flexShrink: 0,
            }}
          >
            J
          </div>

          <div>
            <div
              style={{
                fontSize: "1.4rem",
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', serif",
                fontWeight: 600,
                color: "var(--color-primary)",
                lineHeight: 1,
              }}
            >
              Jolita Palekaitė
            </div>

            <div
              style={{
                fontSize: "0.8rem",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                marginTop: "4px",
              }}
            >
              Geštaltinė psichoterapija
            </div>
          </div>
        </div>

        {/* Desktop links */}
        <div className="nav-links">
          <a href="#hero" onClick={handleClick}>
            Pradžia
          </a>

          <a href="#about" onClick={handleClick}>
            Apie mane
          </a>

          <a href="#services" onClick={handleClick}>
            Paslaugos
          </a>

          <a href="#gestalt" onClick={handleClick}>
            Geštaltas
          </a>

          <a href="#duk" onClick={handleClick}>
            D.U.K.
          </a>

          <a href="#contact" onClick={handleClick}>
            Kontaktai
          </a>

          <select
            className="theme-select"
            onChange={(e) => onThemeChange(e.target.value)}
          >
            <option value="theme-first">Natural</option>
            <option value="theme-forest">Forest</option>
            <option value="theme-ocean">Ocean</option>
            <option value="theme-minimal">Minimal</option>
          </select>
        </div>

        {/* Mobile button */}
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
          <a href="#hero" onClick={handleClick}>
            Pradžia
          </a>

          <a href="#about" onClick={handleClick}>
            Apie mane
          </a>

          <a href="#services" onClick={handleClick}>
            Paslaugos
          </a>

          <a href="#gestalt" onClick={handleClick}>
            Geštaltas
          </a>

          <a href="#duk" onClick={handleClick}>
            D.U.K.
          </a>

          <a href="#contact" onClick={handleClick}>
            Kontaktai
          </a>

          <select
            className="theme-select-mobile"
            onChange={(e) => onThemeChange(e.target.value)}
          >
            <option value="theme-first">Natural</option>
            <option value="theme-forest">Forest</option>
            <option value="theme-ocean">Ocean</option>
            <option value="theme-minimal">Minimal</option>
          </select>
        </div>
      )}

      {/* Styles */}
      <style>{`
        .nav-links {
          display: flex;
          align-items: center;
          gap: 26px;
        }

        .nav-links a {
          position: relative;
          text-decoration: none;
          color: var(--color-primary);
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.3px;
          transition: all 0.3s ease;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 1.5px;
          background: var(--color-accent);
          transition: width 0.3s ease;
        }

        .nav-links a:hover {
          color: var(--color-accent);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .theme-select,
        .theme-select-mobile {
          border: 1px solid rgba(0,0,0,0.08);
          background: rgba(255,255,255,0.65);
          padding: 10px 14px;
          border-radius: 14px;
          outline: none;
          color: var(--color-primary);
          font-size: 0.9rem;
          cursor: pointer;
          backdrop-filter: blur(10px);
        }

        .menu-btn {
          display: none;
          border: none;
          background: transparent;
          font-size: 1.8rem;
          color: var(--color-primary);
          cursor: pointer;
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 980px) {
          .nav-links {
            display: none;
          }

          .menu-btn {
            display: block;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            gap: 18px;
            padding: 0 30px 30px 30px;
            animation: fadeMenu 0.3s ease;
          }

          .mobile-menu a {
            text-decoration: none;
            color: var(--color-primary);
            font-size: 1rem;
            font-weight: 500;
          }

          .theme-select-mobile {
            margin-top: 10px;
          }
        }

        @keyframes fadeMenu {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}