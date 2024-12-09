// Task 1
function display(input: string): void;
function display(input1: string, input2: string): void;
function display(inputArray: string[]): void;

function display(param1: string | string[], param2?: string): void {
  if (typeof param1 === "string" && param2 === undefined) {
    console.log(param1);
  } else if (typeof param1 === "string" && typeof param2 === "string") {
    console.log(param1);
    console.log(param2);
  } else if (Array.isArray(param1)) {
    param1.forEach((str) => console.log(str));
  } else {
    throw new Error("Invalid input type");
  }
}

display("Hello, World!");
display("Hello", "World!");
display(["Hello", "World", "!"]);

// Task2
function identity<T extends { rating: number }>(items: T[]): number {
  if (items.length === 0) {
    throw new Error("Array cannot be empty");
  }

  const totalRating = items.reduce((sum, item) => sum + item.rating, 0);
  return totalRating / items.length;
}

console.log(identity([{ name: "Anna", rating: 3 }]));
console.log(
  identity([
    { title: "Encounter", rating: 3 },
    { title: "Dead to Me", rating: 4 },
    { title: "Riverdale", rating: 5 },
  ])
);

// Task3
function withEmploymentDate<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    employmentDate: string = new Date("2024-04-12").toISOString();
  };
}

@withEmploymentDate
class Manager {
  task: string = "Simple task";
  project: string = "Simple project";

  constructor() {
    console.log("Initializing the Manager class");
  }
}

const manager = new Manager();
console.log(manager);
