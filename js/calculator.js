var calculator = {
    screen: '',
    temporaryAnswer: '',
    finalAnswer: '',
    operator: '',
    numberArray: [],
    number: 0,
    add: (a,b) => { return a + b },
    sub: (a,b) => { return a - b},
    multiply: (a,b) => { return a * b},
    divide: (a,b) => { return a / b }, 
    percent: (a) => {return a / 100},
    printToCalc: (num) => { document.getElementById("answer").value=num }
};


function buttonPress(buttonValue) {
    if (!isNaN(buttonValue)) {
        // Handling buttonPress so the values display to the screen correctly
        calculator.numberArray.push(buttonValue)
        calculator.number = Number(calculator.numberArray.join(''))
        calculator.printToCalc(calculator.number) 
    } else {
        if(!calculator.operator) {
            // Setting the first number as the current answer and clearing the way for the next arguement in the equation
            calculator.temporaryAnswer = calculator.number
            calculator.number = 0
            calculator.numberArray = []
            // store operator
            calculator.operator = buttonValue
        } else {
            // check what the store operator is and use that function

            var operator = calculator.operator
            var temporaryAnswer = calculator.temporaryAnswer
            var number = calculator.number
            
            // On the buttonPress of an operator it looks at the last portion of the equation and saves it to temporaryAnswer, then stores the new operator.
            switch (operator) {
                case '+':
                    calculator.temporaryAnswer = calculator.add(temporaryAnswer, number) 
                    // console.log(temporaryAnswer + ' + ' + number + ' = ' + calculator.temporaryAnswer )
                    calculator.printToCalc(calculator.temporaryAnswer)
                    break;
                case '-':
                    calculator.temporaryAnswer = calculator.sub(temporaryAnswer, number) 
                    // console.log(temporaryAnswer + ' - ' + number + ' = ' + calculator.temporaryAnswer )
                    calculator.printToCalc(calculator.temporaryAnswer)
                    break;
                case '*':
                    calculator.temporaryAnswer = calculator.multiply(temporaryAnswer, number) 
                    // console.log(temporaryAnswer + ' * ' + number + ' = ' + calculator.temporaryAnswer )
                    calculator.printToCalc(calculator.temporaryAnswer)
                    break;
                case '/':
                    calculator.temporaryAnswer = calculator.divide(temporaryAnswer, number) 
                    // console.log(temporaryAnswer + ' / ' + number + ' = ' + calculator.temporaryAnswer )
                    calculator.printToCalc(calculator.temporaryAnswer)
                    break;
                case '%':
                    calculator.temporaryAnswer = calculator.percent(temporaryAnswer) 
                    // console.log(temporaryAnswer + ' % ' + number + ' = ' + calculator.temporaryAnswer )
                    calculator.printToCalc(calculator.temporaryAnswer)
                    break;
                default: 
                    console.log(operator)
                    console.log('not a known operator')
            }

            // clear the way for next arguement in the equation
            calculator.number = 0
            calculator.numberArray = []
            // store operator
            calculator.operator = buttonValue
        }        
    }
}