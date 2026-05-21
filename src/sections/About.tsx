import "./About.css";

export default function About() {
  return (
    <section className="about-section">

      <div className="about-container">

        {/* INTRO */}
        <div className="about-intro">
          <div className="about-title-wrapper">

          <h1 className="about-title">
            We’ll Do Our Best to Support You
          </h1>
          </div>
<div className="about-moto">

          <p className="about-lead">
            It’s important to remember that mental health is a fundamental aspect of overall health.
          </p>

          <p className="about-text">
            Taking care of one’s mental well-being is just as important as taking care of one’s physical health.
            If you or someone you know is struggling, don’t hesitate to seek help from a qualified professional or helpline.
          </p>
</div>

        </div>

        {/* ABOUT US */}
        <div className="about-center">
          <h2 className="about-subtitle">About Us</h2>

          <p className="about-text max-width">
            We are dedicated to providing compassionate mental health care for individuals, families, and organizations.
            Our mission is to create a safe space for healing, growth, and emotional well-being.
          </p>
        </div>

        {/* SERVICES */}
        <div className="about-grid">

          <div className="about-card">
            <h3>For Adults</h3>
            <p>
              Our services for adults encompass anxiety, depression, relationships, stress management, and personal growth.
            </p>
            <span>What We Do</span>
          </div>

          <div className="about-card">
            <h3>For Children</h3>
            <p>
              We support children facing ADHD, anxiety, behavioral issues, academic stress, and emotional regulation challenges.
            </p>
            <span>What We Do</span>
          </div>

          <div className="about-card">
            <h3>For Business</h3>
            <p>
              We offer EAP programs, leadership support, and workplace mental health training to improve employee well-being.
            </p>
            <span>What We Do</span>
          </div>

        </div>

      </div>

    </section>
  );
}