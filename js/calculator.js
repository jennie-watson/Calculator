var calculator = {
    temporaryAnswer: '',
    answer: '',
    operator: '',
    numberArray: [],
    number: 0,
    waiting: true
};

function buttonPress(buttonValue) {
    notWaiting()
    if (!isNaN(buttonValue)||buttonValue == ".") {
        buildNumber(buttonValue)
        printToCalc(calculator.number)
    } else if (buttonValue == "AC") {
        waiting()
        reset()
        printToCalc('_')
    } else if (buttonValue == "CE") {
        softReset()
        if(calculator.temporaryAnswer){
            printToCalc(calculator.temporaryAnswer)
        }else{
            printToCalc('')
        }
    } else if (buttonValue == "%") {
        if(calculator.number){
            calculator.number = percent(calculator.number)
        }else{
            calculator.number = percent(calculator.temporaryAnswer)
        }
        printToCalc(calculator.number)
    } else if (buttonValue == '-'||buttonValue == '+'||buttonValue == '/'||buttonValue == '*'){
        if(!calculator.operator) {
            calculator.temporaryAnswer = calculator.number
            clearNumbers()
            setOperator(buttonValue)
        } else {
            calculate(calculator.temporaryAnswer,calculator.number,calculator.operator)
            setOperator(buttonValue)
            printToCalc(calculator.temporaryAnswer)
        }        
    } else if (buttonValue == "=") {
        calculate(calculator.temporaryAnswer,calculator.number,calculator.operator)
        var answer = calculator.answer = calculator.temporaryAnswer
        printToCalc(answer)
    }
}

function calculate(a,b,operator){
    // check what the store operator is and use that function
    switch (operator) {
        case '+':
            calculator.temporaryAnswer = add(a, b)
            break;
        case '-':
            calculator.temporaryAnswer = sub(a, b) 
            break;
        case '*':
            calculator.temporaryAnswer = multiply(a, b) 
            break;
        case '/':
            calculator.temporaryAnswer = divide(a, b) 
            break;
        case '%':
            calculator.temporaryAnswer = percent(a) 
            break;
    }
    clearNumbers()
}

function buildNumber(num){
    calculator.numberArray.push(num)
    calculator.number = Number(calculator.numberArray.join(''))
}
function reset(){
    calculator.temporaryAnswer =''
    calculator.answer = ''
    calculator.operator = ''
    calculator.numberArray = []
    calculator.number = 0
}

function softReset(){
    calculator.number = 0
    calculator.numberArray =[]
    calculator.operator = ''
}

function printToCalc(num) { 
    document.getElementById("answer").value=num
}

function clearNumbers(){
    calculator.number = 0
    calculator.numberArray = []
}

function setOperator(operator){
    calculator.operator = operator
}

function notWaiting(){
    document.getElementById('answer').className = ""
}

function waiting(){
    document.getElementById('answer').className = "blink"
}

var add = (a,b) => { return a + b }
var sub = (a,b) => { return a - b}
var multiply = (a,b) => { return a * b}
var divide = (a,b) => { return a / b }
var percent = (a) => {return a / 100}