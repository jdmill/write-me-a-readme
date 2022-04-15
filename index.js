// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile)
const genFile = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = {
  title: "What is this README's title?",
  desc: "What is this projects description?",
  installBoo: "Would you like to add an install instruction?",
  installNum: "How many instructions would you like to include",
  install: "What are the installation instructions?",
  usage: "What are the usage instructions?",
  licenseBoo: "Include a license?",
  license: "What license should be included?",
  contribution: "What are the contribution guidelines?",
  tests: "What tests were used for this project?",
  userName: "What is your github user name?",
  email: "What is your email address?",
};

const promptUser = () => {
  return inquirer.prompt([
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
      name: "license",
      message: questions.license,
      choices: ["MIT", "Apache 2.0", "GNU GPL v3", "IBM", "None"],
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
      message: questions.email,
    },
  ]);
};

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README.md', genFile(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};
// Function call to initialize app
init();
