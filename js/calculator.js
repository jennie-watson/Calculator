//define the calculator object
var calculator = {
    screen: '',
    temporaryAnswer: '',
    finalAnswer: '',
    operatorStorage: '',
    numberArray: [],
    number: '',
    printToCalc: function(number) {
        document.getElementById("answer").value=number
    }
};


function buttonPress(buttonValue){
    console.log(buttonValue)
    if (!isNaN(buttonValue)) {
        // number.push(buttonValue)
        calculator.numberArray.push(buttonValue)
        console.log(calculator)
    }

        
     
        // push to the calc numberArray
        // join the numArray and define as number property
        // prints current value to the calculator screen
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


