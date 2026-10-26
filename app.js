
"use strict";

// Proof2Work front-end demo.
// Browser storage is for demonstration only, not production authentication.

const STORAGE_KEY = "proof2work_demo_users_v2";
const SESSION_KEY = "proof2work_demo_session_v2";
const LANGUAGE_KEY = "proof2work_language_v2";


const API_BASE_URL = "http://localhost:4000";

async function apiRequest(endpoint, options = {}) {
  const token = localStorage.getItem("proof2work_token");

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Something went wrong.");
  }

  return data;
}


const $ = (selector) => document.querySelector(selector);

const languageSelect = $("#language-select");
const signupForm = $("#signup-form");
const loginForm = $("#login-form");
const qualificationForm = $("#qualification-form");
const authMessage = $("#auth-message");
const qualificationMessage = $("#qualification-message");

let currentUserEmail = sessionStorage.getItem(SESSION_KEY) || "";
let activityType = "assessment";
let activityQuestions = [];
let activityIndex = 0;
let activityScore = 0;
let answeredCurrentQuestion = false;
let lastAnswerCorrect = false;

const translations = {
  en: {
    chooseLanguage: "Choose language",
    welcomeLabel: "WELCOME TO PROOF2WORK",
    welcomeTitle: "Your skills. Your proof. Your future.",
    welcomeDescription: "Build your confidence, practise real workplace tasks, and show what you can do — even when you do not have work experience yet.",
    featureOne: "✓ Discover your strengths",
    featureTwo: "✓ Practise workplace skills",
    featureThree: "✓ Build your skills portfolio",
    accountTitle: "Let's get started",
    accountDescription: "Create an account or log in to continue.",
    signUp: "Sign up",
    logIn: "Log in",
    fullName: "Full name",
    email: "Email address",
    password: "Password",
    confirmPassword: "Confirm password",
    createAccount: "Create account",
    namePlaceholder: "Enter your full name",
    emailPlaceholder: "you@example.com",
    passwordPlaceholder: "At least 8 characters",
    confirmPasswordPlaceholder: "Enter your password again",
    loginPasswordPlaceholder: "Enter your password",
    profileLabel: "YOUR JOURNEY",
    profileTitle: "Tell us about yourself",
    profileDescription: "Add your background so we can help you practise relevant skills.",
    qualification: "Qualification",
    institution: "School or institution",
    studyStatus: "Study status",
    completionYear: "Completion year",
    skills: "Your current skills",
    careerInterest: "Career interest",
    careerGoal: "Your career goal",
    saveProfile: "Save my profile",
    dashboardLabel: "YOUR PROGRESS",
    hello: "Hello",
    dashboardDescription: "Your skills journey starts here.",
    editProfile: "Edit profile",
    myProfile: "My profile",
    assessmentTitle: "Skills assessment",
    assessmentDescription: "Discover your strengths and identify skills to improve.",
    startAssessment: "Start assessment",
    simulationTitle: "Workplace practice",
    simulationDescription: "Practise workplace tasks and learn from feedback.",
    startSimulation: "Start practice",
    portfolioTitle: "My portfolio",
    portfolioDescription: "Review the evidence of your skills and completed activities.",
    practiceLabel: "LEARN BY DOING",
    activityTitle: "Build your skills",
    next: "Next",
    resultsTitle: "Your results",
    retry: "Try again",
    backDashboard: "Back to dashboard",
    accessibilityLabel: "ACCESS FOR EVERYONE",
    accessibilityTitle: "Make Proof2Work work for you",
    accessibilityDescription: "Use voice controls to listen to page content. Available voices depend on your device.",
    voiceLanguage: "Voice language",
    readPage: "Read page aloud",
    pauseVoice: "Pause / resume",
    stopVoice: "Stop reading",
    logOut: "Log out",
    footerTagline: "Your skills. Your proof. Your future.",
    profileSaved: "Your profile has been saved.",
    noPortfolio: "Your completed activities will appear here.",
    portfolioScore: "Score",
    portfolioDate: "Completed",
    assessmentComplete: "Assessment completed",
    simulationComplete: "Workplace practice completed",
    activityIntroAssessment: "Choose the best answer for each question. This is a practice assessment, not a formal qualification.",
    activityIntroSimulation: "Work through these workplace situations. Choose the response you think is most helpful.",
    correct: "Correct! Well done.",
    incorrect: "Not quite. Review the feedback and try to understand why.",
    chooseAnswer: "Please choose an answer first.",
    activityFinished: "Activity completed. Your result has been saved to your portfolio.",
    voiceUnavailable: "Speech is not available in this browser.",
    voiceMissing: "This voice may not be installed on your device. Try another language.",
    voiceReady: "Voice controls are ready.",
    voicePaused: "Speech paused.",
    voiceStopped: "Speech stopped.",
    voiceSpeaking: "Reading aloud.",
    requiredFields: "Please complete all required fields.",
    passwordMismatch: "Your passwords do not match.",
    accountExists: "An account with this email already exists. Please log in.",
    accountCreated: "Account created. Please complete your profile.",
    loginFailed: "The email or password is incorrect.",
    loginSuccess: "You are logged in.",
    logoutSuccess: "You have logged out.",
    secureContext: "This demo stores account details only in this browser. Do not use a real or reused password.",
    chooseOption: "Choose an option",
    studying: "Currently studying",
    completed: "Completed",
    paused: "Paused my studies",
    software: "Software development",
    data: "Data and analytics",
    design: "Design and user experience",
    support: "IT support",
    business: "Business and administration",
    other: "Other"
  },

  zu: {
    chooseLanguage: "Khetha ulimi",
    welcomeLabel: "UYEMUKELWA KU-PROOF2WORK",
    welcomeTitle: "Amakhono akho. Ubufakazi bakho. Ikusasa lakho.",
    welcomeDescription: "Zithembe, uzijwayeze imisebenzi yasemsebenzini, futhi ubonise lokho okwaziyo ukukwenza.",
    featureOne: "✓ Thola amandla akho",
    featureTwo: "✓ Zijwayeze amakhono omsebenzi",
    featureThree: "✓ Yakha iphothifoliyo yamakhono",
    accountTitle: "Ake siqale",
    accountDescription: "Dala i-akhawunti noma ungene ukuze uqhubeke.",
    signUp: "Bhalisa",
    logIn: "Ngena",
    fullName: "Igama eligcwele",
    email: "Ikheli le-imeyili",
    password: "Iphasiwedi",
    confirmPassword: "Qinisekisa iphasiwedi",
    createAccount: "Dala i-akhawunti",
    profileLabel: "UHLELO LWAKHO",
    profileTitle: "Sitshele ngawe",
    profileDescription: "Faka imininingwane yakho ukuze sikusize uzijwayeze amakhono afanele.",
    qualification: "Iziqu noma isitifiketi",
    institution: "Isikole noma isikhungo",
    studyStatus: "Isimo sezifundo",
    completionYear: "Unyaka wokuqeda",
    skills: "Amakhono akho",
    careerInterest: "Umkhakha womsebenzi",
    careerGoal: "Umgomo wakho womsebenzi",
    saveProfile: "Londoloza iphrofayili",
    dashboardLabel: "INQUBEKELA PHAMBILI YAKHO",
    hello: "Sawubona",
    dashboardDescription: "Uhambo lwakho lwamakhono luqala lapha.",
    editProfile: "Hlela iphrofayili",
    myProfile: "Iphrofayili yami",
    assessmentTitle: "Ukuhlolwa kwamakhono",
    assessmentDescription: "Thola amandla akho namakhono okufanele uwathuthukise.",
    startAssessment: "Qala ukuhlolwa",
    simulationTitle: "Ukuzijwayeza umsebenzi",
    simulationDescription: "Zijwayeze imisebenzi yasemsebenzini futhi ufunde ngempendulo.",
    startSimulation: "Qala ukuzijwayeza",
    portfolioTitle: "Iphothifoliyo yami",
    portfolioDescription: "Bheka ubufakazi bamakhono akho nemisebenzi oyiqedile.",
    practiceLabel: "FUNDA NGOKWENZA",
    activityTitle: "Thuthukisa amakhono akho",
    next: "Okulandelayo",
    resultsTitle: "Imiphumela yakho",
    retry: "Zama futhi",
    backDashboard: "Buyela ekhasini lakho",
    accessibilityLabel: "UKUFINYELELA KWABO BONKE",
    accessibilityTitle: "Yenza i-Proof2Work ikusebenzele",
    accessibilityDescription: "Sebenzisa izilawuli zezwi ukuze ulalele okuqukethwe. Amazwi atholakalayo ancike kudivayisi yakho.",
    voiceLanguage: "Ulimi lwezwi",
    readPage: "Funda ikhasi ngezwi",
    pauseVoice: "Misa isikhashana / qhubeka",
    stopVoice: "Misa ukufunda",
    logOut: "Phuma",
    footerTagline: "Amakhono akho. Ubufakazi bakho. Ikusasa lakho.",
    profileSaved: "Iphrofayili yakho ilondoloziwe.",
    noPortfolio: "Imisebenzi oyiqedile izovela lapha.",
    portfolioScore: "Amaphuzu",
    portfolioDate: "Kuqedwe",
    chooseOption: "Khetha",
    studying: "Ngisafunda",
    completed: "Ngiphothulile",
    paused: "Ngimise izifundo zami",
    software: "Ukuthuthukiswa kwesofthiwe",
    data: "Idatha nokuhlaziya",
    design: "Ukuklama nolwazi lomsebenzisi",
    support: "Usizo lwe-IT",
    business: "Ibhizinisi nokuphatha",
    other: "Okunye"
  },

  st: {
    chooseLanguage: "Kgetha puo",
    welcomeLabel: "O AMOHELETŠWE GO PROOF2WORK",
    welcomeTitle: "Bokgoni bja gago. Bohlatse bja gago. Bokamoso bja gago.",
    welcomeDescription: "Ikholofele, itlwaetše mešomo ya lefelong la mošomo, gomme o bontšhe bokgoni bja gago.",
    featureOne: "✓ Hwetša maatla a gago",
    featureTwo: "✓ Itlwaetše bokgoni bja mošomo",
    featureThree: "✓ Aga potefolio ya bokgoni",
    accountTitle: "A re thomeng",
    accountDescription: "Hlama akhaonto goba o tsene go tšwela pele.",
    signUp: "Ngwadiša",
    logIn: "Tsena",
    fullName: "Leina ka botlalo",
    email: "Aterese ya imeile",
    password: "Phasewete",
    confirmPassword: "Netefatša phasewete",
    createAccount: "Hlama akhaonto",
    profileLabel: "LEETO LA GAGO",
    profileTitle: "Re botše ka wena",
    profileDescription: "Tsenya tshedimošo ya gago gore re go thuše go itlwaetša bokgoni bjo bo swanetšego.",
    qualification: "Thuto goba setifikeiti",
    institution: "Sekolo goba setheo",
    studyStatus: "Maemo a dithuto",
    completionYear: "Ngwaga wa go fetša",
    skills: "Bokgoni bja gago",
    careerInterest: "Lefapha la mošomo",
    careerGoal: "Maikemišetšo a gago a mošomo",
    saveProfile: "Boloka profaele",
    dashboardLabel: "KGOPELELO YA GAGO",
    hello: "Dumela",
    dashboardDescription: "Leeto la gago la bokgoni le thoma mo.",
    editProfile: "Fetola profaele",
    myProfile: "Profaele ya ka",
    assessmentTitle: "Tekolo ya bokgoni",
    assessmentDescription: "Hwetša maatla a gago le bokgoni bjo o swanetšego go bo kaonafatša.",
    startAssessment: "Thoma tekolo",
    simulationTitle: "Go itlwaetša mošomo",
    simulationDescription: "Itlwaetše mešomo ya mošomo gomme o ithute go tšwa maikutlong.",
    startSimulation: "Thoma go itlwaetša",
    portfolioTitle: "Potefolio ya ka",
    portfolioDescription: "Lebelela bohlatse bja bokgoni bja gago le mešomo yeo o e feditšego.",
    practiceLabel: "ITHUTE KA GO DIRA",
    activityTitle: "Kaonafatša bokgoni bja gago",
    next: "Latelago",
    resultsTitle: "Dipoelo tša gago",
    retry: "Leka gape",
    backDashboard: "Boela letlakaleng la gago",
    accessibilityLabel: "GO FIHLELEGA GO BOHLE",
    accessibilityTitle: "Diriša Proof2Work ka tsela ye e go loketšego",
    accessibilityDescription: "Diriša ditaolo tša lentšu go theeletša diteng tša letlakala. Mantšu ao a lego gona a ithekgile ka sedirišwa sa gago.",
    voiceLanguage: "Puo ya lentšu",
    readPage: "Bala letlakala ka lentšu",
    pauseVoice: "Khutša / tšwela pele",
    stopVoice: "Emiša go bala",
    logOut: "Tswa",
    footerTagline: "Bokgoni bja gago. Bohlatse bja gago. Bokamoso bja gago.",
    profileSaved: "Profaele ya gago e bolokilwe.",
    noPortfolio: "Mešomo yeo o e feditšego e tla tšwelela mo.",
    portfolioScore: "Dintlha",
    portfolioDate: "E feditšwe",
    chooseOption: "Kgetha",
    studying: "Ke sa ithuta",
    completed: "Ke feditše",
    paused: "Ke khutšitše dithuto",
    software: "Go hlama disoftware",
    data: "Datha le tshekatsheko",
    design: "Tlhamišo le maitemogelo a modiriši",
    support: "Thušo ya IT",
    business: "Kgwebo le taolo",
    other: "Tše dingwe"
  },

  nso: {
    chooseLanguage: "Kgetha polelo",
    welcomeLabel: "O AMOGELWA GO PROOF2WORK",
    welcomeTitle: "Bokgoni bja gago. Bohlatse bja gago. Bokamoso bja gago.",
    welcomeDescription: "Ikholofele, itlwaetše mešomo ya lefelong la mošomo, gomme o bontšhe seo o kgonago go se dira.",
    featureOne: "✓ Hwetša maatla a gago",
    featureTwo: "✓ Itlwaetše bokgoni bja mošomo",
    featureThree: "✓ Aga potefolio ya bokgoni",
    accountTitle: "A re thomeng",
    accountDescription: "Hlama akhaonto goba o tsene go tšwela pele.",
    signUp: "Ngwadiša",
    logIn: "Tsena",
    fullName: "Leina ka botlalo",
    email: "Aterese ya imeile",
    password: "Phasewete",
    confirmPassword: "Netefatša phasewete",
    createAccount: "Hlama akhaonto",
    profileLabel: "LEETO LA GAGO",
    profileTitle: "Re botše ka wena",
    profileDescription: "Tsenya tshedimošo ya gago gore re go thuše go itlwaetša bokgoni bjo bo swanetšego.",
    qualification: "Thuto goba setifikeiti",
    institution: "Sekolo goba setheo",
    studyStatus: "Maemo a dithuto",
    completionYear: "Ngwaga wa go fetša",
    skills: "Bokgoni bja gago",
    careerInterest: "Lefapha la mošomo",
    careerGoal: "Maikemišetšo a gago a mošomo",
    saveProfile: "Boloka profaele",
    dashboardLabel: "KGOPELELO YA GAGO",
    hello: "Thobela",
    dashboardDescription: "Leeto la gago la bokgoni le thoma mo.",
    editProfile: "Fetola profaele",
    myProfile: "Profaele ya ka",
    assessmentTitle: "Tekolo ya bokgoni",
    assessmentDescription: "Hwetša maatla a gago le bokgoni bjo o swanetšego go bo kaonafatša.",
    startAssessment: "Thoma tekolo",
    simulationTitle: "Go itlwaetša mošomo",
    simulationDescription: "Itlwaetše mešomo ya mošomo gomme o ithute go tšwa maikutlong.",
    startSimulation: "Thoma go itlwaetša",
    portfolioTitle: "Potefolio ya ka",
    portfolioDescription: "Lebelela bohlatse bja bokgoni bja gago le mešomo yeo o e feditšego.",
    practiceLabel: "ITHUTE KA GO DIRA",
    activityTitle: "Kaonafatša bokgoni bja gago",
    next: "Latelago",
    resultsTitle: "Dipoelo tša gago",
    retry: "Leka gape",
    backDashboard: "Boela letlakaleng la gago",
    accessibilityLabel: "GO FIHLELEGA GO BOHLE",
    accessibilityTitle: "Diriša Proof2Work ka tsela ye e go loketšego",
    accessibilityDescription: "Diriša ditaolo tša lentšu go theeletša diteng tša letlakala. Mantšu ao a lego gona a ithekgile ka sedirišwa sa gago.",
    voiceLanguage: "Puo ya lentšu",
    readPage: "Bala letlakala ka lentšu",
    pauseVoice: "Khutša / tšwela pele",
    stopVoice: "Emiša go bala",
    logOut: "Tswa",
    footerTagline: "Bokgoni bja gago. Bohlatse bja gago. Bokamoso bja gago.",
    profileSaved: "Profaele ya gago e bolokilwe.",
    noPortfolio: "Mešomo yeo o e feditšego e tla tšwelela mo.",
    portfolioScore: "Dintlha",
    portfolioDate: "E feditšwe",
    chooseOption: "Kgetha",
    studying: "Ke sa ithuta",
    completed: "Ke feditše",
    paused: "Ke khutšitše dithuto",
    software: "Go hlama disoftware",
    data: "Datha le tshekatsheko",
    design: "Tlhamišo le maitemogelo a modiriši",
    support: "Thušo ya IT",
    business: "Kgwebo le taolo",
    other: "Tše dingwe"
  }
};

