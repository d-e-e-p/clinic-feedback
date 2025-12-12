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
    stages: [
      "Thank you for visiting the clinic today.",
      "First, how did you find your care services today?",
      "How could we provide better services next time?",
      "What do you like most about the Harvard Medicine Family Van?",
      "Is there anything else you'd like to share with us?",
    ],
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
    stages: [
      "Gracias por visitar la clínica hoy.",
      "Primero, ¿cómo encontró los servicios de atención hoy?",
      "¿Cómo podríamos brindar mejores servicios la próxima vez?",
      "¿Qué es lo que más le gusta de la Harvard Medicine Family Van?",
      "¿Hay algo más que le gustaría compartir con nosotros?",
    ],
  },

  french: {
    name: "Français",
    title: "Avis de la Clinique",
    instruction: "Veuillez sélectionner une langue et appuyer sur Commencer",
    code: "fr",
    buttonText: "Commencer",
    surveyLink: "/pages/fr.html",
    backgroundColor: "#e74c3c",
    emoji: "🇫🇷",
    stages: [
      "Merci d'avoir visité la clinique aujourd'hui.",
      "Tout d'abord, comment avez-vous trouvé vos services de soins aujourd'hui ?",
      "Comment pourrions-nous offrir de meilleurs services la prochaine fois ?",
      "Qu'appréciez-vous le plus dans le Harvard Medicine Family Van ?",
      "Y a-t-il autre chose que vous aimeriez partager avec nous ?",
    ],
  },

  chinese: {
    name: "中文 (Zhōngwén)",
    title: "诊所反馈",
    instruction: "请选择一种语言并按“开始”",
    code: "zh",
    buttonText: "开始",
    surveyLink: "/pages/zh.html",
    backgroundColor: "#f1c40f",
    emoji: "🇨🇳",
    stages: [
      "感谢您今天来访本诊所。",
      "首先，您今天对我们的护理服务感觉如何？",
      "下次我们怎样才能提供更好的服务？",
      "您最喜欢哈佛医学院家庭车的哪些方面？",
      "您还有什么想与我们分享的吗？",
    ],
  },
};

// API Keys h
const apiKeys = {
  en: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tc3VydmV5MSIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzhkMjFmNTgxLTA4Y2UtNDJjNC1hYzkzLTZjZTUxMzFhNmRlOSJ9",
  es: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tZmVlZGJhY2tlcyIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2U3ZDM2ZTgzLWVhMGItNGIzZi1hOGUwLTYyNTRlOGQ2ZmQxMCJ9",
  fr: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tZmVlZGJhY2tmciIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzFkMjNjNzRlLTI3NmMtNGU2Ny1hMDJjLWEwNGJjMTVjYzhjNiJ9",
  zh: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tZmVlZGJhY2t6aCIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzVlZGFiM2JlLWY1N2UtNGZjNC1iOWZkLWE1MWFiOWQ3NTUwNCJ9",
  // en: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tc3VydmV5MSIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2IyNTA0YzljLTY1OTctNDgyYy1hY2E3LTAwYmRiYmZhZDBjZSJ9",
};

// API Keys m
const apiKeys_m = {
  en: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwLS1mZWVkYmFjay1lbiIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2E1NjM4MzcwLTZmYTItNDVmMC04OWM3LWMwZTFmNThkZDA1ZCJ9",
  es: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tZmVlZGJhY2tlcyIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2U3ZDM2ZTgzLWVhMGItNGIzZi1hOGUwLTYyNTRlOGQ2ZmQxMCJ9",
  fr: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tZmVlZGJhY2tmciIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzFkMjNjNzRlLTI3NmMtNGU2Ny1hMDJjLWEwNGJjMTVjYzhjNiJ9",
  zh: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tZmVlZGJhY2t6aCIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzVlZGFiM2JlLWY1N2UtNGZjNC1iOWZkLWE1MWFiOWQ3NTUwNCJ9",
  //  en: "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tc3VydmV5MSIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2IyNTA0YzljLTY1OTctNDgyYy1hY2E3LTAwYmRiYmZhZDBjZSJ9",
};
