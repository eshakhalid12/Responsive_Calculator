
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');


let displayValue = '';
let isCalculatorOn = false;

// Function to update display
function updateDisplay() {
    if (isCalculatorOn) {
        display.innerText = displayValue || '0';
    } else {
        display.innerText = '';  // Clear the display when the calculator is off
    }
}

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const buttonText = this.innerText;

        if (buttonText === 'ON') {
            isCalculatorOn = true; 
            displayValue = '0';     // Initialize display with '0'
            updateDisplay();
        } else if (buttonText === 'OFF') {
            isCalculatorOn = false;  
            displayValue = '';      
            updateDisplay();       
        } else if (isCalculatorOn) {  // Only allow input if the calculator is on
            if (buttonText === 'AC') {
                displayValue = '';  // Clear display
            } else if (buttonText === 'DEL') {
                displayValue = displayValue.slice(0, -1);  // Delete last character
            } else if (buttonText === '=') {
                try {
                    displayValue = eval(displayValue);  // Evaluate expression
                } catch {
                    displayValue = 'Error';  // Handle errors
                }
            } else {
                if (displayValue === '0') {
                    displayValue = buttonText;  // Replace '0' with the first input
                } else {
                    displayValue += buttonText;  // Append button text to display value
                }
            }

            updateDisplay(); 
        }
    });
});
