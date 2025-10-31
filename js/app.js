// --- Configuration ---
const REDIRECT_DELAY_MS = 4000; // 4 seconds delay before redirecting
const REDIRECT_URL = 'index.html'; // Assuming the main page is index.html

// --- Core App Logic ---
let scene;
let timerInterval;
let sessionStartTime;
// Set the timer duration in milliseconds (3 minutes)
const SESSION_DURATION = 3 * 60 * 1000; 
// API key for the SoulMachines SDK (this key will be used by smwebsdk)
const apiKey = "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tc3VydmV5MSIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzhkMjFmNTgxLTA4Y2NlLTRjNC1hYzkzLTZjZTUxMzFhNmRlOSJ9";

// --- UI Elements ---
const timerText = document.getElementById('timer-text');
const progressBar = document.getElementById('progress-bar');
const thankYouScreen = document.getElementById('thank-you-screen');
const statusElement = document.getElementById('status');
const appContent = document.getElementById('app-content');
const startVideoButton = document.getElementById('start-video-button');
const endButton = document.getElementById('end-session-button');


function updateTimer() {
    const elapsed = Date.now() - sessionStartTime;
    let remaining = Math.max(0, SESSION_DURATION - elapsed);
    
    // Ensure remaining time is not negative due to floating point math
    if (remaining < 100) { 
        remaining = 0;
    }

    // Calculate time components
    const totalSeconds = Math.ceil(remaining / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    // --- Digital Display Update ---
    timerText.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // --- Progress Bar Update ---
    const percentage = (remaining / SESSION_DURATION) * 100;
    progressBar.style.width = `${percentage}%`;

    // --- Color Change (Visual Feedback) ---
    const remaining_s = remaining / 1000;
    
    if (remaining_s < 60) { // Last minute (Red)
        progressBar.style.backgroundColor = '#f44336'; 
    } else if (remaining_s < 120) { // Last 2 minutes (Orange)
        progressBar.style.backgroundColor = '#ff9800'; 
    } else { // Green
        progressBar.style.backgroundColor = '#4CAF50'; 
    }
    
    // Auto-disconnect when time runs out
    if (remaining === 0) {
        clearInterval(timerInterval);
        timerExpired();
    }
}

function timerExpired() {
    // Disconnect the SDK session and redirect
    disconnectSession(true); 
}

async function startVideo() {
    if (!scene) {
        statusElement.textContent = 'Error: Not connected. Please refresh.';
        return;
    }
    startVideoButton.disabled = true;
    statusElement.textContent = 'Starting video...';

    try {
        await scene.startVideo();

        statusElement.textContent = 'Session active - 3 minutes remaining';
        
        // Start the timer only after video playback begins
        sessionStartTime = Date.now();
        timerInterval = setInterval(updateTimer, 100); 
        updateTimer(); // Initial update
        
    } catch (error) {
        console.error('✗ Error starting video:', error);
        statusElement.textContent = 'Error starting video: ' + error.message;
        startVideoButton.disabled = false;
    }
}


async function disconnectSession(isTimeExpired = false) {
    console.log('→ Disconnecting session...');
    clearInterval(timerInterval); 
    
    try {
        if (scene) {
            // Check if smwebsdk exists before calling disconnect on scene
            if (typeof smwebsdk !== 'undefined' && scene.disconnect) {
                 await scene.disconnect();
            }
            console.log('✓ Session disconnected');
        }
    } catch (error) {
        console.error('✗ Error disconnecting:', error);
    }
    
    // Show the final message and redirect
    appContent.style.display = 'none'; 
    document.getElementById('timer-display').style.display = 'none';

    thankYouScreen.style.display = 'flex';
    
    if (!isTimeExpired) {
        thankYouScreen.querySelector('p').textContent = 'Session manually ended. Redirecting to the main page...';
    }

    // Redirect after a delay
    setTimeout(() => {
        window.location.href = REDIRECT_URL;
    }, REDIRECT_DELAY_MS);
}

async function connect() {
    // Check if the external SDK script has loaded
    if (typeof smwebsdk === 'undefined' || !smwebsdk.Scene) {
        statusElement.textContent = 'Error: SoulMachines SDK (smwebsdk.min.js) not loaded.';
        return;
    }
    statusElement.textContent = 'Connecting...';
    endButton.disabled = true; 
    startVideoButton.disabled = true;

    const videoEl = document.getElementById("sm-video");
    
    try {
        scene = new smwebsdk.Scene({
            apiKey: apiKey,
            videoElement: videoEl,
            requestedMediaDevices: { microphone: true, camera: false },
            requiredMediaDevices: { microphone: true, camera: false }
        });
        
        const sessionId = await scene.connect();
        
        statusElement.textContent = 'Connected. Click "Start Video" to begin session.';
        startVideoButton.disabled = false; // Enable video start button
        endButton.disabled = false; // Enable end button

    } catch (error) {
        console.error('✗ Error during connection:', error);
        statusElement.textContent = 'Error: ' + error.message;
        endButton.disabled = false;
        startVideoButton.disabled = true;
    }
}

// --- Event Listeners and Auto-Start ---
document.addEventListener('DOMContentLoaded', () => {
    console.log('=== main.js LOADED: DOM READY ===');
    
    // Initial status before connection attempt
    statusElement.textContent = 'Attempting connection...'; 
    
    // Attach event listener for the single "End Session" button
    endButton.addEventListener('click', () => {
        disconnectSession(false); // False indicates manual disconnect
    });

    // Attach event listener for the new "Start Video" button
    startVideoButton.addEventListener('click', startVideo);
    
    // AUTO-START THE CONNECTION
    connect(); 
});
