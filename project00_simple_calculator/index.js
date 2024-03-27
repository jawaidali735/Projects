#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let message = await inquirer.prompt([{
        name: "FirstNumber",
        type: "number",
        message: "Please inter you first number"
    },
    { name: "SecondNumber",
        type: "number",
        message: "Please inter your second number"
    },
    { name: 'operator',
        type: "list",
        choices: ['addition', 'subtraction', 'maltiplication', 'division', `percentage`],
        message: "Please chose what do you want to perform"
    }
]);
if (message.operator === "addition") {
    console.log(chalk.yellow(`Your Result is =`, message.FirstNumber + message.SecondNumber));
}
else if (message.operator === "subtraction") {
    console.log(chalk.yellow(`Your Result is =`, message.FirstNumber - message.SecondNumber));
}
else if (message.operator === "maltiplication") {
    console.log(chalk.yellow(`Your Result is =`, message.FirstNumber * message.SecondNumber));
}
else if (message.operator === "division") {
    console.log(chalk.yellow(`Your Result is =`, message.FirstNumber / message.SecondNumber));
}
else if (message.operator === "percentage") {
    let totalResult = (message.SecondNumber / 100 * message.FirstNumber);
    console.log(message.SecondNumber + "% of " + message.FirstNumber + " is " + chalk.yellow(totalResult));
}
else {
    console.log(chalk.green.bgWhiteBright("Invalid result, Please choice one of the oprators option "));
}
