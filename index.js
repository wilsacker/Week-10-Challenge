// Global Variables
import inquirer from 'inquirer';
import fs from 'fs';
import { Circle, Triangle, Square } from './lib/shapes.js';

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: (input) => input.length <= 3 || 'Text must be 3 characters or fewer'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text (color keyword or hex code):'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for the shape (color keyword or hex code):'
    }
]).then(answers => {
    console.log(answers);
});