import { createButtons } from "./createButtons";
import { createBContainer } from "./createBContainer";
import { createAppContainer } from "./createAppContainer";
import { createDisplay } from "./createDisplay";

const buttons = createButtons();
const bContainer = createBContainer();
const appContainer = createAppContainer();
const display = createDisplay();

//TO ADD APPCONT TO HTML, ADD DISPLAY AND BUTTONCONT TO APPCONT, ADD BUTTONS TO BUTTONCONT
export function initUI() {
  document.body.appendChild(appContainer);
  appContainer.appendChild(display);
  appContainer.appendChild(bContainer);
  for (let x = 0; x < buttons.length; x++) {
    bContainer.appendChild(buttons[x]);
  }
}
