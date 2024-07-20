let lives = 5;
let max = 25;
let min = 0;
let guess;
let ranNum = Math.floor(Math.random() * 25)+1;

const submit = document.getElementById("guessSubmit");
const hint = document.getElementById("hint");
const input = document.getElementById("guess");


submit.onclick = function(){
    guess = input.value;
    console.log(ranNum);


}
