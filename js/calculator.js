//define the calculator object
var calculator = {
    screen: '',
    temporaryAnswer: '',
    finalAnswer: '',
    operator: '',
    numberArray: [],
    number: '',

    /* Methods */
    //calculation
    // come back and do something to control for string length, particularly with decimal points and large numbers
    add: (a,b) => { return a + b },
    sub: (a,b) => { return a - b},
    multiply: (a,b) => { return a * b},
    divide: (a,b) => { return a / b }, 
    percent: (a) => {return a /100},

    //display
    printToCalc: (number) => { document.getElementById("answer").value=number }
};


function buttonPress(buttonValue) {
    if (!isNaN(buttonValue)) {
        calculator.numberArray.push(buttonValue)
        calculator.number = calculator.numberArray.join('')
        calculator.printToCalc(calculator.number) 
    } else{
        //check for stored operator
        if (!calculator.operator) {
            // set temp ans as number
            calculator.temporaryAnswer = calculator.number
            // clear number
            calculator.number = 0
            calculator.numberArray = []
            // store operator
            calculator.operator = buttonValue
        } else {
       // stored operator
                // check what the store operator is and use that function
                    // set temp ans as opFunc(temp, num)
            switch (calculator.operator) {
                case '+':
                    calculator.temporaryAnswer = calculator.add(calculator.temporaryAnswer, calculator.number) 
                    break;
                default: 
                    console.log('not a + operator')
            }
                
        }

    // if .
    // if % - dive answer by 100 and return value
    // if AC - reintitilise calculator
    // if CE - clear currrent (remove current number & operator)
    // 
    //if operator do something
    // if = (dont know where to put this yet)
    
    
        

            


        
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


