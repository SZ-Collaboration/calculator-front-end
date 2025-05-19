export class createButtons {
  buttonsContext = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "+",
    "-",
    "*",
    "/",
    "=",
    "C",
  ];
  buttons = [];

  //TO CREATE BUTTONS, MAKE BUTTONS SHOW CONTENT AND MAKE IT ACCESIBLE TO CSS
  constructor() {
    for (let x = 0; x < this.buttonsContext.length; x++) {
      this.buttons[x] = document.createElement("button");
      this.buttons[x].textContent = this.buttonsContext[x];
      this.buttons[x].className = "buttons";
    }
  }
}
