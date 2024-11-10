//get the input field where the dis play is shown

const display = document.getElementById("display");
// envent listner for when user press a key
display.addEventListener("keydown", function (event) {
  //allows keys for the calculator
  const allowedKeys = "0123456789+-*/.";
  //control key to handle special actions
  const controlKeys = [
    "Enter",
    "Escape",
    "Backspace",
    "ArrowLeft",
    "ArrowRight",
  ];
  //check if the key pressed is either an allowed key or a control key
  if (!allowedKeys.includes(event.key) && !controlKeys.includes(event.key)) {
    event.preventDefault();
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});
//function to update the display with the new input
function updateDisplay(input) {
  display.value += input;
}
//function to clear display
function clearDisplay() {
  display.value = "";
}
//function to calculate
function calculate() {
  // Check if the display contains a division by zero ("/0")
  if (display.value.includes("/0")) {
    display.value = "Invalid";
  } else {
    const result = eval(display.value);
    // Check if the result is Infinity, -Infinity, or NaN (Not a Number)
    if (result === Infinity || result === -Infinity || isNaN(result)) {
      display.value = "Invalid";
    } else {
      display.value = result;
    }
  }
}
