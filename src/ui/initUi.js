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
let currentValue = "";

//TO ADD APPCONT TO HTML, ADD DISPLAY AND BUTTONCONT TO APPCONT, ADD BUTTONS TO BUTTONCONT
function initGUI() {
  document.body.appendChild(appContainer);
  appContainer.appendChild(display);
  appContainer.appendChild(bContainer);
  for (let x = 0; x < buttons.length; x++) {
    bContainer.appendChild(buttons[x]);
  }
}

//LISTENS CLICK EVENTS ON BUTTONS, ON CLICK CURRENTVALUE BECOMES BUTTON CONTENT
function InputHandler() {
  for (let x = 0; x < buttons.length; x++) {
    buttons[x].addEventListener("click", function (event) {
      currentValue = event.target.textContent;
    });
  }
}

//RETURNS THE CURRENT BUTTONS VALUE
export function getValue() {
  return currentValue;
}

//INITALIZES GUI AND INPUT HANDLER
export function initUI() {
  initGUI();
  InputHandler();
}

//RETURNS DISPLAY
export function returnDisplay() {
  return display;
}
