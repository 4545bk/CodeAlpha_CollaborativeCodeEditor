const htmlCodeTextArea = document.getElementById('htmlCode');
const cssCodeTextArea = document.getElementById('cssCode');
const jsCodeTextArea = document.getElementById('jsCode');
const outputFrame = document.getElementById('outputFrame');
const runButton = document.querySelector('.run-button');

// Function to update the output frame with the latest code
function updateOutputFrame() {
  const htmlCode = htmlCodeTextArea.value;
  const cssCode = cssCodeTextArea.value;
  const jsCode = jsCodeTextArea.value;

  // Clear the existing content of the output frame
  outputFrame.contentWindow.document.open();
  outputFrame.contentWindow.document.write('');

  // Write the updated code to the output frame
  outputFrame.contentWindow.document.write(htmlCode);
  outputFrame.contentWindow.document.write('<style>' + cssCode + '</style>');
  outputFrame.contentWindow.document.write('<script>' + jsCode + '</script>');
  outputFrame.contentWindow.document.close();
}

// Update the output frame whenever the code changes
htmlCodeTextArea.addEventListener('input', updateOutputFrame);
cssCodeTextArea.addEventListener('input', updateOutputFrame);
jsCodeTextArea.addEventListener('input', updateOutputFrame);

// Function to compile and run the code
function runCode() {
  // Create a loading overlay to indicate that the code is running
  const loadingOverlay = document.createElement('div');
  loadingOverlay.className = 'loading-overlay';
  const loadingSpinner = document.createElement('div');
  loadingSpinner.className = 'loading-spinner';
  loadingOverlay.appendChild(loadingSpinner);
  document.body.appendChild(loadingOverlay);

  // Start the loading animation
  loadingSpinner.style.animationPlayState = 'running';

  // Update the output frame with the latest code
  updateOutputFrame();

  // Hide the loading overlay after a short delay
  setTimeout(() => {
    loadingOverlay.style.animationPlayState = 'paused';
    loadingOverlay.style.opacity = 0;
    setTimeout(() => {
      document.body.removeChild(loadingOverlay);
    }, 300);
  }, 1000);
}

// Add an event listener to the 'Run' button to trigger the code compilation and execution
runButton.addEventListener('click', runCode);
