// Usual Type of code that violates the Open/Closed Principle (OCP)

class Shape {
    public type: string;

    constructor(type: string) {
        this.type = type;
    }

    public configure(): void { }

    public details(): void { }

    public draw(): void {
        switch (this.type) {
            case "Circle":
                console.log("Drawing a Circle");
                break;
            case "Square":
                console.log("Drawing a Square");
                break;
            case "Rectangle":
                console.log("Drawing a Rectangle");
                break;
            default:
                console.log("Unknown shape type");
        }
    }
}

/**
 * The above code violates the OCP because if we want to add a new functionality to the Shape class, we would need to modify the draw method of the Shape class, which would require us to modify existing code. Thus violating OCP.
 * 
 * The above code also violates Single Responsibility Principle (SRP) because the draw method is doing multiple things for different shapes.
 */

class ShapeOCP {
    public type: string;

    constructor(type: string) {
        this.type = type;
    }

    public configure(): void { }

    public details(): void { }

    public draw(): void {
        throw new Error("Method not implemented.");
    }
}

class Circle extends ShapeOCP {
    constructor() {
        super("Circle");
    }

    public draw(): void {
        console.log("Drawing a Circle");
    }
}

class Square extends ShapeOCP {
    constructor() {
        super("Square");
    }

    public draw(): void {
        console.log("Drawing a Square");
    }
}

class Rectangle extends ShapeOCP {
    constructor() {
        super("Rectangle");
    }

    public draw(): void {
        console.log("Drawing a Rectangle");
    }
}

console.log("Without OCP:");
const circle = new Shape("Circle");
circle.draw();

const square = new Shape("Square");
square.draw();

console.log("\nWith OCP:");

const circleOCP = new Circle();
circleOCP.draw();

const squareOCP = new Square();
squareOCP.draw();

const rectangleOCP = new Rectangle();
rectangleOCP.draw();


