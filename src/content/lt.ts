// Lietuviški svetainės tekstai – iš public/texts.docx.

import type { SiteContent } from "./types";

/* ---------------- BENDRA ---------------- */

const nav = {
  home: "Pradžia",
  kasEsu: "Kas esu",
  kurKvieciu: "Kur kviečiu",
  duk: "DUK",
  susisiekime: "Susisiekime",
};

const meta = {
  htmlLang: "lt",
  title: "Geštaltinė psichoterapija Vilniuje | Jolita Palekaitė",
  description:
    "Geštaltinė psichoterapija Vilniuje. Individualios konsultacijos, emocinė pagalba, santykių sunkumai, nerimas ir asmeninis augimas.",
  keywords: "psichoterapija Vilniuje, geštalto terapija, psichologas Vilnius",
};

const seo = {
  home: {
    title: "Geštaltinė psichoterapija Vilniuje | Jolita Palekaitė",
    description:
      "Geštaltinė psichoterapija Vilniuje ir nuotoliu. Individualios konsultacijos suaugusiems: nerimas, santykių sunkumai, perdegimas, asmeninis augimas.",
  },
  kasEsu: {
    title: "Kas esu | Jolita Palekaitė, psichoterapijos praktikė",
    description:
      "Mano kelias į psichoterapiją: geštaltinės psichoterapijos studijos institute „Dialogas“, psichologija Vilniaus universitete, savanorystė Vaikų linijoje.",
  },
  kurKvieciu: {
    title: "Kur kviečiu | Jolita Palekaitė, psichoterapija Vilniuje",
    description:
      "Asmeninė psichoterapija Vilniuje: kaip dirbu, kuo tikiu terapiniame darbe ir ko tikėtis nuo pirmųjų susitikimų iki proceso pabaigos.",
  },
  duk: {
    title: "DUK apie geštaltinę psichoterapiją | Jolita Palekaitė",
    description:
      "Kam tinka geštaltinė psichoterapija, kiek trunka terapija, kiek kainuoja konsultacija, ar dirbu nuotoliniu būdu – atsakymai į dažniausius klausimus.",
  },
  susisiekime: {
    title: "Susisiekime | Psichoterapija Vilniuje, Liepyno g. 11",
    description:
      "Susisiekite dėl pirmojo susitikimo: telefonas, el. paštas ir kabineto adresas Vilniuje, Liepyno g. 11. Konsultuoju lietuvių ir anglų kalbomis.",
  },
};

const ui = {
  ctaLabel: "SUSISIEKIME",
  ctaKurKvieciuLabel: "KUR KVIEČIU",
  languageLabel: "EN",
  languageTitle: "In English",
  photoAlt: "Jolita Palekaitė, geštaltinės psichoterapijos praktikė",
  name: "Jolita Palekaitė",
  tagline: "geštaltinė psichoterapija",
};

const home = {
  greeting: "Labas,",
  headline: "Esu Jolita, geštaltinės psichoterapijos praktikė.",
  paragraphs: [
    "Tikiu, kad kiekvienas iš mūsų žino savo kelią. Tik kartais reikia kito žmogaus šalia – kad padėtų jį pamatyti.",
    "Aš savojo kelio ieškojau daug metų. Manau, kad radau.",
    "Tai... gal į kelią?",
  ],
};

const footer = {
  pagesTitle: "Puslapiai",
  contactTitle: "Kontaktai",
  rights: "Visos teisės saugomos.",
};

const contact = {
  title: "Kontaktai",
  phoneLabel: "Telefonas",
  emailLabel: "El. paštas",
  addressLabel: "Adresas",
  address: "Liepyno g. 11, Vilnius",
  messengerLabel: "Messenger",  
  messengerUrl: "https://m.me/jolitapalekaite",
};

/* ---------------- KAS ESU ---------------- */

