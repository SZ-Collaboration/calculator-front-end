let currentValue = "";

export function processInput(buttonValue) {
  //DELETES THE WHOLE DISPLAY
  if (buttonValue === "C") {
    currentValue = "";
    //DELETES THE LAST VALUE ON THE DISPLAY
  } else if (buttonValue === "DEL") {
    currentValue = currentValue.slice(0, -1);
  } else if (buttonValue === "=") {
    currentValue = eval(currentValue).toString();
    //ADDS THE BUTTON CLICKED TO CURRENT VALUE
  } else {
    currentValue += buttonValue;
  }
  return currentValue;
}
