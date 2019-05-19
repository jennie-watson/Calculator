var calculator = {
    temporaryAnswer: '',
    finalAnswer: '',
    operator: '',
    numberArray: [],
    number: 0,
    add: (a,b) => { return a + b },
    sub: (a,b) => { return a - b},
    multiply: (a,b) => { return a * b},
    divide: (a,b) => { return a / b }, 
    percent: (a) => {return a / 100}
};


function buttonPress(buttonValue) {
    if (!isNaN(buttonValue)) {
        // Handling buttonPress so the values display to the screen correctly
        printToCalc(buttonValue) 
    } else {
        if(!calculator.operator) {
            // Setting the first number as the current answer and clearing the way for the next arguement in the equation
            calculator.temporaryAnswer = calculator.number
            calculator.number = 0
            calculator.numberArray = []
            // store operator
            calculator.operator = buttonValue
        } else {
            calculate(calculator.temporaryAnswer,calculator.number,calculator.operator)
            
            // On the buttonPress of an operator it looks at the last portion of the equation and saves it to temporaryAnswer, then stores the new operator.
        
            // clear the way for next arguement in the equation
            calculator.number = 0
            calculator.numberArray = []
            // store operator
            calculator.operator = buttonValue
        }        
    }
}

function calculate(a,b,operator){
    // check what the store operator is and use that function
    switch (operator) {
        case '+':
            calculator.temporaryAnswer = calculator.add(a, b) 
            // console.log(temporaryAnswer + ' + ' + number + ' = ' + calculator.temporaryAnswer )
            break;
        case '-':
            calculator.temporaryAnswer = calculator.sub(a, b) 
            // console.log(temporaryAnswer + ' - ' + number + ' = ' + calculator.temporaryAnswer )
            break;
        case '*':
            calculator.temporaryAnswer = calculator.multiply(a, b) 
            // console.log(temporaryAnswer + ' * ' + number + ' = ' + calculator.temporaryAnswer )
            break;
        case '/':
            calculator.temporaryAnswer = calculator.divide(a, b) 
            // console.log(temporaryAnswer + ' / ' + number + ' = ' + calculator.temporaryAnswer )
            break;
        case '%':
            calculator.temporaryAnswer = calculator.percent(a) 
            // console.log(temporaryAnswer + ' % ' + number + ' = ' + calculator.temporaryAnswer )
            break;
    }
    printToCalc(calculator.temporaryAnswer)
}

function printToCalc(num) { 
    calculator.numberArray.push(num)
    calculator.number = Number(calculator.numberArray.join(''))
    document.getElementById("answer").value=calculator.number
}