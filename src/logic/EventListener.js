import { buttons, display } from "../ui/GUI";

let value = "";

//ADDS EVENTLISTENER TO BUTTONS
export function eventHandler() {
  for (let x = 0; x < buttons.length; x++) {
    buttons[x].addEventListener("click", () => {
      const currentValue = buttons[x].textContent;

      if (currentValue === "C") {
        //DELETES THE WHOLE DISPLAY
        value = "";
      } else if (currentValue === "DEL") {
        //DELETES ONLY ONE OF THE VALUES
        value = value.slice(0, -1);
      } else {
        value += currentValue;
      }
      display.value = value;
    });
  }
}
