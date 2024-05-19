#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright("                                                                       Welcome to Programing quiz!\n"));
console.log(chalk.cyanBright("                                                                       Are you ready for the quiz.\n"));
const quiz = await inquirer.prompt([
    {
        type: "list",
        name: "question1",
        message: "What does HTML stand for?",
        choices: [
            "Hyper Trainer Marking Language",
            "Hyper Text Marketing Language",
            "Hyper Text Markup Language",
            "Hyper Text Markup Leveler",
        ],
    },
    {
        type: "list",
        name: "question2",
        message: 'What is a correct syntax to output "Hello World" in Python?',
        choices: [
            'print("Hello World")',
            'cat("Hello World")',
            'console.log("Hello World")',
            'disp("Hello World")',
        ],
    },
    {
        type: "list",
        name: "question3",
        message: 'What are the three main "simple types" in TypeScript?',
        choices: [
            "Boolean, Number, String",
            "Object, Array, Symbol",
            "Array, Object, Boolean",
            "Object, String, Number",
        ],
    },
    {
        type: "list",
        name: "question4",
        message: "What is the correct file extension for Python files?",
        choices: [".pyt", ".pt", ".py", ".pyth"],
    },
    {
        type: "list",
        name: "question5",
        message: "What does CSS stand for?",
        choices: [
            "Creative style sheets",
            "colorful style sheets",
            "cascading style sheets",
            "computer style sheets",
        ],
    },
]);
let score = 0;
if (quiz.question1 === "Hyper Text Markup Language") {
    console.log(chalk.greenBright("Correct!"));
    ++score;
}
else {
    console.log(chalk.redBright("Incorrect!"));
}
if (quiz.question2 === 'print("Hello World")') {
    console.log(chalk.greenBright("Correct!"));
    ++score;
}
else {
    console.log(chalk.redBright("Incorrect!"));
}
if (quiz.question3 === "Boolean, Number, String") {
    console.log(chalk.greenBright("Correct!"));
    ++score;
}
else {
    console.log(chalk.redBright("Incorrect!"));
}
if (quiz.question4 === ".py") {
    console.log(chalk.greenBright("Correct!"));
    ++score;
}
else {
    console.log(chalk.redBright("Incorrect!"));
}
if (quiz.question5 === "cascading style sheets") {
    console.log(chalk.greenBright("Correct!"));
    ++score;
}
else {
    console.log(chalk.redBright("Incorrect!"));
}
console.log(`Your score is: ${chalk.cyanBright(score)}`);
