import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <h1>Sveiki atvykę į JP Psichologinės pagalbos ir terapijos erdvę </h1>
        <p>
          Psichologinės pagalbos ir terapijos erdvė Vilniuje. Atraskite vidinę
          ramybę, stiprinkite emocinę sveikatą ir augkite kartu su mūsų
          specialistais.
        </p>
        <Link to="/jolita-palekaite" className="button">
          Susipažinkite su Jolita Palekaitė
        </Link>
      </section>

      {/* Highlights */}
      <section className="highlights">
        <h2>Kodėl rinktis mus?</h2>
        <div className="cards">
          <div className="card">
            <h3>Profesionalūs specialistai</h3>
            <p>
              Patyrę psichologai ir terapeutai, pasiruošę padėti įvairiais
              gyvenimo klausimais.
            </p>
          </div>
          <div className="card">
            <h3>Individualus požiūris</h3>
            <p>
              Kiekvienam klientui skiriamas dėmesys ir pritaikoma tinkamiausia
              metodika.
            </p>
          </div>
          <div className="card">
            <h3>Jauki aplinka</h3>
            <p>
              Konsultacijos vyksta patogioje ir saugioje erdvėje Vilniaus
              centre.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}