const kasEsu = {
  title: "Kas esu",
  greeting: "Labas,",
  intro:
    "Esu Jolita, geštaltinės psichoterapijos praktikė. Jei kada nors susitiksime, kalbėsimės daugiausia apie jus.",
  introCta: {
    before: "Todėl ",
    link: "spauskite čia",
    after: ", jei norite šiek tiek daugiau sužinoti apie mane...",
  },
  links: [
    {
      phrase: "Psichologijos akademijoje",
      url: "https://psichologijosakademija.lt/portfolio-item/psichologijos-akademija-praktine-psichologija/",
    },
    {
      phrase: "Vaikų linijoje",
      url: "https://www.vaikulinija.lt/tapk-savanoriu/emocines-paramos-savanoryste/",
    },
    {
      phrase: "institute „Dialogas“",
      url: "https://dialogas.net/",
    },
    {
      phrase: "Vilniaus universitete",
      url: "https://www.vu.lt/stojantiesiems/bakalauro/psichologija-s",
    },
  ],
  teaser:
    // "Mano kelias į psichoterapiją – netrumpas. Apie psichologiją svajojau dar mokykloje, o geštaltinės psichoterapijos studijas institute „Dialogas“ pradėjau 2023-iaisiais.",
      "Kaip iš ekonomistės tapau terapeute. Ir kodėl tai užtruko",
    teaserLink: "Daugiau",

  kelias: {
    title: "Mano kelias",
    paragraphs: [
      "Mano kelias į psichoterapiją – netrumpas. Apie psichologiją svajojau dar mokykloje. Pamenu, kai, būdama paaugle, pasakydavau, kad ketinu stoti mokytis psichologijos, daugelis abejodami gūžčiodavo pečiais – tais laikais vis dar vyravo nuomonė, kad pas psichologus eina tik „psichai“.",
      "Deja, įstoti mokytis psichologijos tąkart man nepavyko. Tačiau žmogaus psichikos sveikata liko mano pomėgis ir aistra, kurią nuolat „kursčiau“ – taip mano gyvenime radosi 2 metų praktinės psichologijos studijos Psichologijos akademijoje, savanorystė Vaikų linijoje, daug psichologinės literatūros ir nuoširdus smalsumas, klausantis ir liudijant greta esančių žmonių gyvenimo istorijas...",
      "Visgi to buvo negana ir galiausiai vaikystės svajonė sugrąžino mane į studentišką suolą...",
    ],
  },

  studijos: {
    title: "Mano studijos ir kiti mokslai",
    paragraphs: [
      "2023-iaisiais pradėjau geštaltinės psichoterapijos studijas institute „Dialogas“ ir psichologijos studijas Vilniaus universitete.",
      "Mokausi ir savo asmeninės psichoterapijos metu – jau šimtus valandų kartu su savo terapeutais „keliauju“ tiek įprastais ir pažįstamais (ar tikrai?), tiek nepramintais savo asmenybės takais.",
      "Terapiniame darbe man padeda ne tik akademinės žinios, bet ir mano pačios darbo, gyvenimo ir asmeninių pokyčių patirtys. Sėkmės ir pralaimėjimai, puiki karjera ir bedarbystė, dvi dukros saugiuose namuose ir šimtai vaikų prie „Vaikų linijos“ telefono ragelio – tai mano „kapitalas“, su kuriuo sėduosi į terapeutės krėslą.",
      "Nuo 2025-ųjų esu geštaltinės psichoterapijos praktikė. Nuolat tobulinu savo įgūdžius seminaruose ir supervizijose. Esu geštaltinės psichoterapijos asociacijos asocijuota narė.",
      "Lydėdama žmones jų kelionėje į tikresnį, autentiškesnį buvimą su savimi ir kitais, drauge ir pati žengiu savo svajonės link.",
    ],
    groups: [
      {
        title: "Studijos",
        items: [
          "2023 m. rugsėjis – iki dabar – psichologijos bakalauro studijos Vilniaus Universiteto Filosofijos fakultete",
          "2023 m. vasaris – iki dabar – geštaltinės psichoterapijos studijos geštaltinės psichoterapijos institute „Dialogas“",
          "2022 m. vasaris – birželis – Vaikų linijos emocinės paramos savanorių mokymai",
          "2018 m. rugsėjis – 2020 m. birželis – praktinės psichologijos neformaliosios studijos Psichologijos akademijoje",
        ],
      },
      {
        title: "Kvalifikacijos kėlimas",
        items: [
          "Gestalt Associates Training Los Angeles (GATLA) European Summer Residential Gestalt Therapy Training Program. Brno, Čekija, 2026 m. liepos 19-31 d.",
          "Paskaita „Agresija kaip kontakto trūkis“. Juraj Rektor, M.D. Online, 2026 m. kovo 4 d.",
          "10-oji Vilniaus savižudybių intervencijos metodų konferencija. VU Psichologijos instituto Suicidologijos tyrimų centras. Online, 2025 m. gruodžio 5 d.",
          "Konferencija „Sapnas tradicijoje, psichologijoje ir kasdienybėje: transkultūrinė perspektyva“. Lietuvos humanistinės psichologijos asociacija. Vilnius, 2025 m. lapkričio 22 d.",
          "Paskaita „Apie šiuolaikinę psichopatologiją“. Gianni Francesetti. Online, 2025 m. spalio 30 d.",
          "Seminaras „Trauma ir jos gydymas geštaltinės psichoterapijos požiūriu“. Dr. Stephanie Goldsmith. Online, 2025 m. rugsėjo 26 d.",
          "Savižudybių intervencijos įgūdžių mokymai ASIST. Vilnius, 2022 m. gruodžio 15-16 d.",
        ],
      },
      {
        title: "Savanorystė",
        items: [
          "Vaikų linija. 2022 m. birželis – iki dabar",
          "Sutrikusio intelekto žmonių vasaros stovykla „Viltis“. Giruliai, 2025 m. liepos 20-30 d.",
          "The International Society for Prevention of Child Abuse and Neglect (ISPCAN) kongresas. Vilnius, 2025 m. spalio 6-9 d.",
          "22-oji Europos raidos psichologijos konferencija. Vilnius, 2025 m. rugpjūčio 25-29 d.",
        ],
      },
    ],
  },

  gyvenimas: {
    title: "Kuo, be terapijos, užsiimu gyvenime",
    paragraphs: [
      "Esu 2 dukrų mama. Savanoriauju. Mėgstu stebėti žmones ir paukščius. Auginu gėles, vaistažoles ir piktžoles. Myliu šunis, nors kačių esu auginusi daugiau. Dievinu žirgus. Gaminu muilą. Mokausi prancūzų kalbos. Vasarą lipu į kalnus. Eksperimentuoju (kol kas nesėkmingai) darže. Kada nors noriu išmokti megzti ir gaminti maistą.",
      "Jei trumpiau – tiesiog myliu gamtą, gyvenimą ir žmones.",
    ],
  },
};

