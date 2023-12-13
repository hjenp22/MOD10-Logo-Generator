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
                type:'input',
                name: 'shapeColor',
                message: 'Enter shape color (keyword or hexadecimal)',
            }
        ]);
        this.generateSVG(answers.shape, answers.text, answers.textcolor, answers.shapecolor);
     }


    generateSVG(text, textColor, shape, shapeColor){
        let newShape;
        switch (shape) {
            case "Triangle":
                newShape= new Triangle(text, textColor, shape, shapeColor);
                break;
            case "Circle":
                newShape= new Circle(text, textColor, shape, shapeColor);
                break;
            case "Square":;
                newShape= new Square(text, textColor, shape, shapeColor);
                break;
            default:
                console.log('not a valid shape');
                return;
        }
    };
}
    
    fs.writeFile('logo.svg', newShape.render(), (err)=> {
        if (err) {
            console.error('Error creating logo.svg:', err);
        } else {
            console.log('generated logo.svg');
        }
    })


const LogoGenerator = new LogoGenerator();
LogoGenerator.generateLogo();