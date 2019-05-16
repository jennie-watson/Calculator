//define the 
var temporaryAnswer = '';
var number=[];
var a = '';
var b = '';

function buttonPress(buttonValue){
    console.log(buttonValue)
    if (!isNaN(buttonValue)) {
        number.push(buttonValue)
        
        //prints current value to the calculator screen
        document.getElementById("answer").value=number.join('');
        a = number.join('');
        console.log(number);
        console.log(a);
    
    }else if(buttonValue === '-' /*|| buttonValue === '+' || buttonValue === '/' || buttonValue === '*'*/) {
        //clear number array and set a as temporary answer
        number = [];
        temporaryAnswer = a;
        
        //the subtract a from temporaryAnswer
        answer = temporaryAnswer - a
        console.log(answer)
        printToCalc(answer)
    } else if(buttonValue === '.') {
        console.log('is a decimal point')
    } else if(buttonValue === '=') {
        console.log('is an equal sign')
    }
}

//print to screen funcation
function printToCalc(number){
    document.getElementById("answer").value=number
}



