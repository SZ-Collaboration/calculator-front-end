import { createButtons } from "./Buttons";
import { createContainer } from "./ButtonContainer";
import { createApp } from "./AppContainer";
import { createDisplay } from "./Display";

//TOFIX : NAME THE OBJECTS BETTER
let obj1 = new createButtons();
let obj2 = new createContainer();
let obj3 = new createApp();
let obj4 = new createDisplay();

//TO ADD APPCONT TO HTML, ADD DISPLAY AND BUTTONCONT TO APPCONT, ADD BUTTONS TO BUTTONCONT
export function initUI() {
  document.body.appendChild(obj3.app);
  obj3.app.appendChild(obj4.display);
  obj3.app.appendChild(obj2.container);
  for (let x = 0; x < obj1.buttonsContext.length; x++) {
    obj2.container.appendChild(obj1.buttons[x]);
  }
}
