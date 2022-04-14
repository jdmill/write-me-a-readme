// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// TODO: Create an array of questions for user input
const questions = {
  title: "What is this README's title?",
  desc: "What is this projects description?",
  install: "What are the installation instructions?",
  usage: "What are the usage instructions?",
  license: "What License was used?",
  contribution: "What are the contribution guidelines?",
  tests: "What tests were used for this project?",
  userName: "What is your github user name?",
  email: "What is your email address?",
};

inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: questions.title,
  },
  {
    type: "input",
    name: "desc",
    message: questions.desc,
  },
  {
    type: "input",
    name: "install",
    message: questions.install,
  },
  {
    type: "input",
    name: "usage",
    message: questions.usage,
  },
  {
    type: "list",
    name: "licenseType",
    message: "Which license would you like to use?",
    choices: ["MIT", "Apache 2.0", "GNU General Public License v3.0", "None"],
  },
  {
    type: "input",
    name: "contribution",
    message: questions.contribution,
  },
  {
    type: "input",
    name: "tests",
    message: questions.tests,
  },
  {
    type: "input",
    name: "userName",
    message: questions.userName,
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
])
  .then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeToFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!!!!')
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
