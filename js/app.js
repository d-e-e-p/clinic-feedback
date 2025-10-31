console.log("=== APP.JS LOADED ===");

let scene;
let timerInterval;
let sessionStartTime;
const SESSION_DURATION = 3 * 60 * 1000; // 3 minutes in milliseconds

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
      document.getElementById("connect-button").disabled = false;
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
  document.getElementById("connect-button").disabled = true;

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

    document.getElementById("status").textContent =
      "Session active - 3 minutes remaining";

    // Start the timer
    sessionStartTime = Date.now();
    document.getElementById("timer-display").style.display = "block";
    timerInterval = setInterval(updateTimer, 100); // Update every 100ms for smooth animation
    updateTimer(); // Initial update
  } catch (error) {
    console.error("✗ Error:", error);
    document.getElementById("status").textContent = "Error: " + error.message;
    document.getElementById("connect-button").disabled = false;
  }
}

async function manualDisconnect() {
  clearInterval(timerInterval);
  await disconnectSession();
  document.getElementById("status").textContent =
    "Session ended (manual disconnect)";
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("=== DOM READY ===");
  console.log("Connect button:", document.getElementById("connect-button"));
  console.log("Status div:", document.getElementById("status"));
  console.log("Video element:", document.getElementById("sm-video"));

  document.getElementById("connect-button").disabled = false;
  document.getElementById("status").textContent = "Ready to connect";

  document.getElementById("connect-button").addEventListener("click", connect);
  document
    .getElementById("disconnect-button")
    .addEventListener("click", manualDisconnect);
  document.getElementById("reset-button").addEventListener("click", () => {
    console.log("→ Resetting...");
    clearInterval(timerInterval);
    window.location.reload();
  });

  console.log("✓ Event listeners attached");
});

