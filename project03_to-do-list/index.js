#! /usr/bin/env/node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let answers = await inquirer.prompt([
        {
            name: "todo",
            type: "list",
            message: "What do you want to add to your todos?",
            choices: ["Pray", "Eat", "Sleep", "Work", "Exercise", "Study", "Read", "Write", "Listen"]
        },
        {
            name: "addMore",
            type: "list",
            message: "Do you want to add more to your todos?",
            default: "No",
            choices: ["Yes", "No"]
        }
    ]);
    todos.push(answers.todo);
    if (answers.addMore === "No") {
        console.log("Thanks for using the todo list.");
        condition = false;
    }
}
console.log("Your todos:", todos);
