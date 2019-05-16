//define the calculator object
var calculator = {
    screen: '',
    temporaryAnswer: '',
    finalAnswer: '',
    operatorStorage: '',
    numberArray: [],
    number: '',

    // define methods for valuation of equations 
    add: '',
    sub: '',
    multiply: '',
    divide: '', 

    printToCalc: (number) => {
        document.getElementById("answer").value=number
    }
};


function buttonPress(buttonValue) {
    if (!isNaN(buttonValue)) {
        calculator.numberArray.push(buttonValue)
        calculator.number = calculator.numberArray.join('')
        calculator.printToCalc(calculator.number)
    }
        console.log(calculator)
}
       




//     else if(buttonValue === '-' /*|| buttonValue === '+' || buttonValue === '/' || buttonValue === '*'*/) {
//         //clear number array and set a as temporary answer
//         number = [];
//         temporaryAnswer = a;
        
//         //the subtract a from temporaryAnswer
//         answer = temporaryAnswer - a
//         console.log(answer)
//         printToCalc(answer)
//     } else if(buttonValue === '.') {
//         console.log('is a decimal point')
//     } else if(buttonValue === '=') {
//         console.log('is an equal sign')
//     }
// }


