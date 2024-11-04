////////////////////Homework2
//Task 1
function processData(num1 = 0, num2 = 0, action = "sum") {
  if (action === "sum") {
    return num1 + num2;
  } else if (action === "product") {
    return num1 * num2;
  } else action === "square";
  return Math.pow(num1, num2);
}
console.log(processData(10, 4, "product"));

//Task 2
function findElem(arr, el) {
  return arr.includes(el);
}
const arr = [1, 2, 3, 4, "Alex", 10, "Nick"];
console.log(findElem(arr, 7));
console.log(findElem(arr, "Alex"));

//Task 3
function deleteItem(arr, item) {
  const index = arr.indexOf(item);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
}
console.log(deleteItem([3, 12, 16, 19, 21, 33], 16));

//Task 4
function getCircleLength(r) {
  if (typeof r !== "number" || r <= 0) {
    throw new Error("Incorrect radius - please, enter numeric value!");
  }
  return 2 * Math.PI * r;
}
try {
  console.log(getCircleLength("five"));
  console.log(getCircleLength(5));
} catch (error) {
  console.error(error.message);
}

//Task 5
function checkID() {
  try {
    const userID = prompt("Please enter your ID:");
    if (userID === "") {
      throw new Error("The field is empty! Please enter your ID.");
    }
    if (isNaN(userID)) {
      throw new Error("Invalid input! Please enter a numeric ID.");
    }
    if (userID < 1 || userID > 1000) {
      throw new Error(
        "ID is out of range! Please enter a number between 1 and 1000."
      );
    }
    alert("ID is valid!");
  } catch (error) {
    alert(`Error: ${error.name} - ${error.message}`);
    console.error(`Error: ${error.name} - ${error.message}`);
  }
}
checkID();
