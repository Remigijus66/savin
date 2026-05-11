import { useState } from "react";

export default function Navbar() {
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
        backdropFilter: "blur(12px)",
        background: "rgba(255,255,255,0.6)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 20px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <div style={{ fontWeight: 600, color: "#22352C" }}>
         Logo 
      
        </div>

        {/* Desktop links */}
        <div className="nav-links">
          <a href="#hero" onClick={handleClick}>Home</a>
          <a href="#about" onClick={handleClick}>About</a>
          <a href="#services" onClick={handleClick}>Services</a>
          <a href="#pricing" onClick={handleClick}>Pricing</a>
          <a href="#contact" onClick={handleClick}>Contact</a>
        </div>

        {/* Mobile button */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
          <a href="#hero" onClick={handleClick}>Home</a>
          <a href="#about" onClick={handleClick}>About</a>
          <a href="#services" onClick={handleClick}>Services</a>
          <a href="#pricing" onClick={handleClick}>Pricing</a>
          <a href="#contact" onClick={handleClick}>Contact</a>
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
          color: #22352C;
          font-weight: 500;
          transition: 0.2s;
        }

        .nav-links a:hover {
          color: #A23D01;
          transform: translateY(-1px);
        }

        .menu-btn {
          display: none;
          font-size: 26px;
          background: none;
          border: none;
          cursor: pointer;
          color: #22352C;
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 768px) {
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
            color: #22352C;
            font-weight: 500;
          }
        }
      `}</style>
    </nav>
  );
}