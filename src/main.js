import "./style.css";
import { createButtons } from "./ui/createButtons";
import { CreateContainer } from "./ui/CreateContainer";

let obj1 = new createButtons();
let obj2 = new CreateContainer();

document.body.appendChild(obj2.container);
for (let x = 0; x < obj1.buttonsContext.length; x++) {
  obj2.container.appendChild(obj1.buttons[x]);
}
