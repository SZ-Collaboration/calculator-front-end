//CREATES A BOX WHERE NUMBERS AND OPERATORS SHOULD APPEAR
export function createDisplay() {
  const display = document.createElement("input");
  display.className = "display";

  return display;
}
