let guessNumber = Math.floor(Math.random() * 10) + 1;
console.log(guessNumber);

let chance = 3;

alert("Let's play guessing the numbers\nYou have 3 chances")
for(chance; chance > 0; chance--){
    let inputNumber = Number(prompt("Guess the number from 1 - 10"));
    if(inputNumber > 10 || inputNumber < 0){
        alert("Input is not valid, GAME OVER!");
    }else if(inputNumber == guessNumber){
        alert(`TRUE!\nThe Number is: ${guessNumber}`);
        chance = 0;
    }else if(inputNumber <= guessNumber){
        if(inputNumber == guessNumber){
            alert(`TRUE!\nThe Number is: ${guessNumber}`);
            chance = 0;
        }else{
            alert(`Too Small!\nYour remaining opportunities: ${chance-1}`);
        }
    }else if(inputNumber >= guessNumber){
        if(inputNumber == guessNumber){
            alert(`TRUE!\nThe Number is: ${guessNumber}`);
            chance = 0;
        }else {
            alert(`Too Big!\nYour remaining opportunities: ${chance-1}`);
        }
    }else if(inputNumber > 10){
        alert("Input is not valid, GAME OVER!");
        chance = 0
    }else{
        alert("Input is not valid, GAME OVER!");
    }
}
alert("Thanks For Playing!");
