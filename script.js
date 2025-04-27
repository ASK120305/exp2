// Variable declarations
var greeting = "Hello";           // string
let count = 0;                     // number
const isActive = true;             // boolean

// 1. if-else: check if number is positive, negative, or zero
const checkBtn = document.getElementById('checkBtn');
const numberInput = document.getElementById('numberInput');
const numberResult = document.getElementById('numberResult');
checkBtn.addEventListener('click', function() {
  const num = parseInt(numberInput.value);
  if (num > 0) {
    numberResult.textContent = greeting + ", " + num + " is positive.";
  } else if (num < 0) {
    numberResult.textContent = num + " is negative.";
  } else {
    numberResult.textContent = "You entered zero.";
  }
});

// 2. switch: respond to day input
const dayBtn = document.getElementById('dayBtn');
const dayInput = document.getElementById('dayInput');
const dayResult = document.getElementById('dayResult');
dayBtn.addEventListener('click', function() {
  const day = dayInput.value.toLowerCase();
  switch(day) {
    case 'mon':
      dayResult.textContent = "Start of the week!";
      break;
    case 'tue':
      dayResult.textContent = "Keep going, it's Tuesday.";
      break;
    case 'wed':
      dayResult.textContent = "Hump day!";
      break;
    default:
      dayResult.textContent = "Just another day.";
  }
});

// 3. keyboard event: show last key pressed
const textInput = document.getElementById('textInput');
const keyResult = document.getElementById('keyResult');
textInput.addEventListener('keydown', function(event) {
  keyResult.textContent = event.key;
  count++;  // increment number example
});