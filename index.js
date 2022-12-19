const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
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
        choices: ['Apache', 'MIT', 'Creative Commons', 'Eclipse Public License'],
    },
]).then((response) =>
    fs.appendFile('README.md', `${JSON.stringify(response)}\n`, (err) =>
        err ? console.log('Error') : console.log('Data saved! Generating README!')));
