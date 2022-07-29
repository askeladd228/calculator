function sum(a, b) {
  return a+b;
};

function substract(a, b) {
  return a-b;
};

function multiply(a, b) {
  return a*b;
};

function divide(a, b) {
  return a/b;
};

function operate (operator, a, b) {
  return operator(a, b);
}

function clear () {
  bigDisplay.innerHTML = '';
  smallDisplay.innerHTML = '';
  firstOperand = 0;
  secondOperand = 0;
  theOperator = '';
}

const display = document.querySelector('.display');
const bigDisplay = document.querySelector('.bigDisplay');
const smallDisplay = document.querySelector('.smallDisplay');
const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.operate');
const clearField = document.querySelector('.clear');

let firstOperand = 0;
let secondOperand = 0;
let theOperator = '';

nums.forEach(num => {
  num.addEventListener('click', () => {
    if (smallDisplay.innerHTML == '') {
      let bigDisplayValue = (bigDisplay.innerHTML += num.innerText);
      firstOperand = bigDisplayValue;
    };
    if (smallDisplay.innerHTML !== '') {
      let bigDisplayValueTwo = (bigDisplay.innerHTML += num.innerText);
      secondOperand = bigDisplayValueTwo;
    };
  });
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    smallDisplay.innerHTML = firstOperand + ' ' + operator.innerText;
    bigDisplay.innerHTML = '';

    if (operator.innerText == '+') {
      theOperator = sum;
    } else if (operator.innerText == '-') {
      theOperator = substract;
    } else if (operator.innerText == '×') {
      theOperator = multiply;
    } else if (operator.innerText == '÷') {
      theOperator = divide;
    };

    if(secondOperand !== 0) {
      let result = operate(theOperator, parseFloat(firstOperand), parseFloat(secondOperand));
      firstOperand = result;
      secondOperand = 0; //reset the second operand/ fixes error when spam-clicking the operator
      smallDisplay.innerHTML = firstOperand + ' ' + operator.innerText;
    };
  });
});

equal.addEventListener('click', () => {
  let result = operate(theOperator, parseFloat(firstOperand), parseFloat(secondOperand));
  bigDisplay.innerHTML = result;
  smallDisplay.innerHTML += ' ' + secondOperand + ' ' + equal.innerText;
});

clearField.addEventListener('click', () => clear());


