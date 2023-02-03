const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computer = computerTurn();
    result = checkWinner();
    document.getElementById("playerchoice").innerHTML = player;    
    document.getElementById("computerchoice").innerHTML = computer;    
    document.getElementById("result").innerHTML = result;    
}));

function computerTurn(){
    let rnum = Math.floor(Math.random() *50);
    if (rnum%3 == 0){
        return "ROCK";
    }
    else if (rnum%3 == 1){
        return "PAPER";
    }
    else{
        return "SCISSORS";
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "You Win!" : "You Lose!";
    }
    else if (computer == "PAPER"){
        return (player == "SCISSORS") ? "You Win!" : "You Lose!";
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "You Win!" : "You Lose!";
    }
}