// Task1
// solution 1
let inputValue = 82;
result = Math.floor(inputValue / 60) + ":" + (inputValue % 60);
console.log(result);

// // solution 2
let inputValue1 = 82;
let hours = Math.floor(inputValue1 / 60);
let minutes = inputValue1 % 60;
result = `${hours}:${minutes}`;
console.log(result);

// Task2
let userInput1 = parseFloat(prompt("Enter any number, please"));
let userInput2 = parseFloat(prompt("Enter any number once more, please"));
sum = userInput1 + userInput2;
difference = userInput1 - userInput2;
let positiveNumber = difference < 0 ? -difference : difference;
product = Math.imul(userInput1, userInput2);
quotient = userInput1 / userInput2;
console.log("Sum: " + sum);
console.log("Difference:" + positiveNumber);
console.log("Product: " + product);
console.log("Quotient: " + quotient);

alert(`${sum}, ${positiveNumber}, ${product}, ${quotient}`);

// Task 3

let x = 1;
let y = 2;
let res1 = String(x) + y;
console.log(res1);
console.log(typeof res1);

let res2 = String(Boolean(x)) + y;
console.log(res2);
console.log(typeof res2);

let res3 = x != y;
console.log(res3);
console.log(typeof res3);

let res4 = x / "Nat";
console.log(res4);
console.log(typeof res4);

// Task 4
// solution 1
let score = prompt("Enter your score");
switch (true) {
  case score >= 0 && score <= 49:
    console.log("Unsatisfied");
    break;
  case score >= 50 && score <= 70:
    console.log("Satisfied");
    break;
  case score >= 71 && score <= 87:
    console.log("Good");
    break;
  case score >= 88 && score <= 100:
    console.log("Excellent");
    break;
  default:
    console.log("Incorrect assessment");
}

// solution 2
let score1 = 89;
if (score1 >= 0 && score1 <= 49) {
  console.log("Unsatisfied!");
} else if (score1 >= 50 && score1 <= 70) {
  console.log("Satisfied!");
} else if (score1 >= 71 && score1 <= 87) {
  console.log("Good!");
} else if (score1 >= 88 && score1 <= 100) {
  console.log("Excellent!");
} else {
  console.log("Incorrect assessment!!");
}

//Task 5
for (let i = 1; i <= 50; i++) {
  if (i % 4 === 0) {
    console.log(i + " kratne 2 & 4!");
  } else if (i % 2 === 0) {
    console.log(i + " kratne 2!");
  } else {
    console.log(i);
  }
}
