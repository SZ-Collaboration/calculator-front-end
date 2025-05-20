import { buttons, display } from "./GUI";
import { processInput } from "../logic/CalculatorEngine";

//ADDS EVENTLISTENER TO BUTTONS AND PROCESS INPUT
export function eventHandler() {
  for (let x = 0; x < buttons.length; x++) {
    buttons[x].addEventListener("click", () => {
      const buttonValue = buttons[x].textContent;
      const newDisplayValue = processInput(buttonValue);
      display.value = newDisplayValue;
    });
  }
}