const assessmentQuestions = {
  software: [
    {
      question: "A program gives an error after you change a line of code. What should you do first?",
      options: [
        "Delete the whole project",
        "Read the error message and check the changed code",
        "Ignore the error",
        "Change many unrelated lines"
      ],
      answer: 1,
      feedback: "Reading the error and checking the recent change helps you find the cause."
    },
    {
      question: "You are unsure how a function works. What is a good next step?",
      options: [
        "Guess and submit without testing",
        "Copy random code",
        "Read the documentation and test a small example",
        "Give up immediately"
      ],
      answer: 2,
      feedback: "Documentation and small tests help you understand a function safely."
    },
    {
      question: "You finish a feature. What should you do before saying it is ready?",
      options: [
        "Test it with relevant examples",
        "Assume it works",
        "Delete the tests",
        "Hide any errors"
      ],
      answer: 0,
      feedback: "Testing helps you find problems before other people use your feature."
    }
  ],
  data: [
    {
      question: "A spreadsheet contains missing values. What should you do first?",
      options: [
        "Delete all the data",
        "Check how many values are missing and why",
        "Invent replacement values",
        "Ignore the missing values"
      ],
      answer: 1,
      feedback: "First understand the missing data before deciding how to handle it."
    },
    {
      question: "A chart looks very different from what you expected. What should you check?",
      options: [
        "The data, labels, and calculations",
        "Only the chart colour",
        "Nothing; the chart must be right",
        "Remove all unusual values"
      ],
      answer: 0,
      feedback: "Check the source data, labels, and calculations before drawing conclusions."
    },
    {
      question: "You present data to a non-technical audience. What helps most?",
      options: [
        "Use unexplained technical words",
        "Show every number on one slide",
        "Explain the main finding in clear language",
        "Hide the conclusion"
      ],
      answer: 2,
      feedback: "Clear language and a focused finding help people understand the data."
    }
  ],
  design: [
    {
      question: "Users struggle to find the main button on a screen. What should you do?",
      options: [
        "Add more buttons",
        "Make the main action clearer and test the design",
        "Remove all labels",
        "Ignore their feedback"
      ],
      answer: 1,
      feedback: "Clear visual hierarchy and user testing help people find important actions."
    },
    {
      question: "Before designing a new screen, what is useful to learn?",
      options: [
        "Only your favourite colours",
        "How users will use the screen and what they need",
        "How many animations you can add",
        "Nothing about the users"
      ],
      answer: 1,
      feedback: "Understanding users and their needs helps you design a more useful screen."
    },
    {
      question: "A user reports that text is difficult to read. What should you check?",
      options: [
        "Text size and contrast",
        "Add smaller text",
        "Remove the content",
        "Use more decorative fonts"
      ],
      answer: 0,
      feedback: "Readable text size and strong contrast improve accessibility."
    }
  ],
  support: [
    {
      question: "A colleague says their computer cannot connect to the internet. What should you do first?",
      options: [
        "Immediately replace the computer",
        "Check the connection and ask what error they see",
        "Delete their files",
        "Ignore the request"
      ],
      answer: 1,
      feedback: "Start with simple checks and gather information before trying bigger changes."
    },
    {
      question: "You cannot solve a technical problem. What is a good next step?",
      options: [
        "Pretend it is fixed",
        "Change settings without permission",
        "Record what you tried and ask the right support person",
        "Blame the user"
      ],
      answer: 2,
      feedback: "Good notes and asking for help support safe troubleshooting."
    },
    {
      question: "A user gives you their password to fix an issue. What should you do?",
      options: [
        "Share it with your team",
        "Use it for personal tasks",
        "Follow security procedures and avoid keeping their password",
        "Write it on a public note"
      ],
      answer: 2,
      feedback: "Protecting private information is part of responsible IT support."
    }
  ],
  business: [
    {
      question: "You have two tasks with the same deadline. What is a useful first step?",
      options: [
        "Ignore both tasks",
        "Check urgency and importance, then plan the work",
        "Do the easiest task without checking",
        "Wait until the deadline passes"
      ],
      answer: 1,
      feedback: "Prioritising and planning helps you use your time effectively."
    },
    {
      question: "A customer is upset about a delay. How should you respond?",
      options: [
        "Listen calmly, acknowledge the concern, and explain the next step",
        "Argue with the customer",
        "Promise something you cannot deliver",
        "End the conversation without explanation"
      ],
      answer: 0,
      feedback: "Listening, empathy, and honest updates help manage customer concerns."
    },
    {
      question: "You notice a mistake in a report you sent. What should you do?",
      options: [
        "Hide the mistake",
        "Blame a colleague",
        "Correct it and tell the relevant person",
        "Delete all copies without explanation"
      ],
      answer: 2,
      feedback: "Taking responsibility and correcting mistakes builds trust."
    }
  ],
  other: [
    {
      question: "You receive a task you do not fully understand. What should you do?",
      options: [
        "Guess without asking",
        "Ask clear questions about the expected result",
        "Ignore the task",
        "Say it is complete before starting"
      ],
      answer: 1,
      feedback: "Clarifying expectations helps you complete the right task."
    },
    {
      question: "You receive helpful feedback on your work. What is a good response?",
      options: [
        "Listen, ask questions, and use it to improve",
        "Ignore all feedback",
        "Argue without listening",
        "Stop trying"
      ],
      answer: 0,
      feedback: "Useful feedback can help you learn and improve your work."
    },
    {
      question: "You have several tasks to finish. What can help you manage them?",
      options: [
        "Keep every task in your head",
        "Avoid planning",
        "Write down the tasks and set priorities",
        "Start everything at once"
      ],
      answer: 2,
      feedback: "A simple task list and priorities help you organise your work."
    }
  ]
};

