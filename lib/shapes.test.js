const { Circle, Triangle, Square } = require ("./shapes")
//circle test
describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        const color=('blue');
        shape.setColor(color);
        expect(shape.render()).toMatch(`<circle cx="150" cy=""100" r="80" fill="${this.color}"/>`);
    });
});
//tri test
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        const color =('red');
        shape.setColor(color);
        expect(shape.render()).toMatch(`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`);
    });
}); 
//square test
describe('Square', () => {
    test('renders correctly', () => {
    const shape = new Square();
    const color =('green');
    shape.setColor(color);
    expect(shape.render()).toMatch(`<rect x="90" y="90" width="120" height="120" fill="${this.color}"/>`);
    });
}); 

