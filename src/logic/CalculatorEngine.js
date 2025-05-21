let currentValue = "";

export function processInput(buttonValue) {
  //REMOVES THE LAST VALUE ON DISPLAY
  if (buttonValue === "⌫") {
    currentValue = currentValue.slice(0, -1);
  } else if (buttonValue === "=") {
    //ADDS THE BUTTON CLICKED TO CURRENT VALUE
    try {
      currentValue = eval(currentValue).toString();
    } catch {
      currentValue = "Error";
    }
  } else {
    currentValue += buttonValue;
  }
  return currentValue;
}
