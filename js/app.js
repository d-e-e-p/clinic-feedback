console.log("=== APP.JS LOADED ===");

let scene, persona;
let timerInterval;
let sessionStartTime;

// === CONFIG ===
const SESSION_DURATION = 3 * 60 * 1000; // 3 minutes
const REDIRECT_DELAY_MS = 4000;
const REDIRECT_URL = "/index.html";

// === LANGUAGE + API KEY ===
const langCode = document.documentElement.lang;
const apiKey = apiKeys[langCode];
if (!apiKey) {
  console.error("✗ Missing API key for language:", langCode);
  document.getElementById("status").textContent =
    "Configuration error – please try again";
  throw new Error("Missing API key");
}
console.log(`✓ Using API key for [${langCode}]: ...${apiKey.slice(-10)}`);

// === TIMER HANDLING ===
function updateTimer() {
  const elapsed = Date.now() - sessionStartTime;
  const remaining = SESSION_DURATION - elapsed;
  const percent = (remaining / SESSION_DURATION) * 100;

  const progressBar = document.getElementById("progress-bar");
  const timerText = document.getElementById("timer-text");

  if (progressBar) progressBar.style.width = `${percent}%`;

  const seconds = Math.ceil(remaining / 1000);
  if (timerText)
    timerText.textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

  // End session
  if (remaining <= 0) {
    clearInterval(timerInterval);
    disconnectSession().then(() => {
      showThankYouScreen();
      setTimeout(
        () => (window.location.href = REDIRECT_URL),
        REDIRECT_DELAY_MS,
      );
    });
  }
}

// === SESSION CONTROL ===
async function connect() {
  console.log("→ Starting connection process...");

  const videoEl = document.getElementById("sm-video");
  document.getElementById("status").textContent = "Connecting...";

  try {
    // Create scene
    scene = new smwebsdk.Scene({
      apiKey,
      videoElement: videoEl,
      requestedMediaDevices: { microphone: true, camera: false },
      requiredMediaDevices: { microphone: true, camera: false },
    });
    console.log("✓ Scene created");

    // Create persona
    persona = new smwebsdk.Persona(scene, 1);
    console.log("✓ Persona created");

    // === Event listeners ===
    persona.onSpeechMarkerEvent.addListener(onSpeechMarker);
    scene.conversation.onConversationStateUpdated.addListener(
      onConversationStateUpdated,
    );
    scene.connectionState.onConnectionStateUpdated.addListener(
      onConnectionStateUpdated,
    );
    scene.conversation.autoClearCards = true;

    console.log("→ Connecting to Soul Machines...");
    const sessionId = await scene.connect();
    console.log("✓ Connected. Session ID:", sessionId);

    await scene.startVideo();
    console.log("✓ Video started");
    document.getElementById("status").textContent = "Session active";

    // Start session timer
    sessionStartTime = Date.now();
    document.getElementById("timer-display").style.display = "block";
    timerInterval = setInterval(updateTimer, 100);
    updateTimer();
  } catch (err) {
    console.error("✗ Connection error:", err);
    document.getElementById("status").textContent = `Error: ${err.message}`;
  }
}

async function disconnectSession() {
  console.log("→ Disconnecting session...");
  try {
    if (scene) {
      await scene.disconnect();
      console.log("✓ Session disconnected");
      document.getElementById("status").textContent = "Session ended";
      document.getElementById("timer-display").style.display = "none";
    }
  } catch (err) {
    console.error("✗ Error during disconnect:", err);
  }
}

function showThankYouScreen() {
  document.getElementById("thank-you-screen").style.display = "flex";
}

// === EVENT HANDLERS ===
function onSpeechMarker(persona, message) {
  const markerType = message.name;
  const cardIds = message.arguments || [];

  console.log(`→ Speech marker: ${markerType}`, cardIds);

  switch (markerType) {
    case "hidecards":
      if (cardIds.length === 0) console.log("→ Hiding all cards");
      else console.log("→ Hiding specific cards:", cardIds);
      break;

    case "showcards":
      console.log("→ Showing cards:", cardIds);
      break;

    default:
      console.warn("→ Unknown marker type:", markerType);
  }
}

function onConversationStateUpdated(conversationState) {
  console.log("→ Conversation state updated:", conversationState);
}

function onConnectionStateUpdated(connectionStateData) {
  console.log(`Stage: ${connectionStateData.name}`);
  console.log(
    `Progress: ${connectionStateData.currentStep}/${connectionStateData.totalSteps} (${connectionStateData.percentageLoaded.toFixed(1)}%)`,
  );

  const progressBar = document.getElementById("connection-progress");
  progressBar.style.display = "block";
  progressBar.value = connectionStateData.currentStep + 0.5;

  if (connectionStateData.currentStep === 4) {
    progressBar.value = 5;
    progressBar.style.display = "none";
  }
}

// === UI ===
async function manualDisconnect() {
  clearInterval(timerInterval);
  await disconnectSession();
  showThankYouScreen();
  setTimeout(() => (window.location.href = REDIRECT_URL), REDIRECT_DELAY_MS);
}

// === INIT ===
document.addEventListener("DOMContentLoaded", () => {
  console.log("=== DOM READY ===");
  document
    .getElementById("disconnect-button")
    .addEventListener("click", manualDisconnect);
  console.log("✓ Event listeners attached");
  connect(); // auto-connect
  persona.startSpeaking("xyz this is a test!");
});

