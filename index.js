// Global Variables
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: (input) => input.length <= 3 || 'Text must be 3 characters or fewer'
    }
])