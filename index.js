const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/Shape');

class LogoGenerator {
  async generateLogo() {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter text (up to three characters):',
        validate: (input) => input.length <= 3,
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hexadecimal)',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hexadecimal)',
      },
    ]);

    this.generateSVG(answers.shape, answers.text, answers.textColor, answers.shapeColor);
  }

  generateSVG(shape, text, textColor, shapeColor) {
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

    fs.writeFile('logo.svg', newShape.render(), (err) => {
      if (err) {
        console.error('Error creating logo.svg:', err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  }
}

inquirer.prompt(questions).then((response)=> {
    generateSVG(
        response.shape,
        response.text,
        response.textColor,
        response.shapeColor
    );
});