const simulationQuestions = {
  software: [
    {
      question: "A teammate reports that your new feature is not working. What is the best response?",
      options: [
        "Tell them it must be their fault",
        "Ask for the steps to reproduce the issue and investigate it",
        "Delete the feature immediately",
        "Ignore their message"
      ],
      answer: 1,
      feedback: "Ask for clear steps, reproduce the problem, and investigate before changing code."
    },
    {
      question: "You are about to commit code but have not tested your change. What should you do?",
      options: [
        "Test the change first and check what you are committing",
        "Commit everything without looking",
        "Delete the repository",
        "Tell the team it has been tested"
      ],
      answer: 0,
      feedback: "Testing and reviewing your changes helps prevent avoidable problems."
    }
  ],
  data: [
    {
      question: "A manager asks you to share a report, but one figure seems incorrect. What should you do?",
      options: [
        "Send it without checking",
        "Change the figure to a guess",
        "Verify the source and calculation before sharing",
        "Delete the report"
      ],
      answer: 2,
      feedback: "Verify the data and calculations so that people can rely on the report."
    },
    {
      question: "A colleague asks what a chart means. What is the best response?",
      options: [
        "Explain the main finding and any important limitations",
        "Read every number without explaining it",
        "Tell them to work it out alone",
        "Hide the source of the data"
      ],
      answer: 0,
      feedback: "Explain the finding clearly and mention anything that affects interpretation."
    }
  ],
  design: [
    {
      question: "A user cannot complete a form because the instructions are unclear. What should you do?",
      options: [
        "Blame the user",
        "Observe where they struggle, improve the instructions, and test again",
        "Add more complicated words",
        "Remove all instructions"
      ],
      answer: 1,
      feedback: "Use the user's experience to improve the design, then test the improvement."
    },
    {
      question: "A proposed design looks attractive but is difficult to use with a keyboard. What should you do?",
      options: [
        "Ignore keyboard users",
        "Remove keyboard support",
        "Improve keyboard navigation and test accessibility",
        "Make the text smaller"
      ],
      answer: 2,
      feedback: "A good design should be usable by people with different access needs."
    }
  ],
  support: [
    {
      question: "A colleague asks you to open an unexpected email attachment. What should you do?",
      options: [
        "Open it immediately",
        "Check whether the sender and attachment are trustworthy and follow security procedures",
        "Forward it to everyone",
        "Disable security software"
      ],
      answer: 1,
      feedback: "Unexpected attachments can be risky. Verify them and follow your organisation's security process."
    },
    {
      question: "A computer issue may cause a loss of important work. What should you prioritise?",
      options: [
        "Make random changes",
        "Delete files to free space",
        "Protect the user's data and follow safe troubleshooting steps",
        "Ignore the warning"
      ],
      answer: 2,
      feedback: "Protecting data and following safe steps should come before risky changes."
    }
  ],
  business: [
    {
      question: "A customer asks a question and you do not know the answer. What should you do?",
      options: [
        "Make up an answer",
        "Listen, be honest, and find the correct information",
        "Ignore the customer",
        "Blame another team"
      ],
      answer: 1,
      feedback: "Honesty and following up with correct information builds trust."
    },
    {
      question: "You may miss a deadline. What should you do?",
      options: [
        "Wait until someone notices",
        "Pretend the work is complete",
        "Tell the relevant person early and agree on the next steps",
        "Delete the task"
      ],
      answer: 2,
      feedback: "Early communication gives people time to plan and agree on a solution."
    }
  ],
  other: [
    {
      question: "A teammate misunderstands your instructions. What is a helpful response?",
      options: [
        "Repeat the same words angrily",
        "Explain the task more clearly and check their understanding",
        "Refuse to help",
        "Blame them publicly"
      ],
      answer: 1,
      feedback: "Clear communication includes checking that everyone understands the task."
    },
    {
      question: "You make a mistake during a task. What should you do?",
      options: [
        "Hide it",
        "Blame someone else",
        "Acknowledge it, correct it, and learn from it",
        "Give up immediately"
      ],
      answer: 2,
      feedback: "Taking responsibility helps solve the problem and supports learning."
    }
  ]
};

