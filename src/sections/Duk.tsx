import { useState } from "react";
import Section from "../components/Section";

const faqItems = [
  {
    question: "Kas yra geštalto psichoterapija?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
  },
  {
    question: "Kiek trunka konsultacija?",
    answer:
      "Individuali konsultacija dažniausiai trunka apie 50 minučių.",
  },
  {
    question: "Kaip dažnai vyksta susitikimai?",
    answer:
      "Dažniausiai susitikimai vyksta kartą per savaitę, tačiau dažnumas priklauso nuo individualių poreikių.",
  },
  {
    question: "Ar konsultacijos yra konfidencialios?",
    answer:
      "Taip, visa konsultacijų metu aptariama informacija yra visiškai konfidenciali.",
  },
  {
    question: "Su kokiais sunkumais galima kreiptis?",
    answer:
      "Galima kreiptis dėl nerimo, emocinių sunkumų, santykių problemų, savivertės klausimų, gyvenimo pokyčių ar vidinio pasimetimo.",
  },
  {
    question: "Ar terapija tinka kiekvienam?",
    answer:
      "Terapija gali būti naudinga įvairaus amžiaus žmonėms, ieškantiems geresnio savęs supratimo ir emocinės gerovės.",
  },
  {
    question: "Kiek laiko trunka terapijos procesas?",
    answer:
      "Terapijos trukmė priklauso nuo individualios situacijos, tikslų ir poreikių – ji gali būti tiek trumpalaikė, tiek ilgalaikė.",
  },
  {
    question: "Ar konsultacijos vyksta nuotoliniu būdu?",
    answer:
      "Taip, konsultacijos gali vykti tiek gyvai, tiek nuotoliniu būdu.",
  },
  {
    question: "Kaip pasiruošti pirmajai konsultacijai?",
    answer:
      "Specialaus pasiruošimo nereikia – svarbiausia ateiti atvirai ir leisti sau būti tokiu, koks esate.",
  },
  {
    question: "Kaip užsiregistruoti konsultacijai?",
    answer:
      "Registruotis galima susisiekus telefonu, el. paštu arba užpildžius kontaktų formą svetainėje.",
  },
];

export default function Duk() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="duk"
      justifyContent="flex-start"
      alignItems="flex-start"
      background="light"
    >
      <div
        style={{
          width: "100%",
          maxWidth: "950px",
          margin: "0 auto",
          padding: "5rem 2rem",
        }}
      >
        <h2
          style={{
            fontSize: "2.8rem",
            marginBottom: "1rem",
            color: "var(--color-primary)",
          }}
        >
          Dažniausiai užduodami klausimai
        </h2>

        <p
          style={{
            marginBottom: "3rem",
            color: "var(--color-muted)",
            lineHeight: 1.8,
            fontSize: "1.05rem",
            maxWidth: "700px",
          }}
        >
          Atsakymai į dažniausiai kylančius klausimus apie terapijos procesą,
          konsultacijas ir registraciją.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                style={{
                  border: "1px solid var(--border-color)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "var(--background-main)",
                  transition: "all 0.3s ease",
                }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "1.5rem 2rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    color: "var(--color-dark)",
                    textAlign: "left",
                  }}
                >
                  <span>{item.question}</span>

                  <span
                    style={{
                      fontSize: "1.5rem",
                      color: "var(--color-accent)",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? "300px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <div
                    style={{
                      padding: "0 2rem 1.8rem",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        lineHeight: 1.9,
                        color: "var(--color-muted)",
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}