/* ---------------- KUR KVIEČIU IR KUO TIKIU ---------------- */

const kurKvieciu = {
  title: "Kur kviečiu",
  teaser:
    // "Asmeninė psichoterapija – tai dviejų žmonių susitikimas. Saugioje ir palaikančioje aplinkoje, jums priimtinu tempu, tyrinėjame jūsų poreikius, jausmus, mintis, kūno pojūčius.",
 "Ką siūlau, kaip dirbu ir kas man svarbu",
    teaserLink: "Daugiau",

  terapija: {
    title: "Kviečiu asmeninei psichoterapijai",
    paragraphs: [
      "Asmeninė psichoterapija – tai dviejų žmonių susitikimas.",
      "Žinau, gali skambėti keistai – juk susitikti kavos galite su draugu, telefonu paplepėti su mama ar užsukti pas kaimynę. Ir tai nuostabu – branginkite šias akimirkas su artimais žmonėmis.",
      "Tačiau terapeuto kabinete gimsta kai kas daugiau nei tiesiog mielas pašnekesys. Čia, saugioje ir palaikančioje aplinkoje, jums priimtinu tempu, tyrinėjame jūsų poreikius, jausmus, mintis, kūno pojūčius. Keliame „nepatogius“ klausimus ir ieškome atsakymų. Neskubėdami vertinti ar keisti, mokomės geriau save suprasti, daryti sąmoningesnius pasirinkimus ir drąsiau prisiimti atsakomybę už savo gyvenimo patirtis.",
      // "Kaip ir kiekviename darbe, man kartais taip pat iškyla klausimų ar sunkumų. Todėl mano psichoterapinis darbas yra supervizuojamas – tai reiškia, kad praktikoje iškilusius klausimus reguliariai aptariu su didelę patirtį turinčia supervizore.",
    ],
  },

  principai: {
    title: "Kuo tikiu ir kas man svarbu terapiniame darbe",
    intro:
      "Labai myliu savo darbą ir dirbu jį su didele atsakomybe. Dirbdama seku visais geštaltinės psichoterapijos principais, tačiau kai kurie jų man atrodo ypač svarbūs. Štai jie:",
    items: [
      {
        title: "Santykis gydo",
        text: "Ko gero, daugiausia skausmo gyvenime patiriame būdami viename ar kitame santykyje. Todėl tikiu, kad tik santykyje – saugiame, palaikančiame – galime ir gyti bei augti. Terapiniame susitikime stengiuosi atidėti į šoną savo nuostatas ir likti su jumis – nuoširdžiai įsitraukusi, atvira viskam, kas gali iškilti. „Atvira“ reiškia ir tai, kad jūsų istorijos mane palies. Kartais susigraudinsiu. Kartais sutriksiu. Nerasiu tinkančių žodžių. Visai kaip ir jūs. Jei jau „sušlapsime kojas“, tai kartu... Man artima ši C.G. Jung mintis: „Išmok visas teorijas, įvaldyk visas technikas, bet kai lietiesi prie žmogaus sielos – būk tiesiog žmogus“.",
      },
      {
        title: "Sąmoningumas ir saugi rizika",
        text: "Tuo pačiu, net sutelkusi dėmesį į jūsų istoriją, stengiuosi sąmoningai stebėti tai, kas vyksta čia ir dabar – tarp mūsų. Tikiu, kad mūsų kuriamas santykis iš dalies atspindi jūsų santykių modelius už terapinės erdvės ribų. Todėl kartu stebėsime, kas vyksta, kaip kiekvienas iš mūsų jaučiasi, ką patiria, ir kaip tai kinta. Kartais, jei sutiksite, pakviesiu jus surizikuoti: patyrinėti savo ribas, nepatogumus, pažeidžiamumą. Jei pavyks, galbūt atrasime naujų (arba pamirštų) būdų būti su savimi ir kitu.",
      },
      {
        title: "Terapeutas – ne vedlys, o bendrakeleivis",
        text: "Taip pat tikiu, kad geštaltinėje psichoterapijoje terapeutas nėra ekspertas, kuris žino, ką jums daryti ar kaip jaustis. Tikiu, kad kiekvienas pats esame geriausias savo gyvenimo žinovas, kiekvienas turime neribotus vidinius resursus gyti, augti ir keistis. Todėl man bus garbė lydėti jus savęs pažinimo kelyje, padėti atsiskleisti, geriau suprasti save ir prisiimti atsakomybę už savo patirtį.",
      },
    ],
  },

  koTiketis: {
    title: "Ko tikėtis?",
    items: [
      "Pirmųjų susitikimų metu susipažinsime. Man bus įdomu išgirsti, kas esate, kaip nusprendėte ateiti į terapiją ir ko iš jos tikitės. Jūs taip pat galėsite užduoti man klausimų, į kuriuos pasistengsiu aiškiai ir nuoširdžiai atsakyti. Man tai bus galimybė pažinti jus ir jūsų sunkumus, su kuriais ateinate į terapiją. Jums – pajusti, ar galime toliau dirbti kartu.",
      "Kitose sesijose pabandysime švelniai, jums priimtinu tempu, tyrinėti sunkumus, dėl kurių atėjote į terapiją. Žinau, kad atsiskleisti nepažįstamam žmogui gali būti nelengva, nedrąsu, nesaugu. Pasistengsiu sukurti saugią erdvę. Tai, kuo pasidalinsite terapinėse sesijose, liks tik tarp mudviejų, išskyrus atvejus, jei kiltų grėsmė jūsų ar kitų žmonių sveikatai ar gyvybei.",
      "Paprastai susitiksime vienai 50-ies minučių sesijai kiekvieną savaitę tuo pačiu metu. Jei dėl pasikeitusių planų sesiją bus būtina atšaukti ar perkelti į kitą laiką, tą galėsime padaryti suderinę el. paštu ar žinute.",
      "Kas keletą sesijų trumpam stabtelėsime, kad aptartume jūsų progresą – ar jaučiatės judanti(s) teisinga kryptimi, kas jums patinka, veikia, ir kas, galbūt, erzina ar glumina terapinėse sesijose.",
      "Pasibaigus bendram darbui, kartu užbaigsime terapijos procesą, aptarsime jūsų patirtis ir pakalbėsime apie praktikas, kurios galėtų padėti jums tęsti savo augimo ir mokymosi kelionę.",
    ],
  },
};

