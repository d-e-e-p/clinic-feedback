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

const apiKeys_h = {
  en: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tc3VydmV5MSIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzhkMjFmNTgxLTA4Y2UtNDJjNC1hYzkzLTZjZTUxMzFhNmRlOSJ9",
  es: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tZmVlZGJhY2tlcyIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2U3ZDM2ZTgzLWVhMGItNGIzZi1hOGUwLTYyNTRlOGQ2ZmQxMCJ9",
  fr: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tZmVlZGJhY2tmciIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzFkMjNjNzRlLTI3NmMtNGU2Ny1hMDJjLWEwNGJjMTVjYzhjNiJ9",
  zh: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tZmVlZGJhY2t6aCIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzVlZGFiM2JlLWY1N2UtNGZjNC1iOWZkLWE1MWFiOWQ3NTUwNCJ9",
  // en: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tc3VydmV5MSIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2IyNTA0YzljLTY1OTctNDgyYy1hY2E3LTAwYmRiYmZhZDBjZSJ9",
};

const apiKeys = {
  // en: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwLS1mZWVkYmFjay1lbiIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2E1NjM4MzcwLTZmYTItNDVmMC04OWM3LWMwZTFmNThkZDA1ZCJ9",
  es: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tZmVlZGJhY2tlcyIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2U3ZDM2ZTgzLWVhMGItNGIzZi1hOGUwLTYyNTRlOGQ2ZmQxMCJ9",
  fr: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tZmVlZGJhY2tmciIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzFkMjNjNzRlLTI3NmMtNGU2Ny1hMDJjLWEwNGJjMTVjYzhjNiJ9",
  zh: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tZmVlZGJhY2t6aCIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzVlZGFiM2JlLWY1N2UtNGZjNC1iOWZkLWE1MWFiOWQ3NTUwNCJ9",
  en: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tc3VydmV5MSIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2IyNTA0YzljLTY1OTctNDgyYy1hY2E3LTAwYmRiYmZhZDBjZSJ9",
};
