const inquirer = import('inquirer');
const { Circle, Triangle, Square } = require ("./shapes.js");
const SVG = require ("./svg.js");
const { writeFile } = require("fs/promises");


//user input questions
class CLI {
    run () {
         return inquirer.prompt([
            {
                name: "text",
                type: "input",
                message: "Enter text for your logo. Cannot be more than 3 characters.",
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
            let logoShape;
            switch (shapeType) {
                case "circle":
                    logoShape = new Circle();
                    break;
                
                case "square":
                    logoShape = new Square();
                    break;
                
                //default to match criteria
                default:
                    logoShape = new Triangle();
                    break;       
            }
            logoShape.setColor(shapeColor);

            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(logoShape);
            return writeToFile("logo.svg", svg.render());
        })
        .then(()=> {console.log("Generate logo.svg");})
        .catch((error) => {
            console.log(error);
            console.log("Something went wrong. Try again.");
        });
    }
}
module.exports = CLI;