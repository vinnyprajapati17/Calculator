// Get the display input box
let display = document.getElementById('inputBox');

// Get all button elements
let buttons = document.querySelectorAll('button');

// Convert the NodeList of buttons into a real array
let buttonArray = Array.from(buttons);

// This string will store the user input (numbers & operators)
let string = '';

// Loop through each button
buttonArray.forEach(btn => {

  // Add click event to each button
  btn.addEventListener('click', (e) => {

    // If user pressed DEL → remove last character
    if (e.target.innerHTML == 'DEL') {
      string = string.substring(0, string.length - 1);
      display.value = string;

    // If user pressed AC → clear the entire input
    } else if (e.target.innerHTML == 'AC') {
      string = '';
      display.value = string;

    // If user pressed = → evaluate the expression
    } else if (e.target.innerHTML == '=') {
      string = eval(string);     // Convert string into a math expression
      display.value = string;

    // For any other button → add text to the string
    } else {
      string += e.target.innerHTML;
      display.value = string;
    }

  });

});
