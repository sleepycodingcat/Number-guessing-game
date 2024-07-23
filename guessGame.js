let lives = 5;
let guess;
let gameMax = 25;
let gameMin = 1;
let ranNum = Math.floor(Math.random() * (gameMax - gameMin+1) ) + gameMin;



const submit = document.getElementById("guessSubmit");
const hint = document.getElementById("hint");
const input = document.getElementById("guess");
const title = document.getElementById("title");
const max = document.getElementById("max");
const min = document.getElementById("min");


//SETTINGS//

const inputMin = document.getElementById('inputMin');
const inputMax = document.getElementById('inputMax');

function changeMin(){
    gameMin = Number(inputMin.value);    
    min.textContent = gameMin;
    ranNum = Math.floor(Math.random() * (gameMax - gameMin+1) ) + gameMin;

}

function changeMax(){
    gameMax = Number(inputMax.value);
    max.textContent = gameMax;
    ranNum = Math.floor(Math.random() * (gameMax - gameMin+1) ) + gameMin;

}

submit.onclick = function(){
    guess = input.value;
    guess = Number(guess)
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


//SIDEBAR//

document.querySelectorAll('[data-toggle-sidebar]').forEach(toggle => {
    toggle.addEventListener('click', e => {
        const sidebarID = toggle.dataset.toggleSidebar;
        const sidebarElement = sidebarID ? document.getElementById(sidebarID) : undefined;
        if (sidebarElement) {
            let sidebarState = sidebarElement.getAttribute('aria-hidden');
            sidebarElement.setAttribute('aria-hidden', sidebarState == 'true' ? false : true); }
        });
     });

