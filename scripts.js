function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(a, b, operator) {
  operator(a, b);
}

operators = [
  { operator: "+", operatorName: "plus" },
  { operator: "-", operatorName: "minus" },
  { operator: ":", operatorName: "divide" },
  { operator: "*", operatorName: "multiply" },
  { operator: "=", operatorName: "equal" },
  { operator: "clear", operatorName: "clearButton" },
];

const body = document.querySelector("body");
const container = document.createElement("div");
container.setAttribute("id", "mainContainer");

const numContainer = document.createElement("div");
numContainer.setAttribute("id", "numContainer");
container.appendChild(numContainer);
body.appendChild(container);

for (let i = 9; i >= 0; i--) {
  const button = document.createElement("button");
  button.setAttribute("id", `button${i}`);
  button.textContent = `${i}`;
  button.setAttribute("class", "numButtons");
  button.style.gridArea = `numButton${i}`;
  numContainer.appendChild(button);
}

operators.forEach((operator) => {
  const operatorButton = document.createElement("button");
  operatorButton.textContent = `${operator.operator}`;
  operatorButton.setAttribute("class", "operatorButtons");
  operatorButton.setAttribute("id", `${operator.operatorName}`);
  container.appendChild(operatorButton);
});

const calcDisplay = document.createElement("div");
/* calcDisplay.style.display="grid";
calcDisplay.style.gridArea=calcDisplay; */
calcDisplay.textContent = "4+2";
container.appendChild(calcDisplay);
