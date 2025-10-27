//simple calculator
let plus = (a, b) =>{
    return a + b;
}
let mines = (a, b) =>{
    return a - b;
}
let times = (a, b) =>{
    return a * b;
}
let devide = (a, b) =>{
    return a / b;
}

let firstNumber;
let secondNumber;
let result;

let input = prompt("Select the calculation operation you want 1.(+) 2.(-) 3.(*) 4.(/)");
switch(input){
    case '1': 
            firstNumber = Number(prompt(`Enter the first number`));
            secondNumber = Number(prompt(`Enter the second number`));
            result = plus(firstNumber, secondNumber);
            alert(`${firstNumber} + ${secondNumber} = ${result}`);
            break;
    case '2': 
            firstNumber = Number(prompt(`Enter the first number`));
            secondNumber = Number(prompt(`Enter the second number`));
            result = mines(firstNumber, secondNumber);
            alert(`${firstNumber} - ${secondNumber} = ${result}`);
            break;
    case '3': 
            firstNumber = Number(prompt(`Enter the first number`));
            secondNumber = Number(prompt(`Enter the second number`));
            result = times(firstNumber, secondNumber);
            alert(`${firstNumber} * ${secondNumber} = ${result}`);
            break;
    case '4': 
            firstNumber = Number(prompt(`Enter the first number`));
            secondNumber = Number(prompt(`Enter the second number`));
            result = devide(firstNumber, secondNumber);
            alert(`${firstNumber} / ${secondNumber} = ${result}`);
            break;
    default: alert("Input is not valid!");
}