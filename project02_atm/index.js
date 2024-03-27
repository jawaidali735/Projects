#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pinCode",
        type: "number",
        message: "Enter your four degit pin code!!!"
    }
]);
if (pinAnswer.pinCode === myPin) {
    console.log("Correct pin Code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Enter your choice",
            choices: ["Fast Cash", "Withdraw", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Fast Cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "Choice one of you amount",
                choices: ["1000", "5000", "10000", "15000", "20000"]
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
            console.log(`Your current balance is ${myBalance}`);
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Withdraw") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "amount1",
                type: "number",
                message: "Enter your amount"
            }
        ]);
        if (withdrawAns.amount1 > myBalance) {
            console.log(`Insuficient Balance`);
            console.log(`Your current balance is ${myBalance}`);
        }
        else {
            myBalance -= withdrawAns.amount1;
            console.log(`Your current balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin code");
}
