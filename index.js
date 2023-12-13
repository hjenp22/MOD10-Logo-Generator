const inquirer = require('inquirer');
const fs = require('fs');

// class LogoGeerator {
//     async generateLogo() {
//         const text = await this.textPrompter.promtText();
//         const textColor = await this.colorPicker.pickColor();
//         const shape = await this.shape.picker.picksShape();
//         const shapeColor = await this.colorPicker.pickColor();

//         const svgCode = this.svgRenderer.renderSVG(text, textColor, shape, shapeColor);
//         this.fileSaver.saveToFile(svgCode, 'logo.svg');

//         console.log('Generated logo.svg');
//     }
// }

class ColorPicker {
    async pickColor() {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter color (keyword or hex):',
            },
        ]);
        return answers.color;
    }
}

class ShapePicker {
    async pickShape() {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['circle', 'triangle', 'square'],
            },
        ]);
        return answers.shape;
    }
}
class TextPrompter {
    async promtText() {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter text (up to three characters):',
                validate: (input) => input => input.length <= 3,
            },
        ]);
        return answers.text;
    }
}

function SVGRenderer {
    renderSVG(text, textColor, shape, shapeColor){
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
            Default:
                console.log('not a valid shape');
    
        }
    }
}
class FileSaver{
    saveToFile(svgCode, fileName){
        fs.writeFileSync(fileName, svgCode);
    }
}

const LogoGenerator = new LogoGenerator();
LogoGenerator.generateLogo();