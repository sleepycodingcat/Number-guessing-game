let lives = 5;
let guess;
let gameMax = 25;
let gameMin = 1;
let ranNum = Math.floor(Math.random() * (gameMax - gameMin+1) ) + gameMin;



const submit = document.getElementById("guessSubmit");
const input = document.getElementById("guess");
const title = document.getElementById("title");
const max = document.getElementById("max");
const min = document.getElementById("min");

const numLives = document.getElementById("numLives");
const settingMsg = document.getElementById("settingMsg");


//SETTINGS//

const inputMin = document.getElementById('inputMin');
const inputMax = document.getElementById('inputMax');

const hintP = document.getElementById("hint");
const hintContainer = document.getElementById('hintContainer');
const hintBtn = document.getElementById("hintBtn");
const middle = document.getElementsByClassName("middle");

function resetText(){
    settingMsg.textContent = "Note: Hints are only avaliable for numbers 0-25";
}

function changeMin(){
    if (Number(inputMin.value) < 0){
        window.alert("Enter a non-negative number!");
    }
    else if (Number(inputMin.value) > gameMax){
        settingMsg.textContent = "The minimum value can't be bigger than the maximum!";
        setTimeout(resetText,2000);
    }
    else if (gameMax-Number(inputMin.value) <= 5){
        settingMsg.textContent = "Wow, really going for the low risk game, huh? Boring!";
        setTimeout(resetText,2000);
    }
    else{
        gameMin = Number(inputMin.value);    
        min.textContent = gameMin;
        ranNum = Math.floor(Math.random() * (gameMax - gameMin+1) ) + gameMin;
        lives = 5;
        numLives.textContent = lives;
        settingMsg.textContent = "Game has been reset";
        setTimeout(resetText,1000);
        title.textContent = "Bombastic Brain-numbing Number Game";
        hintBtn.style.display = "none";     
        hintContainer.style.display = "none";  
    }
}

function changeMax(){
    if (inputMax < 0){
        window.alert("Enter a non-negative number!")
    }
    else if (Number(inputMax.value) < gameMin){
        settingMsg.textContent = "The maximum value can't be smaller than the minimum!"
        setTimeout(resetText,2000)
    }
    else if (Number(inputMax.value)-gameMin <= 5){
        settingMsg.textContent = "Wow, really going for the low risk game, huh? Boring!";
        setTimeout(resetText,2000);
    }
    else{
        gameMax = Number(inputMax.value);
        max.textContent = gameMax;
        ranNum = Math.floor(Math.random() * (gameMax - gameMin+1) ) + gameMin;
        lives = 5;
        numLives.textContent = lives;
        settingMsg.textContent = "Game has been reset";
        setTimeout(resetText,2000);
        title.textContent = "Bombastic Brain-numbing Number Game"
        hintBtn.style.display = "none";   
        hintContainer.style.display = "none";  
    }
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

        if (guess>ranNum && lives >=0){
            window.alert("Guess lower!")
            max.textContent = guess;
            numLives.textContent = lives;

        }
        else if (guess<ranNum && lives >=0){
            window.alert("Guess higher!")
            min.textContent = guess;
            numLives.textContent = lives;
        }

        if (lives == 0){
            title.textContent = "aw...you lost :(";
        }


    }

    //HINT SYSTEM

    

    if (lives<2 && (0 <= ranNum && ranNum<= 25)){
        hintBtn.style.display = "block";        
    }
}

let numHints = ["This number likes to confuse calculators",
    "The hair on your head grows around this much cm per month",
    "If the number was x, x+x = x*x = x^x", 
    "The strongest 2D shape has this many sides",
    "This number does not appear in the Fibonacci series",
    "There are this many rings in the Olympics logo",
    "This number is both the sum and product of three consecutive positive numbers",
    "This was the most times one person was struck by lightening",
    "This is the atomic number of Oxygen",
    "There are this many circles of hell in Dante's 'Inferno'",
    "When you write this number twice, it becomes that number, in binary",
    "A polygon with this much sides is called a hendacagon",
    "This many people have walked on the moon",
    "This is also called 'a baker's dozen'",
    "There are this many days in a fortnight",
    "This is how old I am :)",
    "There were this many different King Louises in the history of the French monarchy",
    "A suduko puzzle must have at least this many clues to be solved",
    "There are this many holes in a golf course",
    "The longest non-stop flight in the world takes this many hours",
    "A Rubik's Cube can always be solved in at most this many moves",
    "A shape with this many sides is called a icosikaihenagon",
    "The highest number of slices of pizza you can get if you sliced 6 times randomly",
    "Julius Caeser was supposedly stabbed this many times","Screw this it's late and I'm sleepy, what's 23+1?",
    "It's a perfect square"]

hintBtn.onclick = function(){
    hintP.textContent = numHints[ranNum];
    hintContainer.style.display = "flex";
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

