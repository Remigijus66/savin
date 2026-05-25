import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-intro">
          <div className="about-title-wrapper">
            <h1 className="about-title">Jolita Palekaitė</h1>
          </div>
          <div className="about-moto">
            <p className="about-lead">
              Jolitos moto pavadinimas. It’s important to remember that mental
              health is a fundamental aspect of overall health.
            </p>

            <p className="about-text">
              Jolitos moto tekstas. Taking care of one’s mental well-being is
              just as important as taking care of one’s physical health. If you
              or someone you know is struggling, don’t hesitate to seek help
              from a qualified professional or helpline.
            </p>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-card bg1">
            <h3>Studijos</h3>
            <div className="dash"></div>
            <p>
              Apie studijas Vilniaus universitete, psichologijos bakalauro ir
              magistro laipsnius. Studijos suteikė tvirtą teorinį pagrindą ir
              praktinius įgūdžius, reikalingus dirbti su įvairiais klientais ir
              problemomis. geštalto terapijos studijos. Geštaltinė
              psichoterapija, kognityvinė elgesio terapija, psichodinaminė
              terapija, sisteminė terapija, ir kt.
            </p>
          </div>

          <div className="about-card bg2">
            <h3>Praktika</h3>
             <div className="dash"></div>
            <p>
              Specializuojuosi suaugusiųjų psichoterapijoje, dirbu su įvairiomis
              problemomis, įskaitant nerimą, depresiją, santykius, streso
              valdymą ir asmeninį augimą.
            </p>
            {/* <span>What We Do</span> */}
          </div>

          <div className="about-card bg3">
            <h3>Savanorystė</h3>
             <div className="dash"></div>
            <p>
              Apie savanorystę Vaikų linijoje. Volunteering can provide a sense
              of purpose, connection, and fulfillment, which can positively
              impact mental health.
            </p>
            {/* <span>What We Do</span> */}
          </div>
        </div>
      </div>
    </section>
  );
}
