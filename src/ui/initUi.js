import { createButtons } from "./createButtons";
import { CreateContainer } from "./CreateContainer";

let obj1 = new createButtons();
let obj2 = new CreateContainer();

export function initUI() {
  document.body.appendChild(obj2.container);
  for (let x = 0; x < obj1.buttonsContext.length; x++) {
    obj2.container.appendChild(obj1.buttons[x]);
  }
}