/* ---------------- DUK ---------------- */

const duk = {
  title: "DUK",
  subtitle: "Dažniausiai užduodami klausimai",
  intro: "Čia rasite atsakymus į įprastus, dažnai kylančius klausimus.",
  trail: "Turite kitų klausimų?",
  teaserLink: "Visi klausimai ir atsakymai",

  items: [
    {
      question: "Kam tinka geštaltinė psichoterapija?",
      answer: [
        "Geštaltinė (arba geštalto) psichoterapija gali padėti susiduriant su įvairiais gyvenimo sunkumais: sudėtingi asmeniniai ar darbo santykiai, skaudus gyvenimo įvykis, nuovargis, perdegimas ar motyvacijos stoka, psichosomatiniai simptomai, nerimas, egzistencinės krizės ir pan. Ji skirta kiekvienam žmogui, kuris ieško savęs, išgyvena sunkų laikotarpį arba susiduria su emocine, santykių ar profesine krize ir ieško palaikymo.",
        "Jei reikalingas kompleksinis gydymas, įskaitant medikamentinę pagalbą, terapeutas gali bendradarbiauti su kitais specialistais (pvz., gydytoju psichiatru).",
      ],
    },
    {
      question: "Kiek laiko trunka terapija?",
      answer: [
        "Tai labai individualu. Vieni žmonės ateina keliems mėnesiams, kiti lieka kelerius metus. Terapijos eigą reguliariai peržiūrime kartu – ar ji vis dar atitinka jūsų poreikius ir tikslus.",
        "„Teisingos“ trukmės nėra – svarbiausia, kad procesas jums būtų naudingas.",
      ],
    },
    {
      question: "Kaip dažnai vyksta susitikimai?",
      answer: [
        "Paprastai susitinkame kartą per savaitę. Toks reguliarumas padeda išlaikyti terapinio proceso tęstinumą ir gilumą. Priklausomai nuo situacijos, galimi ir retesni susitikimai.",
      ],
    },
    {
      question: "Ar galiu bet kada nutraukti terapiją?",
      answer: [
        "Taip, žinoma. Terapija yra savanoriškas procesas.",
        "Jei nuspręsite ją baigti, paprašysiu apie tai pasikalbėti bent vienos sesijos metu – tai padeda užbaigti procesą aiškiai ir saugiai abiem pusėms.",
      ],
    },
    {
      question: "Kas bus, jei nežinosiu apie ką kalbėti?",
      answer: [
        "Tai labai įprasta. Sesijoje galime pradėti nuo to, kas yra čia ir dabar – net jei tai ir yra „nežinau, apie ką kalbėti“. Dažnai būtent ši vieta tampa svarbiu atspirties tašku.",
      ],
    },
    {
      question: "Ar galite skirti vaistus?",
      answer: [
        "Ne, aš nesu gydytoja ir neskiriu vaistų. Jei reikia, galiu rekomenduoti psichiatrą konsultacijai. Psichoterapija ir medikamentinis gydymas gali vykti paraleliai ir vienas kitą papildyti.",
      ],
    },
    {
      question: "Ar viskas, ką pasakoju, yra konfidencialu?",
      answer: [
        "Taip. Konfidencialumas yra terapijos pagrindas. Visa, ką aptariame sesijų metu, lieka tarp mūsų. Išimtys taikomos tik išskirtiniais atvejais, kai kyla grėsmė jūsų ar kitų žmonių saugumui (pagal galiojančius teisės aktus ir profesinę etiką).",
      ],
    },
    {
      question: "Ar dirbate nuotoliniu būdu?",
      answer: [
        "Taip, vedu tiek gyvas konsultacijas Vilniuje, tiek nuotolines sesijas vaizdo skambučiu. Nuotolinė terapija yra veiksminga ir patogi, jei negalite atvykti į gyvą susitikimą arba gyvenate ne Vilniuje.",
      ],
    },
    {
      question: "Ar dirbate savaitgaliais?",
      answer: ["Taip, dirbu ir šeštadieniais bei kai kuriomis švenčių dienomis."],
    },
    {
      question: "Kokiomis kalbomis konsultuojate?",
      answer: [
        "Konsultuoju lietuvių ir anglų kalbomis. Galite pasirinkti kalbą, kuria jums patogiau išreikšti save – terapijoje tai labai svarbu.",
      ],
    },
    {
      question: "Kaip pasiruošti pirmajam susitikimui?",
      answer: [
        "Specialiai pasiruošti nereikia. Ateikite tokie, kokie esate. Jei norite, galite prieš susitikimą pagalvoti, kas šiuo metu jums kelia sunkumų ar ko tikitės iš terapijos, tačiau tai nėra būtina.",
      ],
    },
    {
      question: "Kas yra geštalto psichoterapija?",
      answer: [
        "Geštalto psichoterapija – tai kryptis, orientuota į dabarties patyrimą: ką jaučiate, kaip reaguojate „čia ir dabar“. Dirbame su visu žmogumi – mintimis, emocijomis, kūno pojūčiais ir santykiais. Tikslas – didinti sąmoningumą ir atrasti naujus būdus būti santykyje su savimi ir aplinka.",
      ],
    },
    {
      question: "Kiek kainuoja konsultacija?",
      answer: [
        "Vienos 50 minučių sesijos kaina darbo dienomis yra 35 EUR, savaitgaliais – 45 EUR.",
        "Atsiskaityti galima grynaisiais arba bankiniu pavedimu.",
      ],
    },
    {
      question: "Ar galiu atšaukti ar perkelti sesiją?",
      answer: [
        "Taip. Jei norite atšaukti ar perkelti sesiją, prašau mane informuoti bent prieš 24 valandas – susisiekiant žinute ar telefonu. Tuomet rasime kitą mums abiem tinkantį.",
      ],
    },
    {
      question: "Ar dirbate su vaikais, poromis, grupėmis?",
      answer: [
        "Šiuo metu siūlau tik asmeninę (individualią) psichoterapiją asmenims nuo 18 metų.",
        "Su vaikais (paaugliais), poromis ar grupėmis kol kas nedirbu.",
      ],
    },
  ],
};

/* ---------------- SUSISIEKIME ---------------- */

const susisiekime = {
  title: "Susisiekime",
  teaser: "Turite klausimų ar norite susitarti dėl pirmojo susitikimo?",
  teaserLink: "Kontaktai",
};

/* ---------------- EKSPORTAS ---------------- */

export const lt: SiteContent = {
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
