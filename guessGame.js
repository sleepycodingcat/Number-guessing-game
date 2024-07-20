//https://dev.to/felipperegazio/creating-a-sidebar-with-html-css-and-js-1jep 
//for side bar 

let lives = 5;
let guess;
let ranNum = Math.floor(Math.random() * 25)+1;
let gameMax = 25;
let gameMin = 1;

const submit = document.getElementById("guessSubmit");
const hint = document.getElementById("hint");
const input = document.getElementById("guess");
const title = document.getElementById("title");
const max = document.getElementById("max");
const min = document.getElementById("min");

const heart1 = document.getElementById('heart1');
const heart2 = document.getElementById('heart2');
const heart3 = document.getElementById('heart3');
const heart4 = document.getElementById('heart4');
const heart5 = document.getElementById('heart5');


console.log(ranNum);

submit.onclick = function(){
    guess = input.value;
    guess = Number(guess)
    console.log(guess);
    if (isNaN(guess)){
        window.alert("enter valid number!");
    }
    if (guess>gameMax || guess<gameMin){
        window.alert("enter a number within the range!")
    }
    else if (guess == ranNum){
        title.textContent = "Yayy!"
    }
    else{
        lives -= 1;

        if (guess>ranNum){
            window.alert("Guess lower!")
            max.textContent = guess;
        }
        else if (guess<ranNum){
            window.alert("Guess higher!")
            min.textContent = guess;
        }
        heart1.style.display = "none"; //figure out how to make each heart go

    }

}