function readUsers() {
  try {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return users && typeof users === "object" ? users : {};
  } catch {
    return {};
  }
}

function writeUsers(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function getCurrentUser() {
  const users = readUsers();
  return users[currentUserEmail] || null;
}

function saveCurrentUser(user) {
  const users = readUsers();
  users[currentUserEmail] = user;
  writeUsers(users);
}

function setMessage(element, message, type = "") {
  if (!element) return;
  element.textContent = message;
  element.className = "form-message" + (type ? " " + type : "");
}

function t(key) {
  const lang = languageSelect?.value || "en";
  return translations[lang]?.[key] || translations.en[key] || key;
}

function applyLanguage(language) {
  const selected = translations[language] ? language : "en";

  if (languageSelect) languageSelect.value = selected;
  localStorage.setItem(LANGUAGE_KEY, selected);
  document.documentElement.lang = selected;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translation = translations[selected]?.[key];
    if (translation) element.textContent = translation;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const translation = translations[selected]?.[key];
    if (translation) element.placeholder = translation;
  });

  updateSelectOptions();
  renderPortfolio();

  if ($("#activity") && !$("#activity").hidden && activityQuestions.length) {
    renderQuestion();
  }
}

function updateSelectOptions() {
  const studyStatus = $("#study-status");
  if (studyStatus) {
    const selected = studyStatus.value;
    studyStatus.innerHTML = `
      <option value="">${escapeHtml(t("chooseOption"))}</option>
      <option value="studying">${escapeHtml(t("studying"))}</option>
      <option value="completed">${escapeHtml(t("completed"))}</option>
      <option value="paused">${escapeHtml(t("paused"))}</option>
    `;
    studyStatus.value = selected;
  }

  const careerSelect = $("#career-interest");
  if (careerSelect) {
    const selected = careerSelect.value;
    careerSelect.innerHTML = `
      <option value="">${escapeHtml(t("chooseOption"))}</option>
      <option value="software">${escapeHtml(t("software"))}</option>
      <option value="data">${escapeHtml(t("data"))}</option>
      <option value="design">${escapeHtml(t("design"))}</option>
      <option value="support">${escapeHtml(t("support"))}</option>
      <option value="business">${escapeHtml(t("business"))}</option>
      <option value="other">${escapeHtml(t("other"))}</option>
    `;
    careerSelect.value = selected;
  }
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function showOnly(sectionId) {
  ["welcome", "qualification", "dashboard", "activity"].forEach((id) => {
    const section = document.getElementById(id);
    if (section) section.hidden = id !== sectionId;
  });

  const loggedIn = Boolean(currentUserEmail);
  $("#account-actions").hidden = !loggedIn;
  $("#accessibility").hidden = false;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showSignup() {
  signupForm.hidden = false;
  loginForm.hidden = true;
  $("#show-signup").classList.add("btn-primary");
  $("#show-signup").classList.remove("btn-secondary");
  $("#show-login").classList.add("btn-secondary");
  $("#show-login").classList.remove("btn-primary");
  setMessage(authMessage, "");
}

function showLogin() {
  signupForm.hidden = true;
  loginForm.hidden = false;
  $("#show-login").classList.add("btn-primary");
  $("#show-login").classList.remove("btn-secondary");
  $("#show-signup").classList.add("btn-secondary");
  $("#show-signup").classList.remove("btn-primary");
  setMessage(authMessage, "");
}

function normaliseEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function showProfileForm() {
  const user = getCurrentUser();
  if (!user) {
    showOnly("welcome");
    return;
  }

  const profile = user.profile || {};

  $("#qualification-name").value = profile.qualification || "";
  $("#institution").value = profile.institution || "";
  $("#study-status").value = profile.studyStatus || "";
  $("#completion-year").value = profile.completionYear || "";
  $("#skills").value = profile.skills || "";
  $("#career-interest").value = profile.careerInterest || "";
  $("#career-goal").value = profile.careerGoal || "";

  updateSelectOptions();
  setMessage(qualificationMessage, "");
  showOnly("qualification");
}

function renderDashboard() {
  const user = getCurrentUser();
  if (!user) {
    currentUserEmail = "";
    sessionStorage.removeItem(SESSION_KEY);
    showOnly("welcome");
    return;
  }

  const profile = user.profile || {};
  $("#dashboard-name").textContent = user.name || "";

  $("#profile-qualification").textContent = profile.qualification || "—";
  $("#profile-institution").textContent = profile.institution || "—";
  $("#profile-status").textContent = profile.studyStatus ? t(profile.studyStatus) : "—";
  $("#profile-year").textContent = profile.completionYear || "—";
  $("#profile-skills").textContent = profile.skills || "—";
  $("#profile-career-interest").textContent = profile.careerInterest ? t(profile.careerInterest) : "—";
  $("#profile-career-goal").textContent = profile.careerGoal || "—";

  renderPortfolio();
  showOnly("dashboard");
}

function renderPortfolio() {
  const portfolio = $("#portfolio-content");
  if (!portfolio) return;

  const user = getCurrentUser();

  if (!user || !Array.isArray(user.portfolio) || user.portfolio.length === 0) {
    portfolio.textContent = t("noPortfolio");
    return;
  }

  portfolio.replaceChildren();

  user.portfolio.slice().reverse().forEach((item) => {
    const entry = document.createElement("div");
    entry.className = "portfolio-entry";

    const title = document.createElement("h4");
    title.textContent = item.title;

    const score = document.createElement("p");
    score.textContent = `${t("portfolioScore")}: ${item.score}/${item.total}`;

    const date = document.createElement("p");
    date.textContent = `${t("portfolioDate")}: ${new Date(item.date).toLocaleDateString()}`;

    entry.append(title, score, date);
    portfolio.append(entry);
  });
}

function savePortfolioResult(title, score, total) {
  const user = getCurrentUser();
  if (!user) return;

  if (!Array.isArray(user.portfolio)) user.portfolio = [];

  user.portfolio.push({
    title,
    score,
    total,
    date: new Date().toISOString()
  });

  saveCurrentUser(user);
}

function getCareerQuestions(type) {
  const user = getCurrentUser();
  const career = user?.profile?.careerInterest || "other";
  const collection = type === "assessment" ? assessmentQuestions : simulationQuestions;
  return collection[career] || collection.other;
}

function startActivity(type) {
  const user = getCurrentUser();
  if (!user?.profile) {
    showProfileForm();
    return;
  }

  activityType = type;
  activityQuestions = getCareerQuestions(type);
  activityIndex = 0;
  activityScore = 0;
  answeredCurrentQuestion = false;
  lastAnswerCorrect = false;

  $("#activity-title").textContent =
    type === "assessment" ? t("assessmentTitle") : t("simulationTitle");

  $("#activity-description").textContent =
    type === "assessment" ? t("activityIntroAssessment") : t("activityIntroSimulation");

  $("#activity-results").hidden = true;
  $("#activity-question").hidden = false;
  $("#activity-options").hidden = false;
  $("#activity-progress").hidden = false;
  $("#activity-feedback").textContent = "";
  $("#activity-next").hidden = true;

  showOnly("activity");
  renderQuestion();
}

function renderQuestion() {
  if (activityIndex >= activityQuestions.length) {
    finishActivity();
    return;
  }

  const question = activityQuestions[activityIndex];

  $("#activity-progress").textContent =
    `${activityIndex + 1} / ${activityQuestions.length}`;

  $("#activity-question").textContent = question.question;
  $("#activity-options").replaceChildren();
  $("#activity-feedback").textContent = "";
  $("#activity-next").hidden = true;
  $("#activity-results").hidden = true;
  $("#activity-question").hidden = false;
  $("#activity-options").hidden = false;

  answeredCurrentQuestion = false;

  question.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "answer-option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "activity-answer";
    input.value = String(index);
    input.setAttribute("aria-label", option);

    const text = document.createElement("span");
    text.textContent = option;

    label.append(input, text);
    $("#activity-options").append(label);

    input.addEventListener("change", () => {
      if (answeredCurrentQuestion) return;

      answeredCurrentQuestion = true;
      const correct = index === question.answer;
      lastAnswerCorrect = correct;

      if (correct) activityScore++;

      const feedback = correct
        ? `${t("correct")} ${question.feedback}`
        : `${t("incorrect")} ${question.feedback}`;

      setMessage($("#activity-feedback"), feedback, correct ? "success" : "error");

      $("#activity-options").querySelectorAll("input").forEach((radio) => {
        radio.disabled = true;
      });

      $("#activity-next").hidden = false;
      $("#activity-next").textContent =
        activityIndex === activityQuestions.length - 1
          ? t("resultsTitle")
          : t("next");
    });
  });
}

