let valueX = "";
let valueA;
let valueB;
let action;

functions = {
  add: function (a, b) {
    valueX = a + b;
    valueA = a + b;
  },
  substract: function (a, b) {
    valueA = a - b;
    valueX = valueA;
  },
  multiply: function (a, b) {
    valueA = a * b;
    valueX = valueA;
  },
  divide: function (a, b) {
    valueA = a / b;
    valueX = valueA;
  },
};

function operate(a, b, operatorCall) {
  functions[operatorCall](a, b);
  action = "";
  document.getElementById("calcDisplay").textContent = `${valueA.toFixed(2)}`;
}

operators = [
  { operator: "+", operatorID: "add" },
  { operator: "-", operatorID: "substract" },
  { operator: ":", operatorID: "divide" },
  { operator: "*", operatorID: "multiply" },
];

const body = document.querySelector("body");
const container = document.createElement("div");
container.setAttribute("id", "mainContainer");

const clearButton = document.createElement("button");
clearButton.setAttribute("id", "clearButton");
clearButton.textContent = "clear";
clearButton.addEventListener("click", function () {
  valueA = "";
  valueB = "";
  document.getElementById("calcDisplay").textContent = "";
});
container.appendChild(clearButton);

const equalButton = document.createElement("button");
equalButton.setAttribute("id", "equalButton");
equalButton.textContent = "=";
equalButton.addEventListener("click", function (e) {
  valueB = parseInt(valueX);
  valueX = "";
  document.getElementById("calcDisplay").textContent = "";
  operate(valueA, valueB, action);
});

container.appendChild(equalButton);

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
  button.addEventListener("click", function () {
    document.getElementById("calcDisplay").textContent += `${i}`;
    valueX += `${i}`;
  });
  numContainer.appendChild(button);
}

operators.forEach((operator) => {
  const operatorButton = document.createElement("button");
  operatorButton.textContent = `${operator.operator}`;
  operatorButton.setAttribute("class", "operatorButtons");
  operatorButton.setAttribute("id", `${operator.operatorID}`);
  operatorButton.addEventListener("click", function (e) {
    document.getElementById("calcDisplay").textContent = "";
    valueA = parseInt(valueX);
    valueX = "";
    action = e.target.id;
  });
  container.appendChild(operatorButton);
});

const calcDisplay = document.createElement("div");
calcDisplay.setAttribute("id", "calcDisplay");

calcDisplay.textContent = "";
container.appendChild(calcDisplay);
