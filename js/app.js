let scene;
let apiKey;

/**
 * Load configuration from Cloudflare Pages Function
 */
async function loadConfig() {
  try {
    const response = await fetch('/api/config');
    const config = await response.json();
    apiKey = config.smApiKey;
    
    document.getElementById('status').textContent = 'Ready to connect';
    document.getElementById('connect-button').disabled = false;
    
    console.log('Configuration loaded successfully');
  } catch (error) {
    console.error('Failed to load configuration:', error);
    document.getElementById('status').textContent = 'Error: Could not load configuration';
  }
}

/**
 * Start a new connection.
 * Request a JWT from the token server and use it
 * to connect to the Soul Machines session server.
 */
async function connect() {
  if (!apiKey) {
    console.error('API key not loaded');
    return;
  }

  document.getElementById('status').textContent = 'Connecting...';
  document.getElementById('connect-button').disabled = true;

  // get the video element
  const videoEl = document.getElementById("sm-video");
  
  // create a new scene object
  scene = new smwebsdk.Scene({
    apiKey: apiKey,
    videoElement: videoEl,
    requestedMediaDevices: { microphone: true, camera: false },
    requiredMediaDevices: { microphone: true, camera: false },
  });
  
  // connect the Scene to the session server
  await scene
    .connect()
    .then((sessionId) => onConnectionSuccess(sessionId))
    .catch((error) => onConnectionError(error));
}

/**
 * Handle successful connection
 * On success, we must start the video.
 */
function onConnectionSuccess(sessionId) {
  console.info("success! session id:", sessionId);
  document.getElementById('status').textContent = 'Connected! Starting video...';
  
  // start the video playing
  scene
    .startVideo()
    .then((videoState) => {
      console.info("started video with state:", videoState);
      document.getElementById('status').textContent = 'Video started';
    })
    .catch((error) => {
      console.warn("could not start video:", error);
      document.getElementById('status').textContent = 'Error starting video';
    });
}

/**
 * Handle failed connection
 * On error, we must display some feedback to the user
 */
function onConnectionError(error) {
  console.error('Connection error:', error);
  document.getElementById('connect-button').disabled = false;
  
  switch (error.name) {
    case "noUserMedia":
      console.warn("user blocked device access");
      document.getElementById('status').textContent = 'Error: Microphone access required';
      break;
    case "noScene":
    case "serverConnectionFailed":
      console.warn("server connection failed");
      document.getElementById('status').textContent = 'Error: Server connection failed';
      break;
    default:
      console.warn("unhandled error:", error);
      document.getElementById('status').textContent = 'Error: Connection failed';
  }
}

/**
 * Event listeners for buttons in the HTML
 */
document.getElementById('connect-button').addEventListener('click', () => connect());
document.getElementById('reset-button').addEventListener('click', () => window.location.reload());

/**
 * Initialize on page load
 */
loadConfig();
```

## Project Structure:
```
your-project/
├── functions/
│   └── api/
│       └── config.js
├── js/
│   └── app.js
├── index.html
└── README.md