function finishActivity() {
  const total = activityQuestions.length;
  const title = activityType === "assessment"
    ? t("assessmentComplete")
    : t("simulationComplete");

  savePortfolioResult(title, activityScore, total);

  $("#activity-question").hidden = true;
  $("#activity-options").hidden = true;
  $("#activity-progress").hidden = true;
  $("#activity-feedback").textContent = "";
  $("#activity-next").hidden = true;
  $("#activity-results").hidden = false;

  $("#results-summary").textContent =
    `${t("activityFinished")} ${t("portfolioScore")}: ${activityScore}/${total}.`;

  renderPortfolio();
}

function retryActivity() {
  startActivity(activityType);
}

function logout() {
  currentUserEmail = "";
  sessionStorage.removeItem(SESSION_KEY);
  stopVoice();
  showSignup();
  showOnly("welcome");
  setMessage(authMessage, t("logoutSuccess"), "success");
}

function availableSpeechVoices() {
  if (!("speechSynthesis" in window)) return [];
  return window.speechSynthesis.getVoices();
}

function speakText(text) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    setMessage($("#voice-message"), t("voiceUnavailable"), "error");
    return;
  }

  const voiceLanguage = $("#voice-language").value;
  const voices = availableSpeechVoices();
  const baseLanguage = voiceLanguage.split("-")[0].toLowerCase();

  const voice = voices.find((item) => item.lang.toLowerCase() === voiceLanguage.toLowerCase())
    || voices.find((item) => item.lang.toLowerCase().startsWith(baseLanguage + "-"))
    || voices.find((item) => item.lang.toLowerCase() === baseLanguage);

  if (!voice && baseLanguage !== "en") {
    setMessage($("#voice-message"), t("voiceMissing"), "error");
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = voiceLanguage;
  if (voice) utterance.voice = voice;

  utterance.onstart = () => setMessage($("#voice-message"), t("voiceSpeaking"));
  utterance.onend = () => setMessage($("#voice-message"), t("voiceReady"));
  utterance.onerror = () => setMessage($("#voice-message"), t("voiceUnavailable"), "error");

  window.speechSynthesis.speak(utterance);
}

