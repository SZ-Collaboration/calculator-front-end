import { buttons, display } from "../ui/GUI";

export function eventHandler() {
  let currentValue = "";

  for (let x = 0; x < buttons.length; x++) {
    buttons[x].addEventListener("click", () => {
      currentValue += buttons[x].textContent;

      if (currentValue.includes("DEL")) {
        currentValue = "";
        display.value = currentValue;
      } else {
        display.value = currentValue;
      }

      console.log(currentValue);
    });
  }
}
