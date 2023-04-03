const inquirer = require ('inquirer');
const SVG = require ("./svg");
const { Circle, Triangle, Square } = require ("./shapes");
const { writeFile } = require("fs/promises");

//user input questions
class CLI {
    run () {
       inquirer.prompt([
            {
                name: "text",
                type: "input",
                message: "Enter text for your logo. Cannot be more than 3 characters.",
                validate: (text) =>
                    text.length <= 3 || "The text must be less than or equal to 3 characters.",
            },
            {
                name: "textColor",
                type: "input",
                message: "Enter color for your text.",
            },
            {
                name: "shapeType",
                type: "list",
                message: "Choose a shape type for your logo.",
                choices: ["circle", "triangle", "square"],
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Enter a color for your logo shape.",
            },
        ])
        .then(({ text, textColor, shapeType, shapeColor }) => {
            let shape;
            switch (shapeType) {
                case "circle":
                    shape = new Circle();
                    break;
                
                case "triangle":
                    shape = new Triangle();
                    break;
                
                case "square":
                    shape = new Square();
                    break;
            }
            shape.setColor(shapeColor);

            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(shape);
            return writeFile("logo.svg", svg.render());
        })
        .then(()=> {
            console.log("Generated logo.svg");
        })
        .catch((error) => {
            console.log(error);
            console.log("Hmm, something effed up.");
        });
    }
}
module.exports = CLI;