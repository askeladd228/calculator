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

function operate (op, a, b) {
  return op(a, b);
}

function clear () {
  bigDisplay.innerHTML = '';
}

const bigDisplay = document.querySelector('.bigDisplay');
const smallDisplay = document.querySelector('.smallDisplay');
const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');

let firstOperand = nums.forEach(num => {
  num.addEventListener('click', () => {
    bigDisplay.innerHTML += num.innerText;
  });
  return bigDisplay.innerHTML;    
});

let theOperator = operators.forEach(operator => {
  operator.addEventListener('click', () => {
    bigDisplay.innerHTML += operator.innerText;
  });    
});


