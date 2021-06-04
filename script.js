const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  console.log(number);
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    console.log("number is pressed");
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", (Event) => {
    console.log(Event.target.value);
  });
});

const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

number.forEach((number) => {
  number.addEventListener("click", (Event) => {
    updateScreen(Event.target.value);
  });
});

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
  currentNumber = number;
};

numbers.forEach((number) => {
  number.addEventListener("click", (Event) => {
    inputNumber(Event.target.value);
    updateScreen(currentNumber);
  });
});

const inputNumber = (number) => {
  currentNumber += number;
};

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (Event) => {
    console.log(Event.target.value);
  });
});

const inputOperator = (operator) => {
  prevNumber = currentNumber;
  calculationOperator = operator;
  currentNumber = "";
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (Event) => {
    inputOperator(Event.target.value);
  });
});

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  console.log("equal button is pressed");
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = prevNumber * currentNumber;
      break;

    case "/":
      result = prevNumber / currentNumber;
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseInt(prevNumber) + parseInt(currentNumber);
      break;
  }
};

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
  console.log("AC button is pressed");
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
  console.log("AC button is pressed");
});

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (Event) => {
  console.log(Event.target.value);
});

inputDecimal = (dot) => {
  currentNumber += dot;
};

decimal.addEventListener("click", (Event) => {
  inputDecimal(Event.target.value);
  updateScreen(currentNumber);
});

// case '+':
//     result = parseFloat(prevNumber) + parseFloat(currentNumber)
//     break

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};
