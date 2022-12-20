const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [{
    type: 'input',
    message: 'Title: What is your project\'s title?',
    name: 'title',
},
{
    type: 'input',
    message: 'Description: Write a brief description about your project:',
    name: 'description',
},
{
    type: 'input',
    message: 'Installation: How do you run your project?',
    name: 'installation',
},
{
    type: 'list',
    message: 'License: Which license are you using?',
    name: 'license',
    choices: ['Apache 2.0', 'MIT', 'Creative Commons', 'Eclipse Public License', 'GNU GPL v3', 'None'],
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
},
{
    type: 'input',
    message: 'Please enter for GitHub username:',
    name: 'username',
},
{
    type: 'input',
    message: 'Please enter your email address:',
    name: 'email'
}]

// TODO: Create a function to write README file
function writeToFile(responses) {
    let getLicenseBadge = generateMarkdown.renderLicenseBadge(responses.license);
    let getLicenseLink = generateMarkdown.renderLicenseLink(responses.license);
    let getLicenseContent = generateMarkdown.renderLicenseSection(responses.license);
    let getUsername = generateMarkdown.renderSupportSection(responses.username, responses.email);

    let data = {
        ...responses,
        getLicenseBadge,
        getLicenseLink,
        getLicenseContent,
        getUsername
    };
    
    fs.writeFileSync('generated-README.md', generateMarkdown.generateMarkdown(data));
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