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
    // Create the shape based on the user's choice
    let shape;
    switch (answers.shape) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Square':
            shape = new Square();
            break;
    }

    // Set the shape's color
    shape.setColor(answers.shapeColor);

    // Generate the full SVG content
    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>
    `;

    // Write the SVG content to a file
    fs.writeFile('logo.svg', svgContent, (err) => {
        if (err) {
            console.error('Error writing the file:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
});