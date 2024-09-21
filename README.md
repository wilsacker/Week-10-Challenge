# SVG Logo Generator

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

The SVG Logo Generator is a Node.js command-line application that generates a simple, customizable logo in SVG format based on user input. The application prompts users to select a shape (triangle, circle, or square), a color for the shape, and a color for the text, and allows the user to enter up to three characters for the logo text. Once the inputs are provided, the application generates a corresponding SVG file and saves it.

This tool is ideal for freelance web developers who need a simple logo for their projects without needing to hire a graphic designer.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)

* [License](#license)
  <!-- Include the license in the TOC -->
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

1. Clone the repository to your local machine.
```
git clone https://github.com/yourusername/svg-logo-generator.git
```

2.	Navigate into the project directory.
```
cd Week-10-Challenge
```

3.	Install the required dependencies using npm.
```
npm install
```

## Usage

1.	Run the application using the following command:
```
node index.js
```

2.	Follow the prompts to:
•	Enter up to three characters for the logo text.
•	Choose a text color (you can use a color keyword or a hexadecimal color code).
•	Choose a shape (circle, triangle, or square).
•	Choose a shape color (using a color keyword or a hexadecimal color code).

3.	After providing the inputs, the application will generate an SVG file named logo.svg. You can open this file in a browser or any image editor that supports SVG.

## License

This project is licensed under the MIT license.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests with improvements or new features.

## Tests
This project uses Jest for unit testing. To run the tests:
```
npm test
```

Tests include:

•	Verifying that the correct SVG string is generated for each shape (Triangle, Circle, and Square).
•	Ensuring that the colors are applied properly to the shapes and text.

## Questions
If you have any questions, feel free to reach out:
- GitHub: [wilsacker](https://github.com/wilsacker)
- Email: williamsuttona@gmail.com
  