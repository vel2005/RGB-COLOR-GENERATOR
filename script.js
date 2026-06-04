// Target DOM Elements
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');

const redValueText = document.getElementById('redVal');
const greenValueText = document.getElementById('greenVal');
const blueValueText = document.getElementById('blueVal');

const colorBox = document.getElementById('colorBox');
const rgbCodeText = document.getElementById('rgbCode');
const copyButton = document.getElementById('copyBtn');

// Function to update the background color and text
function updateColor() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    
    // Update numerical indicator text beside sliders
    redValueText.textContent = r;
    greenValueText.textContent = g;
    blueValueText.textContent = b;
    
    // Build the format string
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    
    // Apply background color live
    colorBox.style.backgroundColor = rgbColor;
    
    // Update main text output
    rgbCodeText.textContent = rgbColor;
}

// Function to handle clipboard copy functionality
function copyToClipboard() {
    const textToCopy = rgbCodeText.textContent;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Provide quick feedback on the UI button
        const originalText = copyButton.textContent;
        copyButton.textContent = 'Copied!';
        copyButton.style.backgroundColor = '#10b981'; // Turn green
        
        setTimeout(() => {
            copyButton.textContent = originalText;
            copyButton.style.backgroundColor = '#4f46e5'; // Revert back
        }, 1500);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Attach input listeners for real-time tracking on sliders
redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

// Attach event listener to copy button
copyButton.addEventListener('click', copyToClipboard);

// Initialize application values on first paint
updateColor();
