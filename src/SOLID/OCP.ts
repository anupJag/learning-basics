// Usual Type of code that violates the Open/Closed Principle (OCP)

class Shape {
  type: string;

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
  type: string;

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


/**
 * In the above code, we have created a base class ShapeOCP which has a draw method that is not implemented. We have then created separate classes for each shape (Circle, Square, Rectangle) that extend the ShapeOCP class and implement the draw method. This way, if we want to add a new shape, we can simply create a new class that extends ShapeOCP and implements the draw method without modifying any existing code. Thus, adhering to the Open/Closed Principle (OCP).
 * The above code also adheres to the Single Responsibility Principle (SRP) because each class has a single responsibility of drawing a specific shape.
 * 
 */

/**
 * Some more real world examples of OCP violation:
 */

function calculatePrice(productType: string, price: number): number {
  switch (productType) {
    case "Electronics":
      return price * 0.9; // 10% discount
    case "Clothing":
      return price * 0.8; // 20% discount
    case "Food":
      return price * 0.95; // 5% discount
    default:
      throw new Error("Unknown product type");
  }
}

/**
 * The above code violates the OCP because if we want to add a new product type, we would need to modify the calculatePrice function, which would require us to modify existing code. Thus violating OCP.
 * The above code also violates Single Responsibility Principle (SRP) because the calculatePrice function is doing multiple things for different product types.
 */


console.log("Without OCP:");
console.log(calculatePrice("Electronics", 100)); // 90
console.log(calculatePrice("Clothing", 100)); // 80
console.log(calculatePrice("Food", 100)); // 95

/**
 * To adhere to OCP, we use the core JS concept of passing functions as an argument (First class functions) and create an executor function calculatePriceOCP that takes a function as an argument and executes it. This way, if we want to add a new product type, we can simply create a new function for that product type and pass it to the calculatePriceOCP function without modifying any existing code. Thus, adhering to the Open/Closed Principle (OCP).
 */

const PRICING_STRATEGIES: { [ key: string ]: (price: number) => number } = {
  "Electronics": (price: number) => price * 0.9, // 10% discount
  "Clothing": (price: number) => price * 0.8, // 20% discount
  "Food": (price: number) => price * 0.95, // 5% discount
};

function calculatePriceOCP(type: keyof typeof PRICING_STRATEGIES, price: number, stratergies: { [ key: string ]: (price: number) => number } = PRICING_STRATEGIES): number {
  const fn = stratergies[ type ];
  if (!fn) throw new Error("Unknown product type");
  return fn(price);
}

console.log("\nWith OCP:");
console.log(calculatePriceOCP("Electronics", 100)); // 90
console.log(calculatePriceOCP("Clothing", 100)); // 80
console.log(calculatePriceOCP("Food", 100)); // 95

/**
 * In the above code, we have created a PRICING_STRATEGIES object that contains the pricing strategies for each product type. We have then created a calculatePriceOCP function that takes a product type, price, and an optional stratergies object as arguments. The function retrieves the appropriate pricing strategy from the stratergies object and executes it. This way, if we want to add a new product type, we can simply add a new entry to the PRICING_STRATEGIES object without modifying any existing code. Thus, adhering to the Open/Closed Principle (OCP).
 * The above code also adheres to the Single Responsibility Principle (SRP) because each function has a single responsibility of calculating the price for a specific product type.
 */
