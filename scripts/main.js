'use strict';
// Get the input field and all the number buttons
const inputField = document.getElementById('calculation');
const numberButtons = document.querySelectorAll('.numpad-button');

// Attach a click event listener to each button
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the value of the clicked button
    const buttonValue = button.textContent;

    // Append the button value to the input field
    inputField.value += buttonValue;
  });
});
