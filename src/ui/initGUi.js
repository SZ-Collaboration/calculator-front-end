import {
  createAppContainer,
  createBContainer,
  createButtons,
  createDisplay,
} from "./UIElements";

const buttons = createButtons();
const bContainer = createBContainer();
const appContainer = createAppContainer();
const display = createDisplay();

//TO ADD APPCONT TO HTML, ADD DISPLAY AND BUTTONCONT TO APPCONT, ADD BUTTONS TO BUTTONCONT
export function initGUI() {
  document.body.appendChild(appContainer);
  appContainer.appendChild(display);
  appContainer.appendChild(bContainer);
  for (let x = 0; x < buttons.length; x++) {
    bContainer.appendChild(buttons[x]);
  }

  let currentValue = "";

  for (let x = 0; x < buttons.length; x++) {
    buttons[x].addEventListener("click", () => {
      currentValue += buttons[x].textContent;
      display.value = currentValue;
    });
  }
}
