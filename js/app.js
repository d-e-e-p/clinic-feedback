let scene;
let apiKey;

async function loadConfig() {
  try {
    // Temporary - for testing only
    apiKey = "eyJzb3VsSWQiOiJkZG5hLWJhci1vZi1zb2FwNTY4Zi0tc3VydmV5MSIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzhkMjFmNTgxLTA4Y2UtNDJjNC1hYzkzLTZjZTUxMzFhNmRlOSJ9";
    
    console.log('✓ API Key loaded');
    document.getElementById('status').textContent = 'Ready to connect';
    document.getElementById('connect-button').disabled = false;
  } catch (error) {
    console.error('✗ Failed to load configuration:', error);
    document.getElementById('status').textContent = 'Error: Could not load configuration';
  }
}

async function connect() {
  if (!apiKey) {
    console.error('✗ API key not loaded');
    return;
  }

  console.log('→ Starting connection...');
  document.getElementById('status').textContent = 'Connecting...';
  document.getElementById('connect-button').disabled = true;

  const videoEl = document.getElementById("sm-video");
  
  console.log('→ Creating Scene with logging enabled...');
  
  try {
    scene = new smwebsdk.Scene({
      apiKey: apiKey,
      videoElement: videoEl,
      requestedMediaDevices: { microphone: true, camera: false },
      requiredMediaDevices: { microphone: true, camera: false },
      // Enable verbose logging
      loggingConfig: {
        session: { minLogLevel: 'debug' },
        webRtc: { minLogLevel: 'debug' }
      }
    });
    
    console.log('✓ Scene created');
    
    // Add event listeners for debugging
    scene.connectionState.onConnectionStateUpdated.addListener((state) => {
      console.log('Connection state:', state);
    });
    
    await scene.connect()
      .then((sessionId) => onConnectionSuccess(sessionId))
      .catch((error) => onConnectionError(error));
      
  } catch (error) {
    console.error('✗ Failed to create scene:', error);
    onConnectionError(error);
  }
}

function onConnectionSuccess(sessionId) {
  console.log("✓ Connected! Session ID:", sessionId);
  document.getElementById('status').textContent = 'Connected! Starting video...';
  
  scene.startVideo()
    .then((videoState) => {
      console.log("✓ Video started, state:", videoState);
      document.getElementById('status').textContent = 'Video started';
    })
    .catch((error) => {
      console.error("✗ Could not start video:", error);
      document.getElementById('status').textContent = 'Error starting video';
    });
}

function onConnectionError(error) {
  console.error('✗ Connection error:', error);
  console.error('Error name:', error.name);
  console.error('Error message:', error.message);
  
  document.getElementById('connect-button').disabled = false;
  
  switch (error.name) {
    case "noUserMedia":
      console.warn("⚠ User blocked device access");
      document.getElementById('status').textContent = 'Error: Microphone access required';
      break;
    case "noScene":
    case "serverConnectionFailed":
      console.warn("⚠ Server connection failed");
      document.getElementById('status').textContent = 'Error: Server connection failed';
      break;
    default:
      console.warn("⚠ Unhandled error:", error);
      document.getElementById('status').textContent = 'Error: Connection failed';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('=== PAGE LOADED ===');
  console.log('smwebsdk available:', typeof smwebsdk !== 'undefined');
  
  document.getElementById('connect-button').addEventListener('click', () => connect());
  document.getElementById('reset-button').addEventListener('click', () => window.location.reload());
  
  loadConfig();
});