// English site copy – translated from public/texts.docx.
// NOTE: machine-translated draft, needs a native read-through before launch.

import type { SiteContent } from "./types";

/* ---------------- SHARED ---------------- */

const nav = {
  home: "Home",
  kasEsu: "About me",
  kurKvieciu: "What I offer",
  duk: "FAQ",
  susisiekime: "Get in touch",
};

const meta = {
  htmlLang: "en",
  title: "Gestalt psychotherapy in Vilnius | Jolita Palekaitė",
  description:
    "Gestalt psychotherapy in Vilnius. Individual sessions in Lithuanian and English: emotional support, relationship difficulties, anxiety and personal growth.",
  keywords: "psychotherapy Vilnius, gestalt therapy, therapist in English Vilnius",
};

const seo = {
  home: {
    title: "Gestalt psychotherapy in Vilnius | Jolita Palekaitė",
    description:
      "Gestalt psychotherapy in Vilnius and online, in Lithuanian and English. Individual sessions for adults: anxiety, relationships, burnout, personal growth.",
  },
  kasEsu: {
    title: "About me | Jolita Palekaitė, gestalt practitioner",
    description:
      "My path into psychotherapy: gestalt studies at the “Dialogas” institute, psychology at Vilnius University, and volunteering at the Children's Line.",
  },
  kurKvieciu: {
    title: "What I offer | Jolita Palekaitė, psychotherapy in Vilnius",
    description:
      "Personal psychotherapy in Vilnius: how I work, what I believe matters in therapeutic work, and what to expect from the first session onwards.",
  },
  duk: {
    title: "FAQ about gestalt psychotherapy | Jolita Palekaitė",
    description:
      "Who gestalt psychotherapy is for, how long therapy lasts, what a session costs, whether I work remotely – answers to the most common questions.",
  },
  susisiekime: {
    title: "Get in touch | Psychotherapy in Vilnius",
    description:
      "Get in touch about a first meeting: phone, email and the practice address at Liepyno g. 11, Vilnius. Sessions in Lithuanian and English.",
  },
};

const ui = {
  ctaLabel: "GET IN TOUCH",
  ctaKurKvieciuLabel: "WHAT I OFFER",
  languageLabel: "LT",
  languageTitle: "Lietuviškai",
  photoAlt: "Jolita Palekaitė, gestalt psychotherapy practitioner",
  name: "Jolita Palekaitė",
  tagline: "gestalt psychotherapy",
};

const home = {
  greeting: "Hello,",
  headline: "I am Jolita, a gestalt psychotherapy practitioner.",
  paragraphs: [
    "I believe each of us knows our own path. Sometimes we simply need another person beside us – to help us see it.",
    "I looked for mine for many years. I think I have found it.",
    "So... shall we set out?",
  ],
};

const footer = {
  pagesTitle: "Pages",
  contactTitle: "Contact",
  rights: "All rights reserved.",
};

const contact = {
  title: "Contact",
  phoneLabel: "Phone",
  emailLabel: "Email",
  addressLabel: "Address",
  address: "Liepyno g. 11, Vilnius",
  messengerLabel: "Messenger",
  messengerUrl: "https://m.me/jolitapalekaite",
};

/* ---------------- ABOUT ME ---------------- */

