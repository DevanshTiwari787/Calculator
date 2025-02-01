let userInput = document.getElementById("userInput");

let expression = "";

function press(num){
    expression += num;
    userInput.value = expression;
}

function equal(){
    userInput.value = eval(expression);
    expression = userInput.value;    
}

function clr(){
    userInput.value = "";
    expression = "";
    console.log("Cleared")
}