function stopVoice() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  setMessage($("#voice-message"), t("voiceStopped"));
}

function toggleVoicePause() {
  if (!("speechSynthesis" in window)) {
    setMessage($("#voice-message"), t("voiceUnavailable"), "error");
    return;
  }

  if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
    window.speechSynthesis.pause();
    setMessage($("#voice-message"), t("voicePaused"));
  } else if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    setMessage($("#voice-message"), t("voiceSpeaking"));
  } else {
    setMessage($("#voice-message"), t("voiceReady"));
  }
}

function readPageAloud() {
  const sectionIds = ["welcome", "qualification", "dashboard", "activity", "accessibility"];
  const visibleText = sectionIds
    .map((id) => document.getElementById(id))
    .filter((section) => section && !section.hidden)
    .map((section) => section.innerText || section.textContent)
    .join(". ");

  speakText(visibleText);
}

// Account form events
$("#show-signup").addEventListener("click", showSignup);
$("#show-login").addEventListener("click", showLogin);

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = $("#signup-name").value.trim();
  const email = normaliseEmail($("#signup-email").value);
  const password = $("#signup-password").value;
  const confirmPassword = $("#signup-password-confirm").value;

  if (!name || !email || !password || !confirmPassword) {
    setMessage(authMessage, t("requiredFields"), "error");
    return;
  }

  if (password.length < 8) {
    setMessage(authMessage, t("passwordPlaceholder"), "error");
    return;
  }

  if (password !== confirmPassword) {
    setMessage(authMessage, t("passwordMismatch"), "error");
    return;
  }

  const users = readUsers();

  if (users[email]) {
    setMessage(authMessage, t("accountExists"), "error");
    return;
  }

  // Demo only: this local account storage is NOT secure authentication.
  // Never use a real password here. A production app needs a secure backend.
  users[email] = {
    name,
    password,
    profile: null,
    portfolio: []
  };

  writeUsers(users);
  currentUserEmail = email;
  sessionStorage.setItem(SESSION_KEY, email);

  signupForm.reset();
  setMessage(authMessage, t("accountCreated"), "success");
  showProfileForm();
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = normaliseEmail($("#login-email").value);
  const password = $("#login-password").value;
  const users = readUsers();
  const user = users[email];

  if (!user || user.password !== password) {
    setMessage(authMessage, t("loginFailed"), "error");
    return;
  }

  currentUserEmail = email;
  sessionStorage.setItem(SESSION_KEY, email);
  loginForm.reset();

  if (!user.profile) {
    setMessage(authMessage, t("loginSuccess"), "success");
    showProfileForm();
  } else {
    renderDashboard();
  }
});

