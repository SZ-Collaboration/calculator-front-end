export function createButtons() {
  const buttonsContext = [
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
  const buttons = [];
  for (let x = 0; x < buttonsContext.length; x++) {
    buttons[x] = document.createElement("button");
    buttons[x].textContent = buttonsContext[x];
    buttons[x].className = "buttons";
    document.body.appendChild(buttons[x]);
  }
}
