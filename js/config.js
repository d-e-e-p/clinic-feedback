const translationsMain = {
  english: {
    name: "English",
    title: "Clinic Feedback",
    instruction: "Please select a language and press Start",
    code: "en",
    buttonText: "Start",
    surveyLink: "/pages/en.html",
    backgroundColor: "#368dda", // Blue
    emoji: "🇺🇸",
  },
  spanish: {
    name: "Español",
    title: "Comentarios de la Clínica",
    instruction: "Por favor, seleccione un idioma y presione Empezar",
    code: "es",
    buttonText: "Comenzar",
    surveyLink: "/pages/es.html",
    backgroundColor: "#2ecc71", // Green
    emoji: "🇪🇸",
  },
  french: {
    name: "Français",
    title: "Avis de la Clinique",
    instruction: "Veuillez sélectionner une langue et appuyer sur Commencer",
    code: "fr",
    buttonText: "Commencer",
    surveyLink: "/pages/fr.html",
    backgroundColor: "#e74c3c", // Red
    emoji: "🇫🇷",
  },
  chinese: {
    name: "中文 (Zhōngwén)",
    title: "诊所反馈",
    instruction: "请选择一种语言并按“开始”",
    code: "zh",
    buttonText: "开始",
    surveyLink: "/pages/zh.html",
    backgroundColor: "#f1c40f", // Yellow
    emoji: "🇨🇳",
  },
};

const apiKeys = {
  en: process.env.API_KEY_EN,
  es: process.env.API_KEY_ES,
  fr: process.env.API_KEY_FR,
  zh: process.env.API_KEY_ZH,
};
