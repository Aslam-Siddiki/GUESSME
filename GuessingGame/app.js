let h2=document.querySelector("h2");

const max=prompt("Enter the maximum number.");
console.log(max);

const random = Math.floor(Math.random()*max) +1;

let guess = prompt("Guess the Number");
while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("You are right! congrats!! Random number was",random);
        h2.innerText=` You are right!  Congrats! The Number was ${random}. `
        break;
    }
    else if(guess < random){
        guess = prompt("Hint: Your guess was too small. Please enter a little bit bigger number:");
    }
    else {
        guess = prompt("HInt: Your guess was too big. Please enter a little bit smaller number.");
    }
    
}