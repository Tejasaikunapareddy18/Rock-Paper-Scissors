let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userPoints=document.querySelector("#user-score");
let compPoints=document.querySelector("#comp-score");

const compPlay=() => {
    let options=["rock", "paper", "scissors"];
    let ranidx=Math.floor(Math.random()*3);
    return(options[ranidx]);
}

const checkWinner=(userWin, userChoice, compChoice) => {
    if(userWin===true) {
        msg.innerText=`You won, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userPoints.innerText=userScore;
    }
    else {
        msg.innerText=`You lost, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compPoints.innerText=compScore;
    }
};

const playGame=(userChoice) => {
    let compChoice=compPlay();
    if(userChoice===compChoice) {
        msg.innerText="Game was draw, play again";
        msg.style.backgroundColor="rgb(73, 118, 102)";
    }
    else {
        let userWin=true;
        if(userChoice==="rock") {
            userWin = compChoice==="paper"? false: true;
        }
        else if(userChoice==="paper") {
            userWin = compChoice==="scissors"? false: true;
        }
        else {
            userWin = compChoice==="rock"? false: true;
        }
        checkWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});