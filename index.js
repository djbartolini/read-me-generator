const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [{
    type: 'editor',
    message: 'Title: What is your project\'s title?',
    name: 'title',
},
{
    type: 'editor',
    message: 'Description: Write a brief description about your project:',
    name: 'description',
},
{
    type: 'editor',
    message: 'Installation: How do you run your project?',
    name: 'installation',
},
{
    type: 'list',
    message: 'License: Which license are you using?',
    name: 'license',
    choices: ['Apache', 'MIT', 'Creative Commons', 'Eclipse Public License'],
},
{
    type: 'input',
    message: 'Usage: What are the instructions for usage?',
    name: 'usage',
},
{
    type: 'input',
    message: 'Contributing: Who would you like to give credit to?',
    name: 'contributing',
}]

// TODO: Create a function to write README file
function writeToFile(responses) {
    let getLicenseBadge = generateMarkdown.renderLicenseBadge(responses.license);
    let getLicenseLink = generateMarkdown.renderLicenseLink(responses.license);
    
    fs.writeFileSync('generated-README.md', generateMarkdown.generateMarkdown(responses));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => {
            writeToFile(responses);
            console.log('Data saved! Generating README!');
        })
}

// Function call to initialize app
init();