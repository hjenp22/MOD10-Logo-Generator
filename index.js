const inquirer = require('inquirer');
const fs = require('fs');

class LogoGeerator {
    async generateLogo() {
        const text = await this.textPrompter.promtText();
        const textColor = await this.colorPicker.pickColor();
        const shape = await this.shape.picker.picksShape();
        const shapeColor = await this.colorPicker.pickColor();

        const svgCode = this.svgRenderer.renderSVG(text, textColor, shape, shapeColor);
        this.fileSaver.saveToFile(svgCode, 'logo.svg');

        console.log('Generated logo.svg');
    }
}

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
        const amswers = await inquirer.prompt([
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['circle', 'triangle', 'square'],
            },
        ]);
        return answers.shape,
    }
}
