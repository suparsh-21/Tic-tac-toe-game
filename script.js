console.log("Welcome to Tic tac toe");

let music = new Audio("pikachu.mp3");
let turnSound = new Audio("pikachu.mp3");
let gameover = new Audio("pikachu.mp3");

let turn = "X";
let isgameOver = false;

// Function to change turn
const changeTurn = () => {
return turn === "X" ? "0" : "X";
};

// Function to check win
const checkWin = () => {
let boxtext = document.getElementsByClassName("boxtext");
let wins = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];
wins.forEach(e => {
if (
boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
boxtext[e[0]].innerText !== ""
) {
document.getElementsByClassName("info")[0].innerText =
boxtext[e[0]].innerText + " Won!";
isgameOver = true;
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="270px"
gameover.play();
}
});
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
let boxtext = element.querySelector(".boxtext");
element.addEventListener("click", () => {
if (boxtext.innerText === "" && !isgameOver) {
boxtext.innerText = turn;
turnSound.play();
checkWin();
if (!isgameOver) {
turn = changeTurn();
document.getElementsByClassName("info")[0].innerText =
"Turn for " + turn;
}
}
});
});

//reset button

let reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });

    // Reset turn and game state
    turn = "X";
    isgameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

    // Hide winning image again
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0";
});
