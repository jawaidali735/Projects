#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to the Game");
let answer = await inquirer.prompt([{
        name: "guess",
        type: "number",
        message: "Guess the number"
    }]);
if (answer.guess === randomNumber) {
    console.log("Congratualations! You gueesed right number.");
}
else {
    console.log("Wrong, you guessed wrong number.");
}
