import { createButtons } from "./createButtons";
import { CreateContainer } from "./CreateContainer";
import { CreateDisplay } from "./createDisplay";

let obj1 = new createButtons();
let obj2 = new CreateContainer();
let obj3 = new CreateDisplay();

//TO ADD CONTAINER TO HTML AND ADD BUTTONS TO CONTAINER
export function initUI() {
  document.body.appendChild(obj2.container);
  document.body.appendChild(obj3.display);
  for (let x = 0; x < obj1.buttonsContext.length; x++) {
    obj2.container.appendChild(obj1.buttons[x]);
  }

  obj2.container.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      obj3.display.value = event.target.textContent;
    }
  });
}
