const container = document.getElementById("languageContainer");
const startButton = document.getElementById("startButton");
const pageTitle = document.getElementById("pageTitle");
const instructions = document.getElementById("instructions");

let selectedConfig = null;
let initialSelectedKey = "english"; // Force English to be selected initially

// 1. Inject language options into the container
function renderLanguageOptions() {
  Object.keys(translationsMain).forEach((key) => {
    const config = translationsMain[key];
    const div = document.createElement("div");

    // Use flex to align text and emoji
    div.className =
      "language-option p-4 border-2 border-gray-200 rounded-lg text-gray-700 text-lg font-medium hover:border-blue-400 flex justify-between items-center";

    div.innerHTML = `
            <span>${config.name}</span>
            <span class="text-xl">${config.emoji}</span>
        `;

    div.dataset.code = config.code;
    div.dataset.key = key;

    container.appendChild(div);
  });

  // 2. Set initial selection state (English)
  const initialSelectionElement = container.querySelector(
    `[data-key="${initialSelectedKey}"]`,
  );
  if (initialSelectionElement) {
    // Manually trigger the selection logic for the initial element
    simulateSelection(initialSelectionElement, initialSelectedKey);
  }
}

// Helper function to handle all selection/styling logic
function simulateSelection(targetElement, key) {
  selectedConfig = translationsMain[key];

  // Deselect and reset all options
  document.querySelectorAll(".language-option").forEach((el) => {
    el.classList.remove(
      "selected",
      "bg-blue-600",
      "bg-green-500",
      "bg-red-600",
      "bg-yellow-500",
      "border-4",
    );
    el.classList.add("text-gray-700", "border-gray-200");
    el.style.backgroundColor = "";
    el.style.borderColor = "";
  });

  // Apply selection style and custom background color
  targetElement.classList.add("selected");
  targetElement.classList.remove("text-gray-700", "border-gray-200");
  targetElement.style.backgroundColor = selectedConfig.backgroundColor;
  targetElement.style.borderColor = selectedConfig.backgroundColor;

  // --- UPDATE ALL TEXT ELEMENTS ---
  pageTitle.textContent = selectedConfig.title;
  instructions.textContent = selectedConfig.instruction;
  startButton.textContent = selectedConfig.buttonText;

  // Enable and update the Start button styling
  startButton.disabled = false;
  startButton.classList.remove("bg-gray-400", "cursor-not-allowed");
  startButton.style.backgroundColor = selectedConfig.backgroundColor;
  startButton.classList.add("shadow-lg");
}

// 3. Handle click events (delegated to container)
container.addEventListener("click", (event) => {
  const target = event.target.closest(".language-option");
  if (target) {
    const key = target.dataset.key;
    simulateSelection(target, key);
  }
});

startButton.addEventListener("click", () => {
  if (selectedConfig) {
    // In a real application, you would navigate here:
    window.location.href = selectedConfig.surveyLink;
    //alert(`Starting survey for ${selectedConfig.name} at: ${selectedConfig.surveyLink}`);
  }
});

// Initial rendering call
renderLanguageOptions();
