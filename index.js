//todo: get packages

const inquirer = require('inquirer');
const fs = require('fs');

//application using imports from the lib
const { Triangle, Circle, Square } = require('./lib/Shape');

//questions
const questions = [
  {
    type: "input",
    text: "Logo Text: Up to 3 characters",
    name: "text",
    validate: function (value) {
      return value.length <= 3 ? true : "Please enter up to three characters!";
    },
  },
  {
    type: 'input',
    name: 'textColor',
    text: 'Enter text color (keyword or hexadecimal)',
  },
  {
    type: 'list',
    text: 'Choose a shape:',
    name: 'shape',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    text: 'Enter shape color (keyword or hexadecimal)',
    name: 'shapeColor',
  },
];

function generateSVG(shape, text, textColor, shapeColor) {
    let newShape;
    switch (shape) {
      case 'triangle':
        newShape = new Triangle(text, textColor, shapeColor);
        break;
      case 'circle':
        newShape = new Circle(text, textColor, shapeColor);
        break;
      case 'square':
        newShape = new Square(text, textColor, shapeColor);
        break;
      default:
        console.log('Not a valid shape');
        return;
    }

    //svg file
    fs.writeFile('logo.svg', newShape.render(), (err) => {
      if (err) {
        console.error('Error creating logo.svg:', err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  }


inquirer.prompt(questions).then((response)=> {
    generateSVG(
        response.shape,
        response.text,
        response.textColor,
        response.shapeColor
    );
});