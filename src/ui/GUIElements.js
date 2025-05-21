//CREATE BUTTONS
export function createButtons() {
  const buttonsContext = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "⌫",
    "0",
    "=",
    "+",
  ];

  const buttons = [];
  for (let x = 0; x < buttonsContext.length; x++) {
    buttons[x] = document.createElement("button");
    buttons[x].textContent = buttonsContext[x];
    buttons[x].className = "buttons";
  }

  return buttons;
}

//TO CONNECT BUTTONS IN ONE PLACE
export function createBContainer() {
  const container = document.createElement("div");
  container.className = "Bcontainer";

  return container;
}

//CREATES A BOX WHERE NUMBERS AND OPERATORS SHOULD APPEAR
export function createDisplay() {
  const display = document.createElement("input");
  display.className = "display";

  return display;
}

//TO CONNECT DISPLAY AND BUTTON CONTAINER IN ONE PLACE
export function createAppContainer() {
  const app = document.createElement("div");
  app.className = "appContainer";

  return app;
}
