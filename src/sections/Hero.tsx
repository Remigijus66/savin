import { useEffect, useState } from "react";
import "./Hero.css";

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
      className="hero-section"
     >
      <div className="hero-container"
       >
        {/* Background image carousel */}
        {images.map((image, index) => (
          <div
            key={image}
            className="hero-bg"
            style={{
            backgroundImage: `url(${image})`,
            opacity: current === index ? 1 : 0,
            }}
          />
        ))}

        {/* Dark overlay */}
        <div className="hero-overlay"/>

        {/* Content */}
        <div className="hero-content">
          <h1
            key={current}
            className="hero-title"
                >
            {texts[current]}
          </h1>

          <div
          className="hero-dots"
          >
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                style={{
                  width: current === index ? "24px" : "9px",
                  height: "9px",
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