// Profile events
qualificationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const user = getCurrentUser();
  if (!user) {
    showOnly("welcome");
    return;
  }

  const profile = {
    qualification: $("#qualification-name").value.trim(),
    institution: $("#institution").value.trim(),
    studyStatus: $("#study-status").value,
    completionYear: $("#completion-year").value,
    skills: $("#skills").value.trim(),
    careerInterest: $("#career-interest").value,
    careerGoal: $("#career-goal").value.trim()
  };

  if (
    !profile.qualification ||
    !profile.institution ||
    !profile.studyStatus ||
    !profile.careerInterest ||
    !profile.careerGoal
  ) {
    setMessage(qualificationMessage, t("requiredFields"), "error");
    return;
  }

  user.profile = profile;
  saveCurrentUser(user);

  setMessage(qualificationMessage, t("profileSaved"), "success");
  renderDashboard();
});

$("#edit-profile").addEventListener("click", showProfileForm);
$("#logout-button").addEventListener("click", logout);

// Assessment and simulation events
$("#start-assessment").addEventListener("click", () => startActivity("assessment"));
$("#start-simulation").addEventListener("click", () => startActivity("simulation"));
$("#activity-next").addEventListener("click", () => {
  if (!answeredCurrentQuestion) {
    setMessage($("#activity-feedback"), t("chooseAnswer"), "error");
    return;
  }

  activityIndex++;
  if (activityIndex >= activityQuestions.length) {
    finishActivity();
  } else {
    renderQuestion();
  }
});

