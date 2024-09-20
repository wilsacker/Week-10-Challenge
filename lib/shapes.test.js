// Import the shapes
import { Triangle, Circle, Square } from ('./shapes');

// Test for the Triangle class
describe('Triangle', () => {
    test('should render a blue triangle SVG', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

// Test for the Circle class
describe('Circle', () => {
    test('should render a red circle SVG', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
});

// Test for the Square class
describe('Square', () => {
    test('should render a green square SVG', () => {
        const shape = new Square();
        shape.setColor('green');
        expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
    });
});