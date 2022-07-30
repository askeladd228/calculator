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
  return Math.round((operator(a, b))*100)/100;
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
const del = document.querySelector('.del');

let firstOperand = 0;
let secondOperand = 0;
let theOperator = '';

nums.forEach(num => {
  num.addEventListener('click', (e) => {
    console.log(e);
    if (smallDisplay.innerHTML == '') {
      //checks decimal
      if((bigDisplay.innerHTML).includes('.')) {
        if (e.target.outerText == '.'){
          return;
        };
      };
      let bigDisplayValue = (bigDisplay.innerHTML += num.innerText);
      firstOperand = bigDisplayValue;
    };
    if (smallDisplay.innerHTML !== '') {
       //checks decimal
      if((bigDisplay.innerHTML).includes('.')) {
        if (e.target.outerText == '.'){
          return;
        };
      };
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

    equal.addEventListener('click', () => {
      let result = operate(theOperator, parseFloat(firstOperand), parseFloat(secondOperand));
      bigDisplay.innerHTML = result;
      smallDisplay.innerHTML = firstOperand + ' ' + operator.innerText + ' ' + secondOperand + ' ' + equal.innerText;
      if (secondOperand == 0) {
        smallDisplay.innerHTML = result;
      };
    });
  });
});

clearField.addEventListener('click', () => clear());

del.addEventListener('click', () => {
  bigDisplay.innerHTML = (bigDisplay.innerHTML).slice(0, (bigDisplay.innerHTML).length - 1); 
});

let keyIn;
let operatorIn;
let equalIn;
let clearIn;
let delIn;

window.addEventListener('keydown', function(e) {
  keyIn = document.querySelector(`.num[data-key = "${e.keyCode}"]`);
  operatorIn = document.querySelector(`.operator[data-key = "${e.keyCode}"]`);
  equalIn = document.querySelector(`.operate[data-key = "${e.keyCode}"]`);
  clearIn = document.querySelector(`.clear[data-key = "${e.keyCode}"]`);
  delIn = document.querySelector(`.del[data-key = "${e.keyCode}"]`);

  //num
  if (keyIn !== null) {
    if (smallDisplay.innerHTML == '') {
      //checks decimal
      if((bigDisplay.innerHTML).includes('.')) {
        if (keyIn.innerText == '.'){
          return;
        };
      };
      let bigDisplayValue = (bigDisplay.innerHTML += keyIn.innerText);
      firstOperand = bigDisplayValue;
    };
    if (smallDisplay.innerHTML !== '') {
      //checks decimal
      if((bigDisplay.innerHTML).includes('.')) {
        if (keyIn.innerText == '.'){
          return;
        };
      };
      let bigDisplayValueTwo = (bigDisplay.innerHTML += keyIn.innerText);
      secondOperand = bigDisplayValueTwo;
    };
  }

  //operator
  if(operatorIn !== null) {
    smallDisplay.innerHTML = firstOperand + ' ' + operatorIn.innerText;
    bigDisplay.innerHTML = '';

    if (operatorIn.innerText == '+') {
      theOperator = sum;
    } else if (operatorIn.innerText == '-') {
        theOperator = substract;
    } else if (operatorIn.innerText == '×') {
        theOperator = multiply;
    } else if (operatorIn.innerText == '÷') {
        theOperator = divide;
    };

    if(secondOperand !== 0) {
      let result = operate(theOperator, parseFloat(firstOperand), parseFloat(secondOperand));
      firstOperand = result;
      secondOperand = 0; //reset the second operand/ fixes error when spam-clicking the operator
      smallDisplay.innerHTML = firstOperand + ' ' + operatorIn.innerText;
    }; 
  };

  //calculate
  if(equalIn !== null) {
    let result = operate(theOperator, parseFloat(firstOperand), parseFloat(secondOperand));
    bigDisplay.innerHTML = result;
    smallDisplay.innerHTML = firstOperand + ' ' + operatorIn.innerText + ' ' + secondOperand + ' ' + equalIn.innerText;
    if (secondOperand == 0) {
      smallDisplay.innerHTML = result;
    };
  };

  //clear
  if(clearIn !== null) {
    bigDisplay.innerHTML = '';
    smallDisplay.innerHTML = '';
    firstOperand = 0;
    secondOperand = 0;
    theOperator = '';
  };

  //delete
  if(delIn !== null) {
    bigDisplay.innerHTML = (bigDisplay.innerHTML).slice(0, (bigDisplay.innerHTML).length - 1); 
  }
}); 
  

