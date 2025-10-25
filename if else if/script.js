alert("Welcome!")

do{
    let input = prompt("Input number: ");
    if(input % 2 == 0){
        alert(`${input} is even`);
    }else if(input % 2 == 1){
        alert(`${input} is odd`);
    }else {
        alert(`${input} is not a number`);
    }
}while(confirm("Want to try again?"));

alert("Thank you!");