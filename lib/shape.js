// Define the Shape class
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

// Define the Triangle class, extending from Shape
class Triangle extends Shape {
  render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,18 244,150 56, 150" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}" >${this.text}</text></svg>`;
  }
}

// Define the Circle class, extending from Shape
class Circle extends Shape {
  render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}" >${this.text}</text></svg>`;
  }
}

// Define the Square class, extending from Shape
class Square extends Shape {
  render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}" >${this.text}</text></svg>`;
  }
}

// Export the classes
module.exports = { Triangle, Circle, Square };
