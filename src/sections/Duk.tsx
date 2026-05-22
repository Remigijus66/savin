import { useState } from "react";
import "./Duk.css";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="duk"
   className="duk-section"
  
//    gradientStops={
//   [
 
//   { color: "var(--background-main-alt2)", stop: "80%" },
//   { color: "var(--background-main-alt1)", stop: "100%" },
// ]
// }

    >
      <div className="duk-container" >
        <h2
       className="duk-title"
        >
          Dažniausiai užduodami klausimai
        </h2>


<div className="duk-grid">
      
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
            className="duk-item"
              >
                <button
                  onClick={() => toggleItem(index)}
              className="duk-question"
                >
                  <span>{item.question}</span>

                  {/* <span
                    style={{
                      fontSize: "1.5rem",
                      color: "var(--color-accent)",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span> */}
                </button>

             <div
  className="duk-answer"
  style={{
    maxHeight: isOpen ? "300px" : "0",
  }}
>
              <div className="duk-answer-inner">
                    <p>
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}