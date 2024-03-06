describe("Triangle tests", () => {
    it('Should return "object" ', () => {
      const shape = new Triangle();
  
      expect(typeof shape).toEqual("object");
    });
  
    it("should return the text", () => {
      const shape = new Triangle("YUP");
      expect(shape.text).toEqual("YUP");
    });
  
    it("should return the svg", () => {
      const shape = new Triangle("YUP", "red", "blue");
      expect(shape.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,18 244,150 56, 150" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red" >Heart</text></svg>`
      );
    });
  });
  
  describe("Circle tests", () => {
    it('Should return "object" ', () => {
      const shape = new Circle();
  
      expect(typeof shape).toEqual("object");
    });
  
    it("should return the text", () => {
      const shape = new Circle("YUP");
      expect(shape.text).toEqual("YUP");
    });
  
    it("should return the svg", () => {
      const shape = new Circle("YUP", "red", "blue");
      expect(shape.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red" >Heart</text></svg>`
      );
    });
  });
  
  describe("Square tests", () => {
    it('Should return "object" ', () => {
      const shape = new Square();
  
      expect(typeof shape).toEqual("object");
    });
  
    it("should return the text", () => {
      const shape = new Square("YUP");
      expect(shape.text).toEqual("YUP");
    });
  
    it("should return the svg", () => {
      const shape = new Square("YUP", "red", "blue");
      expect(shape.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="25" width="150" height="150" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red" >Heart</text></svg>`
      );
    });
  });
  