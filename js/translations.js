const translations = {
  en: {
    page_title: "Clinic Feedback",
    initializing: "Initializing...",
    disconnect_button: "End Session",
    thank_you_title: "Thank You for Your Feedback!",
    session_ended_redirect: "This session has ended. Redirecting...",
    timer_label: "Time Remaining",
    conversation_state: {
      idle: "listening",
      dpSpeaking: "speaking",
      dpProcessing: "processing",
      userTalking: "listening",
    },
    stages: [
      "Thank you for visiting the clinic today.",
      "First, how did you find your care services today?",
      "How could we provide better services next time?",
      "What do you like most about the Harvard Medicine Family Van?",
      "Is there anything else you'd like to share with us?",
    ],
  },
  es: {
    page_title: "Comentarios de la Clínica",
    initializing: "Inicializando...",
    disconnect_button: "Finalizar Sesión",
    thank_you_title: "¡Gracias por sus Comentarios!",
    session_ended_redirect: "Esta sesión ha terminado. Redirigiendo...",
    timer_label: "Tiempo Restante",
    conversation_state: {
      // Technical/UI translations for conversation states
      idle: "escuchando", // 'Idle' as in not active
      dpSpeaking: "hablando", // 'Speaking'
      dpProcessing: "procesando", // 'Processing'
      userTalking: "escuchando", // 'Listening'
    },
    stages: [
      "Gracias por visitar la clínica hoy.",
      "Primero, ¿cómo encontró los servicios de atención hoy?",
      "¿Cómo podríamos brindar mejores servicios la próxima vez?",
      "¿Qué es lo que más le gusta de la Harvard Medicine Family Van?",
      "¿Hay algo más que le gustaría compartir con nosotros?",
    ],
  },
  fr: {
    page_title: "Retour de la Clinique",
    initializing: "Initialisation...",
    disconnect_button: "Terminer la Session",
    thank_you_title: "Merci pour Vos Commentaires!",
    session_ended_redirect: "Cette session est terminée. Redirection...",
    timer_label: "Temps Restant",
    conversation_state: {
      // Technical/UI translations for conversation states
      idle: "écoute", // 'Idle' as in not active
      dpSpeaking: "parole", // 'Speaking' (as in "taking the floor/turn to speak")
      dpProcessing: "traitement", // 'Processing'
      userTalking: "écoute", // 'Listening' (as in "in a listening state")
    },
    stages: [
      "Merci d'avoir visité la clinique aujourd'hui.",
      "Tout d'abord, comment avez-vous trouvé vos services de soins aujourd'hui ?",
      "Comment pourrions-nous offrir de meilleurs services la prochaine fois ?",
      "Qu'appréciez-vous le plus dans le Harvard Medicine Family Van ?",
      "Y a-t-il autre chose que vous aimeriez partager avec nous ?",
    ],
  },
  zh: {
    page_title: "诊所反馈",
    initializing: "初始化中...",
    disconnect_button: "结束会话",
    thank_you_title: "感谢您的反馈！",
    session_ended_redirect: "此会话已结束。正在重定向...",
    timer_label: "剩余时间",
    conversation_state: {
      // Technical/UI translations for conversation states
      idle: "听取中", // 'Idle' as in not busy
      dpSpeaking: "说话中", // 'Speaking'
      dpProcessing: "处理中", // 'Processing'
      userTalking: "听取中", // 'Listening' (or 正在倾听 for a more active listen)
    },
    stages: [
      "感谢您今天来访本诊所。",
      "首先，您今天对我们的护理服务感觉如何？",
      "下次我们怎样才能提供更好的服务？",
      "您最喜欢哈佛医学院家庭车的哪些方面？",
      "您还有什么想与我们分享的吗？",
    ],
  },
};

