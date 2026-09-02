import { useState } from "react";
import CtaSusisiekime from "../components/CtaSusisiekime";
import { useLang } from "../i18n";
import "./Page.css";
import "./DukPage.css";

export default function DukPage() {
  const { t } = useLang();
  const duk = t.duk;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <main className="page">
      <div className="page-container">
        <h1 className="page-title">{duk.subtitle}</h1>

        <p className="page-lead">{duk.intro}</p>

        <CtaSusisiekime />

        <div className="faq-list">
          {duk.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className={`faq-icon ${isOpen ? "open" : ""}`}>+</span>
                </button>

                <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                  <div className="faq-answer-inner">
                    {item.answer.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