const kasEsu = {
  title: "About me",
  greeting: "Hello,",
  intro:
    "I am Jolita, a gestalt psychotherapy practitioner. If we ever meet, we will mostly be talking about you.",
  introCta: {
    before: "So ",
    link: "click here",
    after: " if you would like to know a little more about me...",
  },
  links: [
    {
      phrase: "Academy of Psychology",
      url: "https://psichologijosakademija.lt/portfolio-item/psichologijos-akademija-praktine-psichologija/",
    },
    {
      phrase: "Children's Line",
      url: "https://www.vaikulinija.lt/tapk-savanoriu/emocines-paramos-savanoryste/",
    },
    {
      phrase: "“Dialogas” institute",
      url: "https://dialogas.net/",
    },
    {
      phrase: "Vilnius University",
      url: "https://www.vu.lt/stojantiesiems/bakalauro/psichologija-s",
    },
  ],
  teaser:
    // "My path into psychotherapy was not a short one. I dreamed of psychology back in school, and in 2023 I began gestalt psychotherapy studies at the “Dialogas” institute.",
      "How I went from economist to therapist. And why it took so long",
    teaserLink: "More",

  kelias: {
    title: "My path",
    paragraphs: [
      "My path into psychotherapy was not a short one. I dreamed of psychology back in school. I remember that when, as a teenager, I said I intended to study psychology, many shrugged doubtfully – in those days the view still prevailed that only “crazy people” went to psychologists.",
      "Sadly, I did not get into psychology studies at that time. But human mental health remained my interest and my passion, one I kept feeding – and so my life came to hold two years of practical psychology studies at the Academy of Psychology, volunteering at the Children's Line, a great deal of psychological literature, and a sincere curiosity as I listened to and witnessed the life stories of those around me...",
      "Still, it was not enough, and in the end a childhood dream brought me back to the student's desk...",
    ],
  },

  studijos: {
    title: "My studies and other training",
    paragraphs: [
      "In 2023 I began gestalt psychotherapy studies at the “Dialogas” institute and psychology studies at Vilnius University.",
      "I also learn during my own personal psychotherapy – together with my therapists I have already spent hundreds of hours travelling both the familiar, well-known paths of my personality (or are they?) and the ones never walked before.",
      "In my therapeutic work I am helped not only by academic knowledge, but by my own experiences of work, life and personal change. Successes and defeats, a fine career and unemployment, two daughters in a safe home and hundreds of children at the other end of the Children's Line telephone – this is the “capital” I bring with me to the therapist's chair.",
      "Since 2025 I have been a gestalt psychotherapy practitioner. I keep developing my skills in seminars and supervision. I am an associate member of the gestalt psychotherapy association.",
      "Accompanying people on their journey towards a truer, more authentic way of being with themselves and with others, I am also walking towards my own dream.",
    ],
    groups: [
      {
        title: "Studies",
        items: [
          "September 2023 – present – Bachelor's studies in psychology at the Faculty of Philosophy, Vilnius University",
          "February 2023 – present – gestalt psychotherapy studies at the “Dialogas” gestalt psychotherapy institute",
          "February – June 2022 – emotional support volunteer training at the Children's Line",
          "September 2018 – June 2020 – non-formal studies in practical psychology at the Academy of Psychology",
        ],
      },
      {
        title: "Continuing professional development",
        items: [
          "Gestalt Associates Training Los Angeles (GATLA) European Summer Residential Gestalt Therapy Training Program. Brno, Czech Republic, 19–31 July 2026.",
          "Lecture “Aggression as a rupture of contact”. Juraj Rektor, M.D. Online, 4 March 2026.",
          "10th Vilnius Conference on Suicide Intervention Methods. Suicidology Research Centre, Institute of Psychology, Vilnius University. Online, 5 December 2025.",
          "Conference “Dreams in tradition, psychology and everyday life: a transcultural perspective”. Lithuanian Humanistic Psychology Association. Vilnius, 22 November 2025.",
          "Lecture “On contemporary psychopathology”. Gianni Francesetti. Online, 30 October 2025.",
          "Seminar “Trauma and its treatment from the perspective of gestalt psychotherapy”. Dr. Stephanie Goldsmith. Online, 26 September 2025.",
          "ASIST suicide intervention skills training. Vilnius, 15–16 December 2022.",
        ],
      },
      {
        title: "Volunteering",
        items: [
          "Children's Line. June 2022 – present",
          "“Viltis” summer camp for people with intellectual disabilities. Giruliai, 20–30 July 2025.",
          "The International Society for Prevention of Child Abuse and Neglect (ISPCAN) congress. Vilnius, 6–9 October 2025.",
          "22nd European Conference on Developmental Psychology. Vilnius, 25–29 August 2025.",
        ],
      },
    ],
  },

  gyvenimas: {
    title: "What I do in life besides therapy",
    paragraphs: [
      "I am a mother of two daughters. I volunteer. I like watching people and birds. I grow flowers, medicinal herbs and weeds. I love dogs, though I have kept more cats. I adore horses (I have owned them and will again). I make soap. I am learning French. In summer I climb mountains. I experiment in the vegetable garden (so far without success). One day I want to learn to knit and to cook.",
      "In short – I simply love nature, life and people.",
    ],
  },
};

/* ---------------- WHAT I OFFER AND BELIEVE ---------------- */

