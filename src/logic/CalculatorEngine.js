let currentValue = "";
const operator = ["/", "*", "+", "-"];
let previousValue = "";

// RETURN TRUE IF THE BUTTON VALUE IS VALID
export function isValid(buttonValue) {
  if (
    hasNumber() === false &&
    (buttonValue === "*" || buttonValue === "/" || buttonValue === "=")
  ) {
    return false;
  } else if (hasOperator(buttonValue)) {
    return false;
  } else {
    return true;
  }
}

//RETURNS IF PREVIOUS VALUE AND CURRENT VALUE HAVE OPERATORS
//THIS ALLOWS MULTIPLE "-", NEED TO FIX THAT
function hasOperator(buttonValue) {
  if (
    operator.includes(previousValue) &&
    operator.includes(buttonValue) &&
    buttonValue != "-"
  ) {
    return true;
  } else {
    return false;
  }
}

//RETURNS TRUE IF CURRENT VALUE HAS NUMBER
function hasNumber() {
  return /[0-9]/.test(currentValue);
}

export function processInput(buttonValue) {
  // IF IT IS NOT A VALID INPUT IT RETURNS EMPTY STRING
  if (!isValid(buttonValue)) {
    previousValue = currentValue.slice(-1);
  }
  //REMOVES THE LAST VALUE ON DISPLAY
  else if (buttonValue === "⌫") {
    currentValue = currentValue.slice(0, -1);
    previousValue = currentValue.slice(-1);
  } else if (buttonValue === "=") {
    //ADDS THE BUTTON CLICKED TO CURRENT VALUE
    try {
      currentValue = eval(currentValue).toString();
      previousValue = "";
    } catch {
      currentValue = "Error";
      previousValue = "";
    }
  } else {
    currentValue += buttonValue;
    previousValue = currentValue.slice(-1);
  }
  return currentValue;
}
