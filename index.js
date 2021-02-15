// TODO: Include packages needed for this application
//Done

// TODO: Create an array of questions for user input
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "Title",
    },
    {
      type: "input",
      message: "Write a brief, yet descriptive summary of your project.",
      name: "Description",
    },
    {
      type: "input",
      message: "Installation Instructions.",
      name: "Installation",
    },
    {
      type: "input",
      message: "What is your project used for?",
      name: "Usage",
    },
    {
      type: "input",
      message: "Are you able to contribute?",
      name: "Contribution",
    },
    {
      type: "input",
      message: "Run test here",
      name: "Tests",
    },
    {
      type: "list",
      message:"What type of license? Use the arrow keys to move. Use enter to submit.",
      choices: ["MIT", "Apache 2.0", "GNU GPL", "Mozilla Public License"],
      name: "License",
    },
    
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "GitHub",
    },
    {
      type: "input",
      message: "What is your LinkedIn username?",
      name: "LinkedIn",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "Email",
    },
  ])
  .then((answers) => {
   

  

    // TODO: Create a function to write README file

    fs.writeFile("README.md", generateMarkdown(answers), (err) => {
      if (err) {
        return console.log(err);
      }

      console.log("Success! Your README.md file has been generated");
    });
  });
