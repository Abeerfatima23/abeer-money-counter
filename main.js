import inquirer from "inquirer";
import chalk from "chalk";
//colourful
console.log(chalk.bold.underline.black("  Welcome To Abeer Word Counter"));
console.log("=".repeat(30));
//prompt
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Wrie A Sentence:"
    }
]);
//trimming and splitting
let words = answer.sentence.trim().split(" ");
//input
console.log("=".repeat(30));
console.log(chalk.bold.underline("-Sentence Words:"));
console.log(words);
console.log(chalk.bold.underline(`Word Count: ${chalk.bold.black(words.length)}`));
console.log("=".repeat(30));