$("#activity-retry").addEventListener("click", retryActivity);
$("#activity-finish").addEventListener("click", renderDashboard);

// Language and voice events
languageSelect.addEventListener("change", () => applyLanguage(languageSelect.value));

$("#voice-language").addEventListener("change", () => {
  const language = $("#voice-language").value;
  if ("speechSynthesis" in window) {
    const voiceExists = availableSpeechVoices().some((voice) =>
      voice.lang.toLowerCase().startsWith(language.split("-")[0].toLowerCase())
    );

    setMessage(
      $("#voice-message"),
      voiceExists ? t("voiceReady") : t("voiceMissing"),
      voiceExists ? "success" : "error"
    );
  }
});

$("#speak-page").addEventListener("click", readPageAloud);
$("#pause-voice").addEventListener("click", toggleVoicePause);
$("#stop-voice").addEventListener("click", stopVoice);

if ("speechSynthesis" in window) {
  window.speechSynthesis.addEventListener?.("voiceschanged", () => {
    setMessage($("#voice-message"), t("voiceReady"));
  });
}

// Start the app
$("#current-year").textContent = new Date().getFullYear();

const savedLanguage = localStorage.getItem(LANGUAGE_KEY) || "en";
applyLanguage(savedLanguage);
showSignup();

if (currentUserEmail && getCurrentUser()) {
  const user = getCurrentUser();
  if (user.profile) {
    renderDashboard();
  } else {
    showProfileForm();
  }
} else {
  currentUserEmail = "";
  sessionStorage.removeItem(SESSION_KEY);
  showOnly("welcome");
}

setMessage($("#voice-message"), t("voiceReady"));
