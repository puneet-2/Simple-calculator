var buttons = [
    ...document.querySelectorAll('.buttons'),
    ...document.querySelectorAll('.r_buttons')
];
  
var display = document.getElementById('display');
var operand1 = '';
var operand2 = null;
var operator = null;
  
buttons.forEach(function(button){
    button.addEventListener('click', function() {
    var value = this.getAttribute('data-value');
    if (value === '+') {
        operator='+';
        operand1=parseFloat(display.textContent);
        display.textContent=' ';
    }
    else if (value === '-') {
        operator='-';
        operand1=parseFloat(display.textContent);
        display.textContent=' ';
    } 
    else if (value === '*') {
        operator='*';
        operand1=parseFloat(display.textContent);
        display.textContent=' ';
    } 
    else if (value === '/') {
        operator='/';
        operand1=parseFloat(display.textContent);
        display.textContent=' ';
    }  
    else if (value === '=') {
        operand2 = parseFloat(display.textContent);
        display.textContent = calculate();
        operand1 = '';
        operand2 = null;
        operator = null;
    } 

    else if (value === 'C') {
        display.textContent = display.textContent.slice(0, -1);
    } 
    else if (value === 'CE') {
        display.textContent = '';
        operand1 = '';
        operand2 = null;
        operator = null;
    }
    else {
        display.textContent += value;

    }
    });
});

function calculate() {
    var result = '';
    var num1 = parseFloat(operand1);
    var num2 = parseFloat(operand2);
  
    if (operator === '+') {
      result = num1 + num2;
    }

    else if (operator === '-') {
        result = num1 - num2;
    }


    else if (operator === '*') {
        result = num1 * num2;
    }

    else if (operator === '/') {
        result = num1 / num2;
    }

  
    return result;
}
  