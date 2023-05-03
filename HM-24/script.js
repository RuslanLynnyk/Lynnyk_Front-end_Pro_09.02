import { add, subtract, multiply, divide } from './calculator.js';
    
const form = document.getElementById('calculatorForm');
const num1Input = document.getElementById('num1');
const operatorSelect = document.getElementById('operator');
const num2Input = document.getElementById('num2');
const calculateBtn = document.getElementById('calculateBtn');
const resetBtn = document.getElementById('resetBtn');
const resultInput = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  const operator = operatorSelect.value;
  let result;

  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
    default:
      result = NaN;
  }

  resultInput.value = isNaN(result) ? 'Некоректні дані' : result;
});

resetBtn.addEventListener('click', () => {
  form.reset();
  resultInput.value = '';
});

