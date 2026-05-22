import "./Contact.css";

const contactItems = [
  {
    label: "Telefonas",
    value: "+370 650 11233",
  },
  {
    label: "El. paštas",
    value: "jolita@savin.lt",
  },
  {
    label: "Adresas",
    value: "Liepyno g. 11, Vilnius",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid">
        {/* LEFT LARGE CARD */}
        <div className="contact-card contact-info-card">
          <h2 className="contact-title">Kontaktai</h2>

          <div className="contact-items">
            {contactItems.map((item, index) => (
              <div key={index} className="contact-item">
                <p className="contact-label">{item.label}</p>

                <p className="contact-value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="contact-right-column">
          <div className="contact-card contact-map">
           <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4611.266684297889!2d25.251247273950863!3d54.698479616052495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fbb168e61b%3A0xffe685a8cff3e4df!2sLiepyno%20g.%2011%2C%20Vilnius%2C%2008108%20Vilniaus%20m.%20sav.!5e0!3m2!1sen!2slt!4v1779457659623!5m2!1sen!2slt"
       
              loading="lazy"
           
            ></iframe>
          </div>

          <div
            className="contact-card contact-image"
            style={{
              backgroundImage: "url('./liepyno11.png')",
            }}
          />
        </div>
      </div>
    </section>
  );
}
