// Get DOM elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDisplay = document.getElementById('result');

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');

// Function to perform calculations
function calculate(operation) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = 'Please enter valid numbers';
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultDisplay.textContent = 'Cannot divide by zero';
                return;
            }
            result = num1 / num2;
            break;
    }

    resultDisplay.textContent = result;
}

// Event listeners for buttons
addButton.addEventListener('click', () => calculate('add'));
subtractButton.addEventListener('click', () => calculate('subtract'));
multiplyButton.addEventListener('click', () => calculate('multiply'));
divideButton.addEventListener('click', () => calculate('divide'));
