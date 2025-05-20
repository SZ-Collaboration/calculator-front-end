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
    "DEL",
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
