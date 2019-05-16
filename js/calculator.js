var temporaryAnswer = [];

function buttonPress(buttonValue){
    console.log(buttonValue)
    if (!isNaN(buttonValue)) {
        console.log('is a number')
        temporaryAnswer.push(buttonValue)
        //prints current value to the calculator screen
        document.getElementById("answer").value=temporaryAnswer.join('');
        console.log(temporaryAnswer);
    }    
    else if(buttonValue === '-' || buttonValue === '+' || buttonValue === '/' || buttonValue === '*') {
        console.log('is not a number')
    } else if(buttonValue === '.') {
        console.log('is a decimal point')
    } else if(buttonValue === '=') {
        console.log('is an equal sign')
    }
}





