import { useEffect, useState } from "react";

const images = ["/sea.jpg", "/sea1.jpg", "/sea2.jpg"];

const texts = [
  "Geštaltinė psichoterapija",
  "Vidinė ramybė ir augimas",
  "Saugi erdvė pokyčiams",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        // minHeight: "100vh",
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
      //  paddingTop:"7rem",
        padding: "6rem 2rem 2rem 2rem", 
        background: "var(--bg-main)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          // maxWidth: "1400px",
          height: "500px",
          borderRadius: "32px",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(35, 46, 32, 0.18)",
        }}
      >
        {/* Background image carousel */}
        {images.map((image, index) => (
          <div
            key={image}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "opacity 1.2s ease-in-out",
              opacity: current === index ? 1 : 0,
              // transform: current === index ? "scale(1)" : "scale(1.05)",
            }}
          />
        ))}

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.35))",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          {/* Text carousel */}
          <h1
            key={current}
            style={{
              color: "white",
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              fontWeight: 300,
              letterSpacing: "1px",
              lineHeight: 1.1,
              margin: 0,

              // Similar elegant font style to SoulHeal theme
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', serif",

              animation: "fadeSlide 1s ease",
              textShadow: "0 4px 20px rgba(0,0,0,0.35)",
            }}
          >
            {texts[current]}
          </h1>

          {/* <p
            style={{
              marginTop: "1.5rem",
              color: "rgba(255,255,255,0.9)",
              fontSize: "1.2rem",
              maxWidth: "700px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Profesionali pagalba emociniam augimui, santykių gerinimui ir
            vidinei pusiausvyrai.
          </p> */}

          {/* Dots */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "2rem",
            }}
          >
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                style={{
                  width: current === index ? "34px" : "12px",
                  height: "12px",
                  borderRadius: "999px",
                  background:
                    current === index
                      ? "white"
                      : "rgba(255,255,255,0.5)",
                  transition: "all 0.35s ease",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeSlide {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}