const kurKvieciu = {
  title: "What I offer",
  teaser:
    // "Personal psychotherapy is a meeting of two people. In a safe and supportive environment, at a pace that suits you, we explore your needs, feelings, thoughts and bodily sensations.",
 "What I offer, how I work and what matters to me",
    teaserLink: "More",

  terapija: {
    title: "An invitation to personal psychotherapy",
    paragraphs: [
      "Personal psychotherapy is a meeting of two people.",
      "I know it may sound strange – after all, you can meet a friend for coffee, chat with your mother on the phone or drop in on a neighbour. And that is wonderful – treasure those moments with the people close to you.",
      "But in a therapist's room something more is born than simply a pleasant conversation. Here, in a safe and supportive environment, at a pace that suits you, we explore your needs, feelings, thoughts and bodily sensations. We raise the “uncomfortable” questions and look for answers. Without rushing to judge or to change, we learn to understand ourselves better, to make more conscious choices and to take fuller responsibility for our life experiences.",
      // "As in any work, questions and difficulties sometimes arise for me too. That is why my psychotherapeutic work is supervised – meaning that I regularly discuss the questions that come up in my practice with a highly experienced supervisor.",
    ],
  },

  principai: {
    title: "What I believe and what matters to me in therapeutic work",
    intro:
      "I love my work dearly and I do it with great responsibility. In my work I follow all the principles of gestalt psychotherapy, but some of them feel especially important to me. Here they are:",
    items: [
      {
        title: "Relationship heals",
        text: "Most of the pain we experience in life probably comes while we are in one relationship or another. That is why I believe that only in a relationship – a safe, supportive one – can we heal and grow. In a therapeutic meeting I try to set my own assumptions aside and to stay with you – sincerely engaged, open to whatever may arise. “Open” also means that your stories will touch me. Sometimes I will be moved to tears. Sometimes I will be at a loss. I will not find the right words. Just like you. If we are going to get our feet wet, then let it be together... This thought of C. G. Jung's is close to me: “Know all the theories, master all the techniques, but as you touch a human soul be just another human soul.”",
      },
      {
        title: "Awareness and safe risk",
        text: "At the same time, even while focusing on your story, I try to consciously observe what is happening here and now – between us. I believe that the relationship we create partly reflects your patterns of relating outside the therapeutic space. So together we will watch what is happening, how each of us feels, what each of us experiences, and how that changes. Sometimes, if you agree, I will invite you to take a risk: to explore your limits, your discomfort, your vulnerability. If it works, we may discover new (or forgotten) ways of being with yourself and with another.",
      },
      {
        title: "The therapist is not a guide, but a fellow traveller",
        text: "I also believe that in gestalt psychotherapy the therapist is not an expert who knows what you should do or how you should feel. I believe that each of us is the best authority on our own life, that each of us holds unlimited inner resources to heal, to grow and to change. So it will be an honour for me to accompany you on the path of knowing yourself, to help you open up, understand yourself better and take responsibility for your own experience.",
      },
    ],
  },

  koTiketis: {
    title: "What to expect",
    items: [
      "In our first meetings we will get to know one another. I will be interested to hear who you are, how you decided to come to therapy and what you expect from it. You will also be able to ask me questions, which I will do my best to answer clearly and honestly. For me this will be a chance to get to know you and the difficulties you bring to therapy. For you – a chance to sense whether we can go on working together.",
      "In the sessions that follow we will try, gently and at a pace that suits you, to explore the difficulties that brought you to therapy. I know that opening up to a stranger can be hard, daunting, unsafe. I will do my best to create a safe space. What you share in the therapy sessions will stay between the two of us, except in cases where there is a threat to your life or health or to that of others.",
      "We will usually meet for one 50-minute session every week at the same time. If a change of plans means a session has to be cancelled or moved, we can arrange that by email or message.",
      "Every few sessions we will pause briefly to review your progress – whether you feel you are moving in the right direction, what you like and what works for you, and what perhaps irritates or confuses you in the sessions.",
      "When our work together comes to an end, we will close the therapy process together, reflect on your experience and talk about practices that could help you continue your journey of growth and learning.",
    ],
  },
};

/* ---------------- FAQ ---------------- */

