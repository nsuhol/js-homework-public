//Task1
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  contact: {
    email: "john.doe@example.com",
    phone: "123-456-7890",
  },
  address: {
    city: "New York",
    country: "USA",
  },
};

function getUserInfo(obj) {
  const {
    firstName,
    lastName,
    contact: { email, phone },
    address: { city },
  } = obj;
  return { firstName, lastName, email, phone, city };
}

console.log(getUserInfo(user));

//Task2
function countCars(cars) {
  const carMap = new Map();

  for (const car of cars) {
    if (carMap.has(car)) {
      carMap.set(car, carMap.get(car) + 1);
    } else {
      carMap.set(car, 1);
    }
  }

  return carMap;
}

const cars = [
  "BMW",
  "Opel",
  "Audi",
  "VW",
  "Toyota",
  "BMW",
  "VW",
  "Nissan",
  "BMW",
];
console.log(countCars(cars));

//Task3
function checkLogin(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "qwerty123456") {
        resolve(`Welcome, ${username}!`);
      } else {
        reject("Invalid username or password!");
      }
    }, 2000);
  });
}

checkLogin("admin", "qwerty123456")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

//Task4
async function loadUserProfile(userId) {
  try {
    const profile = await fetchUserProfile(userId);
    const posts = await fetchUserPosts(userId);

    return { profile, posts };
  } catch (error) {
    return "Error loading user data";
  }
}

async function fetchUserProfile(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId, name: "John Doe", age: 30 });
    }, 1000);
  });
}

async function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { postId: 1, content: "Hello, world!" },
        { postId: 2, content: "Loving this app!" },
      ]);
    }, 2000);
  });
}
loadUserProfile(1)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
