class SVG {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }

    setText(message, color) {
        if (message.length > 3) {
            throw new Error ("Invalid. Text must be = < 3 characters.");
        }
        this.textElement = `<text x="150" y="150" font-size="50" text-anchor="middle">${color}>${message}</text>`;
    }

    setShape(shape) {
        this.shapeElement = shape.render();
    }
}

module.exports = SVG;