const duk = {
  title: "FAQ",
  subtitle: "Frequently asked questions",
  intro: "Here you will find answers to the usual, frequently asked questions.",
  trail: "Have another question?",
  teaserLink: "All questions and answers",

  items: [
    {
      question: "Who is gestalt psychotherapy for?",
      answer: [
        "Gestalt psychotherapy can help with a wide range of life difficulties: complicated personal or work relationships, a painful life event, exhaustion, burnout or a lack of motivation, psychosomatic symptoms, anxiety, existential crises and so on. It is for anyone who is searching for themselves, going through a hard period, or facing an emotional, relational or professional crisis and looking for support.",
        "If complex treatment is needed, including medication, the therapist can work together with other specialists (for example, a psychiatrist).",
      ],
    },
    {
      question: "How long does therapy last?",
      answer: [
        "This is very individual. Some people come for a few months, others stay for several years. We review the course of therapy together on a regular basis – whether it still meets your needs and goals.",
        "There is no “right” length – what matters most is that the process is useful to you.",
      ],
    },
    {
      question: "How often do sessions take place?",
      answer: [
        "We usually meet once a week. That regularity helps to maintain the continuity and depth of the therapeutic process. Depending on the situation, less frequent meetings are also possible.",
      ],
    },
    {
      question: "Can I stop therapy at any time?",
      answer: [
        "Yes, of course. Therapy is a voluntary process.",
        "If you decide to end it, I will ask you to talk it through during at least one session – this helps to close the process clearly and safely for both sides.",
      ],
    },
    {
      question: "What if I don't know what to talk about?",
      answer: [
        "This is very common. In a session we can start from what is here and now – even if that is “I don't know what to talk about”. Often it is exactly this place that becomes an important starting point.",
      ],
    },
    {
      question: "Can you prescribe medication?",
      answer: [
        "No, I am not a medical doctor and I do not prescribe medication. If needed, I can recommend a psychiatrist for a consultation. Psychotherapy and medical treatment can run in parallel and complement one another.",
      ],
    },
    {
      question: "Is everything I tell you confidential?",
      answer: [
        "Yes. Confidentiality is the foundation of therapy. Everything we discuss during sessions stays between us. Exceptions apply only in exceptional cases, where there is a threat to your safety or the safety of others (in line with the applicable law and professional ethics).",
      ],
    },
    {
      question: "Do you work remotely?",
      answer: [
        "Yes, I hold both in-person consultations in Vilnius and remote sessions by video call. Remote therapy is effective and convenient if you cannot come to an in-person meeting or if you live outside Vilnius.",
      ],
    },
    {
      question: "Do you work at weekends?",
      answer: ["Yes, I also work on Saturdays and on some public holidays."],
    },
    {
      question: "What languages do you work in?",
      answer: [
        "I work in Lithuanian and English. You can choose the language in which it is easier for you to express yourself – in therapy that matters a great deal.",
      ],
    },
    {
      question: "How should I prepare for the first meeting?",
      answer: [
        "There is no special preparation needed. Come as you are. If you wish, you can think beforehand about what is difficult for you at the moment or what you expect from therapy, but this is not required.",
      ],
    },
    {
      question: "What is gestalt psychotherapy?",
      answer: [
        "Gestalt psychotherapy is an approach oriented towards present experience: what you feel, how you react “here and now”. We work with the whole person – thoughts, emotions, bodily sensations and relationships. The aim is to increase awareness and to discover new ways of being in relationship with yourself and with your surroundings.",
      ],
    },
    {
      question: "How much does a session cost?",
      answer: [
        "One 50-minute session costs 35 EUR on weekdays and 45 EUR at weekends.",
        "Payment can be made in cash or by bank transfer.",
      ],
    },
    {
      question: "Can I cancel or reschedule a session?",
      answer: [
        "Yes. If you want to cancel or move a session, please let me know at least 24 hours in advance – by message or by phone. We will then find another time that suits us both.",
      ],
    },
    {
      question: "Do you work with children, couples or groups?",
      answer: [
        "At the moment I offer only personal (individual) psychotherapy for people aged 18 and over.",
        "I do not currently work with children (adolescents), couples or groups.",
      ],
    },
  ],
};

/* ---------------- GET IN TOUCH ---------------- */

const susisiekime = {
  title: "Get in touch",
  teaser: "Have a question, or would you like to arrange a first meeting? Write or call.",
  teaserLink: "Contact",
};

/* ---------------- EXPORT ---------------- */

export const en: SiteContent = {
  nav,
  meta,
  seo,
  ui,
  home,
  footer,
  contact,
  kasEsu,
  kurKvieciu,
  duk,
  susisiekime,
};
