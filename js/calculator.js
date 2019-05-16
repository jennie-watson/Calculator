//define the calculator object
var calculator = {
    screen = '',
    temporaryAnswer = '',
    finalAnswer = '',
    operatorStorage = '',
    numberArray = [],
    number = ''
};



function buttonPress(buttonValue){
    console.log(buttonValue)
    if (!isNaN(buttonValue)) {
        number.push(buttonValue)
        
        //prints current value to the calculator screen
        //calls the printCalc function first
        document.getElementById("answer").value=number.join('');
        a = number.join('');
        console.log(number);
        console.log(a);
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

//print to screen function - move to object
function printToCalc(number){
    document.getElementById("answer").value=number
}




