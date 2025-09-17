export default function TherapistPage() {
  return (
    <div>
      <section
  className="therapist-hero"
  style={{
    backgroundImage: "url('/mist.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // full viewport height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white", // adjust for readability
    textAlign: "center",
    padding: "2rem",
  }}
>
  <div className="therapist-info bg-black bg-opacity-50 p-6 rounded-xl">
    <h2 className="text-3xl font-bold">Jolita Palekaitė</h2>
    <p className="subtitle text-lg">Psichologė, terapeutė</p>
    <p>
      Esu Jolita Palekaitė, specializuojanti individualioje psichoterapijoje,
      emocinės sveikatos stiprinime bei gyvenimo kokybės gerinime.
      Dirbu padėdama žmonėms atrasti vidinę ramybę, įveikti iššūkius
      ir geriau suprasti save.
    </p>
  </div>
</section>

        {/* <img
          src="/public/mist.jpg"
          alt="mist"
          className="therapist-photo"
        /> */}
      {/* Hero */}
      {/* <section className="therapist-hero">
        <img
          src="/public/mist.jpg"
          alt="mist"
          className="therapist-photo"
        />
        <div className="therapist-info">
          <h2>Jolita Palekaitė</h2>
          <p className="subtitle">Psichologė, terapeutė</p>
          <p>
            Esu Jolita Palekaitė, specializuojanti individualioje psichoterapijoje,
            emocinės sveikatos stiprinime bei gyvenimo kokybės gerinime.
            Dirbu padėdama žmonėms atrasti vidinę ramybę, įveikti iššūkius
            ir geriau suprasti save.
          </p>
        </div>
      </section> */}

      {/* Services */}
      {/* <section className="services">
        <h3>Paslaugos</h3>
        <div className="cards">
          <div className="card">
            <h4>Individuali terapija</h4>
            <p>
              Asmeninis darbas, padedantis pažinti save ir spręsti emocinius
              sunkumus.
            </p>
          </div>
          <div className="card">
            <h4>Porų konsultacijos</h4>
            <p>
              Santykių gerinimui, bendravimo sunkumų sprendimui.
            </p>
          </div>
          <div className="card">
            <h4>Streso valdymas</h4>
            <p>
              Įrankiai ir metodai kasdieniam stresui mažinti bei gyvenimo
              kokybei gerinti.
            </p>
          </div>
        </div>
      </section> */}

      {/* Contact */}
      {/* <section className="contact">
        <h3>Kontaktai</h3>
        <p>📍 Vilnius</p>
        <p>📞 +370 600 00000</p>
        <p>✉️ jolita@example.com</p>
      </section> */}
    </div>
  );
}