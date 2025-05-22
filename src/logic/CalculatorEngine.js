let currentValue = "";

// RETURN TRUE IF THE BUTTON VALUE IS VALID
export function isValid(buttonValue) {
  if (
    hasNumber() === false &&
    (buttonValue === "*" || buttonValue === "/" || buttonValue === "=")
  ) {
    return false;
  } else {
    return true;
  }
}

function hasNumber() {
  return /[0-9]/.test(currentValue);
}

export function processInput(buttonValue) {
  // IF IT IS NOT A VALID INPUT IT RETURNS EMPTY STRING
  if (!isValid(buttonValue)) {
    return currentValue;
  }
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
