const translations = {
  en: {
    page_title: "Clinic Feedback",
    initializing: "Initializing...",
    disconnect_button: "End Session",
    thank_you_title: "Thank You for Your Feedback!",
    session_ended_redirect: "This session has ended. Redirecting...",
    timer_label: "Time Remaining",
    conversation_state: {
      idle: "idle",
      dpSpeaking: "speaking",
      dpProcessing: "processing",
      userTalking: "listening",
    },
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
      idle: "inactivo", // 'Idle' as in not active
      dpSpeaking: "hablando", // 'Speaking'
      dpProcessing: "procesando", // 'Processing'
      userTalking: "escuchando", // 'Listening'
    },
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
      idle: "inactif", // 'Idle' as in not active
      dpSpeaking: "parole", // 'Speaking' (as in "taking the floor/turn to speak")
      dpProcessing: "traitement", // 'Processing'
      userTalking: "écoute", // 'Listening' (as in "in a listening state")
    },
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
      idle: "空闲", // 'Idle' as in not busy
      dpSpeaking: "说话中", // 'Speaking'
      dpProcessing: "处理中", // 'Processing'
      userTalking: "听取中", // 'Listening' (or 正在倾听 for a more active listen)
    },
  },
};