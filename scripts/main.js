'use strict';
// Get the input field and all the number buttons
const inputField = document.getElementById('calculation');
const numberButtons = document.querySelectorAll('button');

for (let i = 0; i < numberButtons.length; i++){
  numberButtons[i].addEventListener('click', () => {
    const buttonValue = numberButtons[i].textContent;

    if (buttonValue === 'C') {
      clearField();
    }
    else if (buttonValue === '=') {
      calculate();
    }
    else {
      appendButtonValue(buttonValue);
    }
  });
}


function appendButtonValue(buttonValue) {
  // Append the button value to the input field
  inputField.value += buttonValue;
}

function calculate() {
  inputField.value = eval(inputField.value); 
}

function clearField() {
  inputField.value = '';
}