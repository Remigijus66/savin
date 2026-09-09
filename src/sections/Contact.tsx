import { useLang } from "../i18n";
import "./Contact.css";

export default function Contact() {
  const { t } = useLang();

  const phone = "+370 650 11233";
  const email = "jolita@savin.lt";

  return (
    <section id="contact" className="contact-section">
      <h1 className="page-eyebrow contact-eyebrow">{t.contact.title}</h1>

      <div className="contact-grid">
        {/* LEFT LARGE CARD */}
        <div className="contact-card contact-info-card">
          {/* <h2 className="contact-title">{t.contact.title}</h2> */}

          <div className="contact-items">
            <div className="contact-item">
              <p className="contact-label">{t.contact.addressLabel}</p>
              <p className="contact-value">{t.contact.address}</p>
            </div>
            
            <div className="contact-item">
              <p className="contact-label">{t.contact.phoneLabel}</p>
              <a href={`tel:${phone}`} className="contact-value default-link">
                {phone}
              </a>
            </div>

            <div className="contact-item">
              <p className="contact-label">{t.contact.emailLabel}</p>
              <a href={`mailto:${email}`} className="contact-value default-link">
                {email}
              </a>
            </div>

            <div className="contact-item">
              <p className="contact-label">{t.contact.messengerLabel}</p>
              {/* <p className="contact-value">{t.contact.messengerUrl}</p> */}
              <a href={t.contact.messengerUrl} className="contact-value default-link" target="_blank" rel="noopener noreferrer">
                {t.contact.messengerUrl}
              </a>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="contact-right-column">
          <div className="contact-card contact-map">
           <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4611.266684297889!2d25.251247273950863!3d54.698479616052495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fbb168e61b%3A0xffe685a8cff3e4df!2sLiepyno%20g.%2011%2C%20Vilnius%2C%2008108%20Vilniaus%20m.%20sav.!5e0!3m2!1sen!2slt!4v1779457659623!5m2!1sen!2slt"
              title={t.contact.title}
              loading="lazy"
            ></iframe>
          </div>

          {/* <div
            className="contact-card contact-image"
            style={{
              backgroundImage: "url('/liepyno11.png')",
            }}
          /> */}
        </div>
      </div>
    </section>
  );
}
