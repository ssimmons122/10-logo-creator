// shape classes
class Shape {
    constructor() {
        this.color = ""; // logo color
    }
    setColor(color) {
        this.color = color;
    }
}
//rendering logo shapes
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy=""100" r="80" fill="${this.color}" />`;
    }
}
class Triangle extends Shape {
    render() {
        return `<triangle