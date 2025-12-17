const translationsMain = {
  english: {
    name: "English",
    title: "Clinic Feedback",
    instruction: "Please select a language and press Start",
    code: "en",
    buttonText: "Start",
    surveyLink: "/pages/en.html",
    backgroundColor: "#368dda",
    emoji: "🇺🇸",
  },

  spanish: {
    name: "Español",
    title: "Comentarios de la Clínica",
    instruction: "Por favor, seleccione un idioma y presione Empezar",
    code: "es",
    buttonText: "Comenzar",
    surveyLink: "/pages/es.html",
    backgroundColor: "#2ecc71",
    emoji: "🇪🇸",
  },

  /*
  french: {
    name: "Français",
    title: "Avis de la Clinique",
    instruction: "Veuillez sélectionner une langue et appuyer sur Commencer",
    code: "fr",
    buttonText: "Commencer",
    surveyLink: "/pages/fr.html",
    backgroundColor: "#e74c3c",
    emoji: "🇫🇷",
  },
  */

  creole: {
    name: "Kreyòl Ayisyen",
    title: "Opinyon Klinik la",
    instruction: "Tanpri chwazi yon lang epi peze Kòmanse",
    code: "ht",
    buttonText: "Kòmanse",
    surveyLink: "/pages/ht.html",
    backgroundColor: "#1abc9c",
    emoji: "🇭🇹",
  },

  portuguese: {
    name: "Português",
    title: "Avaliação da Clínica",
    instruction: "Por favor, selecione um idioma e pressione Iniciar",
    code: "pt",
    buttonText: "Iniciar",
    surveyLink: "/pages/pt.html",
    backgroundColor: "#27ae60",
    emoji: "🇵🇹",
  },

  /*
  chinese: {
    name: "中文 (Zhōngwén)",
    title: "诊所反馈",
    instruction: "请选择一种语言并按“开始”",
    code: "zh",
    buttonText: "开始",
    surveyLink: "/pages/zh.html",
    backgroundColor: "#f1c40f",
    emoji: "🇨🇳",
  },
  */
};

// API Keys h
const apiKeys_h = {
  en: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tc3VydmV5MSIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzhkMjFmNTgxLTA4Y2UtNDJjNC1hYzkzLTZjZTUxMzFhNmRlOSJ9",
  es: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tZmVlZGJhY2tlcyIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2U3ZDM2ZTgzLWVhMGItNGIzZi1hOGUwLTYyNTRlOGQ2ZmQxMCJ9",
  fr: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tZmVlZGJhY2tmciIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzFkMjNjNzRlLTI3NmMtNGU2Ny1hMDJjLWEwNGJjMTVjYzhjNiJ9",
  zh: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tZmVlZGJhY2t6aCIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzVlZGFiM2JlLWY1N2UtNGZjNC1iOWZkLWE1MWFiOWQ3NTUwNCJ9",

  // biol
  // en: "eyJzb3VsSWQiOiJkZG5hLWJpby1saW1hcnktb3JnLS1mZWVkYmFja2VuIiwiYXV0aFNlcnZlciI6Imh0dHBzOi8vZGguc291bG1hY2hpbmVzLmNsb3VkL2FwaS9qd3QiLCJhdXRoVG9rZW4iOiJhcGlrZXlfdjFfMjY0ZDg3NjEtZDM1Ny00YjZlLTg5NTEtNzY3MGExMjZkMWZhIn0="
};

// API Keys m
const apiKeys_m = {
  en: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwLS1mZWVkYmFjay1lbiIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2E1NjM4MzcwLTZmYTItNDVmMC04OWM3LWMwZTFmNThkZDA1ZCJ9",
  es: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tZmVlZGJhY2tlcyIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2U3ZDM2ZTgzLWVhMGItNGIzZi1hOGUwLTYyNTRlOGQ2ZmQxMCJ9",
  fr: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tZmVlZGJhY2tmciIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzFkMjNjNzRlLTI3NmMtNGU2Ny1hMDJjLWEwNGJjMTVjYzhjNiJ9",
  zh: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tZmVlZGJhY2t6aCIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzVlZGFiM2JlLWY1N2UtNGZjNC1iOWZkLWE1MWFiOWQ3NTUwNCJ9",
  //  en: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tc3VydmV5MSIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2IyNTA0YzljLTY1OTctNDgyYy1hY2E3LTAwYmRiYmZhZDBjZSJ9",
};

const apiKeys_b = {
  en: "eyJzb3VsSWQiOiJkZG5hLWJpby1saW1hcnktb3JnLS1mZWVkYmFja2VuIiwiYXV0aFNlcnZlciI6Imh0dHBzOi8vZGguc291bG1hY2hpbmVzLmNsb3VkL2FwaS9qd3QiLCJhdXRoVG9rZW4iOiJhcGlrZXlfdjFfMjY0ZDg3NjEtZDM1Ny00YjZlLTg5NTEtNzY3MGExMjZkMWZhIn0=",
  es: "eyJzb3VsSWQiOiJkZG5hLWJpby1saW1hcnktb3JnLS1mZWVkYmFja2VzIiwiYXV0aFNlcnZlciI6Imh0dHBzOi8vZGguc291bG1hY2hpbmVzLmNsb3VkL2FwaS9qd3QiLCJhdXRoVG9rZW4iOiJhcGlrZXlfdjFfZmM5NTVmMmMtNTg0ZS00Nzk3LWFkY2ItMDYyZDYzNmFmNjExIn0=",
  ht: "eyJzb3VsSWQiOiJkZG5hLWJpby1saW1hcnktb3JnLS1mZWVkYmFja2ZyIiwiYXV0aFNlcnZlciI6Imh0dHBzOi8vZGguc291bG1hY2hpbmVzLmNsb3VkL2FwaS9qd3QiLCJhdXRoVG9rZW4iOiJhcGlrZXlfdjFfNDRiN2YzMjktY2Y5YS00OGIzLTkxNTYtMzE5YzY0OTE3ZTlmIn0=",
  pt: "eyJzb3VsSWQiOiJkZG5hLWJpby1saW1hcnktb3JnLS1mZWVkYmFja3B0IiwiYXV0aFNlcnZlciI6Imh0dHBzOi8vZGguc291bG1hY2hpbmVzLmNsb3VkL2FwaS9qd3QiLCJhdXRoVG9rZW4iOiJhcGlrZXlfdjFfMmVmMDAwNzgtMTk3YS00OWI3LWJhMzQtNDUzMjkxNGEwY2M3In0=",
};

const apiKeys = apiKeys_b;
