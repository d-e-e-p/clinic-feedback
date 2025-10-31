document.addEventListener('DOMContentLoaded', () => {
    // Set page text from config
    document.getElementById('pageTitle').textContent = pageText.title;
    document.getElementById('instructions').textContent = pageText.instruction;
    
    renderLanguageBubbles();
    selectLanguage('english'); // Preselect English
    
    document.getElementById('startButton').addEventListener('click', handleStartClick);
});

let selectedLanguage = 'english';

function renderLanguageBubbles() {
    const container = document.getElementById('bubbleContainer');
    
    Object.entries(languageConfig).forEach(([key, lang]) => {
        const bubble = document.createElement('div');
        bubble.className = 'speech-bubble';
        bubble.innerHTML = lang.greeting;
        bubble.dataset.language = key;
        // Set bubble color from config
        bubble.style.setProperty('--bubble-color', lang.backgroundColor);
        
        bubble.addEventListener('click', () => selectLanguage(key));
        container.appendChild(bubble);
    });
}

function selectLanguage(languageKey) {
    selectedLanguage = languageKey;
    
    // Update bubble styles
    document.querySelectorAll('.speech-bubble').forEach(bubble => {
        bubble.classList.toggle('selected', bubble.dataset.language === languageKey);
    });
    
    updateStartButton(languageKey);
}

function updateStartButton(languageKey) {
    const button = document.getElementById('startButton');
    button.textContent = languageConfig[languageKey].buttonText;
}

function handleStartClick() {
    window.location.href = languageConfig[selectedLanguage].surveyLink;
}
