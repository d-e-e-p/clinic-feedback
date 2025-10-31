console.log("=== APP.JS LOADED ===");

let scene;
let timerInterval;
let sessionStartTime;
const SESSION_DURATION = 3 * 60 * 1000; // 3 minutes in milliseconds
const REDIRECT_DELAY_MS = 4000;
const REDIRECT_URL = "index.html";

function updateTimer() {
  const elapsed = Date.now() - sessionStartTime;
  const remaining = SESSION_DURATION - elapsed;
  const percentRemaining = (remaining / SESSION_DURATION) * 100;

  // Update progress bar
  document.getElementById("progress-bar").style.width = `${percentRemaining}%`;

  // Update timer text
  const seconds = Math.ceil(remaining / 1000);
  document.getElementById("timer-text").textContent =
    `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

  // End session when time runs out
  if (remaining <= 0) {
    clearInterval(timerInterval);
    disconnectSession().then(() => {
      document.getElementById("thank-you-screen").style.display = "flex";
      setTimeout(() => {
        window.location.href = REDIRECT_URL;
      }, REDIRECT_DELAY_MS);
    });
  }
}

const apiKey =
  "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tc3VydmV5MSIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzhkMjFmNTgxLTA4Y2UtNDJjNC1hYzkzLTZjZTUxMzFhNmRlOSJ9";

async function disconnectSession() {
  console.log("→ Disconnecting session...");

  try {
    if (scene) {
      await scene.disconnect();
      console.log("✓ Session disconnected");
      document.getElementById("status").textContent =
        "Session ended (time limit reached)";
      document.getElementById("timer-display").style.display = "none";
    }
  } catch (error) {
    console.error("✗ Error disconnecting:", error);
  }
}

async function connect() {
  console.log("→ Connect button clicked");
  console.log("→ API Key:", apiKey.substring(0, 20) + "...");

  document.getElementById("status").textContent = "Connecting...";

  const videoEl = document.getElementById("sm-video");
  console.log("→ Video element:", videoEl);

  try {
    console.log("→ Creating Scene...");
    scene = new smwebsdk.Scene({
      apiKey: apiKey,
      videoElement: videoEl,
      requestedMediaDevices: { microphone: true, camera: false },
      requiredMediaDevices: { microphone: true, camera: false },
    });

    console.log("✓ Scene created:", scene);

    console.log("→ Connecting to session...");
    const sessionId = await scene.connect();
    console.log("✓ Connected! Session ID:", sessionId);

    document.getElementById("status").textContent =
      "Connected! Starting video...";

    console.log("→ Starting video...");
    const videoState = await scene.startVideo();
    console.log("✓ Video started:", videoState);

    document.getElementById("status").textContent = "Session active";

    // Start the timer
    sessionStartTime = Date.now();
    document.getElementById("timer-display").style.display = "block";
    timerInterval = setInterval(updateTimer, 100); // Update every 100ms for smooth animation
    updateTimer(); // Initial update
  } catch (error) {
    console.error("✗ Error:", error);
    document.getElementById("status").textContent = "Error: " + error.message;
  }
}

async function manualDisconnect() {
  clearInterval(timerInterval);
  await disconnectSession();
  document.getElementById("thank-you-screen").style.display = "flex";
  setTimeout(() => {
    window.location.href = REDIRECT_URL;
  }, REDIRECT_DELAY_MS);
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("=== DOM READY ===");
  console.log("Status div:", document.getElementById("status"));
  console.log("Video element:", document.getElementById("sm-video"));

  document.getElementById("status").textContent = "Connecting...";
  document
    .getElementById("disconnect-button")
    .addEventListener("click", manualDisconnect);

  console.log("✓ Event listeners attached");
  console.log("✓ Auto-connecting...");
  connect(); // Auto-initiate connection
});
