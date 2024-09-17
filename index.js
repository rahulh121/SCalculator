function appendToDisplay(value) {
    document.getElementById('display').textContent += value;
}

function appendOperator(operator) {
    if (operator === 'sqrt') {
        document.getElementById('display').textContent += '√(';
    }  else if (operator === 'sin') {
        document.getElementById('display').textContent += 'sin(';
    } else if (operator === 'cos') {
        document.getElementById('display').textContent += 'cos(';
    } else if (operator === 'tan') {
        document.getElementById('display').textContent += 'tan(';
    }  else {
        document.getElementById('display').textContent += operator;
    }
  }


function clearDisplay() {
    document.getElementById('display').textContent = '';
}

function deleteChar() {
    document.getElementById('display').textContent = document.getElementById('display').textContent.slice(0, -1);
  }

function calculate() {
    var display = document.getElementById('display');

    document.getElementById('display').textContent = document.getElementById('display').textContent.replace(/sin\(/g, 'Math.sin(');
    document.getElementById('display').textContent = document.getElementById('display').textContent.replace(/cos\(/g, 'Math.cos(');
    document.getElementById('display').textContent = document.getElementById('display').textContent.replace(/tan\(/g, 'Math.tan(');
    document.getElementById('display').textContent = document.getElementById('display').textContent.replace(/√\(/g, 'Math.sqrt(');

    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}
