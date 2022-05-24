let guess = '';
let solvedWord = ['','','','',''];
let guessCount = 0;
const totalGuesses = 8
let i = 0;
import { WORDS } from "./words.js"
let correctWord = WORDS[Math.floor(Math.random()*WORDS.length)];

document.getElementById("submit").onclick = function() {playTheGame ()};

let guessBar = document.createElement("INPUT");
guessBar.setAttribute("type", "text");

   //a word is guessed and then this function runs

//if the first character in the guess matches any letter besides the first, make the letter yellow 
//if the first character in each word match, make the letter green
//Display the letter in the first box
//if the 2nd character in the guess matches any letter besides the 2nd, make the letter yellow    
//if the 2nd characters in each word match, make the letter green
//display the letter in the 2nd box
//if the 3rd character in the guess matches any letter besides the 3rd, make the letter yellow    
//if the 3rd characters in each word match, make the letter green
//display the letter in the 3rd box
//if the 4th character in the guess matches any letter besides the 4th, make the letter yellow    
//if the 4th characters in each word match, make the letter green
//display the letter in the 4th box
//if the 5th character in the guess matches any letter besides the 5th, make the letter yellow    
//if the 5th characters in each word match, make the letter green
//display the letter in the 5th box
function gameLogic(){
    for( i=0; i<5; i++) {       //this for loop will run for each letter in the 5 letter word.

        if (guess.length !== 5){
            return;
        }
        if (WORDS.includes(guess) == false){
            return;
        }

        let rowGuess = document.getElementsByClassName("row")[guessCount]
        let letter = guess[i];
        let letterBox = rowGuess.children[i]
        letterBox.textContent = guess[i]
        if (guess[i%5] == correctWord[(i+1)%5] || guess[i%5] == correctWord[(i+2)%5] || guess[i%5] == correctWord[(i+3)%5] || guess[i%5] == correctWord[(i+4)%5] || guess[i%5] == correctWord[(i+5)%5] && guess[i%5] !== correctWord[i%5]){
            letterBox.style.backgroundColor = 'red';
            for (const elem of document.getElementsByClassName("keyboard-button")) {
                if (elem.textContent === guess[i]) {
                    elem.style.backgroundColor = 'red'}
                }
            }else{
                for (const elem of document.getElementsByClassName("keyboard-button")) {
                    if (elem.textContent === guess[i]) {
                        elem.style.backgroundColor = 'gray'}
                    }     
            }
        if (guess[i%5] == correctWord[i%5]){
            letterBox.style.backgroundColor = 'green';
            for (const elem of document.getElementsByClassName("keyboard-button")) {
                if (elem.textContent === guess[i]) {
                    elem.style.backgroundColor = 'green'}
                }
        }  
        }
    }

function playerGuess(){
    guess = document.getElementById("playGuess").value;
    guess = guess.toLowerCase();
}

function fiveLetterCheck(){
    if (guess.length !== 5){
        alert('Please make sure your guess is 5 letters long');
    }
}
function isItAWordCheck(){
    if (WORDS.includes(guess) == false){
        alert('Please make sure your guess is a real word');
    }
}

function guessCounter(){
    if (guess.length !== 5){
        return;
    }
    if (WORDS.includes(guess) == false){
        return;
    }
    guessCount++;
}

function playTheGame(){
        playerGuess();
        fiveLetterCheck();
        isItAWordCheck();
        gameLogic();
        guessCounter();
        if (guess == correctWord){
            alert('YOU WIN! The word was ' + correctWord + '.')
        }
        if (guessCount > 7 && guess !== correctWord){
            alert('YOU LOSE! The correct word was ' + correctWord + '.')
        }
}









