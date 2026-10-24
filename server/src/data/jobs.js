// 10 job sectors, localized into the 11 written official SA languages.
// Codes covered: af, en, nr, xh, zu, nso, st, tn, ss, ve, ts.
// SASL ('sas') is NOT keyed here; it falls back to English (see utils/lang.js).
//
// IMPORTANT: All non-English translations are AI-generated best-effort and
// SHOULD BE REVIEWED BY NATIVE SPEAKERS before production use. They are not
// authoritative. Salary ranges are indicative and vary by region/employer.

const JOBS = {
  en: [
    {
      id: 1,
      name: 'Retail (Shop Assistant / Cashier)',
      shortDescription: 'Serve customers, handle payments and keep shelves stocked in shops and supermarkets.',
      categoryEmoji: '🛍️',
      detail: {
        description:
          'Shop assistants and cashiers help customers find products, process payments at the till, pack shelves and keep the store clean and organised. It is a common entry-level job for young people across South Africa.',
        keySkills: ['Customer service', 'Handling cash and card payments', 'Basic numeracy', 'Communication', 'Neatness and punctuality'],
        salaryRange: 'Indicative: R4,500–R7,500/month (varies by region and employer)',
        howToGetStarted: [
          'Create a free email address (e.g. Gmail) and a simple CV.',
          'Look for openings on Indeed, Careers24 and PNet.',
          'Visit shopping malls and ask store managers about walk-in vacancies.',
          'Apply for retail learnerships through the Wholesale and Retail SETA (W&RSETA).',
          'Prepare your ID and matric certificate, and dress neatly for the interview.',
        ],
        recommendedTraining: [
          'W&RSETA retail learnerships or short courses',
          'Basic computer / point-of-sale (POS) training',
          'Customer service short course',
        ],
        tips: [
          'Be punctual and well groomed — first impressions matter in retail.',
          'Keep your ID and matric certificate copies ready.',
          'Smile and stay patient with difficult customers.',
        ],
      },
    },
    {
      id: 2,
      name: 'Hospitality (Waiter / Hotel Staff)',
      shortDescription: 'Serve food and drinks, assist guests and keep restaurants or hotels running smoothly.',
      categoryEmoji: '🍽️',
      detail: {
        description:
          'Hospitality staff work in restaurants, hotels, guesthouses and catering. They take orders, serve food, set tables, clean and make guests feel welcome. Flexible hours and good for building people skills.',
        keySkills: ['Customer service', 'Teamwork', 'Working under pressure', 'Communication', 'Basic food safety'],
        salaryRange: 'Indicative: R4,500–R8,000/month plus tips (varies by employer)',
        howToGetStarted: [
          'Make a short CV and a free email address.',
          'Search Indeed, Careers24 and hotel group career pages.',
          'Walk into restaurants and hotels with your CV and ask about vacancies.',
          'Apply for hospitality learnerships through the Services SETA or CATHSSETA.',
          'Be ready to start on weekends or evening shifts.',
        ],
        recommendedTraining: [
          'CATHSSETA hospitality learnerships',
          'Food safety / hygiene short course',
          'First aid basics',
        ],
        tips: [
          'Keep nails short, hair tidy and uniform clean.',
          'Carry copies of your ID and matric certificate.',
          'Tips can add to your income — serve with a friendly attitude.',
        ],
      },
    },
    {
      id: 3,
      name: 'IT & Helpdesk (Junior IT Support)',
      shortDescription: 'Help people with computer problems, set up devices and support users by phone.',
      categoryEmoji: '💻',
      detail: {
        description:
          'Junior IT support staff help colleagues or customers fix computer issues, install software, set up printers and answer technical questions. A good starting point if you enjoy technology and problem solving.',
        keySkills: ['Computer literacy', 'Problem solving', 'Patience', 'Communication', 'Basic networking'],
        salaryRange: 'Indicative: R6,000–R12,000/month (varies by employer and experience)',
        howToGetStarted: [
          'Build a free email account and a short CV listing any computer skills.',
          'Look for entry-level roles on Indeed, Careers24, PNet and LinkedIn.',
          'Apply for IT learnerships through the MICT SETA.',
          'Practice fixing common problems on a computer at home or a library.',
          'Consider a short A+ or basic IT certificate course.',
        ],
        recommendedTraining: [
          'MICT SETA IT learnerships',
          'CompTIA A+ or similar entry-level IT certificate',
          'Free online courses (e.g. Cisco Networking Academy)',
        ],
        tips: [
          'Show patience — most of the job is helping non-technical people.',
          'Keep learning new software and tools.',
          'Document problems and solutions so you learn faster.',
        ],
      },
    },
    {
      id: 4,
      name: 'Construction (General Worker / Trades Assistant)',
      shortDescription: 'Help on building sites: carry materials, mix cement and assist skilled tradespeople.',
      categoryEmoji: '🏗️',
      detail: {
        description:
          'General construction workers assist builders, carry materials, mix cement, clean the site and help tradespeople like electricians and plumbers. Physical work that teaches practical skills on the job.',
        keySkills: ['Physical fitness', 'Following instructions', 'Teamwork', 'Safety awareness', 'Reliability'],
        salaryRange: 'Indicative: R4,500–R9,000/month (varies by project and region)',
        howToGetStarted: [
          'Make a CV and a free email address.',
          'Visit construction sites and labour brokers to ask about work.',
          'Check the Department of Employment and Labour job portals.',
          'Apply for construction learnerships through the CETA (Construction SETA).',
          'Have your ID ready and wear safety boots if you have them.',
        ],
        recommendedTraining: [
          'CETA construction learnerships',
          'Health and safety induction (yellow card / SAMTRAC basics)',
          'Basic trade assistant skills',
        ],
        tips: [
          'Always wear safety gear — boots, hard hat and vest.',
          'Be reliable; construction values workers who show up every day.',
          'Keep your ID and a copy of your matric certificate with you.',
        ],
      },
    },
    {
      id: 5,
      name: 'Admin & Clerical (Receptionist / Data Capture)',
      shortDescription: 'Answer phones, capture data on computer and keep office records organised.',
      categoryEmoji: '🗂️',
      detail: {
        description:
          'Receptionists and data capturers greet visitors, answer phones, type information into computers, file documents and keep the office organised. Good for people who are organised and computer literate.',
        keySkills: ['Computer literacy (Word, Excel)', 'Communication', 'Organisation', 'Telephone manners', 'Accuracy'],
        salaryRange: 'Indicative: R5,000–R10,000/month (varies by employer)',
        howToGetStarted: [
          'Create a free email and a neat CV that lists your computer skills.',
          'Search Indeed, Careers24 and PNet for receptionist or data capture roles.',
          'Apply for admin learnerships through the Services SETA.',
          'Practice typing and basic Microsoft Office at a library or community centre.',
          'Prepare your ID and matric certificate for applications.',
        ],
        recommendedTraining: [
          'Services SETA business administration learnerships',
          'Microsoft Office short course',
          'Basic typing and data entry practice',
        ],
        tips: [
          'Be polite and professional on the phone — you are the first contact.',
          'Keep your workspace tidy and organised.',
          'Double-check data you capture to avoid mistakes.',
        ],
      },
    },
    {
      id: 6,
      name: 'Call Centre (Customer Service Agent)',
      shortDescription: 'Answer customer calls, solve problems and provide information by phone.',
      categoryEmoji: '📞',
      detail: {
        description:
          'Call centre agents answer customer calls, help with queries, log complaints and sometimes do sales over the phone. Many young South Africans start their careers here; it builds strong communication skills.',
        keySkills: ['Clear speech', 'Listening', 'Problem solving', 'Patience', 'Computer literacy'],
        salaryRange: 'Indicative: R5,500–R11,000/month (varies by employer and shifts)',
        howToGetStarted: [
          'Make a free email and a CV that highlights communication skills.',
          'Search Indeed, Careers24 and PNet for call centre roles.',
          'Look for call centre learnerships through the Services SETA.',
          'Practice speaking clearly and handling mock customer calls.',
          'Keep your ID and matric certificate ready.',
        ],
        recommendedTraining: [
          'Services SETA call centre learnerships',
          'Customer service short course',
          'Basic computer and typing skills',
        ],
        tips: [
          'Speak clearly and stay calm, even with angry customers.',
          'Learn the company product or service well.',
          'Be ready to work shifts, including evenings and weekends.',
        ],
      },
    },
    {
      id: 7,
      name: 'Security (Security Officer)',
      shortDescription: 'Guard premises, control access and keep people and property safe.',
      categoryEmoji: '🛡️',
      detail: {
        description:
          'Security officers guard buildings, control who enters, patrol premises and respond to incidents. The job requires registration with PSIRA and is in steady demand across South Africa.',
        keySkills: ['Vigilance', 'Physical fitness', 'Honesty', 'Following procedures', 'Communication'],
        salaryRange: 'Indicative: R4,500–R8,000/month (varies by employer and grade)',
        howToGetStarted: [
          'Get a police clearance certificate from your nearest SAPS station.',
          'Register and train with a PSIRA-accredited security training provider.',
          'Apply to registered security companies in your area.',
          'Search Indeed, Careers24 and security company websites.',
          'Keep your ID, matric certificate and PSIRA docs ready.',
        ],
        recommendedTraining: [
          'PSIRA Grade E to C security training',
          'First aid basics',
          'Fire fighting / safety short course',
        ],
        tips: [
          'A police clearance is usually required — get it early.',
          'Stay alert and follow safety procedures at all times.',
          'Be honest and reliable; employers screen security staff carefully.',
        ],
      },
    },
    {
      id: 8,
      name: 'Beauty & Haircare (Salon Assistant)',
      shortDescription: 'Assist in salons: greet clients, keep tools clean and support beauty or hair services.',
      categoryEmoji: '💇',
      detail: {
        description:
          'Salon assistants greet clients, wash hair, clean tools, prepare stations and support hairdressers and beauty therapists. A good way into the beauty industry while learning on the job.',
        keySkills: ['Customer service', 'Hygiene', 'Helpfulness', 'Listening', 'Neatness'],
        salaryRange: 'Indicative: R4,000–R7,500/month (varies by salon and area)',
        howToGetStarted: [
          'Create a free email and a short CV.',
          'Walk into local salons and ask about assistant vacancies.',
          'Search Indeed and Careers24 for salon assistant roles.',
          'Apply for beauty or hair learnerships through the Services SETA or CATHSSETA.',
          'Keep your ID and matric certificate ready.',
        ],
        recommendedTraining: [
          'Beauty or hairdressing learnerships (CATHSSETA)',
          'Hygiene and sanitation short course',
          'Customer service basics',
        ],
        tips: [
          'Keep yourself and your workstation clean and tidy.',
          'Be friendly and helpful with clients.',
          'Watch and learn techniques from experienced stylists.',
        ],
      },
    },
    {
      id: 9,
      name: 'Food Preparation (Kitchen Assistant / Fast Food)',
      shortDescription: 'Help in kitchens: prepare ingredients, keep areas clean and assist cooks.',
      categoryEmoji: '🍳',
      detail: {
        description:
          'Kitchen assistants and fast-food staff prepare ingredients, cook simple items, clean the kitchen and help chefs. A common first job in restaurants and fast-food chains, with flexible hours.',
        keySkills: ['Working under pressure', 'Hygiene', 'Teamwork', 'Following recipes', 'Speed'],
        salaryRange: 'Indicative: R4,000–R7,000/month (varies by employer)',
        howToGetStarted: [
          'Make a free email and a short CV.',
          'Walk into fast-food outlets and restaurants with your CV.',
          'Search Indeed, Careers24 and restaurant group career pages.',
          'Apply for food service learnerships through CATHSSETA.',
          'Keep your ID and matric certificate ready.',
        ],
        recommendedTraining: [
          'CATHSSETA food and beverage learnerships',
          'Food safety / hygiene short course',
          'Basic cooking skills',
        ],
        tips: [
          'Keep hands, uniform and surfaces clean at all times.',
          'Work quickly but carefully — kitchens are busy.',
          'Be reliable; shifts often include weekends.',
        ],
      },
    },
    {
      id: 10,
      name: 'Logistics & Warehousing (Picker / Packer / Driver\u2019s Assistant)',
      shortDescription: 'Pick and pack orders, load trucks and help deliver goods.',
      categoryEmoji: '📦',
      detail: {
        description:
          'Pickers, packers and drivers\u2019 assistants work in warehouses and on delivery trucks. They pick orders, pack boxes, load and offload goods and help drivers with deliveries. Physical and organised work in steady demand.',
        keySkills: ['Physical fitness', 'Accuracy', 'Teamwork', 'Following instructions', 'Numeracy'],
        salaryRange: 'Indicative: R4,500–R9,000/month (varies by employer and region)',
        howToGetStarted: [
          'Create a free email and a short CV.',
          'Search Indeed, Careers24 and logistics company career pages.',
          'Visit warehouses and labour brokers to ask about vacancies.',
          'Apply for logistics learnerships through the TETA (Transport SETA).',
          'Keep your ID and matric certificate ready.',
        ],
        recommendedTraining: [
          'TETA logistics and warehousing learnerships',
          'Forklift licence (a big advantage)',
          'Health and safety induction',
        ],
        tips: [
          'Be accurate when picking orders — mistakes cost money.',
          'Take care when lifting; use safe lifting techniques.',
          'Be reliable and on time; deliveries run on schedules.',
        ],
      },
    },
  ],
  af: [
    {
      id: 1,
      name: 'Kleinhandel (Winkelassistent / Kassierder)',
      shortDescription: 'Bedien kliënte, hanteer betalings en hou rakke vol in winkels en supermarkte.',
      categoryEmoji: '🛍️',
      detail: {
        description:
          'Winkelassistente en kassierders help kliënte om produkte te vind, verwerk betalings by die tol, pak rakke en hou die winkel skoon en georganiseer. Dit is \u2019n algemene intreevlak-werk vir jong mense regoor Suid-Afrika.',
        keySkills: ['Kliëntediens', 'Hanteer kontant en kaartbetalings', 'Basiese syferkennis', 'Kommunikasie', 'Netheid en stiptelikheid'],
        salaryRange: 'Aanwysend: R4,500–R7,500/maand (verskil volgens streek en werkgewer)',
        howToGetStarted: [
          'Skep \u2019n gratis e-posadres (bv. Gmail) en \u2019n eenvoudige CV.',
          'Soek vakatures op Indeed, Careers24 en PNet.',
          'Besoek winkelsentrums en vra bestuurders oor inloopvakatures.',
          'Doen aansoek vir kleinhandelleerlingskappe deur die W&RSETA.',
          'Hou jou ID en matrik-sertifikaat gereed en kleed netjies vir die onderhoud.',
        ],
        recommendedTraining: [
          'W&RSETA kleinhandelleerlingskappe of kort kursusse',
          'Basiese rekenaar / punt-van-verkope (POS) opleiding',
          'Kliëntediens kort kursus',
        ],
        tips: [
          'Wees stiptelik en netjies — eerste indrukke saak in kleinhandel.',
          'Hou kopieë van jou ID en matrik-sertifikaat gereed.',
          'Glimlag en bly geduldig met moeilike kliënte.',
        ],
      },
    },
    {
      id: 2,
      name: 'Gasvryheid (Kelner / Hotelpersoneel)',
      shortDescription: 'Bedien kos en drank, help gaste en hou restaurante of hotelle gladweg loop.',
      categoryEmoji: '🍽️',
      detail: {
        description:
          'Gasvryheidspersoneel werk in restaurante, hotelle, gastehuise en spysentering. Hulle neem bestellings, bedien kos, dek tafels, maak skoon en laat gaste welkom voel. Buigsaam ure en goed vir mensvaardighede.',
        keySkills: ['Kliëntediens', 'Spanwerk', 'Werk onder druk', 'Kommunikasie', 'Basiese voedselveiligheid'],
        salaryRange: 'Aanwysend: R4,500–R8,000/maand plus fooitjies (verskil volgens werkgewer)',
        howToGetStarted: [
          'Maak \u2019n kort CV en \u2019n gratis e-posadres.',
          'Soek op Indeed, Careers24 en hotelgroep-loopbaanbladsye.',
          'Loop in by restaurante en hotelle met jou CV en vra na vakatures.',
          'Doen aansoek vir gasvryheidsleerlingskappe deur die Services SETA of CATHSSETA.',
          'Wees gereed om naweke of aandskofte te begin.',
        ],
        recommendedTraining: [
          'CATHSSETA gasvryheidsleerlingskappe',
          'Voedselveiligheid / higiëne kort kursus',
          'Eerste hulp basiese',
        ],
        tips: [
          'Hou nael kort, hare netjies en uniform skoon.',
          'Dra kopieë van jou ID en matrik-sertifikaat.',
          'Fooitjies kan jou inkomste verhoog — bedien met \u2019n vriendelike houding.',
        ],
      },
    },
    {
      id: 3,
      name: 'IT & Hulpkantoor (Junior IT-steun)',
      shortDescription: 'Help mense met rekenaarprobleme, stel toestelle op en ondersteun gebruikers per telefoon.',
      categoryEmoji: '💻',
      detail: {
        description:
          'Junior IT-steunpersoneel help kollegas of kliënte om rekenaarprobleme op te los, installeer sagteware, stel drukkers op en beantwoord tegniese vrae. \u2019n Goeie beginpunt as jy tegnologie en probleemoplossing geniet.',
        keySkills: ['Rekenaarvaardigheid', 'Probleemoplossing', 'Geduld', 'Kommunikasie', 'Basiese netwerkwerk'],
        salaryRange: 'Aanwysend: R6,000–R12,000/maand (verskil volgens werkgewer en ervaring)',
        howToGetStarted: [
          'Bou \u2019n gratis e-posrekening en \u2019n kort CV met jou rekenaarvaardighede.',
          'Soek intreevlakrolle op Indeed, Careers24, PNet en LinkedIn.',
          'Doen aansoek vir IT-leerlingskappe deur die MICT SETA.',
          'Oefen om algemene probleme op \u2019n rekenaar by die huis of biblioteek op te los.',
          'Oorweeg \u2019n kort A+ of basiese IT-sertifikaatkursus.',
        ],
        recommendedTraining: [
          'MICT SETA IT-leerlingskappe',
          'CompTIA A+ of soortgelyke intreevlak IT-sertifikaat',
          'Gratis aanlyn kursusse (bv. Cisco Networking Academy)',
        ],
        tips: [
          'Toon geduld — die meeste van die werk is om nie-tegniese mense te help.',
          'Bly nuwe sagteware en gereedskap leer.',
          'Dokumenteer probleme en oplossings sodat jy vinniger leer.',
        ],
      },
    },
    {
      id: 4,
      name: 'Bouwerk (Algemene Werker / Ambagsassistent)',
      shortDescription: 'Help op boupersele: dra materiaal, meng sement en help bekwame ambagslui.',
      categoryEmoji: '🏗️',
      detail: {
        description:
          'Algemene bouwerkers help bouers, dra materiaal, meng sement, maak die perseel skoon en help ambagslui soos elektrisiens en loodgieters. Fisiese werk wat praktiese vaardighede ter plek leer.',
        keySkills: ['Fisiese gesiktheid', 'Volg instruksies', 'Spanwerk', 'Veiligheidsbewustheid', 'Betroubaarheid'],
        salaryRange: 'Aanwysend: R4,500–R9,000/maand (verskil volgens projek en streek)',
        howToGetStarted: [
          'Maak \u2019n CV en \u2019n gratis e-posadres.',
          'Besoek boupersele en arbeidsmakelaars om na werk te vra.',
          'Kontroleer die Departement van Indiensneming en Arbeid se werkportale.',
          'Doen aansoek vir bouleerlingskappe deur die CETA (Construction SETA).',
          'Hou jou ID gereed en dra veiligheidstewels as jy het.',
        ],
        recommendedTraining: [
          'CETA bouleerlingskappe',
          'Gesondheids- en veiligheidsinduksie (geel kaart / SAMTRAC basiese)',
          'Basiese ambagsassistent-vaardighede',
        ],
        tips: [
          'Dra altyd veiligheidstoerusting — stewels, harde hoed en baadjie.',
          'Wees betroubaar; bouwerk waardeer werkers wat elke dag opdaag.',
          'Hou jou ID en \u2019n kopie van jou matrik-sertifikaat by jou.',
        ],
      },
    },
    {
      id: 5,
      name: 'Administrasie & Kantoor (Reepsionis / Dataregistrateur)',
      shortDescription: 'Beantwoord telefone, voer data op rekenaar in en hou kantoorrekords georganiseerd.',
      categoryEmoji: '🗂️',
      detail: {
        description:
          'Reepsioniste en dataregistrateurs groete besoekers, beantwoord telefone, tik inligting in rekenaars, lê dokumente en hou die kantoor georganiseerd. Geskik vir georganiseerde en rekenaarkundige mense.',
        keySkills: ['Rekenaarvaardigheid (Word, Excel)', 'Kommunikasie', 'Organisasie', 'Telefoonmaniere', 'Nauwkeurigheid'],
        salaryRange: 'Aanwysend: R5,000–R10,000/maand (verskil volgens werkgewer)',
        howToGetStarted: [
          'Skep \u2019n gratis e-pos en \u2019n netjiese CV wat jou rekenaarvaardighede lys.',
          'Soek op Indeed, Careers24 en PNet na repsies- of datarolle.',
          'Doen aansoek vir administrasieleerlingskappe deur die Services SETA.',
          'Oefen tik en basiese Microsoft Office by \u2019n biblioteek of gemeenskapsentrum.',
          'Hou jou ID en matrik-sertifikaat vir aansoeke gereed.',
        ],
        recommendedTraining: [
          'Services SETA besigheidsadministrasieleerlingskappe',
          'Microsoft Office kort kursus',
          'Basiese tik- en datavoorbereiding',
        ],
        tips: [
          'Wees beleef en professioneel oor die telefoon — jy is die eerste kontak.',
          'Hou jou werkruimte netjies en georganiseerd.',
          'Dubblekontroleer data wat jy invoer om foute te vermy.',
        ],
      },
    },
    {
      id: 6,
      name: 'Oproepsentrum (Kliëntediensagent)',
      shortDescription: 'Beantwoord kliëntoproepe, los probleme op en verskaf inligting per telefoon.',
      categoryEmoji: '📞',
      detail: {
        description:
          'Oproepsentrumagente beantwoord kliëntoproepe, help met navrae, log klagtes en doen soms verkope oor die telefoon. Baie jong Suid-Afrikaners begin hul loopbane hier; dit bou sterk kommunikasievaardighede.',
        keySkills: ['Duidelike spraak', 'Luister', 'Probleemoplossing', 'Geduld', 'Rekenaarvaardigheid'],
        salaryRange: 'Aanwysend: R5,500–R11,000/maand (verskil volgens werkgewer en skofte)',
        howToGetStarted: [
          'Maak \u2019n gratis e-pos en \u2019n CV wat kommunikasievaardighede uitlig.',
          'Soek op Indeed, Careers24 en PNet na oproepsentrumrolle.',
          'Soek oproepsentrumleerlingskappe deur die Services SETA.',
          'Oefen om duidelik te praat en nagebootsde kliëntoproepe te hanteer.',
          'Hou jou ID en matrik-sertifikaat gereed.',
        ],
        recommendedTraining: [
          'Services SETA oproepsentrumleerlingskappe',
          'Kliëntediens kort kursus',
          'Basiese rekenaar- en tikvaardighede',
        ],
        tips: [
          'Praat duidelik en bly kalm, selfs met kwaai kliënte.',
          'Ken die maatskappy se produk of diens goed.',
          'Wees gereed om skofte te werk, insluitend aande en naweke.',
        ],
      },
    },
    {
      id: 7,
      name: 'Veiligheid (Veiligheidsbeampte)',
      shortDescription: 'Bewaak persele, beheer toegang en hou mense en eiendom veilig.',
      categoryEmoji: '🛡️',
      detail: {
        description:
          'Veiligheidsbeampte bewaak geboue, beheer wie inkom, patrollie persele en reageer op voorvalle. Die werk vereis registrasie by PSIRA en is in bestendige vraag regoor Suid-Afrika.',
        keySkills: ['Wakkerheid', 'Fisiese gesiktheid', 'Eerlikheid', 'Volg prosedures', 'Kommunikasie'],
        salaryRange: 'Aanwysend: R4,500–R8,000/maand (verskil volgens werkgewer en graad)',
        howToGetStarted: [
          'Kry \u2019n polisieklaringsertifikaat by jou naaste SAPS-stasie.',
          'Registreer en leer by \u2019n PSIRA-geakkrediteerde veiligheidsopleier.',
          'Doen aansoek by geregistreerde veiligheidsmaatskappye in jou area.',
          'Soek op Indeed, Careers24 en veiligheidsmaatskappywebwerwe.',
          'Hou jou ID, matrik-sertifikaat en PSIRA-dokumente gereed.',
        ],
        recommendedTraining: [
          'PSIRA Graad E tot C veiligheidsopleiding',
          'Eerste hulp basiese',
          'Brandbestryding / veiligheid kort kursus',
        ],
        tips: [
          'Polisieklaring word gewoonlik vereis — kry dit vroeg.',
          'Bly waaksaam en volg veiligheidsprosedures te alle tye.',
          'Wees eerlik en betroubaar; werkgewers ondersoek veiligheidspersoneel sorgvuldig.',
        ],
      },
    },
    {
      id: 8,
      name: 'Skoonheid & Haarversorging (Salonassistent)',
      shortDescription: 'Help in salons: groete kliënte, hou gereedskap skoon en ondersteun skoonheids- of haardienste.',
      categoryEmoji: '💇',
      detail: {
        description:
          'Salonassistente groete kliënte, was hare, maak gereedskap skoon, berei stasies voor en ondersteun haarkappers en skoonheidsterapeute. \u2018n Goeie weg na die skoonheidsbedryf terwyl jy ter plek leer.',
        keySkills: ['Kliëntediens', 'Higiëne', 'Hulpvaardigheid', 'Luister', 'Netheid'],
        salaryRange: 'Aanwysend: R4,000–R7,500/maand (verskil volgens salon en area)',
        howToGetStarted: [
          'Skep \u2019n gratis e-pos en \u2019n kort CV.',
          'Loop in by plaaslike salons en vra na assistentvakatures.',
          'Soek op Indeed en Careers24 na salonassistentrolle.',
          'Doen aansoek vir skoonheids- of haarleerlingskappe deur die Services SETA of CATHSSETA.',
          'Hou jou ID en matrik-sertifikaat gereed.',
        ],
        recommendedTraining: [
          'Skoonheids- of haarkappersleerlingskappe (CATHSSETA)',
          'Higiëne en sanitasie kort kursus',
          'Kliëntediens basiese',
        ],
        tips: [
          'Hou jouself en jou werkstasie skoon en netjies.',
          'Wees vriendelik en hulpvaardig met kliënte.',
          'Kyk en leer tegnieke van ervare stiliste.',
        ],
      },
    },
    {
      id: 9,
      name: 'Voedselvoorbereiding (Kombuisassistent / Vinnige Kos)',
      shortDescription: 'Help in kombuise: berei bestanddele voor, hou areas skoon en help kokke.',
      categoryEmoji: '🍳',
      detail: {
        description:
          'Kombuisassistente en vinnigekos-personeel berei bestanddele voor, kook eenvoudige items, maak die kombuis skoon en help sjefs. \u2018n Algemene eerste werk in restaurante en vinnigekoskettings, met buigsaam ure.',
        keySkills: ['Werk onder druk', 'Higiëne', 'Spanwerk', 'Volg resepte', 'Spoed'],
        salaryRange: 'Aanwysend: R4,000–R7,000/maand (verskil volgens werkgewer)',
        howToGetStarted: [
          'Maak \u2019n gratis e-pos en \u2019n kort CV.',
          'Loop in by vinnigekoswinkels en restaurante met jou CV.',
          'Soek op Indeed, Careers24 en restaurantgroep-loopbaanbladsye.',
          'Doen aansoek vir voedseldiensleerlingskappe deur CATHSSETA.',
          'Hou jou ID en matrik-sertifikaat gereed.',
        ],
        recommendedTraining: [
          'CATHSSETA voedsel- en drankleerlingskappe',
          'Voedselveiligheid / higiëne kort kursus',
          'Basiese kookvaardighede',
        ],
        tips: [
          'Hou hande, uniform en oppervlakke te alle tye skoon.',
          'Werk vinnig maar versigtig — kombuise is besig.',
          'Wees betroubaar; skofte sluit dikwels naweke in.',
        ],
      },
    },
    {
      id: 10,
      name: 'Logistiek & Pakhuis (Plukker / Pakker / Bestuurder se Assistent)',
      shortDescription: 'Pluk en pak bestellings, laai vragmotors en help met aflewering.',
      categoryEmoji: '📦',
      detail: {
        description:
          'Plukkers, pakkers en bestuurders se assistente werk in pakhuise en op afleweringsvragmotors. Hulle pluk bestellings, pak bokse, laai en aflaai goedere en help bestuurders met aflewering. Fisiese en georganiseerde werk in bestendige vraag.',
        keySkills: ['Fisiese gesiktheid', 'Nauwkeurigheid', 'Spanwerk', 'Volg instruksies', 'Syferkennis'],
        salaryRange: 'Aanwysend: R4,500–R9,000/maand (verskil volgens werkgewer en streek)',
        howToGetStarted: [
          'Skep \u2019n gratis e-pos en \u2019n kort CV.',
          'Soek op Indeed, Careers24 en logistiekmaatskappy-loopbaanbladsye.',
          'Besoek pakhuise en arbeidsmakelaars om na vakatures te vra.',
          'Doen aansoek vir logistieke leerlingskappe deur die TETA (Transport SETA).',
          'Hou jou ID en matrik-sertifikaat gereed.',
        ],
        recommendedTraining: [
          'TETA logistiek- en pakhuisleerlingskappe',
          'Vurkhyserlisensie (\u2018n groot voordeel)',
          'Gesondheids- en veiligheidsinduksie',
        ],
        tips: [
          'Wees akkuraat wanneer jy bestellings pluk — foute kos geld.',
          'Wees versigtig met lig; gebruik veilige ligtegnieke.',
          'Wees betroubaar en betyds; aflewering loop volgens skedule.',
        ],
      },
    },
  ],
  zu: [
    {
      id: 1,
      name: 'Ukuthengisa (Umsekeli Wesitolo / Umcashi)',
      shortDescription: 'Phatha abathengi, phonela izinkokhelo futhi ugcine izitolo zigcwele.',
      categoryEmoji: '🛍️',
      detail: {
        description:
          'Abasekeli besitolo nabadwebi baphatha abathengi ukuthola imikhiqizo, benza izinkokhelo esitolo, bahlizelela izitolo baphinde bagcine isitolo sicoce kanye nehleliwe. Kuyimisebenzi yasezingeni elingemuva kubantu abasha bonke eNingizimu Afrika.',
        keySkills: ['Inkonzo yabathengi', 'Ukuphatha imali namakhadi', 'Ukubala okuyisiseko', 'Ukuxhumana', 'Ukucocekile nokuhamba ngesikhathi'],
        salaryRange: 'Itholakala njengesibonelo: R4,500–R7,500/ngenyanga (ishintsha ngendawo nomqashi)',
        howToGetStarted: [
          'Yakha ikheli le-imeyili mahhala (isb. Gmail) ne-CV elula.',
          'Sesula izikhala ku-Indeed, Careers24 kanye ne-PNet.',
          'Vakashela izinkomba zokuthengisa ubuze abaphathi besitolo ngezikhala.',
          'Faka isicelo sezinhlelo zokufunda ngokuthengisa ku-W&RSETA.',
          'Zinikele i-ID yakho nesitifikhathi sematrik, ugcotshwe kahle ukuhlolwa.',
        ],
        recommendedTraining: [
          'Izinhlelo zokufunda zokuthengisa ze-W&RSETA noma izifundo ezifushane',
          'Ukuzifundisa ngokusebenzisa ikhompyutha / isistimu yokuthengisa (POS)',
          'Isifundo esifushane sezenkonzo zabathengi',
        ],
        tips: [
          'Hamba ngesikhathi futhi ugcotshwe kahle - iziphoqo zokuqala zibalulekile ukuthengiseni.',
          'Gcina amakhophi e-ID yakho nesitifikhathi sematrik siseduze.',
          'Hleka futhi uhlale uzwile nalaba abathengi abanzima.',
        ],
      },
    },
    {
      id: 2,
      name: 'Izokwamukela Izivakashi (Osebenza Kudlada / Ohhotela)',
      shortDescription: 'Phatha ukudla neziphuzo, siza izivakashi futhi ugcine izindawo zokudla zisebenza kahle.',
      categoryEmoji: '🍽️',
      detail: {
        description:
          'Abasebenzi bezokwamukela izivakashi basebenza kumahhotela, izindawo zokudla, amagumbi okwamukela nezokupheka. Bathola izinhlelo, baphathe ukudla, balungise izitafula, bacoce baphinde bamukele izivakashi ngobungcweti. Amahora aguquguqukayo futhi ahle abakha izindlela zokuxhumana.',
        keySkills: ['Inkonzo yabathengi', 'Ukusebenza njengohlelo', 'Ukusebenza ngaphansi kocingo', 'Ukuxhumana', 'Ukuphepha kokudla okuyisiseko'],
        salaryRange: 'Itholakala njengesibonelo: R4,500–R8,000/ngenyanga futhi namatiphu (ishintsha ngomqashi)',
        howToGetStarted: [
          'Lungisa i-CV emfushane noma ikheli le-imeyili elingekho hhadi.',
          'Sesula ku-Indeed, Careers24 nakumaphepha omsebenzi wamahhotela.',
          'Ngena ezindaweni zokudla nahhotela ne-CV yakho ubuze izikhala.',
          'Faka izicelo zokufunda ngokwamukela izivakashi ku-Services SETA noma i-CATHSSETA.',
          'Zibekise ukuthi uqale ngebasonto noma ebosuku izikhathi.',
        ],
        recommendedTraining: [
          'Izinhlelo zokufunda zokwamukela izivakashi ze-CATHSSETA',
          'Isifundo sokuphepha kokudla / ukugcinwa kococe',
          'Izisekelo zokuphatha okwesikhathi',
        ],
        tips: [
          'Gcina izinzipho ezifushane, inwele ezicocekile nengubo ecocekile.',
          'Phatha amakhophi e-ID yakho nesitifikhathi sematrik.',
          'Amatiphu engase engeze inzuzo - phatha ngemoya elihle.',
        ],
      },
    },
    {
      id: 3,
      name: 'I-IT & Ideski Loso (Ukusekelwa I-IT Esisekelo)',
      shortDescription: 'Siza abantu ezinkingeni zekhompyutha, lungiselela izisetshenziswa futhi usekele abasebenzisi ngocingo.',
      categoryEmoji: '💻',
      detail: {
        description:
          'Abasekelwa be-IT abasese leveli ephansi basiza abasebenzi noma abathengi ukulungisa izinkinga zekhompyutha, ukufaka izinhlelo, ukumisa iziprinta nokuphendula imibuzo yobuchwepheshe. Kuqala okuhle uma uthanda ubuchwepheshe nokuxazulula izinkinga.',
        keySkills: ['Ukuzazi ngekhompyutha', 'Ukuxazulula izinkinga', 'Ukubekezela', 'Ukuxhumana', 'Ukuxhumeka okuyisiseko'],
        salaryRange: 'Itholakala njengesibonelo: R6,000–R12,000/ngenyanga (ishintsha ngomqashi namava)',
        howToGetStarted: [
          'Yakha iakhawunti yameyili engenamali nokuthula i-CV elandela izikhono zekhompyutha.',
          'Sesula izikhala esele kuseleveli ephansi kwi-Indeed, Careers24, PNet kwi-LinkedIn.',
          'Faka izicelo zokufunda nge-IT ku-MICT SETA.',
          'Zifunde ukulungisa izinkinga ezijwayelekile ekhompyutheni ekhaya noma esitokisini.',
          'Cabanga ngemfundo esifushane ye-A+ noma isitifikedi se-IT esisekelo.',
        ],
        recommendedTraining: [
          'Izinhlelo zokufunda nge-IT ze-MICT SETA',
          'I-CompTIA A+ noma isitifikedi se-IT esingangenyanga ephansi',
          'Izifundo zangasese eku-inthanethi (isb. i-Cisco Networking Academy)',
        ],
        tips: [
          'Khombisa ukubekezela - imisebenzi yona iphendula ngokwenzela ukusiza abantu abanobuchwepheshe abangenalo.',
          'Qhubeke ufunde ngohlelo olusha namathuluzi.',
          'Bhala izinkinga nokuxazululwa ukuze ufinyelele ngokushesha.',
        ],
      },
    },
    {
      id: 4,
      name: 'Ukwakha (Umsebenzi Jikelele / Osekela Abakhi)',
      shortDescription: 'Siza emigidingweni yokwakha: phatha izinto, hlanganisa isamente usesekele abakhi.',
      categoryEmoji: '🏗️',
      detail: {
        description:
          'Abasebenzi jikelele bokwakha basekela abakhi, baphatha izinto, bahlanganisa isamente, bacoce indawo yokwakha baphinde basekele abakhi njengekhashi nama-dada. Umsebenzi womzimba ofundisa izikhono ezibonwayo ngaleso sikhashana.',
        keySkills: ['Ukuvuka komzimba', 'Ukulandela imiyalo', 'Ukusebenza njengohlelo', 'Ukuqaphela ukuphepha', 'Ukuthembeka'],
        salaryRange: 'Itholakala njengesibonelo: R4,500–R9,000/ngenyanga (ishintsha ngaphrojekthi nendawo)',
        howToGetStarted: [
          'Yakha i-CV nekeli le-imeyili engenamali.',
          'Vakashela izindawo zokwakha nabahlinzeki babasebenzi ubuze umsebenzi.',
          'Buka imibhalo yamatholakala osebenza kuSebenzi Loqashiwe Namadoda.',
          'Faka izicelo zokufunda ngokwakha ku-CETA (Construction SETA).',
          'Phatha i-ID yakho futhi uguqe izicathulo zokuphepha uma zikhona.',
        ],
        recommendedTraining: [
          'Izinhlelo zokufunda ngokwakha ze-CETA',
          'Isikhathi sokuqalisa kwempilo nokuphepha (ikhadi eliluhlaza / i-SAMTRAC isisekelo)',
          'Izikhono zokusekela abakhi',
        ],
        tips: [
          'Hlala uguqe izimpahla zokuphepha - izicathulo, isigqoko nokuki.',
          'Hlala uthembeka; ukwakha kubiza abasebenzi ababonakala nsuku zonke.',
          'Gcina i-ID yakho kanye namakhophi esitifikhathi sematrik.',
        ],
      },
    },
    {
      id: 5,
      name: 'Ukuqasha Nohlelo (Umamukeli / Umbhalisi Khompyutha)',
      shortDescription: 'Phendla ocingo, faka ulwazi eku-inthanethi ugcine amaphedi ahleliwe.',
      categoryEmoji: '🗂️',
      detail: {
        description:
          'Abamukeli nababhali ngokuhlanganisa baphatha ukungenwa kwesivakashi, baphendla ocingo, bafake ulwazi ekhompyutheni, bahlele imibhalo bagcine isikhungo sihleliwe. Hle kubantu abahleliwe nabazazi ngekhompyutha.',
        keySkills: ['Ukuzazi ngekhompyutha (Word, Excel)', 'Ukuxhumana', 'Ukuhlela', 'Izindlela zocingo', 'Ukuqinisekiswa'],
        salaryRange: 'Itholakala njengesibonelo: R5,000–R10,000/ngenyanga (ishintsha ngomqashi)',
        howToGetStarted: [
          'Yakha ikheli le-imeyili engenamali ne-CV ehle ethole iziphathwa zakho zekhompyutha.',
          'Sesula ku-Indeed, Careers24 no-PNet uthole izikhala sokubhalisa noma ukubala idatha.',
          'Faka izicelo zokufunda ngokuphatha i-ofisi kuphatha ibhizinisi.',
          'Zifunde ukuqamba nokusebenzisa i-MS Office esitokisini nomziko wendawo.',
          'Phatha i-ID yakho nesitifikhathi sematrik zokwenza izicelo.',
        ],
        recommendedTraining: [
          'Izinhlelo zokufunda zokuqasha ibhizinisi ze-Services SETA',
          'Isifundo esifushane se-Microsoft Office',
          'Ukuqamba nokufaka idatha',
        ],
        tips: [
          'Hlalelana ungemtshele ocingo - ungukuthi ungumuntu wokuqala.',
          'Gcina isikhala sakho sekhompyutha sicocekile futhi hleliwe.',
          'Hlola idatha kabili ukuthi ibalulekile nokuyifaka.',
        ],
      },
    },
    {
      id: 6,
      name: 'Ikhaya Lezingcingo (Umsebenzi Wokukhuluma Nabathengi)',
      shortDescription: 'Phendula ocingo, uxazulule izinkinga futhi unike ulwazi ngesikhathi sakho.',
      categoryEmoji: '📞',
      detail: {
        description:
          'Abasebenzi bokukhuluma baziphandla ocingo, basiza ngemibuzo, balo cococingo izikhathi, ngaphesheya kwama-Web futhi bathengise ngephone. Abantu abaningi abasha base-Ningizimu Afrika bayaqala imisebenzi yabo lapha, baphinde baphume izindlela zokuxhumana ezinamandla.',
        keySkills: ['Ukulanda kwamazwi', 'Ukulalela', 'Ukuxazulula izinkinga', 'Ukubekezela', 'Ukuzazi ngekhompyutha'],
        salaryRange: 'Itholakala njengesibonelo: R5,500–R11,000/ngenyanga (ishintsha ngomqashi nezikhathi)',
        howToGetStarted: [
          'Yenza i-imeyili engenamali ne-CV egqamisa izindlela zokuxhumana.',
          'Sesula ku-Indeed, Careers24 no-PNet uthole izikhala sekhaya lezingcingo.',
          'Sesula izinhlelo zokufunda ze-Services SETA.',
          'Zifunde ukukhuluma ngokusobala nokuphatha abathengi.',
          'Gcina i-ID yakho nesitifikhathi sematrik',
        ],
        recommendedTraining: [
          'Izinhlelo zokufunda zokukhuluma ezindlini ze-Services SETA',
          'Isifundo esifushane sezenkonzo zabathengi',
          'Ukusebenzisa ikhompyutha nokubamba',
        ],
        tips: [
          'Khuluma ngokusobala futhi uhlale uzwile, nakuba bakhulume ngokungalali.',
          'Funda umkhiqizo ohlezi ngokusebenzisa izindlela zakho.',
          'Zibekise ekusebenzeni ngesikhathi ukuhamba ngebusuku nangomhlange.',
        ],
      },
    },
    {
      id: 7,
      name: 'Ukuqapha Nokuphepha (Umkhaphi Wokuphepha)',
      shortDescription: 'Qapha izindawo, lawula ukungena futhi ugcine abantu nezinto zibe zikhaya.',
      categoryEmoji: '🛡️',
      detail: {
        description:
          'Abaqaphi bokuphepha baqapha izakhiwo, balawula ukuthi ngubani ongena, bazingela izindawo baphendule izenzo ezingalungile. Umsebenzi udinga ukubhalisa kwi-PSIRA futhi uthandwa kakhulu eNingizimu Afrika.',
        keySkills: ['Ukuqapha', 'Ukuvuka komzimba', 'Ukuqotho', 'Ukulandela izinqubo', 'Ukuxhumana'],
        salaryRange: 'Itholakala njengesibonelo: R4,500–R8,000/ngenyanga (ishintsha ngomqashi namanani)',
        howToGetStarted: [
          'Thola isitifikedi sokucaciswa ngamaphoyisa esiteshini sakho SAPS saseduze.',
          'Bhalisa futhi uzenze isikolo nge-PSIRA esithunywe ngempilo yokuphepha.',
          'Faka izicelo kumakhomphani abhalisile ukuphepha endaweni yakho.',
          'Sesula ku-Indeed, Careers24 nakumaphepha wekhomphani yokuphepha.',
          'Phatha i-ID yakho, isitifikhathi sematrik namadokhumenti we-PSIRA.',
        ],
        recommendedTraining: [
          'Ukuzifundisa ukuphepha kwe-PSIRA Isigaba E kuya ku-C',
          'Izisekelo zokuphatha okwesikhathi',
          'Ukusula mlilo / isifundo esifushane sokuphepha',
        ],
        tips: [
          'Isitifikedi sokucaciswa ngamaphoyisa sidingeka - sithole kusenesikhathi.',
          'Hlala uqaphile futhi ulandele izinqubo zokuphepha noma kunini.',
          'Hlala uqotho futhi uthembekile; abaqashi bahlolela abaqaphi ngokuqhubekisana.',
        ],
      },
    },
    {
      id: 8,
      name: 'Ubuhle Namagqiza (Umsekelwa Salon)',
      shortDescription: 'Siza emasalini: phatha izivakashi, gcine izinto zicocekile futhi usekele izinkonzo zobuhle.',
      categoryEmoji: '💇',
      detail: {
        description:
          'Abasekeli be-Salon bamukele izivakashi, hlanzisa inwele, coce izinto, lungise iziteshi besekele ochwepheshe bobuhle. Indlela ehlakaniphile yokungena emhlabeni wobuhle ngenkathi ufunda ngokusebenza.',
        keySkills: ['Inkonzo yabathengi', 'Ukuhlanza', 'Ukusiza', 'Ukulalela', 'Ukucocekile'],
        salaryRange: 'Itholakala njengesibonelo: R4,000–R7,500/ngenyanga (ishintsha ngesalon nendawo)',
        howToGetStarted: [
          'Yakha ikheli le-imeyili engenamali ne-CV emfushane.',
          'Ngena emasalini endawo yakho ubuze izikhala zokusekela.',
          'Sesula ku-Indeed nakwi-Careers24 uthole izikhala zokusekela isalon.',
          'Faka izicelo zokufunda ngobuhle noma ukwenza inwele kwi-CATHSSETA.',
          'Gcina i-ID yakho nesitifikhathi sematrik siseduze.',
        ],
        recommendedTraining: [
          'Izinhlelo zokufunda zobuhle noma ukwenza inwele (CATHSSETA)',
          'Isifundo sokuhlanza nokuhlanzisa',
          'Izisekelo zezenkonzo zabathengi',
        ],
        tips: [
          'Gcina indawo yakho yasekhaya ngegciwane.',
          'Hlala uhle futhi usize abathengi.',
          'Buka futhi ufundise izindlela ochwepheshe abanazo.',
        ],
      },
    },
    {
      id: 9,
      name: 'Ukulungisa Ukudla (Umsekelwa Khusini / Ukudla Okusheshayo)',
      shortDescription: 'Siza emakhunzini: lukhiqize izinsiza, gcine izindawo zicocekile futhi usekele abapheki.',
      categoryEmoji: '🍳',
      detail: {
        description:
          'Abasekeli bahluza futhi basebenze ngokudla okusheshayo, balungise izinsiza, bacoce ukudla besekele abapheki. Umsebenzi wokuqala ovamile emahhotela nasemafekethri okudla okusheshayo, futhi amahora aguquguqukayo.',
        keySkills: ['Ukusebenza ngaphansi kocingo', 'Ukuhlanza', 'Ukusebenza njengohlelo', 'Ukulandela imiyalo yokupheka', 'Ukushesha'],
        salaryRange: 'Itholakala njengesibonelo: R4,000–R7,000/ngenyanga (ishintsha ngomqashi)',
        howToGetStarted: [
          'Yakha ikheli le-imeyili engenamali ne-CV emfushane.',
          'Ngena emafekethri okudla okusheshayo nasendaweni zokudla ubuze umsebenzi.',
          'Sesula ku-Indeed, Careers24 nakumaphepha omsebenzi wohhotela.',
          'Faka izicelo zokufunda ngezokudla kwi-CATHSSETA.',
          'Gcina i-ID yakho nesitifikhathi sematrik siseduze.',
        ],
        recommendedTraining: [
          'Izinhlelo zokufunda zokudla kwi-CATHSSETA',
          'Isifundo esifushane sokuphepha kokudla',
          'Izindlela zokupheka ezisekelo',
        ],
        tips: [
          'Hlala ucoce izandla, ingubo nezindawo zokubamba.',
          'Sebenza ngokushesha kodwa ngokuqaphela - amakhishi makhulu.',
          'Hlala uthembeka; amasonto abalulekile emhlabeni wokudla.',
        ],
      },
    },
    {
      id: 10,
      name: 'Izokuthutha Namaphakhi (Umkhethi / Uphakhi / Umsekeli Womshayeli)',
      shortDescription: 'Khetha futhi uphakhe imiyalo, layisha amalori futhi usize ekulethweni kwemikhiqizo.',
      categoryEmoji: '📦',
      detail: {
        description:
          'Abasekeli abakhetha ngemiyalo basebenza emaphakhi nasemalori. Bakhetha imiyalo, baphakhe amabhokisi, balayishe futhi bakhulelule izimpahla futhi basekele abashayeli ngokulethwa kwemikhiqizo. Umsebenzi wokuqhuba ohleliwe futhi othandwa.',
        keySkills: ['Ukuvuka komzimba', 'Ukuqinisekiswa', 'Ukusebenza njengohlelo', 'Ukulandela imiyalo', 'Ukubala'],
        salaryRange: 'Itholakala njengesibonelo: R4,500–R9,000/ngenyanga (ishintsha ngomqashi nendawo)',
        howToGetStarted: [
          'Yakha ikheli le-imeyili engenamali ne-CV emfushane.',
          'Sesula ku-Indeed, Careers24 namaphepha omsebenzi wamakhomphani okuthutha.',
          'Vakashela emaphakhi nabahlinzeki bayo babantu abaqashiwe, ubuze umsebenzi.',
          'Faka izicelo zokufunda ngokuthutha kwi-TETA.',
          'Gcina i-ID yakho nesitifikhathi sematrik siseduze.',
        ],
        recommendedTraining: [
          'Izinhlelo zokufunda ngokuthutha nokupakha kwi-TETA',
          'Ilayisense lefuthi (liluncelo elikhulu)',
          'Isikhathi sokuqalisa kwempilo nokuphepha',
        ],
        tips: [
          'Qiniseka ukuthi ulungele ukukhetha - amaphutha adinga imali.',
          'Qaphela uma ulayisha; sebenzisa izindlela ezibusayo.',
          'Hlala uthembeka futhi uhamba ngesikhathi; ukulethwa kuhamba ngokuhlela.',
        ],
      },
    },
  ],
  xh: [
    {
      id: 1,
      name: 'Ukuqeshiswa kwezithengi (Umncedi wesixhobo / Umqeshi)',
      shortDescription: 'Phatha abathengi, qhatha imali uze ugqibe izithobo ezizaliswe kwisitolo.',
      categoryEmoji: '🛍️',
      detail: {
        description:
          'Abancedi besitolo abathengisa bathatha abathengi ukufumana iimveliso, bahlawula imali kwibhoda, balayishe izitolo bagcine isitolo sicocekile nesicwangcisiweyo. Sisasebenzo esiqhelekileyo kubantu abatsha kulo onke amazwe eMzantsi Afrika.',
        keySkills: ['Inkonzo yabathengi', 'Ukuqhatha imali namakhadi', 'Ukubala okusiseko', 'Unxibelelwano', 'Ukucoca nokungaphukeli ixesha'],
        salaryRange: 'Ibonakalisa: R4,500–R7,500/ngenyanga (itshintsha ngengingqi nongqeshi)',
        howToGetStarted: [
          'Yakha idilesi ye-imeyile yasimahla (umz. Gmail) ngeCV elula.',
          'Khangela iindawo zomsebenzi kwi-Indeed, Careers24 nakwi-PNet.',
          'Tyelela iindawo zokuthenga uze ubuze abaphathi besitolo ngeendawo ezingenanto.',
          'Faka izicelo zokufunda ngokuthengisa kwi-W&RSETA.',
          'Zibeke i-ID yakho nesatifikethi samatirik, ugcobile kakuhle ukuvavanywa.',
        ],
        recommendedTraining: [
          'Iinkqubo zokufunda zokuthengisa ze-W&RSETA okanye izifundo ezimfutshane',
          'Uqeqesho lobuchwephesha bekhompyutha / inkqubo yokuthengisa (POS)',
          'Isifundo esimfutshane sezenkonzo zabathengi',
        ],
        tips: [
          'Qhubeke ngesikhathi uze ugcobile kakuhle - into yokuqala ibalulekile kuthengiso.',
          'Phatha ikopi ye-ID yakho nesatifikethi samatirik eseduzane.',
          'Ncumisa uze uhlale uva kwabathengi abanzima.',
        ],
      },
    },
    {
      id: 2,
      name: 'Izokwamkela iindwendwe (Umncedi wakwindlu yamadala / Abasebenzi behotela)',
      shortDescription: 'Phatha ukutya kunye neziselo, nceda iindwendwe uze ugqibe izindawo zokutyela ziphela kakuhle.',
      categoryEmoji: '🍽️',
      detail: {
        description:
          'Abasebenzi bezokwamkela iindwendwe basebenza kwindawo zokutya, amahotela, iindawo zokwamkela iindwendwe nakwiindawo zokubhiyaza. Bathatha iiodolo, bathengisa ukutya, balungelelanisa iitafile, bacoce baze bamkele iindwendwe ngobuvuyo. Amahora alungelelanisekayo alungile ekwakheni izakhono zokuziphatha.',
        keySkills: ['Inkonzo yabathengi', 'Urholo lwexesha', 'Ukusebenza ngaphantsi koxinzelelo', 'Unxibelelwano', 'Ukukhuseleka kokutya okusiseko'],
        salaryRange: 'Ibonakalisa: R4,500–R8,000/ngenyanga ngeentiPS (itshintsha ngongqeshi)',
        howToGetStarted: [
          'Yenza iCV emfutshane nantobuzana ye-imeyile yasimahla.',
          'Khangela ku-Indeed, Careers24 nakumaphepha omsebenzi wohotela.',
          'Ngena kwizindawo zokutya nahotela neCV yakho uze ubuze iindawo ezizele.',
          'Faka izicelo zokufunda ngeendwendwe kwi-Services SETA okanye i-CATHSSETA.',
          'Zibeke ukuze uqale ngamasonto okuhla okanye ituresi zasakhaya.',
        ],
        recommendedTraining: [
          'Iinkqubo zokufunda ngeendwendwe ze-CATHSSETA',
          'Isifundo sokukhuseleka kokutya / ukucocekile',
          'Iziseko zokuncedisa',
        ],
        tips: [
          'Gcina izikhumba zamathumba zingaphakathi, inwele zicocekile kunye neyunifomu ecocekile.',
          'Phatha iikopi ze-ID yakho nesatifikethi samatirik.',
          'Iintips zinokongeza inzuzo kwimali yakho - phatha ngokuzola.',
        ],
      },
    },
    {
      id: 3,
      name: 'I-IT & Itheyibhile yoNcedo (Uqeqesho lwe-IT lokwenza)',
      shortDescription: 'Nceda abantu kwiingxaki zekhompyutha, misa izixhobo uze uncedise abasebenzisi ngefowuni.',
      categoryEmoji: '💻',
      detail: {
        description:
          'Abasebenzi be-IT abangumgangatho osezantsi banceda abasebenzi okanye abathengi ukulungisa iingxaki zekhompyutha, bafake isoftware, bamise iiprinta baze baphendule iimbuzo yobuchwepheshe. Sizingqi esilungileyo ukuba uthanda ubuchwepheshe nokusombulula iingxaki.',
        keySkills: ['Ukulwazi ngokusebenza ngekhompyutha', 'Ukusombulula iingxaki', 'Ukuzinikela', 'Unxibelelwano', 'Unxulumano olusiseko'],
        salaryRange: 'Ibonakalisa: R6,000–R12,000/ngenyanga (itshintsha ngongqeshi namava)',
        howToGetStarted: [
          'Yakha iakhawunti ye-imeyile yasimahla nantobuzana iCV echaza izakhono zekhompyutha.',
          'Khangela iindawo zomsebenzi kwi-Indeed, Careers24, PNet nakwi-LinkedIn.',
          'Faka izicelo zokufunda nge-IT kwi-MICT SETA.',
          'Ziqeqheshe ukulungisa iingxaki eziphambanleyo kwikhompyutha ekhaya okanye kwibhulawu.',
          'Qwalasela isifundo esimfutshane se-A+ okanye isatifikethi se-IT esiseko.',
        ],
        recommendedTraining: [
          'Iinkqubo zokufunda nge-IT ze-MICT SETA',
          'I-CompTIA A+ okanye eseyezona nqanaba elingentla isatifikethi se-IT',
          'Izifundo zasimahla kwi-intanethi (umz. i-Cisco Networking Academy)',
        ],
        tips: [
          'Bonakalisa ukuzinikela - ininzi yomsebenzi kukunceda abantu abangenalo ulwazi lobuchwepheshe.',
          'Qhubeke ufunda isoftware amatyala amatsha.',
          'Bhala iingxaki kunye nezisombululo ukuze ufunde ngokukhawuleza.',
        ],
      },
    },
    {
      id: 4,
      name: 'Ukwakha (Umsebenzi ojikelele / Umncedi wemisebenzi)',
      shortDescription: 'Nceda kwindawo zokwakha: qhuba izinto, xuba isamente uze uncede abakhi.',
      categoryEmoji: '🏗️',
      detail: {
        description:
          'Abasebenzi jikelele bokwakha banceda abakhi, beqhatha izinto, baxuba isamente, bacoce indawo yokwakha baze bancede abakhi abanjengabakhi basemagqumeni naba lwendlo. Umsebenzi womzimba ofundisa izakhono ngomsebenzi ophilayo.',
        keySkills: ['Ukuqina komzimba', 'Ukulandela imiyalelo', 'Urholo lwexesha', 'Ukuqaphela ukhuseleko', 'Ukuthembeka'],
        salaryRange: 'Ibonakalisa: R4,500–R9,000/ngenyanga (itshintsha ngophulo nengingqi)',
        howToGetStarted: [
          'Yenza iCV nentobuzana ye-imeyile yasimahla.',
          'Tyelela izindawo zokwakha kunye nababhali abaqashiweyo uze ubuze umsebenzi.',
          'Khangela iinkqubo zomsebenzi kwisebe loQasho kunye noBasebenzi.',
          'Faka izicelo zokufunda ngokwakha kwi-CETA (Construction SETA).',
          'Zibeke i-ID yakho uze ugqoke izicathulo zokhuseleko ukuba zikho.',
        ],
        recommendedTraining: [
          'Iinkqubo zokufunda ngokwakha ze-CETA',
          'Isikhathi sokuqalisa ngokhuseleko neempilo (ikhadi eliluhlaza / i-SAMTRAC isiseko)',
          'Izakhono zokunceda abakhi',
        ],
        tips: [
          'Qhuba uqinisekile ngokugqoka izixhobo zokhuseleko - izicathulo, isiqhala kunye nekhaka.',
          'Qhubeke uthembeka; ukwakha kubeka abo bavela yonke imihla.',
          'Gcina i-ID yakho kunye nekopi yesatifikethi samatirik eseduzane.',
        ],
      },
    },
    {
      id: 5,
      name: 'Uqasho nokulungiselela (Umamkeli / Umgqibi wedatha)',
      shortDescription: 'Phendula iifowuni, faka idatha kwikhompyutha uze ugqibe amagumbi ahleliwe.',
      categoryEmoji: '🗂️',
      detail: {
        description:
          'Abamkeli abagqiba idatha bamkela iindwendwe, baphendula iifowuni, bathayipha ulwazi kwikhompyutha, balungelelanisa amaxwebhu bagcine igumbi lihleliwe. Kulungile kubantu abalungelelanisiweyo abalwazi ngokusebenzisa ikhompyutha.',
        keySkills: ['Ukulwazi ngokusebenza ngekhompyutha (Word, Excel)', 'Unxibelelwano', 'Ukulungelelanisa', 'Iindlela zefowuni', 'Ukuchanekile'],
        salaryRange: 'Ibonakalisa: R5,000–R10,000/ngenyanga (itshintsha ngongqeshi)',
        howToGetStarted: [
          'Yakha idilesi ye-imeyile yasimahla nentobuzana iCV echaza izakhono zekhompyutha.',
          'Khangela ku-Indeed, Careers24 nakwi-PNet iindawo zabamkeli okanye abagqibi idatha.',
          'Faka izicelo zokufunda ngokulawula i-ofisi kwi-Services SETA.',
          'Ziqeqheshe ukuthayipha nokuqamba nge-MS Office kwibhulawu okanye kwindawo yoluntu.',
          'Zibeke i-ID yakho nesatifikethi samatirik.',
        ],
        recommendedTraining: [
          'Iinkqubo zokufunda ngokulawula ibhizinisi ze-Services SETA',
          'Isifundo esimfutshane se-Microsoft Office',
          'Ukuthayipha nokuphatha idatha',
        ],
        tips: [
          'Qhuba unobuthathu okanye usemthethweni kwifowuni - ngumntu wokuqala ongxulumana naye.',
          'Gcina indawo yakho yomsebenzi icocekile ihleliwe.',
          'Qinisekisa idatha ongayifaka kabini ukuze ungaphazamisi.',
        ],
      },
    },
    {
      id: 6,
      name: 'Indlu yamafowuni (Umsebenzi wezenkonzo zabathengi)',
      shortDescription: 'Phendula amafowuni, sombulula iingxaki uze unike ulwazi ngefowuni.',
      categoryEmoji: '📞',
      detail: {
        description:
          'Abasebenzi bendlu yamafowuni baphendula amafowuni, banceda ngeemibuzo, balayisha iingxaki baze bengaze bathengise ngomnxeba. Ininzi yabantu abatsha baseMzantsi Afrika iqaqamba apha; isakha izakhono ezomeleleyo zonxibelelwano.',
        keySkills: ['Ukuthetha ngokusobala', 'Ukuvakalelwa', 'Ukusombulula iingxaki', 'Ukuzinikela', 'Ukulwazi ngekhompyutha'],
        salaryRange: 'Ibonakalisa: R5,500–R11,000/ngenyanga (itshintsha ngongqeshi namaxesha)',
        howToGetStarted: [
          'Yakha i-imeyile yasimahla nentobuzana iCV egqamisa izakhono zonxibelelwano.',
          'Khangela iindawo zomsebenzi kwi-Indeed, Careers24 nakwi-PNet.',
          'Khangela iinkqubo zokufunda ngeendawo zamafowuni kwi-Services SETA.',
          'Ziqeqheshe ukuthetha ngokusobala nokuphatha abathengi abalinganisiweyo.',
          'Gcina i-ID yakho nesatifikethi samatirik eseduzane.',
        ],
        recommendedTraining: [
          'Iinkqubo zokufunda zendlu yamafowuni ze-Services SETA',
          'Isifundo esimfutshane sezenkonzo zabathengi',
          'Ukusebenza ngekhompyutha nokuthayipha',
        ],
        tips: [
          'Thetha ngokusobala uze uhlale uzola nakubathengi ababuhungileyo.',
          'Funda ngokukhulu ukusetyenziswa komthengiso wakho.',
          'Zibeke ukuze usebenze ngamaxesha kuquka iintsuku zekusi namaxesha asakhaya.',
        ],
      },
    },
    {
      id: 7,
      name: 'Ukhuseleko (Umphathi wokhuseleko)',
      shortDescription: 'Qhatha iindawo, lawula ukungena uze ugqibe abantu kunye nezinto zikhuselekile.',
      categoryEmoji: '🛡️',
      detail: {
        description:
          'Abaqaphi bokhuseleko baqapha iindlu, balawula abo bangena, bazingela iindawo baze baphendule iindawo ezingalunganga. Umsebenzi ufunyaniswe ukubhalisa kwi-PSIRA ufuna kakhulu kuwo onke amazwe eMzantsi Afrika.',
        keySkills: ['Ukuqaphela', 'Ukuqina komzimba', 'Ukuziphatha kakuhle', 'Ukulandela iinkqubo', 'Unxibelelwano'],
        salaryRange: 'Ibonakalisa: R4,500–R8,000/ngenyanga (itshintsha ngongqeshi namanani)',
        howToGetStarted: [
          'Fumana isatifikethi sokucaciswa ngamapolisa kwisikhululo sakho SAPS saseduzane.',
          'Bhalisa uqeqhwe ngumthengisi we-PSIRA wokhuseleko oqinisekisiweyo.',
          'Faka izicelo kwikhomphani zokhuseleko ezibhalisiweyo kwindawo yakho.',
          'Khangela ku-Indeed, Careers24 nakumaphepha wekhomphani zokhuseleko.',
          'Gcina i-ID yakho, isatifikethi samatirik namaxwebhu e-PSIRA eseduzane.',
        ],
        recommendedTraining: [
          'Uqeqesho lokhuseleko lwe-PSIRA Isigaba E ukuya ku-C',
          'Iziseko zokuncedisa',
          'Ukuqhwesha umlilo / isifundo sokhuseleko',
        ],
        tips: [
          'Isatifikethi sokucaciswa ngamapolisa sifuneka - sifumane ngokukhawuleza.',
          'Hlala uqapha uze ulandele iinkqubo zokhuseleko ngalo lonke ixesha.',
          'Hlala uzithembile uthembeka; abaqashi bahlola ngokucokisekileyo abaqaphi bokhuseleko.',
        ],
      },
    },
    {
      id: 8,
      name: 'Ubuhle kunye neenwele (Umncedi wesalon)',
      shortDescription: 'Nceda kwizalon: phatha abathengi, gcina izixhobo zicocekile uze uncede ngeenkonzo zobuhle.',
      categoryEmoji: '💇',
      detail: {
        description:
          'Abaqaphi besalon bamkela abathengi, bahlanza iinwele, bacoce izixhobo, balungise iindawo baze bancede abanini beenwele nabachwephesha bobuhle. Indlela elungileyo yokungena kwindawo yobuhle ngelixa ufunda ngomsebenzi.',
        keySkills: ['Inkonzo yabathengi', 'Ukucoceka', 'Ukuncede', 'Ukuvakalelwa', 'Ukucoca'],
        salaryRange: 'Ibonakalisa: R4,000–R7,500/ngenyanga (itshintsha ngesalon nengingqi)',
        howToGetStarted: [
          'Yakha idilesi ye-imeyile yasimahla nentobuzana iCV emfutshane.',
          'Ngena kwizalon zendawo uze ubuze iindawo zokunceda.',
          'Khangela ku-Indeed nakwi-Careers24 iindawo zokuncedisa kwisalon.',
          'Faka izicelo zokufunda ngobuhle okanye iinwele kwi-Services SETA okanye i-CATHSSETA.',
          'Gcina i-ID yakho nesatifikethi samatirik eseduzane.',
        ],
        recommendedTraining: [
          'Iinkqubo zokufunda zobuhle okanye iinwele (CATHSSETA)',
          'Isifundo esimfutshane sokucoca nokukhuseleka',
          'Iziseko zezenkonzo zabathengi',
        ],
        tips: [
          'Gcina iweko yokusebenza icocekile ihleliwe.',
          'Hlala uhle unceda abathengi.',
          'Buka uze ufunde iindlela kubachwephesha abanamava.',
        ],
      },
    },
    {
      id: 9,
      name: 'Ukulungiselela ukutya (Umncedi webhulawu / Ukutya okukhawulezayo)',
      shortDescription: 'Nceda kwibhulawu: lungiselela izinto, gcina iindawo zicocekile uze uncede abapheki.',
      categoryEmoji: '🍳',
      detail: {
        description:
          'Abaqaphi bebhiyaza bahleli abasebenzi bakutya okukhawulezayo balungiselela izinto, bapheke izinto ezilula, bacoce ibhulawu baze bancede abapheki. Umsebenzi wokuqala oqhelekileyo kwindawo zokutya nakumafekthri okutya okukhawulezayo, onamaxesha alungelelanisekayo.',
        keySkills: ['Ukusebenza ngaphantsi koxinzelelo', 'Ukucoceka', 'Urholo lwexesha', 'Ukulandela iiresiphi', 'Ukukhawuleza'],
        salaryRange: 'Ibonakalisa: R4,000–R7,000/ngenyanga (itshintsha ngongqeshi)',
        howToGetStarted: [
          'Yakha i-imeyile yasimahla nentobuzana iCV emfutshane.',
          'Ngena kwizitolo zokutya okukhawulezayo nakwindawo zokutya neCV yakho.',
          'Khangela ku-Indeed, Careers24 nakumaphepha omsebenzi wohotela.',
          'Faka izicelo zokufunda ngokutya kwi-CATHSSETA.',
          'Gcina i-ID yakho nesatifikethi samatirik eseduzane.',
        ],
        recommendedTraining: [
          'Iinkqubo zokufunda ngokutya nakwisela ze-CATHSSETA',
          'Isifundo esimfutshane sokukhuseleka kokutya',
          'Izakhono zokupheka ezinganganga',
        ],
        tips: [
          'Gcina izandla, iyunifomu kunye namaphico icocekile ngalo lonke ixesha.',
          'Sebenza ngokukhawuleza kodwa ngokuqaphela - amabhulawu makhulu.',
          'Qhubeke uthembeka; amasonto ahlala ethintelwa.',
        ],
      },
    },
    {
      id: 10,
      name: 'Ukuhambisa nokuPakisha (Umkhethi / Uphakhi / Umncedi womqhubi)',
      shortDescription: 'Khetha uphakhe iiodolo, layisha iilori uze uncede ekuthumeni izinto.',
      categoryEmoji: '📦',
      detail: {
        description:
          'Abaqaphi abakhethayo bapaka ngemiyalo basebenza kwiphakhi nakwiilori zokuhambisa. Bakhetha iiodolo, baphakhe amabhokisi, balayishe baze bakhuphule izinto bancede abaqhubi ekuthunyelweni. Umsebenzi womzimba ohleliweyo ofuna kakhulu.',
        keySkills: ['Ukuqina komzimba', 'Ukuchanekile', 'Urholo lwexesha', 'Ukulandela imiyalelo', 'Ukubala'],
        salaryRange: 'Ibonakalisa: R4,500–R9,000/ngenyanga (itshintsha ngongqeshi nengingqi)',
        howToGetStarted: [
          'Yakha idilesi ye-imeyile yasimahla nentobuzana iCV emfutshane.',
          'Khangela ku-Indeed, Careers24 nakumaphepha omsebenzi wamakhomphani okuhambisa.',
          'Tyelela amaphakhi nababhali abaqashiweyo uze ubuze iindawo ezizele.',
          'Faka izicelo zokufunda ngokuhambo kwi-TETA.',
          'Gcina i-ID yakho nesatifikethi samatirik eseduzane.',
        ],
        recommendedTraining: [
          'Iinkqubo zokufunda ngokuhambo nakupakisha kwi-TETA',
          'Ilayisensi yefuthi (iluncedo elikhulu)',
          'Isikhathi sokuqalisa ngokhuseleko neempilo',
        ],
        tips: [
          'Qinisekisa ukukhetha iiodolo - amaphutha adla imali.',
          'Qaphela xa ulayisha; sebenzisa iindlela ezikhuselekileyo.',
          'Qhubeke uthembeka ngesikhathi; ukuthunyelwa kuhamba ngokulungelelanisa.',
        ],
      },
    },
  ],
  nso: [
    {
      id: 1,
      name: 'Tša kgwebo (Mothuso wa phempe / Moqabi wa nyuthe)',
      shortDescription: 'Hlepha badiriši, swalele ditšheleto gape o tšeele difoka ka phempe.',
      categoryEmoji: '🛍️',
      detail: {
        description:
          'Bathuso ba phempe le badiši ba foka ba thusa badiriši go humana dihlangiswa, ba tšea ditšheleto ka khekereseng, ba tšea difoka gape ba phema phempe ya go swama gape ya go hlopha. Ke mošomo wa maemo a tlase wo o tlogeleleng bana ba bašwa ka moka Afrika Borwa.',
        keySkills: ['Tšebeletso ya badiriši', 'Go swala ditšheleto le dikarata', 'Bapalo ya motheo', 'Kopano', 'Go hlopha le go fihla nako'],
        salaryRange: 'E bontšha: R4,500–R7,500/kgwedi (e fapana ka lefase le moqabi)',
        howToGetStarted: [
          'Hlama aterese ya imeile ya mahala (mo. Gmail) le CV e bonolo.',
          'Nyaka dibaka tša mošomo ka Indeed, Careers24 le PNet.',
          'Etela di-mall gape o botše badiriši ka dibaka tša go tsena ka maoto.',
          'Ikgametše dikgwebo tša go ithuta ka Indeed tša W&RSETA.',
          'Bea ID ya gago le setifikhiti sa matrik, o apere ka go hlopha bakeng sa phuputso.',
        ],
        recommendedTraining: [
          'Dikgwebo tša go ithuta ka W&RSETA gape dikhoso tše ditswintswha',
          'Thuto ya motheo ya khomphuthara / thalo ya go reka (POS)',
          'Khoso e tswnswa ya tšebeletso ya badiriši',
        ],
        tips: [
          'Fihla nakong gape o apere ka go hlopha - popego ya mathomo e bohlokwa kgwebong.',
          'Tšea dikopi tša ID ya gago le setifikhiti sa matrik.',
          'Ntsheng letshwa gape o be o sa tsebele badiriši ba tshwenyegago.',
        ],
      },
    },
    {
      id: 2,
      name: 'Tša amogelo baeti (Morati / Basebetsi ba hotele)',
      shortDescription: 'Hlepha dijo le noo, thuša baeti gape o pheme dijhole tše di tswelago ka tše di gaufi.',
      categoryEmoji: '🍽️',
      detail: {
        description:
          'Basebetsi ba amogelo baeti ba šoma direšurenteng, dihotele, magorogelong a baeti le go pheka. Ba tšea ditaelo, ba fediša dijo, ba bea di-teyisele, ba phema ba amogele baeti ka moipousi. Maemo a ya go fetošana gape a šoma go aha bokgoni ba kopano.',
        keySkills: ['Tšebeletso ya badiriši', 'Tirišano', 'Go šema ka tlase ga kgatello', 'Kopano', 'Bophelo bja dijo bja motheo'],
        salaryRange: 'E bontšha: R4,500–R8,000/kgwedi gape le dikhadimo (e fapana ka moqabi)',
        howToGetStarted: [
          'Hlama CV e tswnswa gape aterese ya imeile ya mahala.',
          'Nyaka ka Indeed, Careers24 le matlakaleng a mošomo a dihotele.',
          'Tsena direšurenteng le dihotele o be o swere CV gape o botše ka dibaka.',
          'Ikgametše dithuto tša go amogela baeti ka Services SETA goba CATHSSETA.',
          'Be o ipaakantše go thoma ka matšatši a bo ihlo goba dipakane tša bosehla.',
        ],
        recommendedTraining: [
          'Dithuto tša go ithuta ka amogelo baeti tša CATHSSETA',
          'Khoso e tswnswa ya bophelo bja dijo / go hlopha',
          'Mabapi le thuso ya mathomo',
        ],
        tips: [
          'Tšeela menaba e tswnswa, moriri o hlophiwe gape unifomo e hlophiwe.',
          'Tšea dikopi tša ID ya gago le setifikhiti sa matrik.',
          'Dikhadimo di ka enyelwa chelete ya gago - šema ka moya o mobotse.',
        ],
      },
    },
    {
      id: 3,
      name: 'IT & Thuso (Thuso ya IT ya maemo a tlase)',
      shortDescription: 'Thuša batho ka diphoso tša khomphuthara, bea dihlagišwa gape o thuše basebetsi ka tša tšelefo.',
      categoryEmoji: '💻',
      detail: {
        description:
          'Basebetsi ba IT ba maemo a tlase ba thuša balekani goba badiriši go lokiša diphoso tša khomphuthara, ba tšea mananeo, ba hlagiša dipirintara le go araba dipotšišo tša thekenoloi. Ke tšhupamabapi e ntle ge o rata thekenoloi le go lokiša diphoso.',
        keySkills: ['Bokgoni ba khomphuthara', 'Go lokiša diphoso', 'Go pelwa pelo', 'Kopano', 'Neteweke ya motheo'],
        salaryRange: 'E bontšha: R6,000–R12,000/kgwedi (e fapana ka moqabi le boitsebiso)',
        howToGetStarted: [
          'Hlama aterese ya imeile ya mahala gape CV e tswnswa ya go bolela bokgoni ba khomphuthara.',
          'Nyaka dibaka tša maemo a tlase ka Indeed, Careers24, PNet le LinkedIn.',
          'Ikgametše dithuto tša IT ka MICT SETA.',
          'Ithute go lokiša diphoso tša kgale khomphutharong ya gago goba laiburaring.',
          'Nagana ka khoso e tswnswa ya A+ goba setifikhiti sa IT sa motheo.',
        ],
        recommendedTraining: [
          'Dithuto tša go ithuta ka IT tša MICT SETA',
          'CompTIA A+ goba setifikhiti se sebelang maemo a tlase sa IT',
          'Dikhoso tša mahala tša inthanete (mo. Cisco Networking Academy)',
        ],
        tips: [
          'Bontšha go pelwa pelo - bontši bja mošomo ke go thuša batho ba sa ratago thekenoloi.',
          'Ithute mananeo a mabotse le didirišwa tša moswa.',
          'Ngwale diphoso le dilošo gore o ithute ka lebelo.',
        ],
      },
    },
    {
      id: 4,
      name: 'Kago (Mosebetsi wa kakaretso / Mothuso wa bareki)',
      shortDescription: 'Thuša mabalong a kago: swaraganya dihlagišwa, feta semente gape o thuše bareki.',
      categoryEmoji: '🏗️',
      detail: {
        description:
          'Basebetsi ba kakaretso ba kago ba thuša bareki, ba tšea dihlagišwa, ba feta semente, ba phema lefelo gape ba thuše bareki jaaka elekitirišene le bafuthi. Ke mošomo wa mmele yo o thušago bokgoni bokgoni bo bonwang ka go šoma.',
        keySkills: ['Go tlatša mmele', 'Go latela ditaelo', 'Tirišano', 'Go tsibula tšhireletšo', 'Go tshepega'],
        salaryRange: 'E bontšha: R4,500–R9,000/kgwedi (e fapana ka thulaganyo le lefase)',
        howToGetStarted: [
          'Hlama CV le aterese ya imeile ya mahala.',
          'Etela mabalong a kago le bathusi ba basebetsi o botše ka mošomo.',
          'Nyaka dinako tša mošomo tafole ya Qasho le Mosebetsi.',
          'Ikgametše dithuto tša kago ka CETA (Construction SETA).',
          'Bea ID ya gago gape o apere ditšhutu tša tšhireletšo ge o na le tšona.',
        ],
        recommendedTraining: [
          'Dithuto tša kago tša CETA',
          'Tšhupamabapi ya bophelo le tšhireletšo (karata ye tala / SAMTRAC ya motheo)',
          'Bokgoni bja go thuša bareki',
        ],
        tips: [
          'Apela ka mehla diaparo tša tšhireletšo - ditšhutu, setshwara hlogo le sethukhuthu.',
          'Tshepega; kago e rata bašomi ba ba fihlago letšatši lengwe le lengwe.',
          'Tšea ID ya gago le kopana ya setifikhiti sa matrik.',
        ],
      },
    },
    {
      id: 5,
      name: 'Taolo le Ofisi (Mokgobong / Mothuti wa data)',
      shortDescription: 'Araba ditšelefo, tsena data khomphutharong gape o hlophe baeditse ba ofisi.',
      categoryEmoji: '🗂️',
      detail: {
        description:
          'Bakgoba ba amogelago baeti le ba tsenyo data ba amogela baeti, ba araba ditšelefo, ba ngwale tshedimošo khomphutharong, ba hlopha mangwalo gape ba tshwara ofisi ka go hlophiwa. E šomana le batho ba hlophiwago le ba na le bokgoni ba khomphuthara.',
        keySkills: ['Bokgoni ba khomphuthara (Word, Excel)', 'Kopano', 'Go hlopha', 'Mekgwa ya tšelefo', 'Go nepa'],
        salaryRange: 'E bontšha: R5,000–R10,000/kgwedi (e fapana ka moqabi)',
        howToGetStarted: [
          'Hlama aterese ya imeile ya mahala gape CV ye e hlophiweng ye e bolelang bokgoni bja khomphuthara.',
          'Nyaka ka Indeed, Careers24 le PNet maemo a go amogela gaba tsenya data.',
          'Ikgametše dithuto tša taolo ya ofisi ka Services SETA.',
          'Ithute go thanya le MS Office ya motheo laiburaring goba lefapheng.',
          'Bea ID ya gago le setifikhiti sa matrik bakeng sa dikgwebo.',
        ],
        recommendedTraining: [
          'Dithuto tša go ithuta ka taolo ya kgwebo tša Services SETA',
          'Khoso e tswnswa ya Microsoft Office',
          'Go thanya le go tsenya data',
        ],
        tips: [
          'Bokgokgo le boikokobetso ka tšelefo - ke motho wa mathomo ya go kopana le ena.',
          'Tshwara sebaka sa gago sa go šema ka go hlophiwa.',
          'Hlahloba data o e tsenya gabedi go nyaka diphoso.',
        ],
      },
    },
    {
      id: 6,
      name: 'Kgolegela ya ditšelefo (Mošomi wa tšebeletso ya badiriši)',
      shortDescription: 'Araba ditšelefo tša badiriši, lokiša diphoso gape o fe tshedimošo ka tšelefo.',
      categoryEmoji: '📞',
      detail: {
        description:
          'Bathi ba šomang kgolegela ba araba ditšelefo, ba thuša ka dipotšišo, ba ngwale ditšhitišo gape ka mehla ba reka ka tšelefo. Bana ba bašwa ba bangwe ba Afrika Borwa ba thoma mošomo wa bona fano, ba aha bokgoni bja go bua ka maatla.',
        keySkills: ['Puo ye e hlakileng', 'Go kwa', 'Go lokiša diphoso', 'Go pelwa pelo', 'Bokgoni ba khomphuthara'],
        salaryRange: 'E bontšha: R5,500–R11,000/kgwedi (e fapana ka moqabi le maemo)',
        howToGetStarted: [
          'Hlama imeile ya mahala gape CV ye e kgokologanyago bokgoni bja go bua.',
          'Nyaka maemo a kgolegela ka Indeed, Careers24 le PNet.',
          'Nyaka dithuto tša kgolegela ka Services SETA.',
          'Ithute go bua ka go hlaka gape go hlepha badiriši ba maikemišetso.',
          'Tšea ID ya gago le setifikhiti sa matrik.',
        ],
        recommendedTraining: [
          'Dithuto tša go ithuta ka kgolegela tša Services SETA',
          'Khoso e tswnswa ya tšebeletso ya badiriši',
          'Bokgoni ba khomphuthara le go thanya',
        ],
        tips: [
          'Bua ka go hlaka gape o be o sa tshwenyehe le ge badiriši ba tshwenyegilego.',
          'Ithute sehlagiswa goba tšebeletso ya kgwebo ka botlalo.',
          'Ipaakantše go šoma ka maemo, go akaretšwa bosehla le matšatši a bo ihlo.',
        ],
      },
    },
    {
      id: 7,
      name: 'Tšhireletšo (Mosebeletsi wa tšhireletšo)',
      shortDescription: 'Lokiša mabano, laole go tsena gape o tšhireletse batho le dihlagišwa.',
      categoryEmoji: '🛡️',
      detail: {
        description:
          'Bathi ba tšhireletšo ba lokiša diago, ba laole ba tsenago, ba fologanye mabano gape ba araba maemo a sa laelwago. Mošomo o nyaka go ngwadišwa ho PSIRA gape o nyakwa thata kua moka Afrika Borwa.',
        keySkills: ['Go tsibula', 'Go tlatša mmele', 'Boikokobetso', 'Go latela dilaong', 'Kopano'],
        salaryRange: 'E bontšha: R4,500–R8,000/kgwedi (e fapana ka moqabi le maemo)',
        howToGetStarted: [
          'Tšee setifikhiti sa go hlweka ka maphodisa setešeneng sa gago SAPS sa go fihlwa.',
          'Ngwadiše gape o ithute moqabi wa PSIRA ya go tšhireletšo ya go tshepiwa.',
          'Ikgametše dikomphani tša go tšhireletša tše ngwadišitšwego mabatong a gago.',
          'Nyaka ka Indeed, Careers24 le matlakaleng a dikomphani tša go tšhireletša.',
          'Bea ID, setifikhiti sa matrik le ditlaka tša PSIRA.',
        ],
        recommendedTraining: [
          'Thuto ya go tšhireletša ya PSIRA Maemo E go ya go C',
          'Thuso ya mathomo',
          'Go tima mollo / khoso e tswnswa ya tšhireletšo',
        ],
        tips: [
          'Setifikhiti sa go hlweka ka maphodisa se nyakwa - se tšee ka nako.',
          'Dula o tsibuile gape o latela dilaong tša tšhireletšo ka mehla.',
          'Dula o ikokobeditše o tshepa; baqabi ba hloba bathi ba tšhireletšo ka botlalo.',
        ],
      },
    },
    {
      id: 8,
      name: 'Botala le Moriri (Mothuso wa salon)',
      shortDescription: 'Thuša masalong: amogela badiriši, hlopha didirišwa gape o thuše ditšebeletso tša botala.',
      categoryEmoji: '💇',
      detail: {
        description:
          'Bathuso ba salon ba amogela badiriši, ba tšeele moriri, ba hlopha didirišwa, ba bea lefelo gape ba thuše badiša moriri le badiša botala. Ke tsela e ntle ya go tsena khampaning ya botala ge o ithuta ka go šoma.',
        keySkills: ['Tšebeletso ya badiriši', 'Go hlopha', 'Go thuša', 'Go kwa', 'Go hlopha'],
        salaryRange: 'E bontšha: R4,000–R7,500/kgwedi (e fapana ka salon le lefase)',
        howToGetStarted: [
          'Hlama aterese ya imeile ya mahala gape CV e tswnswa.',
          'Tsena masalong a lefelong la gago o botše ka dibaka tša go thuša.',
          'Nyaka ka Indeed le Careers24 maemo a go thuša salon.',
          'Ikgametše dithuto tša botala goba moriri ka CATHSSETA.',
          'Tšea ID ya gago le setifikhiti sa matrik.',
        ],
        recommendedTraining: [
          'Dithuto tša botala goba moriri (CATHSSETA)',
          'Khoso e tswnswa ya go hlopha le go hlapa',
          'Mabapi le tšebeletso ya badiriši',
        ],
        tips: [
          'Dula o hlophiwe le lefelo la gago la go šoma.',
          'Bua le go thuša badiriši.',
          'Lebelela gape o ithute tše dingwe go badiša ba nang le boitsebiso.',
        ],
      },
    },
    {
      id: 9,
      name: 'Go lokiša dijo (Mothuso wa khitshini / Dijo tša lebelo)',
      shortDescription: 'Thuša khitshineng: lokiša dilo, phema lefelo gape o thuše bapheki.',
      categoryEmoji: '🍳',
      detail: {
        description:
          'Bathuso ba khitshini le ba dijo tša lebelo ba lokiša dilo, ba pheke dilo tše di bonolo, ba phema khitshini gape ba thuše badiša. Ke mošomo wa mathomo wa kgale direšurenteng le mafepheng a dijo tša lebelo, o na le maemo a go fetošana.',
        keySkills: ['Go šema ka tlase ga kgatello', 'Go hlopha', 'Tirišano', 'Go latela diresiphi', 'Lebelo'],
        salaryRange: 'E bontšha: R4,000–R7,000/kgwedi (e fapana ka moqabi)',
        howToGetStarted: [
          'Hlama aterese ya imeile ya mahala gape CV e tswnswa.',
          'Tsena mafepheng a dijo tša lebelo le direšurenteng o be o swere CV.',
          'Nyaka ka Indeed, Careers24 le matlakaleng a mošomo wa dihotele.',
          'Ikgametše dithuto tša dijo ka CATHSSETA.',
          'Tšea ID ya gago le setifikhiti sa matrik.',
        ],
        recommendedTraining: [
          'Dithuto tša dijo le noo tša CATHSSETA',
          'Khoso e tswnswa ya bophelo bja dijo',
          'Bokgoni bja go pheka bja motheo',
        ],
        tips: [
          'Hlopha matsoho, diaparo le mabano ka mehla.',
          'Šema ka lebelo eupsa ka go tsibula - khitshini ke kgolo.',
          'Tshepa; maemo a mehla a akaretšwa matšatši a bo ihlo.',
        ],
      },
    },
    {
      id: 10,
      name: 'Go roma le go paka (Mokgethi / Mopaki / Mothuso wa mokgweri)',
      shortDescription: 'Kgetha gape o pake ditaelo, layišha dilori gape o thuše go roma dihlagišwa.',
      categoryEmoji: '📦',
      detail: {
        description:
          'Bakgethi, bapaki le bathuso ba mokgweri ba šoma maphaking le dilorini tša go roma. Ba kgetha ditaelo, ba paka mabhokisi, ba layišha gape ba khutlula dihlagišwa gape ba thuša badiša ba go roma. Ke mošomo wa mmele wa go hlopha o nyakwago thata.',
        keySkills: ['Go tlatša mmele', 'Go nepa', 'Tirišano', 'Go latela ditaelo', 'Bapalo'],
        salaryRange: 'E bontšha: R4,500–R9,000/kgwedi (e fapana ka moqabi le lefase)',
        howToGetStarted: [
          'Hlama aterese ya imeile ya mahala gape CV e tswnswa.',
          'Nyaka ka Indeed, Careers24 le matlakaleng a mošomo a dikomphani tša go roma.',
          'Etela maphaki le bathusi ba basebetsi o botše ka dibaka.',
          'Ikgametše dithuto tša go roma ka TETA.',
          'Tšea ID ya gago le setifikhiti sa matrik.',
        ],
        recommendedTraining: [
          'Dithuto tša go roma le go paka tša TETA',
          'Laesenše ya forokhiliti (ke thuso kgolo)',
          'Tšhupamabapi ya bophelo le tšhireletšo',
        ],
        tips: [
          'Nepa ge o kgetha - diphoso di tšea chelete.',
          'Tsibula ge o layišha; šomiša ditsela tša go tšhireletša.',
          'Tshepa gape o fihle nako; diromwa di ya ka ditseleng.',
        ],
      },
    },
  ],
  st: [
    {
      id: 1,
      name: 'Kgwebo ya thekiso (Mothusi ya lefapheng / Mohlankana wa tjhelete)',
      shortDescription: 'Fana ka tirelo ho basebentiši, tšoara tjhelete ’me u tšoarele lifate li tlala.',
      categoryEmoji: '🛍️',
      detail: {
        description:
          'Bathusi ba lefapheng le bahloki ba tjhelete ba thusa basebentiši ho fumana dihlahiswa, ba tšoara tjhelete ka sedikishineng, ba tšoara lifate ba phahamisa lefapha ba hloka le ho loka. Ke mosebetsi wa maemo a tlase wa bana ba batjha bohle naheng ya Afrika Borwa.',
        keySkills: ['Tirelo ya basebentiši', 'Ho tšoara tjhelete le likarata', 'Ho bala ha motheo', 'Puiso', 'Ho hloka le ho fihla nako'],
        salaryRange: 'E bontša: R4,500–R7,500/ho a kgwedi (e fapana ka tikoloho le molekhi)',
        howToGetStarted: [
          'Theha aterese ya imeile ya mahala (mohl. Gmail) le CV e bonolo.',
          'Batla merero ya mosebetsi ho Indeed, Careers24 le PNet.',
          'Etela di-mall ’me u botše baoki ba lifate ka merero ya ho kena ka maoto.',
          'Ikwale dithuto tsa thekiso ho W&RSETA.',
          'Bea ID ya hao le setifikeiti sa matrik, o apere ka ho hloka bakeng sa tlhahlobo.',
        ],
        recommendedTraining: [
          'Dithuto tsa W&RSETA tsa thekiso kapa dikhoso tse fokotseng',
          'Thupelo ya khomphuthara ya motheo / sistimi ya thekiso (POS)',
          'Khoso e fokotseng ya tirelo ya basebentiši',
        ],
        tips: [
          'Fihla nakong u apere ka ho hloka - tšehetso ya mathomo e bohlokoa kgwebong.',
          'Tšoara dikopi tsa ID ya hao le setifikeiti sa matrik.',
          'Ntataise ’me u be u tšoaroa ke basebentiši ba thatafatsang.',
        ],
      },
    },
    {
      id: 2,
      name: 'Boamoheli ba baeti (Mohlankana / Basebetsi ba hotele)',
      shortDescription: 'Fana ka dijo le jo, thusa baeti ’me u tšoarele lifate tsa ho ja li fumeleha.',
      categoryEmoji: '🍽️',
      detail: {
        description:
          'Basebetsi ba boamoheli baeti ba šoma direšorenteng, dihotele, mafelong a boamoheli le ho pheha. Ba tšoa taelo, ba fana ka dijo, ba bea dijfeeleng, ba hloka ba amohela baeti ka thabo. Maemo a feto-fetohang a šoa ho aha bokoni ba puiso.',
        keySkills: ['Tirelo ya basebentiši', 'Mosebetsi wa sehlopha', 'Ho šema ka tlase ga kgatello', 'Puiso', 'Tšireletso ya dijo ya motheo'],
        salaryRange: 'E bontša: R4,500–R8,000/ho a kgwedi le matšhishibi (e fapana ka molekhi)',
        howToGetStarted: [
          'Etsa CV e fokotseng le aterese ya imeile ya mahala.',
          'Batla ho Indeed, Careers24 le matlaatlong a mosebetsi wa dihotele.',
          'Kena direšorenteng le dihotele o be o tšoere CV u botse ka merero.',
          'Ikwale dithuto tsa boamoheli baeti ho Services SETA kapa CATHSSETA.',
          'Ipaakantše ho qala mafelong a beke kapa maemo a bosehla.',
        ],
        recommendedTraining: [
          'Dithuto tsa boamoheli baeti tsa CATHSSETA',
          'Khoso e fokotseng ya tšireletso ya dijo / ho hloka',
          'Thuso ya pele ya ho tšoara bophelo',
        ],
        tips: [
          'Tšoara menwele e fokotseng, moriri o hloka ’me u junifomo e hloka.',
          'Tšoara dikopi tsa ID ya hao le setifikeiti sa matrik.',
          'Matšhishibi a ka ekeletsa chelete - šema ka maikutlo a botle.',
        ],
      },
    },
    {
      id: 3,
      name: 'IT & Thuso ya lefapheng (Thuso ya IT ya maemo a tlase)',
      shortDescription: 'Thusa batho ka mathata a khomphuthara, bea ditsela ’me u thusse basebetsi ka letsatsi.',
      categoryEmoji: '💻',
      detail: {
        description:
          'Basebetsi ba IT ba maemo a tlase ba thusa balekani kapa basebentiši ho lokiša mathata a khomphuthara, ba beha mananeo, ba bea dipirinthara ’me ba arabele dipotšišo tsa thekenoloji. Ke ho qala ho botle ha o rata thekenoloji le ho lokiša mathata.',
        keySkills: ['Bokoni ba khomphuthara', 'Ho lokiša mathata', 'Ho pelwa pelo', 'Puiso', 'Neteweke ya motheo'],
        salaryRange: 'E bontša: R6,000–R12,000/ho a kgwedi (e fapana ka molekhi le boitemogelo)',
        howToGetStarted: [
          'Theha aterese ya imeile ya mahala le CV e fokotseng ya ho bolela bokoni ba khomphuthara.',
          'Batla maemo a maemo a tlase ho Indeed, Careers24, PNet le LinkedIn.',
          'Ikwale dithuto tsa IT ho MICT SETA.',
          'Ithute ho lokiša mathata a tloaelehileng khomphutharong ya hao kapa laiburaring.',
          'Nahana ka khoso e fokotseng ya A+ kapa setifikeiti sa IT sa motheo.',
        ],
        recommendedTraining: [
          'Dithuto tsa IT tsa MICT SETA',
          'CompTIA A+ kapa setifikeiti se lekanang sa maemo a tlase sa IT',
          'Dikhoso tsa mahala tsa inthanete (mohl. Cisco Networking Academy)',
        ],
        tips: [
          'Bontšha ho pelwa pelo - bongata ba mosebetsi ke ho thusa batho ba sa nang le thekenoloji.',
          'Tswelapele ho ithuta mananeo a makatsang le didiriswa.',
          'Ngola mathata le diswao tsa hona hore u ithute ka lebelo.',
        ],
      },
    },
    {
      id: 4,
      name: 'Kaho (Mosebetsi wa kakaretso / Mothusi wa bareki)',
      shortDescription: 'Thusa mabalong a kaho: tšoara diphahla, tšela samente ’me u thusse bareki.',
      categoryEmoji: '🏗️',
      detail: {
        description:
          'Basebetsi ba kakaretso ba kaho ba thusa bareki, ba tšoara diphahla, ba tšela samente, ba hloka lefelo la kaho ba ba hloka bareki joalo ka ba matla le ba metsi. Mosebetsi wa mmele o fanang bokoni bo boabonweng ka ho šoma.',
        keySkills: ['Ho tiisa mmele', 'Ho latela ditaelo', 'Mosebetsi wa sehlopha', 'Ho hlokomela tšireletso', 'Ho tshepahala'],
        salaryRange: 'E bontša: R4,500–R9,000/ho a kgwedi (e fapana ka morero le tikoloho)',
        howToGetStarted: [
          'Etsa CV le aterese ya imeile ya mahala.',
          'Etela mabalong a kaho le bakgweketsi ba mosebetsi u botše ka mosebetsi.',
          'Bula ditšhupetso tsa mosebetsi tsa Lefapha la Mošomo le Basebetsi.',
          'Ikwale dithuto tsa kaho ho CETA (Construction SETA).',
          'Bea ID ya hao ’me u apere ditšutu tsa tšireletso ha o na le tsona.',
        ],
        recommendedTraining: [
          'Dithuto tsa kaho tsa CETA',
          'Tlhahlobo ya bophelo le tšireletso (karata e talang / SAMTRAC ya motheo)',
          'Bokoni ba ho thusa bareki',
        ],
        tips: [
          'Apela ka mehla diaparo tsa tšireletso - ditšutu, sedameho le sethephe.',
          'Tshepahala; kaho e rata basebetsi ba tlang letsatsi le letsatsi.',
          'Tšoara ID ya hao le kopi ya setifikeiti sa matrik.',
        ],
      },
    },
    {
      id: 5,
      name: 'Taolo le Ofising (Moamoheli / Mongwadi wa data)',
      shortDescription: 'Araba mohala, tsena data khomphutharong ’me u hlokomela dipejwa tsa ofising.',
      categoryEmoji: '🗂️',
      detail: {
        description:
          'Baamoheli le bangwadi ba data ba amohela baeti, ba araba mohala, ba thaepa tshedimošo khomphutharong, ba hloka ditokumente ba loka ofising. E šomana le ba lokeditsweng le ba nang le bokoni ba khomphuthara.',
        keySkills: ['Bokoni ba khomphuthara (Word, Excel)', 'Puiso', 'Ho loka', 'Mekgwa ya mohala', 'Ho nepa'],
        salaryRange: 'E bontša: R5,000–R10,000/ho a kgwedi (e fapana ka molekhi)',
        howToGetStarted: [
          'Theha aterese ya imeile ya mahala le CV e lokileng ya ho bolela bokoni ba khomphuthara.',
          'Batla ho Indeed, Careers24 le PNet maemo a moamoheli kapa mongwadi wa data.',
          'Ikwale dithuto tsa taolo ya ofisi ho Services SETA.',
          'Ithute ho thaepa le MS Office ya motheo laiburaring kapa lefapheng.',
          'Bea ID ya hao le setifikeiti sa matrik bakeng sa dikgwebo.',
        ],
        recommendedTraining: [
          'Dithuto tsa taolo ya khwebo tsa Services SETA',
          'Khoso e fokotseng ya Microsoft Office',
          'Ho thaepa le ho tsena data',
        ],
        tips: [
          'Bua ka boikokobetso ho mohala - ke motho wa mathomo ya ho kopana le ena.',
          'Loka sebaka sa hao sa ho šoma.',
          'Hlahloba data u e tsena makgetlo a mmedi ho qoba diphoso.',
        ],
      },
    },
    {
      id: 6,
      name: 'Lefapha la mohala (Mosebetsi wa tirelo ya basebentiši)',
      shortDescription: 'Araba mohala, lokiša mathata ’me u fane ka tshedimošo ka mohala.',
      categoryEmoji: '📞',
      detail: {
        description:
          'Basebetsi ba lefapha la mohala ba araba mohala, ba thusa ka dipotšišo, ba ngola diphirišo ’me ka nako ba reka ka mohala. Bana ba batjha ba bangata ba Afrika Borwa ba qala mosebetsi wa bona mono, ba aha bokoni ba matla ba puiso.',
        keySkills: ['Puo e hlakileng', 'Ho mamela', 'Ho lokiša mathata', 'Ho pelwa pelo', 'Bokoni ba khomphuthara'],
        salaryRange: 'E bontša: R5,500–R11,000/ho a kgwedi (e fapana ka molekhi le maemo)',
        howToGetStarted: [
          'Etsa imeile ya mahala le CV e hlakisitsweng bokoni ba puiso.',
          'Batla maemo a lefapha la mohala ho Indeed, Careers24 le PNet.',
          'Batla dithuto tsa lefapha la mohala ho Services SETA.',
          'Ithute ho bua ka ho hlaka le ho tšoara basebentiši ba tšoanang.',
          'Tšoara ID ya hao le setifikeiti sa matrik.',
        ],
        recommendedTraining: [
          'Dithuto tsa lefapha la mohala tsa Services SETA',
          'Khoso e fokotseng ya tirelo ya basebentiši',
          'Bokoni ba khomphuthara le ho thaepa',
        ],
        tips: [
          'Bua ka ho hlaka u be u tshwere pelo le hoja basebentiši ba halefile.',
          'Ithute sehlahiswa kapa tirelo ya kgwebo ka botlalo.',
          'Ipaakantše ho šoma ka maemo, ho akarelwa mantsiboea le matsatsi a beke.',
        ],
      },
    },
    {
      id: 7,
      name: 'Tšireletso (Moloki wa tšireletso)',
      shortDescription: 'Lokiša mafelo, laole ho kena ’me u tšireletse batho le diphahla.',
      categoryEmoji: '🛡️',
      detail: {
        description:
          'Baloki ba tšireletso ba lokiša diago, ba laole ba keng, ba fihla mabalong ba arabele maemo a sa laelwang. Mosebetsi o nyaka ho ngolisa ho PSIRA ’me o nyakwa thata naheng ya Afrika Borwa.',
        keySkills: ['Ho bula maikutlo', 'Ho tiisa mmele', 'Boikokobetso', 'Ho latela ditsamaiso', 'Puiso'],
        salaryRange: 'E bontša: R4,500–R8,000/ho a kgwedi (e fapana ka molekhi le maemo)',
        howToGetStarted: [
          'Fumana setifikeiti sa ho hlweka ka mapodisa seteišeneng sa hao SAPS sa ho fihla.',
          'Ngolisa u ithute ho PSIRA ya tšireletso ya ho tshepahala.',
          'Ikwale dikompani tsa tšireletso tse ngolisitsweng tikolohong ya hao.',
          'Batla ho Indeed, Careers24 le matlaatlong a dikompani tsa tšireletso.',
          'Bea ID, setifikeiti sa matrik le ditokomme tsa PSIRA.',
        ],
        recommendedTraining: [
          'Thupelo ya tšireletso ya PSIRA Maemo E ho ya ho C',
          'Thuso ya pele',
          'Ho tima mollo / khoso e fokotseng ya tšireletso',
        ],
        tips: [
          'Setifikeiti sa ho hlweka ka mapodisa se nyakwa - se tšeeng ka nako.',
          'Dula u bule maikutlo u latela ditsamaiso tsa tšireletso ka mehla.',
          'Dula u ikokobeditše u tshepa; basebentiši ba hlopha baloki ba tšireletso ka botlalo.',
        ],
      },
    },
    {
      id: 8,
      name: 'Botala le Moriri (Mothesisi wa salon)',
      shortDescription: 'Thusa masalong: amohela basebentiši, loka didiriswa ’me u thusse tirelo ya botala.',
      categoryEmoji: '💇',
      detail: {
        description:
          'Bathusi ba salon ba amohela basebentiši, ba tšoara moriri, ba hloka didiriswa, ba bea mabala ba ba thusa badiša moriri le botala. Ke tsela e botle ya ho kena khwebong ya botala ha o ithuta ka ho šoma.',
        keySkills: ['Tirelo ya basebentiši', 'Ho hloka', 'Ho thusa', 'Ho mamela', 'Ho loka'],
        salaryRange: 'E bontša: R4,000–R7,500/ho a kgwedi (e fapana ka salon le tikoloho)',
        howToGetStarted: [
          'Theha aterese ya imeile ya mahala le CV e fokotseng.',
          'Kena masalong a tikolohong ya hao u botše ka dibaka tsa ho thusa.',
          'Batla ho Indeed le Careers24 maemo a ho thusa salon.',
          'Ikwale dithuto tsa botala kapa moriri ho CATHSSETA.',
          'Tšoara ID ya hao le setifikeiti sa matrik.',
        ],
        recommendedTraining: [
          'Dithuto tsa botala kapa moriri (CATHSSETA)',
          'Khoso e fokotseng ya ho hloka le ho hlapa',
          'Mabapi le tirelo ya basebentiši',
        ],
        tips: [
          'Loka mmele wa hao le lefelo la ho šoma.',
          'Bua u thusa basebentiši.',
          'Lebela u ithute ditsela ho badiša ba nang le boitemogelo.',
        ],
      },
    },
    {
      id: 9,
      name: 'Ho lokiša dijo (Mothesisi wa khitjini / Dijo tse potlakileng)',
      shortDescription: 'Thusa khitjineng: lokiša diphahla, loka mabala ’me u thusse bapheki.',
      categoryEmoji: '🍳',
      detail: {
        description:
          'Bathusi ba khitjini le ba dijo tse potlakileng ba lokiša diphahla, ba pheke diphahla tse bonolo, ba hloka khitjini ba ba thusa badiša. Ke mosebetsi wa mathomo wa tloaelehileng direšorenteng le mafapheng a dijo tse potlakileng, o na le maemo a feto-fetohang.',
        keySkills: ['Ho šema ka tlase ga kgatello', 'Ho hloka', 'Mosebetsi wa sehlopha', 'Ho latela disipele', 'Lebelo'],
        salaryRange: 'E bontša: R4,000–R7,000/ho a kgwedi (e fapana ka molekhi)',
        howToGetStarted: [
          'Etsa imeile ya mahala le CV e fokotseng.',
          'Kena mafapheng a dijo tse potlakileng le direšorenteng o be o tšoere CV.',
          'Batla ho Indeed, Careers24 le matlaatlong a mosebetsi wa dihotele.',
          'Ikwale dithuto tsa dijo ho CATHSSETA.',
          'Tšoara ID ya hao le setifikeiti sa matrik.',
        ],
        recommendedTraining: [
          'Dithuto tsa dijo le jo tsa CATHSSETA',
          'Khoso e fokotseng ya tšireletso ya dijo',
          'Bokoni ba ho pheha ba motheo',
        ],
        tips: [
          'Loka matsoho, dijunifomo le mabala ka mehla.',
          'Šema ka lebelo empa u hlokomelle - khitjini ke kgolo.',
          'Tshepa; maemo a akarelwa matsatsi a beke.',
        ],
      },
    },
    {
      id: 10,
      name: 'Ho romela le ho paka (Mokgethi / Mopaki / Mothusi wa mokgaradikole)',
      shortDescription: 'Kgetha u pake ditaelo, laole dilori ’me u thusse ho romela diphahla.',
      categoryEmoji: '📦',
      detail: {
        description:
          'Bakgethi, bapaki le bathusi ba mokgaradikole ba šoma maphakeng le dilorini tsa ho romela. Ba kgetha ditaelo, ba paka mabhokise, ba laole ba qhekela diphahla ba ba thusa mokgaradikole ho romela. Mosebetsi wa mmele o lokeditsweng o nyakwang thata.',
        keySkills: ['Ho tiisa mmele', 'Ho nepa', 'Mosebetsi wa sehlopha', 'Ho latela ditaelo', 'Ho bala'],
        salaryRange: 'E bontša: R4,500–R9,000/ho a kgwedi (e fapana ka molekhi le tikoloho)',
        howToGetStarted: [
          'Theha aterese ya imeile ya mahala le CV e fokotseng.',
          'Batla ho Indeed, Careers24 le matlaatlong a mosebetsi wa dikompani tsa ho romela.',
          'Etela maphaka le bakgweketsi u botše ka dibaka.',
          'Ikwale dithuto tsa ho romela ho TETA.',
          'Tšoara ID ya hao le setifikeiti sa matrik.',
        ],
        recommendedTraining: [
          'Dithuto tsa ho romela le ho paka tsa TETA',
          'Lesense ya forokhiliti (ke thuso e kgolo)',
          'Tlhahlobo ya bophelo le tšireletso',
        ],
        tips: [
          'Nepa ha o kgetha - diphoso di tšea chelete.',
          'Hlokomelle ha o laola; šomiša ditsela tsa ho tšireletsa.',
          'Tshepa u fihla nako; diromelwa di ya ka maemong.',
        ],
      },
    },
  ],
  tn: [
    {
      id: 1,
      name: 'Kgwebo ya thekiso (Mothusi wa kerekere / Mokoloki wa madi)',
      shortDescription: 'Tirela badirisi, tsamaisa madi mme o tshware dithoto di tladitswe.',
      categoryEmoji: '🛍️',
      detail: {
        description:
          'Bathusi ba kerekere le bakoloki ba madi ba thusa badirisi go batla dikhaharego, ba tsamisa madi kwa sekirining, ba tlatsa dikereke ba tswe dilo di le popego. Ke tiro ya maemo a kwa tlase e e tswaelelwang bana ba ba bannye kwa Aforika Borwa.',
        keySkills: ['Tirelo ya badirisi', 'Go tsamisa madi le dikarata', 'Balo ya motheo', 'Puisano', 'Go phepa le go nna ka nako'],
        salaryRange: 'E supa: R4,500–R7,500/kgwedi (e farologana ka lefelo le mogabi)',
        howToGetStarted: [
          'Tlhoma aterese ya imeile ya makhafeng (ja. Gmail) le CV e bonolo.',
          'Batla ditiro mo Indeed, Careers24 le PNet.',
          'Tlholela di-mall mme o botsa baoki ba dikereke ka ditiro tsa go tsena ka maoto.',
          'Ikwalatse dithuto tsa thekiso mo W&RSETA.',
          'Bea ID ya gago le setifikeiti sa matrik, o apere ka go phepa tlhahlobong.',
        ],
        recommendedTraining: [
          'Dithuto tsa thekiso tsa W&RSETA kgotsa dikhoso tse dikhutshwane',
          'Thuto ya khomphutara ya motheo / tsamaiso ya go reka (POS)',
          'Khoso e khutshwane ya tirelo ya badirisi',
        ],
        tips: [
          'Nna ka nako mme o apere ka go phepa - patagiso ya ntlha e botlhokwa kgwebong.',
          'Tshwara dikgatiso tsa ID ya gago le setifikeiti sa matrik.',
          'Nnonotšha mme o nne o swabile le badirisi ba ba thatafatsang.',
        ],
      },
    },
    {
      id: 2,
      name: 'Boamogeli ba baeti (Motlapele / Basebetsi ba hotele)',
      shortDescription: 'Tirela dijo le dinose, thusa baeti mme o tshwarele mafelo a dijo a sa tsamayang sentle.',
      categoryEmoji: '🍽️',
      detail: {
        description:
          'Basebetsi ba boamogeli baeti ba dira direkotoreng, dihoteleng, mafelong a go amogela baeti le go apea. Ba tsaya ditaelo, ba neela dijo, ba bea ditafola, ba phepa ba amogela baeti ka maswabi. Maemo a a fetofetogang a thusa go aga bokgoni jwa puisano.',
        keySkills: ['Tirelo ya badirisi', 'Tiro ya setlhopha', 'Go dira ka tlase ga kgatelelo', 'Puisano', 'Pabalesego ya dijo ya motheo'],
        salaryRange: 'E supa: R4,500–R8,000/kgwedi le ditherisano (e farologana ka mogabi)',
        howToGetStarted: [
          'Dira CV e khutshwane le aterese ya imeile ya makhafeng.',
          'Batla mo Indeed, Careers24 le matlaalong a mosebetsi wa dihotele.',
          'Tsena direkotoreng le dihoteleng o na le CV mme o botsa ka ditiro.',
          'Ikwalatse dithuto tsa boamogeli baeti mo Services SETA kgotsa CATHSSETA.',
          'Ipaakantse go simolola mafelong a boikepi kapa maemo a bosehla.',
        ],
        recommendedTraining: [
          'Dithuto tsa boamogeli baeti tsa CATHSSETA',
          'Khoso e khutshwane ya pabalesego ya dijo / go phepa',
          'Thuso ya ntlha ya bokgoni',
        ],
        tips: [
          'Tshwara menwana e khutshwane, moriri o phepa mme unifomo e phepa.',
          'Tshwara dikgatiso tsa ID ya gago le setifikeiti sa matrik.',
          'Ditherisano di ka oketsa madi - tirela ka maikutlo a montle.',
        ],
      },
    },
    {
      id: 3,
      name: 'IT & Thuso (Thuso ya IT ya maemo a kwa tlase)',
      shortDescription: 'Thusa batho ka dithihatlo tsa khomphutara, tlhoma dithulusi mme o thuise basebetsi ka mogala.',
      categoryEmoji: '💻',
      detail: {
        description:
          'Basebetsi ba IT ba maemo a kwa tlase ba thusa balekane kgotsa badirisi go lokiša dithihatlo tsa khomphutara, ba tsenya mananeo, ba tlhoma diprintara mme ba arabele dipotšišo tsa thekenoloi. Ke go simolola ga botle fa o rata thekenoloi le go lokiša dithihatlo.',
        keySkills: ['Bokgoni jwa khomphutara', 'Go lokiša dithihatlo', 'Go pelokgale', 'Puisano', 'Neteweake ya motheo'],
        salaryRange: 'E supa: R6,000–R12,000/kgwedi (e farologana ka mogabi le boitemogelo)',
        howToGetStarted: [
          'Tlhoma aterese ya imeile ya makhafeng le CV e khutshwane e e bolelang bokgoni jwa khomphutara.',
          'Batla ditiro tsa maemo a kwa tlase mo Indeed, Careers24, PNet le LinkedIn.',
          'Ikwalatse dithuto tsa IT mo MICT SETA.',
          'Ithute go lokiša dithihatlo tse di tlwaelesegileng khomphutara ya gago kapa laiburaring.',
          'Akanye ka khoso e khutshwane ya A+ kgotsa setifikeiti sa IT sa motheo.',
        ],
        recommendedTraining: [
          'Dithuto tsa IT tsa MICT SETA',
          'CompTIA A+ kgotsa setifikeiti se se tshwanang sa maemo a kwa tlase sa IT',
          'Dikhoso tsa makhafeng tsa inthanete (ja. Cisco Networking Academy)',
        ],
        tips: [
          'Bontsha go pelokgale - bontsi jwa tiro ke go thusa batho ba ba sa itseng thekenoloi.',
          'Tsale pele o ithuta mananeo a mantle le dithulusi.',
          'Ngola dithihatlo le ditharabololo gore o ithute ka lebelo.',
        ],
      },
    },
    {
      id: 4,
      name: 'Kago (Tiro ya kakaretso / Mothusi wa barwedi)',
      shortDescription: 'Thusa mabalong a kago: rwala dithoto, thuba samente mme o thuise barwedi.',
      categoryEmoji: '🏗️',
      detail: {
        description:
          'Basebetsi ba kakaretso ba kago ba thusa barwedi, ba rwala dithoto, ba thuba samente, ba phepa lefelo la kago ba ba thusa barwedi jaaka ba motlakase le ba metsi. Tiro ya mmele e ruta bokgoni bo bonang ka go dira.',
        keySkills: ['Go nona mmele', 'Go latela ditaelo', 'Tiro ya setlhopha', 'Go ana pabalesego', 'Go tshepahala'],
        salaryRange: 'E supa: R4,500–R9,000/kgwedi (e farologana ka porojeke le lefelo)',
        howToGetStarted: [
          'Dira CV le aterese ya imeile ya makhafeng.',
          'Tlholela mabalong a kago le baba ba ba rweletseng tiro o botsa ka tiro.',
          'Bule ditlhokego tsa tiro tsa Lephatla la Tiro le Basebetsi.',
          'Ikwalatse dithuto tsa kago mo CETA (Construction SETA).',
          'Bea ID ya gago mme o apere ditšhutu tsa pabalesego fa o na le tsone.',
        ],
        recommendedTraining: [
          'Dithuto tsa kago tsa CETA',
          'Tlhahlobo ya bophelo le pabalesego (karata e tala / SAMTRAC ya motheo)',
          'Bokgoni jwa go thusa barwedi',
        ],
        tips: [
          'Apaya ka melea diaparo tsa pabalesego - ditšhutu, sedibengwa le sefepa.',
          'Tshepahala; kago e rata basebetsi ba ba tlaeletseng letsatsi le letsatsi.',
          'Tshwara ID ya gago le kgatiso ya setifikeiti sa matrik.',
        ],
      },
    },
    {
      id: 5,
      name: 'Taolo le Ofising (Moamogeli / Mokoloki wa data)',
      shortDescription: 'Araba mogala, tsena data khomphutara mme o laole ditokomelo tsa ofisi.',
      categoryEmoji: '🗂️',
      detail: {
        description:
          'Baamogeli le bakoloki ba data ba amogela baeti, ba araba mogala, ba thaepe tshedimosetso khomphutara, ba laole ditokomelo ba phepa ofisi. E tshwanela ba ba laolesegang le ba ba nang le bokgoni jwa khomphutara.',
        keySkills: ['Bokgoni jwa khomphutara (Word, Excel)', 'Puisano', 'Go laola', 'Mekgwa ya mogala', 'Go nne nepa'],
        salaryRange: 'E supa: R5,000–R10,000/kgwedi (e farologana ka mogabi)',
        howToGetStarted: [
          'Tlhoma aterese ya imeile ya makhafeng le CV e laolesegang e e bolelang bokgoni jwa khomphutara.',
          'Batla mo Indeed, Careers24 le PNet ditiro tsa moamogeli kgotsa mokoloki wa data.',
          'Ikwalatse dithuto tsa taolo ya ofisi mo Services SETA.',
          'Ithute go thaepea le MS Office ya motheo laiburaring kapa mafapheng.',
          'Bea ID ya gago le setifikeiti sa matrik bakeng sa dikgwebo.',
        ],
        recommendedTraining: [
          'Dithuto tsa taolo ya kgwebo tsa Services SETA',
          'Khoso e khutshwane ya Microsoft Office',
          'Go thaepea le go tsena data',
        ],
        tips: [
          'Bua ka boikokobetso mo mogaleng - ke motho wa ntlha ya go kopana le ene.',
          'Laola sebaka sa gago sa go dira.',
          'Hlahloba data o e tsena gabedi go qoba dithihatlo.',
        ],
      },
    },
    {
      id: 6,
      name: 'Lefapha la mogala (Tiro ya tirelo ya badirisi)',
      shortDescription: 'Araba mogala, lokiša dithihatlo mme o neele tshedimosetso ka mogala.',
      categoryEmoji: '📞',
      detail: {
        description:
          'Basebetsi ba lefapha la mogala ba araba mogala, ba thusa ka dipotšišo, ba ngola dikhwaele mme ka nako ba rekisa ka mogala. Bana ba bannye ba le bantsi ba Aforika Borwa ba simolola tiro ya bone fano, ba aga bokgoni jwa puisano jo bo nonofileng.',
        keySkills: ['Puo e e malebalo', 'Go reetsa', 'Go lokiša dithihatlo', 'Go pelokgale', 'Bokgoni jwa khomphutara'],
        salaryRange: 'E supa: R5,500–R11,000/kgwedi (e farologana ka mogabi le maemo)',
        howToGetStarted: [
          'Dira imeile ya makhafeng le CV e supang bokgoni jwa puisano.',
          'Batla ditiro tsa lefapha la mogala mo Indeed, Careers24 le PNet.',
          'Batla dithuto tsa lefapha la mogala mo Services SETA.',
          'Ithute go bua ka go malebalo le go tshwara badirisi ba ba ikemiseditseng.',
          'Tshwara ID ya gago le setifikeiti sa matrik.',
        ],
        recommendedTraining: [
          'Dithuto tsa lefapha la mogala tsa Services SETA',
          'Khoso e khutshwane ya tirelo ya badirisi',
          'Bokgoni jwa khomphutara le go thaepea',
        ],
        tips: [
          'Bua ka go malebalo mme o nne o sitile le fa badirisi ba sa dumelelane.',
          'Ithute sekhaharego kgotsa tirelo ya kgwebo ka botlalo.',
          'Ipaakantse go dira ka maemo, go akaretswa maitseboa le matsatsi a boikepi.',
        ],
      },
    },
    {
      id: 7,
      name: 'Pabalesego (Moloki wa pabalesego)',
      shortDescription: 'Lokiša mafelo, laola go tsena mme o pabale batho le dithoto.',
      categoryEmoji: '🛡️',
      detail: {
        description:
          'Baloki ba pabalesego ba lokiša diago, ba laola ba ba tsenang, ba fologa mabalong ba arabele maemo a sa laelwang. Tiro e tlhoka go kwala mo PSIRA mme e tlhokega thata kwa Aforika Borwa.',
        keySkills: ['Go lemoga', 'Go nona mmele', 'Boikokobetso', 'Go latela tsamaiso', 'Puisano'],
        salaryRange: 'E supa: R4,500–R8,000/kgwedi (e farologana ka mogabi le maemo)',
        howToGetStarted: [
          'Tsea setifikeiti sa go phela ka dipodise kwa seteišeneng sa gago SAPA sa go fihla.',
          'Kwala o ithute mo PSIRA ya pabalesego ya go tshepahala.',
          'Ikwalatse dikomponi tsa pabalesego tse di kwadilweng lefelong la gago.',
          'Batla mo Indeed, Careers24 le matlaalong a dikomponi tsa pabalesego.',
          'Bea ID, setifikeiti sa matrik le ditokomelo tsa PSIRA.',
        ],
        recommendedTraining: [
          'Thuto ya pabalesego ya PSIRA Maemo E go ya go C',
          'Thuso ya ntlha',
          'Go tima molelo / khoso e khutshwane ya pabalesego',
        ],
        tips: [
          'Setifikeiti sa go phela ka dipodise se a tlhokega - se tsea ka nako.',
          'Nna o lebile mme o latela tsamaiso ya pabalesego ka melea.',
          'Nna o ikokobeditse o tshepa; baabi ba hlahloba baloki ba pabalesego ka botlalo.',
        ],
      },
    },
    {
      id: 8,
      name: 'Bobotala le Moriri (Mothusi wa salon)',
      shortDescription: 'Thusa masalong: amogela badirisi, phepa dithulusi mme o thuise tirelo ya bobotala.',
      categoryEmoji: '💇',
      detail: {
        description:
          'Bathusi ba salon ba amogela badirisi, ba tla moriri, ba phepa dithulusi, ba bea lefelo ba ba thusa barwadi ba moriri le botala. Ke tsela e botle ya go tsena kgwebong ya botala fa o ithuta ka go dira.',
        keySkills: ['Tirelo ya badirisi', 'Go phepa', 'Go thusa', 'Go reetsa', 'Go laola'],
        salaryRange: 'E supa: R4,000–R7,500/kgwedi (e farologana ka salon le lefelo)',
        howToGetStarted: [
          'Tlhoma aterese ya imeile ya makhafeng le CV e khutshwane.',
          'Tsena masalong a lefelong la gago o botsa ka ditiro tsa go thusa.',
          'Batla mo Indeed le Careers24 ditiro tsa go thusa salon.',
          'Ikwalatse dithuto tsa botala kgotsa moriri mo CATHSSETA.',
          'Tshwara ID ya gago le setifikeiti sa matrik.',
        ],
        recommendedTraining: [
          'Dithuto tsa botala kgotsa moriri (CATHSSETA)',
          'Khoso e khutshwane ya go phepa le go tlhatswa',
          'Mabapi le tirelo ya badirisi',
        ],
        tips: [
          'Nna o phepa le sebaka sa gago sa go dira.',
          'Nna o monate o thusa badirisi.',
          'Lebile o ithute ditsela go barwadi ba ba nang le boitemogelo.',
        ],
      },
    },
    {
      id: 9,
      name: 'Go apaya dijo (Mothusi wa khitshing / Dijo tse di potlakele)',
      shortDescription: 'Thusa khitshineng: lokiša dithoto, phepa mafelo mme o thuise bapayi.',
      categoryEmoji: '🍳',
      detail: {
        description:
          'Bathusi ba khitshing le ba dijo tse di potlakele ba lokiša dithoto, ba apaya dithoto tse di bonolo, ba phepa khitshing ba ba thusa bapayi. Ke tiro ya ntlha e e tlwaelesegileng direkotoreng le mafapheng a dijo tse di potlakele, e na le maemo a a fetofetogang.',
        keySkills: ['Go dira ka tlase ga kgatelelo', 'Go phepa', 'Tiro ya setlhopha', 'Go latela ditsipele', 'Potlakele'],
        salaryRange: 'E supa: R4,000–R7,000/kgwedi (e farologana ka mogabi)',
        howToGetStarted: [
          'Dira imeile ya makhafeng le CV e khutshwane.',
          'Tsena mafapheng a dijo tse di potlakele le direkotoreng o na le CV.',
          'Batla mo Indeed, Careers24 le matlaalong a mosebetsi wa dihotele.',
          'Ikwalatse dithuto tsa dijo mo CATHSSETA.',
          'Tshwara ID ya gago le setifikeiti sa matrik.',
        ],
        recommendedTraining: [
          'Dithuto tsa dijo le dinose tsa CATHSSETA',
          'Khoso e khutshwane ya pabalesego ya dijo',
          'Bokgoni jwa go apaya jwa motheo',
        ],
        tips: [
          'Phepa matshwao, diunifomo le mafelo ka melea.',
          'Dire ka potlakele mme o hlokomelle - khitshing ke kgolo.',
          'Tshepa; maemo a akaretsa matsatsi a boikepi.',
        ],
      },
    },
    {
      id: 10,
      name: 'Go romela le go paka (Mokgethi / Mopaki / Mothusi wa mogokgari)',
      shortDescription: 'Kgetha o pake ditaelo, rwala dilori mme o thuise go romelwa dithoto.',
      categoryEmoji: '📦',
      detail: {
        description:
          'Bakgethi, bapaki le bathusi ba mogokgari ba dira maphakeng le diloring tsa go romela. Ba kgetha ditaelo, ba paka mabhokose, ba rwala ba sekametse dithoto ba ba thusa mogokgari go romelwa. Tiro ya mmele e e laolesegang e e tlhokegang thata.',
        keySkills: ['Go nona mmele', 'Go nne nepa', 'Tiro ya setlhopha', 'Go latela ditaelo', 'Balo'],
        salaryRange: 'E supa: R4,500–R9,000/kgwedi (e farologana ka mogabi le lefelo)',
        howToGetStarted: [
          'Tlhoma aterese ya imeile ya makhafeng le CV e khutshwane.',
          'Batla mo Indeed, Careers24 le matlaalong a mosebetsi wa dikomponi tsa go romela.',
          'Tlholela maphaka le baba ba ba rweletseng tiro o botsa ka ditiro.',
          'Ikwalatse dithuto tsa go romela mo TETA.',
          'Tshwara ID ya gago le setifikeiti sa matrik.',
        ],
        recommendedTraining: [
          'Dithuto tsa go romela le go paka tsa TETA',
          'Laesenke ya forokhilifuti (ke thuso e kgolo)',
          'Tlhahlobo ya bophelo le pabalesego',
        ],
        tips: [
          'Nepa fa o kgetha - dithihatlo di tsea madi.',
          'Hlokomelle fa o rwala; dirisa ditsela tsa go pabalesega.',
          'Tshepa o fihla ka nako; diromelwa di ya ka maemong.',
        ],
      },
    },
  ],
  nr: [
    {
      id: 1,
      name: 'Kuthengisa (Msebetsi wesitolo / Othengisayo)',
      shortDescription: 'Phatha abathengi, tjheja imali uphindze uthathe izitolo zigcwala.',
      categoryEmoji: '🛍️',
      detail: {
        description:
          'Abasekeli besitolo nabadayi bathengisa baphatha abathengi ukuthola imikhiqizo, batjheja imali esitolo, bathathe izitolo baphinde bagcine isitolo sicocekile sihle. Kumsebenzi wamazinga angezansi kubantu abasha boke eSewula Afrika.',
        keySkills: ['Isebense labathengi', 'Ukuhamba nemali namakhadi', 'Ukubala ngokwesiseko', 'Ukwathintana', 'Ukucocekile nokufika ngesikhathi'],
        salaryRange: 'Kubonisa: R4,500–R7,500/ngenyanga (itjhintjha ngendawo nomqashi)',
        howToGetStarted: [
          'Yakha ikheli le-imeyili ngaphandle kwemali (nj. Gmail) ne-CV elula.',
          'Tjheja iindawo zomsebenzi kwi-Indeed, Careers24 kanye ne-PNet.',
          'Vakashela i-mall ubuze abaphathi besitolo ngeendawo ezingangenwa ngaphandle kwebhamba.',
          'Faka izicelo zokufunda ngokuthengisa kwi-W&RSETA.',
          'Zibeke i-ID yakho nesatifikhati samatirik, ugqokile kahle ekuhlolweni.',
        ],
        recommendedTraining: [
          'Izinhlelo zokufunda ngokuthengisa ze-W&RSETA noma izifundo ezifushane',
          'Ukuzifundisa ngekhomphyutha / inkqubo yokuthengisa (POS)',
          'Isifundo esifushane somsebenzi wabathengi',
        ],
        tips: [
          'Ufike ngesikhathi uphindhe ugqoke kahle - okokuqala kubalulekile ekuthengiseni.',
          'Thatha amakhophi we-ID yakho nesatifikhati samatirik.',
          'Hleka uphindhe ubeke isibindi kubathengi abanzima.',
        ],
      },
    },
    {
      id: 2,
      name: 'Ukwamukela izivakashi (Abasebenzi bedlada / Abasebenzi behotela)',
      shortDescription: 'Phatha ukudla nezasela, siza izivakashi uphindhe ugcine izindawo zokudla zisebenza.',
      categoryEmoji: '🍽️',
      detail: {
        description:
          'Abasebenzi bokwamukela izivakashi basebenza ezindaweni zokudla, emahotela, ezindaweni zokwamukela izivakashi nakubhiko. Bathatha imiyalo, bathengisa ukudla, balungise iitafula, bacoce bamukela izivakashi ngobujamo obuhle. Amahola angena njalo afaka isandla ekwakheni isipiliyoni sokuqhwebana.',
        keySkills: ['Umsebenzi wabathengi', 'Ukusebenza ngqo nabanye', 'Ukusebenza ngaphansi kwehluleko', 'Ukughwawula', 'Ukugcinwa kokudla okusesiseko'],
        salaryRange: 'Kubonisa: R4,500–R8,000/ngenyanga uphindhe namatipsi (itjhintjha nomqashi)',
        howToGetStarted: [
          'Lungise i-CV emfushane nekeli le-imeyili elinganamali.',
          'Tjheja kwi-Indeed, Careers24 kanye namaphepha omsebenzi wehhotela.',
          'Ngena ezindaweni zokudla nahotela ne-CV yakho ubuze iindawo.',
          'Faka izicelo zokufunda ngeendawo kwi-Services SETA noma i-CATHSSETA.',
          'Ipe ukuthi uqale ngemini zekkhasi noma amahola kasikhathi.',
        ],
        recommendedTraining: [
          'Izinhlelo zokufunda ze-CATHSSETA',
          'Isifundo sokugcinwa kokudla / ukucoca',
          'Isiseko sokuphathwa kwesikhathi',
        ],
        tips: [
          'Gcina izinzwela ezifushane, inwele zicocekile uphindhe ungunya ucocekile.',
          'Thatha amakhophi we-ID yakho nesatifikhati samatirik.',
          'Amatipsi angafaka imali yakho - sebenza ngomoya omuhle.',
        ],
      },
    },
    {
      id: 3,
      name: 'I-IT & Itheski Loso (Ukusekelwa I-IT osesizeni)',
      shortDescription: 'Siza abantu ngeenkathanekhompuyutha, misa izixhobo uphindhe usekele abasebenzisi ngefowuni.',
      categoryEmoji: '💻',
      detail: {
        description:
          'Abasekelwa be-IT abaseselevelini ezingezansi basekela abasebenzi noma abathengi ukulungisa iinkathanekhompuyutha, bafaka izinhlelo, bamise iziphrinta uphindhe baphendule imibuzo yobuchwepheshe. Kusuke kuhle uma uthanda ubuchwepheshe nokuxazulula iinkathakho.',
        keySkills: ['Ukwazi ngekhomphyutha', 'Ukuxazulula iinkathakho', 'Ukubekezela', 'Ukughwawula', 'Ukuxhunyaniswa ngokwesiseko'],
        salaryRange: 'Kubonisa: R6,000–R12,000/ngenyanga (itjhintjha ngomqashi nesipiliyono)',
        howToGetStarted: [
          'Yakha i-akhawunti yameyili ngenamali ne-CV emfushane elandela izipiliyono zekhomphyutha.',
          'Tjheja iindawo esesilebulini ezingezansi kwi-Indeed, Careers24, PNet ne-LinkedIn.',
          'Faka izicelo zokufunda nge-IT kwi-MICT SETA.',
          'Zifundise ukulungisa iinkathanekhompuyutha ekhaya noma esitokisini.',
          'Cabanga ngemfundo yasezafushane ye-A+ noma isatifikhati se-IT sesiseko.',
        ],
        recommendedTraining: [
          'Izinhlelo zokufunda nge-IT ze-MICT SETA',
          'I-CompTIA A+ noma isatifikhati esingana nesesilebulini ezingezansi se-IT',
          'Izifundo ezinganamali ze-inthanethi (nj. i-Cisco Networking Academy)',
        ],
        tips: [
          'Khombisa ukubekezela - inengi lomsebenzi ukusekela abantu abangenalo ulwazi lobuchwepheshe.',
          'Qhubeka ufunda izinhlelo namathuluzi amasha.',
          'Bhala iinkathakho nezixazululi ukuze ufinyele ngokushesha.',
        ],
      },
    },
    {
      id: 4,
      name: 'Ukwakha (Umsebenzi ojwayelekile / Osekela abakhi)',
      shortDescription: 'Siza kumagumbi okwakha: thatha izinto, hlanganisa isamente uphindhe usekele abakhi.',
      categoryEmoji: '🏗️',
      detail: {
        description:
          'Abasebenzi ojwayelekile bokwakha basekela abakhi, bathatha izinto, bahlanganisa isamente, bacoce indawo yokwakha baphindhe basekele abakhi njengabadayiwe bamagumbi. Umsebenzi womzimba ofundisa isipiliyono ngokusebenza ngesikhathi.',
        keySkills: ['Ukuvuka komzimba', 'Ukulandela imiyalo', 'Ukusebenza ngqo nabanye', 'Ukuqaphela ukuphepha', 'Ukuthembeka'],
        salaryRange: 'Kubonisa: R4,500–R9,000/ngenyanga (itjhintjha ngomsebenzi nendawo)',
        howToGetStarted: [
          'Lungise i-CV nekeli le-imeyili elinganamali.',
          'Vakashela indawo zokwakha kanye nabadayisana bomsebenzi ubuze umsebenzi.',
          'Tjheja amaphoyinti omsebenzi kuSebente soQashiwo kanye noBusebenti.',
          'Faka izicelo zokufunda ngokwakha kwi-CETA (Construction SETA).',
          'Thatha i-ID yakho uphinde ugqoke izicathulo zokuphepha uma ukhona.',
        ],
        recommendedTraining: [
          'Izinhlelo zokufunda zokwakha ze-CETA',
          'Isikhathi sokuqalisa ngokuphepha kanye nepilo (ikhadi eliluhlaza / i-SAMTRAC sesiseko)',
          'Isipiliyono sokupekela abakhi',
        ],
        tips: [
          'Gqoka izimpahla zokuphepha njalo - izicathulo, isiqhelo nekhowa.',
          'Thembeka; ukwakha kubiza abasebenzi abaphuma yonke imihla.',
          'Thatha i-ID yakho kanye namakhophi wesatifikhati samatirik.',
        ],
      },
    },
    {
      id: 5,
      name: 'Ukuqasha Nohlelo (Othomukela / Othwebhala Idata)',
      shortDescription: 'Phendula ocingweni, faka ulwazi eku-inthanethi uphindhe ugcine amaphepha acocekile.',
      categoryEmoji: '🗂️',
      detail: {
        description:
          'Othomukela kanye nabadwebi bedatha bamukela izivakashi, baphendula ocingweni, bafake ulwazi ekhomphyutheni, balungise amaphepha uphindhe balondoloze igumbi lihleli kahle. Kubaluleke kubantu abalondoloze kahle abakwazi ukuhamba nekhomphyutha.',
        keySkills: ['Ukuhamba nekhomphyutha (Word, Excel)', 'Ukughwawula', 'Ukulondoloza', 'Iindlela zocingo', 'Ukuqinisekisa'],
        salaryRange: 'Kubonisa: R5,000–R10,000/ngenyanga (itjhintjha ngomqashi)',
        howToGetStarted: [
          'Lungise ikheli le-imeyili elinganamali ne-CV eqakathekileyo elandela isipiliyono sekhumphuyutha.',
          'Tjheja kwi-Indeed, Careers24 kanye ne-PNet iindawo zomsebenzi wokuqasha.',
          'Faka izicelo zokufunda ngokulawula i-ofisi kwi-Services SETA.',
          'Zifundise ukubhala uphindhe ukuhamba ne-MS Office esitokisini kumaLunga.',
          'Thatha i-ID yakho nesatifikhati samatirik.',
        ],
        recommendedTraining: [
          'Izinhlelo zokufunda ze-Services SETA zokuqasha ibhizinisi',
          'Isifundo esifushane se-Microsoft Office',
          'Ukubhala nokufaka idatha',
        ],
        tips: [
          'Hlala uqhwebana ngamandla ocingweni - ngumuntu wokuqala ongathintana naye.',
          'Gcina indawo yakho yomsebenzi icocekile nahlelelwe.',
          'Qinisekisa idatha kabangqa ukuze ungathathi njalo.',
        ],
      },
    },
    {
      id: 6,
      name: 'Ikhaya Lezingcingo (Ukwenza umsebenzi nabathengi)',
      shortDescription: 'Phendula ocingweni, uxazulule iinkathakho uphindhe unike ulwazi ngesikhathi.',
      categoryEmoji: '📞',
      detail: {
        description:
          'Abasebenzi bekhaya lezingcingo baphendula ocingweni, basekela ngeemibuzo, bathatha izikhalazo uphindhe ngemivla bathengise ngefowuni. Inengi labantu abasha eSewula Afrika laqala isebense labo lapha, lafaka isandla ekwakheni isipiliyono sokuqhwebana namandla.',
        keySkills: ['Ukukhuluma ngokusobala', 'Ukulalela', 'Ukuxazulula iinkathakho', 'Ukubekezela', 'Ukubhaqabhakela ngekhomphyutha'],
        salaryRange: 'Kubonisa: R5,500–R11,000/ngenyanga (itjhintjha ngomqashi nesikhathi)',
        howToGetStarted: [
          'Yenza i-imeyili elinganamali ne-CV egqamisa isipiliyono sokuqhwebana.',
          'Tjheja iindawo zomsebenzi kwi-Indeed, Careers24 kanye ne-PNet.',
          'Bheka izinhlelo zokufunda ze-Services SETA.',
          'Zifundise ukukhuluma ngokusobala uphindhe ukuphatha abathengi abalinganiselwe.',
          'Thatha i-ID yakho nesatifikhati samatirik.',
        ],
        recommendedTraining: [
          'Izinhlelo zokufunda ze-Services SETA',
          'Isifundo esifushane semsebenzi wabathengi',
          'Ukuhamba nekhomphyutha nokubhala',
        ],
        tips: [
          'Khuluma ngokusobala uphindhe ubeke isibindi, kanye nakubathengi ababuthaka.',
          'Funda ngokukhululeka umkhiqizo noma umsebenzi ohlinzekile.',
          'Ipe ukusebenza ngesikhathi, ngokubandakanya amatjhabo namasonto.',
        ],
      },
    },
    {
      id: 7,
      name: 'Ukuqapha Nokuphepha (Umkhaphi Wokuphepha)',
      shortDescription: 'Qapha amagumbi, lawula ukungena uphindhe ugcine abantu nezinto zikhululekile.',
      categoryEmoji: '🛡️',
      detail: {
        description:
          'Abaqaphi bokuphepha baqapha izakhiwo, balawula ukuthi ngubani ongena, bahlola amagumbi uphindhe baphendule izenzo ezingalunganga. Umsebenzi udinga ukubhalisa kwi-PSIRA uphinde ufuna kakhulu kulo onke amazwe eSewula Afrika.',
        keySkills: ['Ukuqapha', 'Ukuvuka komzimba', 'Ukuqotho', 'Ukulandela imiyalo', 'Ukughwawula'],
        salaryRange: 'Kubonisa: R4,500–R8,000/ngenyanga (itjhintjha ngomqashi ngesibalo)',
        howToGetStarted: [
          'Thola isatifikhati sokubhala amapholisa esiteshini sakho SAPA saseduze.',
          'Bhalisa uphinde uzenze isikolo se-PSIRA sokuphepha.',
          'Faka izicelo emaKhomphani abhaliswe ukuphepha endaweni yakho.',
          'Tjheja kwi-Indeed, Careers24 namaphepha amaKhomphani okuphepha.',
          'Thatha i-ID yakho, isatifikhati samatirik uphhe namaphepha e-PSIRA.',
        ],
        recommendedTraining: [
          'Ukuzifundisa ngokuphepha kwe-PSIRA Isibalo E ukuya ku-C',
          'Iziseko zokuqedela',
          'Ukuqedela umlilo / isifundo esifushane sokuphepha',
        ],
        tips: [
          'Isatifikhati sokubhala amapholisa sidinga - sithole kusenesikhathi.',
          'Qhubeka uqapha uphinde ulandela imiyalo yokuphepha ngaso sonke isikhathi.',
          'Qhubeka uqotho uphinde uthembeka; abaqashi bahlola abaqaphi ngokujulile.',
        ],
      },
    },
    {
      id: 8,
      name: 'Ubuhle Nemagqiza (Umsebetsi Wesaloni)',
      shortDescription: 'Siza emasaloni: phatha abathengi, gcina izinto zicocekile uphhe usekele imisebenzi yobuhle.',
      categoryEmoji: '💇',
      detail: {
        description:
          'Abasebenzi besaloni bamukela abathengi, bahlanza inwele, bacoce izinto, balungise iindawo uphhe basekele abakhwela bobuhle. Kuyindlele enhle yokungena emhlabeni wobuhle ngenkathi ufunda ngokusebenza.',
        keySkills: ['Umsebenzi wabathengi', 'Ukucocekile', 'Ukusiza', 'Ukulalela', 'Ukuqotho'],
        salaryRange: 'Kubonisa: R4,000–R7,500/ngenyanga (itjhintjha ngesaloni nendawo)',
        howToGetStarted: [
          'Lungise ikheli le-imeyili elinganamali ne-CV emfushane.',
          'Ngena emasaloni endaweni yakho ubuze iindawo.',
          'Tjheja kwi-Indeed kanye ne-Careers24 iindawo zokusekela isaloni.',
          'Faka izicelo zokufunda ngobuhle noma inwele kwi-CATHSSETA.',
          'Thatha i-ID yakho nesatifikhati samatirik.',
        ],
        recommendedTraining: [
          'Izinhlelo zokufunda zobuhle noma inwele (CATHSSETA)',
          'Isifundo sokucoca nokugcinwa',
          'Iziseko semsebenzi wabathengi',
        ],
        tips: [
          'Gcina inqanaba lakho lomsebenzi lihlale licocekile nahlelelwe.',
          'Qhubeka uhle uphinde usize abathengi.',
          'Buka uphinde uhlathindlele abakhwela abanasipiliyono.',
        ],
      },
    },
    {
      id: 9,
      name: 'Ukulungiselela Ukudla (Umsebetsi Wekhishi / Ukudla Okusheshayo)',
      shortDescription: 'Siza emakhishini: lungiselela izinto, gcina amagumbi acocekile uphhe usekele abapheki.',
      categoryEmoji: '🍳',
      detail: {
        description:
          'Abasekeli bekhishi uphhe abasebenzi bokudla okusheshayo balungiselela izinto, bapheke izinto ezilula, bacoce ikhishi uphhe basekele abapheki. Kuyimsebenzi yokuqala ephathekako ezindaweni zokudla kanye namafekithari okudla okusheshayo, enehora eliguquguqukako.',
        keySkills: ['Ukusebenza ngaphansi kwehluleko', 'Ukucocekile', 'Ukusebenza ngqo nabanye', 'Ukulandela imiyalo yokupheka', 'Ukushesha'],
        salaryRange: 'Kubonisa: R4,000–R7,000/ngenyanga (itjhintjha ngomqashi)',
        howToGetStarted: [
          'Lungise ikheli le-imeyili elinganamali ne-CV emfushane.',
          'Ngena ezitolo zokudla okusheshayo nasezindaweni zokudla i-CV yakho.',
          'Tjheja kwi-Indeed, Careers24 namaphepha omsebenzi wehhotela.',
          'Faka izicelo zokufunda ngokudla kwi-CATHSSETA.',
          'Thatha i-ID yakho nesatifikhati samatirik.',
        ],
        recommendedTraining: [
          'Izinhlelo zokufunda zokudla kwi-CATHSSETA',
          'Isifundo esifushane sokugcinwa kokudla',
          'Isipiliyono sokupheka ngokwesiseko',
        ],
        tips: [
          'Gcina izandla, ungunya uphhe amagumbi acocekile njalo.',
          'Sebenza ngokushesha kodwa qaphela - amakhishi makhulu.',
          'Thembeka; amasonto ajwayele ukubandakanywa.',
        ],
      },
    },
    {
      id: 10,
      name: 'Izokuthatha Izinto Namaphakhi (Umkhethi / Uphakhi / Umsekeli Womshayeli)',
      shortDescription: 'Khetha uphakhe imiyalo, ladhya amalori uphhe usizele ekulethweni kwemikhiqizo.',
      categoryEmoji: '📦',
      detail: {
        description:
          'Abasekeli abakhetha imiyalo basebenza emaphakhini uphhe kumalori wokuhamba. Bakhetha imiyalo, baphakhe amabhokhisi, baladhya uphhe bakhuphule izinto uphhe basekele abashayeli ekulethweni kwemikhiqizo. Umsebenzi womzimba ohlelelwanga ofuna kakhulu.',
        keySkills: ['Ukuvuka komzimba', 'Ukuqinisekisa', 'Ukusebenza ngqo nabanye', 'Ukulandela imiyalo', 'Ukubala'],
        salaryRange: 'Kubonisa: R4,500–R9,000/ngenyanga (itjhintjha ngomqashi nendawo)',
        howToGetStarted: [
          'Lungise ikheli le-imeyili elinganamali ne-CV emfushane.',
          'Tjheja kwi-Indeed, Careers24 namaphepha omsebenzi wamakhomphani okuhamba.',
          'Vakashela amaphakhi kanye nabadayisana bomsebenzi ubuze iindawo.',
          'Faka izicelo zokufunda nokuhambe kwi-TETA.',
          'Thatha i-ID yakho nesatifikhati samatirik.',
        ],
        recommendedTraining: [
          'Izinhlelo zokufunda zokuhamba nokuPakha ze-TETA',
          'Ilayisensi yefuthi (iluncedo elikhulu)',
          'Isikhathi sokuqalisa ngokuphepha kanye nepilo',
        ],
        tips: [
          'Qinisekisa ukukhetha imiyalo - amaphutha adla imali.',
          'Qaphela ekulayisheni; sebenzisa iindlela ezikhululekile.',
          'Thembeka uphinde ufake isibindi; ukulethwa kuhamba ngesikhathi.',
        ],
      },
    },
  ],
  ss: [
    {
      id: 1,
      name: 'Kutsengisa (Umsebenti wesitolo / Omatsi)',
      shortDescription: 'Phatsa bakhatsa, lolwa imali bese ugcinile tinsita tigcwele.',
      categoryEmoji: '🛍️',
      detail: {
        description:
          'Babasizi besitolo kanye nematsi bahambisa bakhatsa kutsi batfo imikhiqizo, balola imali emagunjaneni, bafaka tinsita kanye balondvolisa sitolo sicocekile sibe endzaweni. Kusebenti lokucondziswa kubadzala labasha kuyo yonkhe iNingizimu Afrika.',
        keySkills: ['Inkonzo yebakhatsa', 'Kuhamba nemali nakhekadi', 'Kubala ngesisekelo', 'Kuchumana', 'Kucocekile kanye kufika ngesikhatsi'],
        salaryRange: 'Kubonakalisa: R4,500–R7,500/ngenyanga (ishintjha ngesiteshi kanye nalowentfwa)',
        howToGetStarted: [
          'Lungisa ikheli le-imeyili lengakhokhwa (nj. Gmail) kanye ne-CV elula.',
          'Tjha tindzawo temsebenti ku-Indeed, Careers24 kanye na-PNet.',
          'Vakashele kuma-mall kubute babasizi besitolo ngetitulu.',
          'Faka tisicelo temfundvo ngekutsengisa ku-W&RSETA.',
          'Beke i-ID yakho kanye nesatifiketi sematrik, ugqokile kahle ekutsatsweni.',
        ],
        recommendedTraining: [
          'Tinhlela temfundvo ngekutsengisa kwa-W&RSETA kumbe tifundo letimfishane',
          'Kufundza ngekhomphyutha / inkqubo yekutsengisa (POS)',
          'Tifundo letimfishane tebakhatsa',
        ],
        tips: [
          'Ufike ngesikhatsi bese ugqokile kahle - kuqala kubalulekile kwatsengiso.',
          'Thatsa emakhophi we-ID yakho kanye nesatifiketi sematrik.',
          'Hleka bese uphephisa bakhatsa labanemandla.',
        ],
      },
    },
    {
      id: 2,
      name: 'Kwamukela bakhatsa (Umlindzi / Basebenti behothela)',
      shortDescription: 'Phatsa kudla kanye netidvwaba, size bakhatsa bese ugcine tindzawo tekudla tiyakha.',
      categoryEmoji: '🍽️',
      detail: {
        description:
          'Basebenti bekamukela bakhatsa basebenta kumaredzini, mahothela, emagumbi okwamukela kanye nekubhaka. Batsata timyalo, baphatsa kudla, balungise titafula, bacoce bese bamukela bakhatsa ngemoyo lomuhle. Mahola lahamba kahle asita ekwakheni tinhlela tekuchumana.',
        keySkills: ['Inkonzo yebakhatsa', 'Kusebenta nalabanye', 'Kusebenta ngaphansi kwemenulo', 'Kuchumana', 'Kuphepha kwakudla ngesisekelo'],
        salaryRange: 'Kubonakalisa: R4,500–R8,000/ngenyanga kanye netiphu (ishintjha nalowentfwa)',
        howToGetStarted: [
          'Lungise i-CV lemfishane kanye nentobuzana imeyili lengakhokhwa.',
          'Tjha ku-Indeed, Careers24 kanye nemaphepha emsebenti wehothela.',
          'Ngena emaredzini nahothela ne-CV yakho ubute ngetitulu.',
          'Faka tisicelo temfundvo ngebakhatsa ku-Services SETA kumbe i-CATHSSETA.',
          'Iphake kutsi uqale ngetinsuku tekugcina kumbe emahola kasikhatsi.',
        ],
        recommendedTraining: [
          'Tinhlela temfundvo te-CATHSSETA',
          'Tifundo letimfishane tekuphepha kwakudla / kucoceka',
          'Siseko sekuncedza',
        ],
        tips: [
          'Gcina iminwe lemfishane, inwele icocekile bese iyunifomu icocekile.',
          'Thatsa emakhophi we-ID yakho kanye nesatifiketi sematrik.',
          'Tiphu tingehletsa emalini yakho - phatsa ngemoyo lomuhle.',
        ],
      },
    },
    {
      id: 3,
      name: 'I-IT & Ideski Loso (Kusekelwa I-IT ekucaleni)',
      shortDescription: 'Sita bantu netinkinga tekhomphyutha, misa tidvwabu bese usekele basebenti ngecingo.',
      categoryEmoji: '💻',
      detail: {
        description:
          'Basekeli be-IT labacala embeli basekela basebenti kumbe bakhatsa kulungisa tinkinga tekhomphyutha, bafaka tinhlelo, bamisa tiphrinthara bese baphendula timibu yobuchwepheshe. Kucala kahle uma utsandza ubuchwepheshe kanye nokucondza tinkinga.',
        keySkills: ['Kwati ngekhomphyutha', 'Kucondza tinkinga', 'Kubekezela', 'Kuchumana', 'Kuhlanganiswa ngesisekelo'],
        salaryRange: 'Kubonakalisa: R6,000–R12,000/ngenyanga (ishintjha nalowentfwa kanye nesipiliyono)',
        howToGetStarted: [
          'Lungise i-akhawunti yameyili lengakhokhwa kanye ne-CV lemfishane lekhombisa tikhato tekhomphyutha.',
          'Tjha tindzawo leticala embeli ku-Indeed, Careers24, PNet kanye ku-LinkedIn.',
          'Faka tisicelo temfundvo nge-IT ku-MICT SETA.',
          'Zifundise kulungisa tinkinga etentelwe khomphyutheni ekhaya kumbe egutini.',
          'Cabanga ngetifundo letimfishane te-A+ kumbe isatifiketi se-IT sesisekelo.',
        ],
        recommendedTraining: [
          'Tinhlela temfundvo nge-IT kwa-MICT SETA',
          'I-CompTIA A+ kumbe isatifiketi lesilinganako se-IT',
          'Tifundo letingekho emtsetfweni kwi-inthanethi (nj. Cisco Networking Academy)',
        ],
        tips: [
          'Khombisa kubekezela - iningi lemsebenti kusekela bantu labangati ubuchwepheshe.',
          'Qhubeka ufunda tinhlelo letisha kanye nemathuluzi.',
          'Bhala tinkinga kanye netisombululo kutsi ucondze ngelikhulu.',
        ],
      },
    },
    {
      id: 4,
      name: 'Kwakha (Umsebenti jikelele / Osekela abakhi)',
      shortDescription: 'Sita emagumbi ekwakha: thatsa tintfo, phatsa isamente bese usekele abakhi.',
      categoryEmoji: '🏗️',
      detail: {
        description:
          'Basebenti bejikelele bekwakha basekela abakhi, bethatsa tintfo, baphatsa isamente, bacoce sigcini bekakha bese basekela abakhi njengematsi nemadzala. Kusebenti kwemzimba lokufundzisa tinhlela ngesikhatsi usebenta.',
        keySkills: ['Kuphakama kwemzimba', 'Kulandela timyalo', 'Kusebenta nalabanye', 'Kuphepha lokubukwa', 'Kutembeka'],
        salaryRange: 'Kubonakalisa: R4,500–R9,000/ngenyanga (ishintjha siphele kanye nendawo)',
        howToGetStarted: [
          'Lungise i-CV kanye nentobuzana imeyili lengakhokhwa.',
          'Vakashele emagumbi ekwakha kanye nalabadzala bemsebenti ubute umsebenti.',
          'Tjha tintfutjano yemsebenti ekuQashweni kanye nekuBsebentini.',
          'Faka tisicelo temfundvo ngekwakha ku-CETA (Construction SETA).',
          'Beke i-ID yakho bese ugqoka ticatulo tekuphepha nangabe tunabona.',
        ],
        recommendedTraining: [
          'Tinhlela temfundvo ngekwakha kwa-CETA',
          'Sikhatsi sekucala nekuphepha kanye nepilo (likhadi leluhlaza / SAMTRAC ngesisekelo)',
          'Tinkhato tosekela abakhi',
        ],
        tips: [
          'Gqoka ngaso sonkhe sikhatsi impahla yekuphepha - ticatulo, sikhalo kanye nesikhwama.',
          'Temba; kwakha kutsandza basebenti labakhona yonkhe imalanga.',
          'Thatsa i-ID yakho kanye nentobuzana wekhophi yesatifiketi sematrik.',
        ],
      },
    },
    {
      id: 5,
      name: 'Kuphatsa kanye neNkhundla (Othomukela / Othwebhala Idata)',
      shortDescription: 'Phendula ocingweni, fake ulwati eku-inthanethi bese ugcine maphepha acocekile.',
      categoryEmoji: '🗂️',
      detail: {
        description:
          'Othomukela kanye nabadwebi bematsi bamukela bakhatsa, baphendula ocingweni, bafake ulwati khomphyutheni, bahlele maphepha kanye balondvole inkhundla sibe sicocekile. Kubaluleka kubantu labahlelewe labati ngekhomphyutha.',
        keySkills: ['Kwati ngekhomphyutha (Word, Excel)', 'Kuchumana', 'Kuhlela', 'Tindlela tekingo', 'Kuqinisekisa'],
        salaryRange: 'Kubonakalisa: R5,000–R10,000/ngenyanga (ishintjha nalowentfwa)',
        howToGetStarted: [
          'Lungise ikheli le-imeyili lengakhokhwa kanye ne-CV ehlelewe lekhombisa tikhato tekhomphyutha.',
          'Tjha ku-Indeed, Careers24 kanye na-PNet tindzawo tothomukela kumbe kwematsi.',
          'Faka tisicelo temfundvo ngekuphatsa inkhundla ku-Services SETA.',
          'Zifundise kubhala kanye ne-MS Office egutini kumbe endzaweni.',
          'Beke i-ID yakho kanye nesatifiketi sematrik.',
        ],
        recommendedTraining: [
          'Tinhlela temfundvo yekuphatsa ibhizinisi kwa-Services SETA',
          'Tifundo letimfishane te-Microsoft Office',
          'Kubhala kanye kufaka idatha',
        ],
        tips: [
          'Hlala uhle bese ungakhali ocingweni - ngumuntfu wekucala onkuhlanganaye.',
          'Gcina sikhatsi sakho sekusebenta sihlelele.',
          'Qinisekisa idatha katselwa kutsi ingeteki.',
        ],
      },
    },
    {
      id: 6,
      name: 'Inkhundla Yencingo (Umsebenti we-Inkonzo yebakhatsa)',
      shortDescription: 'Phendula ocingweni, condza tinkinga bese unike ulwati ngecingo.',
      categoryEmoji: '📞',
      detail: {
        description:
          'Basebenti benkhundla yencingo baphendula ocingweni, basita ngetimibu, babhale tinkinga bese kanye nasikhatsi bathengisa ngecingo. Bafana labanengi eNingizimu Afrika bacala umsebenti wabo lapha, basita ekwakheni tinhlela tekuchumana letinemandla.',
        keySkills: ['Kukhuluma kahle', 'Kulalela', 'Kucondza tinkinga', 'Kubekezela', 'Kwati ngekhomphyutha'],
        salaryRange: 'Kubonakalisa: R5,500–R11,000/ngenyanga (ishintjha nalowentfwa kanye nema-awa)',
        howToGetStarted: [
          'Yakha imeyili lengakhokhwa kanye ne-CV lekhombisa tinhlela tekuchumana.',
          'Tjha tindzawo tenkhundla yencingo ku-Indeed, Careers24 kanye na-PNet.',
          'Tjha tinhlela temfundvo ku-Services SETA.',
          'Zifundise kukhuluma kahle bese kuphatsa bakhatsa labalinganako.',
          'Thatsa i-ID yakho kanye nesatifiketi sematrik.',
        ],
        recommendedTraining: [
          'Tinhlela temfundvo yekhaya lencingo kwa-Services SETA',
          'Tifundo letimfishane tebakhatsa',
          'Kwati ngekhomphyutha kanye nekubhala',
        ],
        tips: [
          'Khuluma kahle bese uphephisa, nanobe bakhatsa bahhafu.',
          'Funda ngesikhulu umkhiqizo kumbe umsebenti.',
          'Iphake kusebenta nge-awa, kubandzisa ebusuku kanye netinsuku tekugcina.',
        ],
      },
    },
    {
      id: 7,
      name: 'Kuphepha (Umkhaphi Wekuphepha)',
      shortDescription: 'Buka tindzawo, lalele kungena bese ugcine bakhatsa kanye netintfo tikhulisise.',
      categoryEmoji: '🛡️',
      detail: {
        description:
          'Abakhaphi bekuphepha babuka tinsita, balawula labangena, buka tindzawo bese baphendula tinkinga. Umsebenti utfuna kubhalisa ku-PSIRA kanye necatsandza kulo onkhe amave aseNingizimu Afrika.',
        keySkills: ['Kubuka', 'Kuphakama kwemzimba', 'Bunembeza', 'Kulandela imiyalo', 'Kuchumana'],
        salaryRange: 'Kubonakalisa: R4,500–R8,000/ngenyanga (ishintjha nalowentfwa kanye nemanani)',
        howToGetStarted: [
          'Thatsa isatifiketi sekulungele nemapoyisa kusiteshini sakho SAPA saseduze.',
          'Bhalise bese ufundza nkhephali we-PSIRA wekuphepha loqinisekile.',
          'Faka tisicelo emaKhomphani abhalisiwe kuphepha endzaweni yakho.',
          'Tjha ku-Indeed, Careers24 kanye namaphepha emaKhomphani wekuphepha.',
          'Beke i-ID, isatifiketi sematrik kanye netiphepha te-PSIRA.',
        ],
        recommendedTraining: [
          'Kufundza kuphepha kwe-PSIRA Isibalo E kuya ku-C',
          'Siseko sekuncedza',
          'Kucisha umlilo / tifundo letimfishane tekuphepha',
        ],
        tips: [
          'Isatifiketi sekulungele nemapoyisa sifuneka - sitsatswe kancane.',
          'Hlala ubuka bese ulandela imiyalo yekuphepha ngesikhatsi sonkhe.',
          'Hlala unembeza uthemba; bakhatsi bahla abakhaphi ngekukhulu.',
        ],
      },
    },
    {
      id: 8,
      name: 'Buhle Nemaswali (Umsizi Wemasaloni)',
      shortDescription: 'Sita emasaloni: phatsa bakhatsa, gcine tidvwabu ticocekile bese usekele imisebenti yobuhle.',
      categoryEmoji: '💇',
      detail: {
        description:
          'Bamsizi wemasaloni bamukela bakhatsa, bahlanta inwele, bacoce tidvwabu, balungise tindzawo bese basekela bahluki bobuhle. Kuyindlela lenhle yekungena embhahleni wobuhle ngesikhatsi ufunda ngokusebenta.',
        keySkills: ['Inkonzo yebakhatsa', 'Kucoceka', 'Kusita', 'Kulalela', 'Kuhlela'],
        salaryRange: 'Kubonakalisa: R4,000–R7,500/ngenyanga (ishintjha ngesaloni nange -ndzawo)',
        howToGetStarted: [
          'Lungise ikheli le-imeyili lengakhokhwa kanye ne-CV lemfishane.',
          'Ngena emasaloni endzaweni yakho ubute tindzawo.',
          'Tjha ku-Indeed kanye ne-Careers24 tindzawo tomsizi wemasaloni.',
          'Faka tisicelo temfundvo ngobuhle kumbe inwele ku-CATHSSETA.',
          'Thatsa i-ID yakho kanye nesatifiketi sematrik.',
        ],
        recommendedTraining: [
          'Tinhlela temfundvo yobuhle kumbe inwele (CATHSSETA)',
          'Tifundo letimfishane tekucoceka kanye nekutswa',
          'Siseko sebakhatsa',
        ],
        tips: [
          'Gcina indzawo yakho yekusebenta icocekile ihlelele.',
          'Hlala uhle bese usita bakhatsa.',
          'Buka bese ufunda tinhlela kubaholi labasipiliyono.',
        ],
      },
    },
    {
      id: 9,
      name: 'Kulungiselela Kudla (Umsizi Wekhishi / Kudla Lokushesha)',
      shortDescription: 'Sita emakhishi: lungiselela tintfo, gcine tindzawo ticocekile bese usekele bapheki.',
      categoryEmoji: '🍳',
      detail: {
        description:
          'Bamsizi wekhishi kanye nbasebenti bekudla lokushesha balungiselela tintfo, bapheke tintfo letilula, bacoce ikhishi bese basekela bapheki. Kusebenti kucala lokuvamile emaredzini kanye namafekthari ekudla lokushesha, nemahola lahlukene.',
        keySkills: ['Kusebenta ngaphansi kwemenulo', 'Kucoceka', 'Kusebenta nalabanye', 'Kulandela timiyalo', 'Kushesha'],
        salaryRange: 'Kubonakalisa: R4,000–R7,000/ngenyanga (ishintjha nalowentfwa)',
        howToGetStarted: [
          'Lungise ikheli le-imeyili lengakhokhwa kanye ne-CV lemfishane.',
          'Ngena emafekthari ekudla lokushesha kanye emaredzini ne-CV.',
          'Tjha ku-Indeed, Careers24 kanye namaphepha emsebenti wehothela.',
          'Faka tisicelo temfundvo ngekudla ku-CATHSSETA.',
          'Thatsa i-ID yakho kanye nesatifiketi sematrik.',
        ],
        recommendedTraining: [
          'Tinhlela temfundvo yekudla kwa-CATHSSETA',
          'Tifundo letimfishane tekuphepha kwakudla',
          'Tinkhato tekupheka ngesisekelo',
        ],
        tips: [
          'Gcinile imadzaja, iyunifomu kanye netindzawo icocekile ngaso sonkhe sikhatsi.',
          'Sebenta ngokushesha kodwa buka - emakhishi lamakhulu.',
          'Temba; tinsuku tekugcina tiyavamiseka.',
        ],
      },
    },
    {
      id: 10,
      name: 'Kuhamba Kanye nekupaka (Umkhetsi / Uphakhi / Umsizi Womshayeli)',
      shortDescription: 'Khetsa bese uphakhe imiyalo, ladhya emalori bese usite kuletwwa kwemikhiqizo.',
      categoryEmoji: '📦',
      detail: {
        description:
          'Abakhetsi, bapakhi kanye nomsizi wemshayeli basebenta emaphakini kanye emalorini. Bakhetsa imiyalo, baphakhe emabhokisi, baladhya kanye bakhuphula tintfo bese basekela abashayeli kuletweni kwemikhiqizo. Kusebenti kwemzimba lehlelele lokucatsandzwa kakhulu.',
        keySkills: ['Kuphakama kwemzimba', 'Kuqinisekisa', 'Kusebenta nalabanye', 'Kulandela timyalo', 'Kubala'],
        salaryRange: 'Kubonakalisa: R4,500–R9,000/ngenyanga (ishintjha nalowentfwa kanye nendawo)',
        howToGetStarted: [
          'Lungise ikheli le-imeyili lengakhokhwa kanye ne-CV lemfishane.',
          'Tjha ku-Indeed, Careers24 kanye namaphepha emsebenti wemaKhomphani wekuhamba.',
          'Vakashele emaphakini kanye nalabadzala bemsebenti ubute tindzawo.',
          'Faka tisicelo temfundvo nekuhambe ku-TETA.',
          'Thatsa i-ID yakho kanye nesatifiketi sematrik.',
        ],
        recommendedTraining: [
          'Tinhlela temfundvo yekuhambe kanye nekupaka kwa-TETA',
          'Ilayisensi yefuthi (isita lesikhulu)',
          'Sikhatsi sekucala nekuphepha kanye nepilo',
        ],
        tips: [
          'Qinisekisa kukhetsa imiyalo - emaphutsa adla imali.',
          'Buka nangabe uladhya; sebentisa tindlela tekuphepha.',
          'Temba bese ufika ngesikhatsi; kuletwwa kuhamba nge -ndzawo.',
        ],
      },
    },
  ],
  ve: [
    {
      id: 1,
      name: 'U rekiwa ha zinthu (Muthusi wa tshitolo / Mutolwa wa tshele)',
      shortDescription: 'Tumela vhadayisi, langa tshele u farale zwitolo zwi tswahuwa.',
      categoryEmoji: '🛍️',
      detail: {
        description:
          'Vhathusi vha tshitolo na vhatoli vha tshele vha thusa vhadayisi u wana zwigwada, vha langa tshele kha tshitolo, vha tsea zwitolo vha fara tshitolo tshi sasekaho na tshi khavhaho. Ndi mushumo wa thoho una lavhelelwa vhana vhavha kha Afurika Tshipembe yose.',
        keySkills: ['Tumelo ya vhadayisi', 'U langa tshele na khadi', 'U vhala ha thoho', 'U amberwa', 'U saseka na u fika nga tshifhinga'],
        salaryRange: 'Zwi sumbedza: R4,500–R7,500/ngwedzi (zwi fhambana nga fhethu na muqashi)',
        howToGetStarted: [
          'Itani email ha mahala (sa. Gmail) na CV elavhuwaho.',
          'Tshimbedzani mushumo kha Indeed, Careers24 na PNet.',
          'Endani kha mall u vhudze vhareki ha zwitolo nga zwitilo zwa u tsena na nyonyi.',
          'Hangeleleni zwidodombedzhwa zwa u guda u reka kha W&RSETA.',
          'Itani ID yanu na satifikethi ya matrik, mu khadzhiwe kahle u farwa.',
        ],
        recommendedTraining: [
          'Mafhisimanyi a u guda u reka a W&RSETA kana zwigudziswa zwa u seda',
          'Thutho ya khomphuyutha ya thoho / sisitemu ya u reka (POS)',
          'Zwigudziswa zwa u seda zwa tumelo ya vhadayisi',
        ],
        tips: [
          'Fikani nga tshifhinga mu khadziwe kahle - zwa u thoma zwa ndeme kha u rekiswa.',
          'Tangani khophi dza ID yanu na satifikethi ya matrik.',
          'Nengeni mu tshi tshi linga na vhadayisi vha whutshili.',
        ],
      },
    },
    {
      id: 2,
      name: 'U amogela vhakheni (Mufareli / Vhashumi vha hotele)',
      shortDescription: 'Tumela zwidya na zwana, thusa vhakheni u farale zwibuka zwa u wida zi tshili zwa tshili.',
      categoryEmoji: '🍽️',
      detail: {
        description:
          'Vhashumi vha u amogela vhakheni vha shuma zwibukani, mahotelani, fhethu ha u amogela vhakheni na u fhata. Vha tsha milayo, vha fha zwidya, vha fhedza tafule, vha saseka vha amogela vhakheni nga maanda. Maafulo a khavhaho a thusa u fhata na u amberwa.',
        keySkills: ['Tumelo ya vhadayisi', 'Mushumo wa muathu', 'U shuma fhedzi na khupelelo', 'U amberwa', 'U tsireledza zwidya zwa thoho'],
        salaryRange: 'Zwi sumbedza: R4,500–R8,000/ngwedzi na madzidzimana (zwi fhambana na muqashi)',
        howToGetStarted: [
          'Itani CV ya u seda na email ha mahala.',
          'Tshimbedzani kha Indeed, Careers24 na masiafidzha a mushumo wa hotele.',
          'Ungani zwibukani na mahotelani na CV yanu u vhudze nga zwitilo.',
          'Hangeleleni zwidodombedzhwa zwa u amogela kha Services SETA kana CATHSSETA.',
          'Itani u lungututwe u thoma nga tswifhinga tsha vhusiku kana mabebo.',
        ],
        recommendedTraining: [
          'Mafhisimanyi a u amogela a CATHSSETA',
          'Zwigudziswa zwa tsireledzo ya zwidya / u saseka',
          'Thutho ya u thoma ya thuso',
        ],
        tips: [
          'Tangani minwe ya u seda, gumbala ri sasekaho na uniforme i sasekaho.',
          'Tangani khophi dza ID yanu na satifikethi ya matrik.',
          'Madzidzimana a nga engedza mali - tumela nga maanda o seraho.',
        ],
      },
    },
    {
      id: 3,
      name: 'IT & Thuso (Thuso ya IT ya thoho)',
      shortDescription: 'Thusa vhashumi na dzingano dza khomphuyutha, vhuyani zwishumiswa u thusise vhashumi nga rungwa.',
      categoryEmoji: '💻',
      detail: {
        description:
          'Vhashumi vha IT vha thoho vha thusa vhashumelani kana vhadayisi u fara dzingano dza khomphuyutha, vha tsha zwipida, vha vhuyisa maphrinta vha phindze vha fhindule mbudziso dza tekinolodzi. Ndi thoho ya u thoma na lunzhi u rurutha tekinolodzi na u fara dzingano.',
        keySkills: ['U kona khomphuyutha', 'U fara dzingano', 'U bephula', 'U amberwa', 'Neteweki wa thoho'],
        salaryRange: 'Zwi sumbedza: R6,000–R12,000/ngwedzi (zwi fhambana na muqashi na zwi fariwaho)',
        howToGetStarted: [
          'Itani email ha mahala na CV ya u seda ya u sumbedza zwikongotshi dza khomphuyutha.',
          'Tshimbedzani zwitilo zwa thoho kha Indeed, Careers24, PNet na LinkedIn.',
          'Hangeleleni zwidodombedzhwa zwa IT kha MICT SETA.',
          'Gidani u fara dzingano dza honthe khomphuyutha hayani kana library.',
          'Mulangule zwigudziswa zwa u seda zwa A+ kana satifikethi ya IT ya thoho.',
        ],
        recommendedTraining: [
          'Mafhisimanyi a IT a MICT SETA',
          'CompTIA A+ kana satifikethi i fanaho ya IT ya thoho',
          'Zwigudziswa zwa mahala za intanete (sa. Cisco Networking Academy)',
        ],
        tips: [
          'Sumbedza u bephula - mbili dza mushumo ndi u thusa vha si na tekinolodzi.',
          'Hu dvale u guda zwipida zwiswa na zwishumiswa zwa swa.',
          'Nwalani dzingano na dza u fara u itela u guda lwa u khwafhela.',
        ],
      },
    },
    {
      id: 4,
      name: 'U fhata (Mushumo wa u teaho / Muthusi wa vha fhata)',
      shortDescription: 'Thusa kha zwitutu zwa u fhata: tsha zwigwada, tsha khamenti u thusise vha fhata.',
      categoryEmoji: '🏗️',
      detail: {
        description:
          'Vhashumi vha u teaho vha fhata vha thusa vha fhata, vha tsha zwigwada, vha tsha khamenti, vha saseka fhethu vha thusa vha fhata sa vha gei na vha madi. Mushumo wa muvhili wo gudisa zwikongotshi nga tshifhinga tsha u shuma.',
        keySkills: ['U tuka muvhili', 'U landela milaelo', 'Mushumo wa muathu', 'U sedzwa tsireledzo', 'U teaho'],
        salaryRange: 'Zwi sumbedza: R4,500–R9,000/ngwedzi (zwi fhambana na mushumo na fhethu)',
        howToGetStarted: [
          'Itani CV na email ha mahala.',
          'Endani kha zwitutu zwa u fhata na vha thusa vhashumi u vhudze mushumo.',
          'Sedzani zwizwisi zwa mushumo kha Phethekemele ya Mushumo na Vhashumi.',
          'Hangeleleni zwidodombedzhwa zwa u fhata kha CETA (Construction SETA).',
          'Tangani ID yanu u khadzani zwitutu zwa tsireledzo arali zwi na.',
        ],
        recommendedTraining: [
          'Mafhisimanyi a u fhata a CETA',
          'Thutho ya muthu na tsireledzo (khadi la tshakhuluhali / SAMTRAC ya thoho)',
          'Zwikongotshi zwa u thusa vha fhata',
        ],
        tips: [
          'Khadzani zwipida zwa tsireledzo - zwitutu, khuva na khavhili.',
          'U teaho; u fhata wa tshofha vhashumi vha tsha minwe na minwe.',
          'Tangani ID yanu na khophi ya satifikethi ya matrik.',
        ],
      },
    },
    {
      id: 5,
      name: 'U langa na Ofisi (Muamogeli / Mugwali wa data)',
      shortDescription: 'Phindula rungwa, tsha data khomphuyuthani u farale magwalo a ofisi.',
      categoryEmoji: '🗂️',
      detail: {
        description:
          'Vhamogeli na vha gwali data vha amogela vhakheni, vha phindula rungwa, vha thaipa mbuno khomphuyuthani, vha langa magwalo vha fara ofisi i khavhaho. Zwi vhuyelelwa kha vha khavhaho na vha kona khomphuyutha.',
        keySkills: ['U kona khomphuyutha (Word, Excel)', 'U amberwa', 'U khavha', 'Zwilavhelelo zwa rungwa', 'U teaho'],
        salaryRange: 'Zwi sumbedza: R5,000–R10,000/ngwedzi (zwi fhambana na muqashi)',
        howToGetStarted: [
          'Itani email ha mahala na CV i khavhaho i sumbedza zwikongotshi dza khomphuyutha.',
          'Tshimbedzani kha Indeed, Careers24 na PNet zwitilo zwa muamogeli kana mugwali data.',
          'Hangeleleni zwidodombedzhwa zwa ofisi kha Services SETA.',
          'Gidani u thaipa na MS Office wa thoho library kana fhethu.',
          'Tangani ID yanu na satifikethi ya matrik.',
        ],
        recommendedTraining: [
          'Mafhisimanyi a u langa bhizinisi a Services SETA',
          'Zwigudziswa zwa u seda zwa Microsoft Office',
          'U thaipa na u tsha data',
        ],
        tips: [
          'Humbulani muthu khavhaho rungwani - ndi munwe wa u thoma wa u amberwa.',
          'Farani fhethu ha yanu ha u shuma ha khavhaho.',
          'Sedzani data u i tsha gabidi u fara dzingano.',
        ],
      },
    },
    {
      id: 6,
      name: 'Phethekemele ya rungwa (Mushumo wa tumelo ya vhadayisi)',
      shortDescription: 'Phindula rungwa, fara dzingano u fhhe mbuno nga rungwa.',
      categoryEmoji: '📞',
      detail: {
        description:
          'Vhashumi vha phethekemele ya rungwa vha phindula rungwa, vha thusa nga mbudziso, vaa nga dzingano vha phindze vha renga nga rungwa. Vhana vhavha vha fhamba kha Afurika Tshipembe vha thoma mushumo wabwo hafha, vha fhata zwikongotshi zwa u amberwa zwa khwa.',
        keySkills: ['U amba ha u seda', 'U pfesa', 'U fara dzingano', 'U bephula', 'U kona khomphuyutha'],
        salaryRange: 'Zwi sumbedza: R5,500–R11,000/ngwedzi (zwi fhambana na muqashi na tshifhinga)',
        howToGetStarted: [
          'Itani email ha mahala na CV i sedza zwikongotshi zwa u amberwa.',
          'Tshimbedzani zwitilo zwa phethekemele kha Indeed, Careers24 na PNet.',
          'Tshimbedzani mafhisimanyi a Services SETA.',
          'Gidani u amba ha u seda na u fara vhadayisi vha u swanaho.',
          'Tangani ID yanu na satifikethi ya matrik.',
        ],
        recommendedTraining: [
          'Mafhisimanyi a phethekemele a Services SETA',
          'Zwigudziswa zwa u seda zwa tumelo ya vhadayisi',
          'U kona khomphuyutha na u thaipa',
        ],
        tips: [
          'Ambani ha u seda mu bephule, na vhadayisi vha whutshili.',
          'Gudani zwigwada kana mushumo wa bhizinisi tshilinganaho.',
          'Itani u shuma nga tshifhinga, u katela vhusiku na matsheloni.',
        ],
      },
    },
    {
      id: 7,
      name: 'Tsireledzo (Mutsheleli wa tsireledzo)',
      shortDescription: 'Farani zwitutu, lalele u tsena u tsireledze vhashumi na zwigwada.',
      categoryEmoji: '🛡️',
      detail: {
        description:
          'Vha tsheleli tsireledzo vaa zwitutu, vaa vha tsenaho, vaa zwitutu vha phindze vaa zwifho zwa u tei. Mushumo u tsha u tsaywa kha PSIRA na u fariwa lwa khwa kha Afurika Tshipembe yose.',
        keySkills: ['U sedzwa', 'U tuka muvhili', 'Budavhi', 'U landela mulayo', 'U amberwa'],
        salaryRange: 'Zwi sumbedza: R4,500–R8,000/ngwedzi (zwi fhambana na muqashi na zwigaba)',
        howToGetStarted: [
          'Tangani satifikethi ya u fhambza na mapodisa kha sithesele sa SAPS sa u tshifha.',
          'Swayesani u gudwe na muqashi wa PSIRA wa tsireledzo wa u teaho.',
          'Hangeleleni khomphani dza tsireledzo dza u tsai fhethu ha nyu.',
          'Tshimbedzani kha Indeed, Careers24 na masiafidzha a khomphani dza tsireledzo.',
          'Tangani ID, satifikethi ya matrik na magwalo a PSIRA.',
        ],
        recommendedTraining: [
          'Thutho ya tsireledzo ya PSIRA Giredi E u ya kha C',
          'Thuso ya u thoma',
          'U fnyhela mulilo / zwigudziswa zwa u seda zwa tsireledzo',
        ],
        tips: [
          'Satifikethi ya u fhambza na mapodisa i tsha - i tshanwe nga tshifhinga.',
          'Dzulani u sedzwa u landela mulayo wa tsireledzo tshilinganaho.',
          'Dzulani mu budavhi u teaho; vha qashi vaa vha tsheleli tshilinganaho.',
        ],
      },
    },
    {
      id: 8,
      name: 'Vhuhuya na Gumba (Muthusi wa salon)',
      shortDescription: 'Thusa salonni: amogela vhadayisi, fara zwishumiswa u thusise vhuhuya.',
      categoryEmoji: '💇',
      detail: {
        description:
          'Vhathusi vha salon vha amogela vhadayisi, vaa gumba, vaa zwishumiswa, vaa fhethu vaa thusa vha gumba na vha vhuhuya. Ndi tsila ya u vhona u ya vhuhuya tshifhinga tsha u guda u shuma.',
        keySkills: ['Tumelo ya vhadayisi', 'U saseka', 'U thusa', 'U pfesa', 'U khavha'],
        salaryRange: 'Zwi sumbedza: R4,000–R7,500/ngwedzi (zwi fhambana na salon na fhethu)',
        howToGetStarted: [
          'Itani email ha mahala na CV ya u seda.',
          'Ungani salonni dza fhethu ha nyu u vhudze nga zwitilo.',
          'Tshimbedzani kha Indeed na Careers24 zwitilo zwa u thusa salon.',
          'Hangeleleni zwidodombedzhwa zwa vhuhuya kana gumba kha CATHSSETA.',
          'Tangani ID yanu na satifikethi ya matrik.',
        ],
        recommendedTraining: [
          'Mafhisimanyi a vhuhuya kana gumba (CATHSSETA)',
          'Zwigudziswa zwa u seda zwa u saseka na u thela',
          'Thoho ya tumelo ya vhadayisi',
        ],
        tips: [
          'Farani muvhili na fhethu ha yanu ha u shuma ha sasekaho.',
          'Dzulani muvhumba u thusa vhadayisi.',
          'Sedzani u guda tsila kha vha fhata vha na zwi fariwaho.',
        ],
      },
    },
    {
      id: 9,
      name: 'U lungututa zwidya (Muthusi wa khishini / Zwidya zwa u sedza)',
      shortDescription: 'Thusa khishinini: lungututa zwigwada, fara fhethu u thusise vha fhata.',
      categoryEmoji: '🍳',
      detail: {
        description:
          'Vhathusi vha khishini na vhashumi vha zwidya zwa u sedza vaa zwigwada, vaa fhata zwigwada zwa u sedza, vaa saseka khishini vaa thusa vha fhata. Ndi mushumo wa u thoma wa honthe zwibukani na mafekithori a zwidya zwa u sedza, una maafulo a fhambaho.',
        keySkills: ['U shuma fhedzi na khupelelo', 'U saseka', 'Mushumo wa muathu', 'U landela zwiga zwa u fhata', 'U sedza'],
        salaryRange: 'Zwi sumbedza: R4,000–R7,000/ngwedzi (zwi fhambana na muqashi)',
        howToGetStarted: [
          'Itani email ha mahala na CV ya u seda.',
          'Ungani mafekithori a zwidya zwa u sedza na zwibuka na CV yanu.',
          'Tshimbedzani kha Indeed, Careers24 na masiafidzha a mushumo wa hotele.',
          'Hangeleleni zwidodombedzhwa zwa zwidya kha CATHSSETA.',
          'Tangani ID yanu na satifikethi ya matrik.',
        ],
        recommendedTraining: [
          'Mafhisimanyi a zwidya na zwana a CATHSSETA',
          'Zwigudziswa zwa u seda zwa tsireledzo ya zwidya',
          'Zwikongotshi zwa u fhata zwa thoho',
        ],
        tips: [
          'Faranga zwanda, uniforme na fhethu nga tshifhinga tshothe.',
          'Shumani lwa khwa fhedzi na u sedza - khishini ndi khulu.',
          'U teaho; matsheloni a a katela fhamba.',
        ],
      },
    },
    {
      id: 10,
      name: 'U isa na u paka (Muatshi / Mupaki / Muthusi wa muwadeli)',
      shortDescription: 'Tshai u pake milayo, ladhya zwitima u thusise u iswa zwigwada.',
      categoryEmoji: '📦',
      detail: {
        description:
          'Vha tshai, vha paki na vathusi vha muwadeli vaa maphakini na zwitima zwa u isa. Vaa milayo, vaa mabhokisi, vaa u vhwea u khupula zwigwada vaa thusa vha isa zwigwada. Mushumo wa muvhili u khavhaho u tshi tshedza lwa khwa.',
        keySkills: ['U tuka muvhili', 'U teaho', 'Mushumo wa muathu', 'U landela milaelo', 'U vhala'],
        salaryRange: 'Zwi sumbedza: R4,500–R9,000/ngwedzi (zwi fhambana na muqashi na fhethu)',
        howToGetStarted: [
          'Itani email ha mahala na CV ya u seda.',
          'Tshimbedzani kha Indeed, Careers24 na masiafidzha a mushumo wa khomphani dza u isa.',
          'Endani maphakini na vha thusa vhashumi u vhudze nga zwitilo.',
          'Hangeleleni zwidodombedzhwa zwa u isa kha TETA.',
          'Tangani ID yanu na satifikethi ya matrik.',
        ],
        recommendedTraining: [
          'Mafhisimanyi a u isa na u paka a TETA',
          'Laayense ya foshilifiti (thuso ya khulu)',
          'Thutho ya muthu na tsireledzo',
        ],
        tips: [
          'Teaho u tshai milayo - dzingano dza dya mali.',
          'Sedzani u ladhya; shumisani tsila dza tsireledzo.',
          'U teaho u fika nga tshifhinga; u isa zwigwada hu ya na mulayo.',
        ],
      },
    },
  ],
  ts: [
    {
      id: 1,
      name: 'Ku xavisa (Mupfuneri wa xitichi / Muhakeri wa mali)',
      shortDescription: 'Pfuna vaxavi, hlela mali u tlhavela switichi swi tatela.',
      categoryEmoji: '🛍️',
      detail: {
        description:
          'Vapfuneri va xitichi na vahakeri va mali va pfuna vaxavi ku kuma switumbulwa, va hlela mali eka sayinya, va hlayisa switichi va tlhavela u hlayisiwa ka xitichi. I ntirho wa xiyimo le xi hansi ya vana va nhwanyana eka Afrika Dzonga hinkwako.',
        keySkills: ['Ntirho wa vaxavi', 'Ku hlela mali na makhadi', 'Ku hlayisa ya vutomi', 'Ku vulavulana', 'Ku hlayisiwa na ku fika hi nkarhi'],
        salaryRange: 'Ku kombisa: R4,500–R7,500/nyeni (ku hambana hi ndhawu na muqashi)',
        howToGetStarted: [
          'Tumbuluxa email ya mahala (xik. Gmail) na CV ya le hansi.',
          'Tlakela ntirho eka Indeed, Careers24 na PNet.',
          'Endzhela di-mall u byela varhangeri va switichi hi ntirho wa ku nghena hi nyenyenywa.',
          'Ringeta ku dyondza ka ku xavisa eka W&RSETA.',
          'Penga ID ya wena na satifiketi ya matrik, u ambaliwile kahle eka ku kambiseriwa.',
        ],
        recommendedTraining: [
          'Tinhlengeletelo ta ku dyondza ku xavisa ta W&RSETA kumbe tidondzwa ta hansi',
          'Ku dyondza ka khomphuyuta ya vutomi / sisiteme ya ku xavisa (POS)',
          'Xidondzwa xa hansi xa ntirho wa vaxavi',
        ],
        tips: [
          'Fika hi nkarhi u ambaliwile kahle - swa kucala swa nkoka eka ku xavisa.',
          'Penga tidyiwe to tsala ID ya wena na satifiketi ya matrik.',
          'Bhebha u tiyile eka vaxavi lava tiyaka.',
        ],
      },
    },
    {
      id: 2,
      name: 'Ku amukela vaxeni (Ntirho wa ntirho / Vasebetsi va hotele)',
      shortDescription: 'Pfuna swakudya na swakunwa, pfuna vaxeni u hlayisa tindhawu ta swakudya tiya ematshama.',
      categoryEmoji: '🍽️',
      detail: {
        description:
          'Vasebetsi va ku amukela vaxeni va tirha eridini, mahotelini, tindhawini ta ku amukela vaxeni na ku pheka. Va tsema tiyimiso, va bika swakudya, va pfuma switifili, va hlayisa va amukela vaxeni hi mahlo. Minkarhi ya ku hambana yizza ku pfuna eku vumbiweni ka nkoka wa ku vulavulana.',
        keySkills: ['Ntirho wa vaxavi', 'Ntirho wa xipano', 'Ku tirha ehansi ka nhlawulo', 'Ku vulavulana', 'Ku sirheleriwa ka swakudya ka vutomi'],
        salaryRange: 'Ku kombisa: R4,500–R8,000/nyeni na tiphu (ku hambana hi muqashi)',
        howToGetStarted: [
          'Tumbuluxa CV ya hansi na email ya mahala.',
          'Tlakela eka Indeed, Careers24 na mapapele ya ntirho wa hotele.',
          'Nghena eridini nahotelini na CV ya wena u byela hi ntirho.',
          'Ringeta ku dyondza ka ku amukela vaxeni eka Services SETA kumbe CATHSSETA.',
          'Penga u lungutiwile ku sungula ka switiko swa vusiku kumbe ntsikutu.',
        ],
        recommendedTraining: [
          'Tinhlengeletelo ta ku amukela vaxeni ta CATHSSETA',
          'Xidondzwa xa hansi xa ku sirheleriwa ka swakudya / ku hlayisa',
          'Mavumbi ya ku pfuna',
        ],
        tips: [
          'Hlayisa minwe ya hansi, rihoyi ri hlayisiwe u unifomo yi hlayisiwe.',
          'Tsalwa tidyiwe ta ID ya wena na satifiketi ya matrik.',
          'Tiphu ti nga engetela mali - tirha hi moya wo saseka.',
        ],
      },
    },
    {
      id: 3,
      name: 'IT & Ku pfuna (Ku pfuna IT ka xiyimo xa hansi)',
      shortDescription: 'Pfuna vanhu hi swipana swa khomphuyuta, pfuma switirhisiwa u pfunise vasebetsi hi rungwa.',
      categoryEmoji: '💻',
      detail: {
        description:
          'Vapfuni va IT va xiyimo xa hansi va pfuna vahlanganisi kumbe vaxavi ku lunguta swipana swa khomphuyuta, va pfa swipurogreme, va pfuma maphrindra va ringeta na ku hlamula mibuzo ya thekinolozhi. I ku sungula kahle loko u rhandza thekinolozhi na ku lunguta swipana.',
        keySkills: ['Ku tiva khomphuyuta', 'Ku lunguta swipana', 'Ku tinelela', 'Ku vulavulana', 'Netewaka ya vutomi'],
        salaryRange: 'Ku kombisa: R6,000–R12,000/nyeni (ku hambana hi muqashi na tinhlayo)',
        howToGetStarted: [
          'Tumbuluxa email ya mahala na CV ya hansi ya ku kombisa nkoka wa khomphuyuta.',
          'Tlakela ntirho wa xiyimo xa hansi eka Indeed, Careers24, PNet na LinkedIn.',
          'Ringeta ku dyondza ka IT eka MICT SETA.',
          'Dyondza ku lunguta swipana leswi endlaka khomphuyuteni ekaya kumbe laiburaring.',
          'Nghorometa na xidondzwa xa hansi xa A+ kumbe satifiketi ya IT ya vutomi.',
        ],
        recommendedTraining: [
          'Tinhlengeletelo ta ku dyondza IT ta MICT SETA',
          'CompTIA A+ kumbe satifiketi yi fana na yinwana ya IT ya xiyimo xa hansi',
          'Tidondzwa ta mahala ta intanete (xik. Cisco Networking Academy)',
        ],
        tips: [
          'Kombisa ku tinelela - ntirho wa yinwana i ku pfuna lava nga na thekinolozhi.',
          'Tiselela u dyondza swipurogreme na switirhisiwa swintshwa.',
          'Tsala swipana na swa ku lunguta ku endla u dyondza hi ku hatlisa.',
        ],
      },
    },
    {
      id: 4,
      name: 'Ku aka (Ntirho wa xinkalo / Mupfuneri wa va aka)',
      shortDescription: 'Pfuna ekaya: tsema switumbulwa, nyambarisa simende u pfunise va aka.',
      categoryEmoji: '🏗️',
      detail: {
        description:
          'Vasebetsi va xinkalo va aka va pfuna va aka, va tsema switumbulwa, va nyambarisa simende, va hlayisa ndhawu ya ku aka va pfuna va aka tanihile kha yini na madi. Ntirho wa miri wa dyondza nkoka hi nkarhi wa ku tirha.',
        keySkills: ['U nguriwa hi miri', 'Ku landela swiyimo', 'Ntirho wa xipano', 'Ku titisisa ku sirheleriwa', 'Ku tsandzeka'],
        salaryRange: 'Ku kombisa: R4,500–R9,000/nyeni (ku hambana hi pulojekiti na ndhawu)',
        howToGetStarted: [
          'Tumbuluxa CV na email ya mahala.',
          'Endzhela matitu ya ku aka na vaxavisi va ntirho u byela hi ntirho.',
          'Tlakela eka mapapila ya ntirho wa Vupfumeri na Ntirho.',
          'Ringeta ku dyondza ka ku aka eka CETA (Construction SETA).',
          'Penga ID ya wena u ambala switirhisiwa swa ku sirheleriwa loko swi kona.',
        ],
        recommendedTraining: [
          'Tinhlengeletelo ta ku aka ta CETA',
          'Nkumbeto wa mabya na ku sirheleriwa (khadi ra xilahati / SAMTRAC ya vutomi)',
          'Nkoka wa ku pfuna va aka',
        ],
        tips: [
          'Ambala hi nkarhi wunwini swipuka swa ku sirheleriwa - switirhisiwa, xihambiri na swikwama.',
          'Ti tsandzekeni; ku aka ku rhandza vasebetsi va taha masiku hinkwawo.',
          'Penga ID ya wena na tsalo ya satifiketi ya matrik.',
        ],
      },
    },
    {
      id: 5,
      name: 'Ku laha na Ofisi (Muamukeli / Mu tsalaka data)',
      shortDescription: 'Hlamula rungwa, nghenisa data eka khomphuyuta u hlayisa penda ya ofisi.',
      categoryEmoji: '🗂️',
      detail: {
        description:
          'Vahlamula na vatsalaka data va amukela vaxeni, va hlamula rungwa, va tipa rungula eka khomphuyuta, va laha mapapila va hlayisa ofisi yi fuma. Swi fana na lava lahliwaka na lava tivaka khomphuyuta.',
        keySkills: ['Ku tiva khomphuyuta (Word, Excel)', 'Ku vulavulana', 'Ku laha', 'Masungulo ya rungwa', 'Ku hlamula kahle'],
        salaryRange: 'Ku kombisa: R5,000–R10,000/nyeni (ku hambana hi muqashi)',
        howToGetStarted: [
          'Tumbuluxa email ya mahala na CV ya ku laha ya ku kombisa nkoka wa khomphuyuta.',
          'Tlakela eka Indeed, Careers24 na PNet ntirho wa muamukeli kumbe wa ku tsala data.',
          'Ringeta ku dyondza ka ku laha ofisi eka Services SETA.',
          'Dyondza ku tipa na MS Office wa vutomi laiburaring kumbe ekaya.',
          'Penga ID ya wena na satifiketi ya matrik.',
        ],
        recommendedTraining: [
          'Tinhlengeletelo ta ku laha bhizinisi ta Services SETA',
          'Xidondzwa xa hansi xa Microsoft Office',
          'Ku tipa na ku nghenisa data',
        ],
        tips: [
          'Tirha hi ku neha rungweni - i munhu wa kucala wa ku hlangana naye.',
          'Laha ndhawu ya wena ya ku tirha.',
          'Hambula data u yi nghenisa ku hatlisa u papalata swipana.',
        ],
      },
    },
    {
      id: 6,
      name: 'Phethekemele ya rungwa (Ntirho wa ntirho wa vaxavi)',
      shortDescription: 'Hlamula rungwa, lunguta swipana u nyika rungula hi rungwa.',
      categoryEmoji: '📞',
      detail: {
        description:
          'Vasebetsi va phethekemele ya rungwa va hlamula rungwa, va pfuna hi mibuzo, va tsala swa ku hlekuviwa va ringeta ku xavisa hi rungwa. Vana va nhwanyana va tala va Afrika Dzonga va sungula ntirho wa vona laha, va vumba nkoka wa ku vulavulana wa matimba.',
        keySkills: ['Ku vulavula hi ku hatlisa', 'Ku twa', 'Ku lunguta swipana', 'Ku tinelela', 'Ku tiva khomphuyuta'],
        salaryRange: 'Ku kombisa: R5,500–R11,000/nyeni (ku hambana hi muqashi na nkarhi)',
        howToGetStarted: [
          'Endla email ya mahala na CV ya ku kombisa nkoka wa ku vulavulana.',
          'Tlakela ntirho wa phethekemele eka Indeed, Careers24 na PNet.',
          'Tlakela tinhlengeletelo ta ku dyondza ta Services SETA.',
          'Dyondza ku vulavula hi ku hatlisa u laha vaxavi va nkambisiso.',
          'Penga ID ya wena na satifiketi ya matrik.',
        ],
        recommendedTraining: [
          'Tinhlengeletelo ta phethekemele ya rungwa ta Services SETA',
          'Xidondzwa xa hansi xa ntirho wa vaxavi',
          'Ku tiva khomphuyuta na ku tipa',
        ],
        tips: [
          'Vulavula hi ku hatlisa u tiyile, na vaxavi lava pfurhaka.',
          'Dyondza hi tshuka situmbulwa kumbe ntirho wa bhizinisi hi ku tshuka.',
          'Penga u tirha hi nkarhi, ku hlanganisa vusiku na mutsimo.',
        ],
      },
    },
    {
      id: 7,
      name: 'Ku sirheleriwa (Mupfumeri wa ku sirheleriwa)',
      shortDescription: 'Sirhela matitu, laha ku nghena u sirhelele vanhu na switumbulwa.',
      categoryEmoji: '🛡️',
      detail: {
        description:
          'Vasirheli va ku sirheleriwa va sirhela miganga, va laha lava nghenaka, va endla matitu va hlamula swiyimo leswi nga vulakanyiwa. Ntirho wa lava ku tsarisa eka PSIRA u lava tala eka Afrika Dzonga hinkwako.',
        keySkills: ['Ku titisisa', 'U nguriwa hi miri', 'Ku neha', 'Ku landela masungulo', 'Ku vulavulana'],
        salaryRange: 'Ku kombisa: R4,500–R8,000/nyeni (ku hambana hi muqashi na xiyimo)',
        howToGetStarted: [
          'Kuma satifiketi ya ku hatlisa na mapodisa estehisheni ya wena SAPA ya kufikela.',
          'Tsarisa u dyondza na muqashi wa PSIRA wa ku sirheleriwa wa ku tsandzeka.',
          'Ringeta ku tsarisa ka tikomphani ta ku sirheleriwa ta ku tsariseke endzhawini ya wena.',
          'Tlakela eka Indeed, Careers24 na mapapele ya tikomphani ta ku sirheleriwa.',
          'Penga ID, satifiketi ya matrik na mapapila ya PSIRA.',
        ],
        recommendedTraining: [
          'Ku dyondza ku sirheleriwa ka PSIRA Xiyimo E ku ya eka C',
          'Mavumbi ya ku pfuna',
          'Ku pfuma mulilo / xidondzwa xa hansi xa ku sirheleriwa',
        ],
        tips: [
          'Satifiketi ya ku hatlisa na mapodisa yi lavha - yi tshama hi nkarhi.',
          'Tshama u titisisa u landela masungulo ya ku sirheleriwa hi nkarhi wunwini.',
          'Tshama u neha u tsandzeka; vaqashi va hambula vasirheli hi ku tshuka.',
        ],
      },
    },
    {
      id: 8,
      name: 'Vukhongomela na Rihoyi (Mupfuneri wa salon)',
      shortDescription: 'Pfuna salonni: amukela vaxavi, hlayisa switirhisiwa u pfunise ntirho wa vukhongomela.',
      categoryEmoji: '💇',
      detail: {
        description:
          'Vapfuneri va salon va amukela vaxavi, va hlamba rihoyi, va hlayisa switirhisiwa, va pfuma tindhawu va pfuna vahakeri na vakhongomela. I ndlela ya kahle ya ku nghena eka ntirho wa vukhongomela loko u dyondza hi ku tirha.',
        keySkills: ['Ntirho wa vaxavi', 'Ku hlayisa', 'Ku pfuna', 'Ku twa', 'Ku laha'],
        salaryRange: 'Ku kombisa: R4,000–R7,500/nyeni (ku hambana hi salon na ndhawu)',
        howToGetStarted: [
          'Tumbuluxa email ya mahala na CV ya hansi.',
          'Nghena salonni ta ndhawu ya wena u byela hi ntirho wa ku pfuna.',
          'Tlakela eka Indeed na Careers24 ntirho wa ku pfuna salon.',
          'Ringeta ku dyondza ka vukhongomela kumbe rihoyi eka CATHSSETA.',
          'Penga ID ya wena na satifiketi ya matrik.',
        ],
        recommendedTraining: [
          'Tinhlengeletelo ta vukhongomela kumbe rihoyi (CATHSSETA)',
          'Xidondzwa xa hansi xa ku hlayisa na ku hlamba',
          'Mavumbi ya ntirho wa vaxavi',
        ],
        tips: [
          'Hlayisa miri ya wena na ndhawu ya wena ya ku tirha.',
          'Tshama u saseka u pfuna vaxavi.',
          'Tlakela u dyondza tindlela kha vahakeri lava na nkoka.',
        ],
      },
    },
    {
      id: 9,
      name: 'Ku lunguteka swakudya (Mupfuneri wa khishini / Swakudya swa ku hatlisa)',
      shortDescription: 'Pfuna ekhishinini: lunguta switumbulwa, hlayisa tindhawu u pfunise vahakeri.',
      categoryEmoji: '🍳',
      detail: {
        description:
          'Vapfuneri va khishini na vaxavisi wa swakudya swa ku hatlisa va lunguta switumbulwa, va bika swilo swa le hansi, va hlayisa khishini va pfuna vahakeri. I ntirho wa kucala wa kona eridini na mafekithori ya swakudya swa ku hatlisa, una na nkarhi wa ku hambana.',
        keySkills: ['Ku tirha ehansi ka nhlawulo', 'Ku hlayisa', 'Ntirho wa xipano', 'Ku landela ti resipe', 'Ku hatlisa'],
        salaryRange: 'Ku kombisa: R4,000–R7,000/nyeni (ku hambana hi muqashi)',
        howToGetStarted: [
          'Tumbuluxa email ya mahala na CV ya hansi.',
          'Nghena mafekithori ya swakudya swa ku hatlisa na ridini na CV ya wena.',
          'Tlakela eka Indeed, Careers24 na mapapele ya ntirho wa hotele.',
          'Ringeta ku dyondza ka swakudya eka CATHSSETA.',
          'Penga ID ya wena na satifiketi ya matrik.',
        ],
        recommendedTraining: [
          'Tinhlengeletelo ta swakudya na swakunwa ta CATHSSETA',
          'Xidondzwa xa hansi xa ku sirheleriwa ka swakudya',
          'Nkoka wa ku bika wa vutomi',
        ],
        tips: [
          'Hlayisa mabasa, unifomo na tindhawu hi nkarhi wunwini.',
          'Tirha hi ku hatlisa fhedzi u titisisa - khishini i nkulu.',
          'Ti tsandzekeni; ntsiku wa mukhadi wa kuta endliwa.',
        ],
      },
    },
    {
      id: 10,
      name: 'Ku famba na ku paka (Mutsali / Mupaki / Mupfuneri wa mutshayi)',
      shortDescription: 'Tshama u paka tiyimiso, ladhya tilori u pfuna ku fambisa switumbulwa.',
      categoryEmoji: '📦',
      detail: {
        description:
          'Vatsali, vapaki na vapfuneri va mutshayi va tirha emaphakini na tilorini ta ku fambisa. Va tshama tiyimiso, va paka mabhokisi, va ladhya va khupula switumbulwa va pfuna vutshayi bya ku fambisa. Ntirho wa miri wa ku laha wa lava tala.',
        keySkills: ['U nguriwa hi miri', 'Ku hlamula', 'Ntirho wa xipano', 'Ku landela swiyimo', 'Ku hlayisa'],
        salaryRange: 'Ku kombisa: R4,500–R9,000/nyeni (ku hambana hi muqashi na ndhawu)',
        howToGetStarted: [
          'Tumbuluxa email ya mahala na CV ya hansi.',
          'Tlakela eka Indeed, Careers24 na mapapele ya ntirho wa tikomphani ta ku famba.',
          'Endzhela maphaki na vaxavisi va ntirho u byela hi ntirho.',
          'Ringeta ku dyondza ka ku famba eka TETA.',
          'Penga ID ya wena na satifiketi ya matrik.',
        ],
        recommendedTraining: [
          'Tinhlengeletelo ta ku famba na ku paka ta TETA',
          'Laayense ya foshiliti (i nkwisiso wa nkulu)',
          'Nkumbeto wa mabya na ku sirheleriwa',
        ],
        tips: [
          'Hlamula loko u tshama - swipana swi dya mali.',
          'Titisisa loko u ladhya; tirhisa tindlela ta ku sirheleriwa.',
          'Ti tsandzekeni u fika hi nkarhi; ku fambisa ku ya hi tindlela.',
        ],
      },
    },
  ],
};

module.exports = { JOBS };
