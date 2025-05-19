//CREATES A BOX WHERE NUMBERS AND OPERATORS SHOULD APPEAR
export class CreateDisplay {
  display = document.createElement("input");
  constructor() {
    this.display.className = "display";
  }
}
