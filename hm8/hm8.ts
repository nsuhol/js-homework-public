// Task1
interface Employee {
  name: string;
  profession: string;
  workingHoursPerDay: number;
}

interface PremiumData {
  isPremium: boolean;
  premium: number;
}

const employee: Employee = {
  name: "Alex Brown",
  profession: "doctor",
  workingHoursPerDay: 10,
};

const premiumData: PremiumData = {
  isPremium: true,
  premium: 1000,
};

const payPerHour: number = 32;
const workingDays: number = 14;
const experienceCoefficients: number[] = [1, 1.1, 1.2, 1.3, 1.5];

const getSalaryInfo = (
  employeeData: Employee,
  premiumData: PremiumData,
  payPerHour: number,
  workingDays: number,
  experienceCoefficient: number
): string => {
  let salary: number;

  if (premiumData.isPremium) {
    salary =
      employeeData.workingHoursPerDay *
        payPerHour *
        workingDays *
        experienceCoefficient +
      premiumData.premium;
  } else {
    salary =
      employeeData.workingHoursPerDay *
      payPerHour *
      workingDays *
      experienceCoefficient;
  }

  return `${employeeData.profession} ${employeeData.name} has a salary of ${salary}$ this month`;
};

const salaryInfo: string = getSalaryInfo(
  employee,
  premiumData,
  payPerHour,
  workingDays,
  experienceCoefficients[2]
);

console.log(salaryInfo);

//Task 2
function processData(
  param: string | number | boolean | number[]
): string | number | boolean | number[] {
  if (typeof param === "string") {
    return param.toUpperCase();
  } else if (typeof param === "number") {
    return param ** 2;
  } else if (typeof param === "boolean") {
    return !param;
  } else if (Array.isArray(param)) {
    if (param.length === 0) {
      return "Empty array: []";
    } else {
      return param.map((num) => num ** 2);
    }
  } else {
    throw new Error("Unsupported type");
  }
}

console.log(processData("text data"));
console.log(processData(3));
console.log(processData(false));
console.log(processData([1, 2, 3, 4]));
console.log(processData([]));

// Task 3

type Triangle = {
  type: "triangle";
  base: number;
  height: number;
};

type Rectangle = {
  type: "rectangle";
  width: number;
  height: number;
};

type Circle = {
  type: "circle";
  radius: number;
};

type Figure = Triangle | Rectangle | Circle;

function getFigureInfo(figure: Figure): string {
  switch (figure.type) {
    case "triangle": {
      const area = (figure.base * figure.height) / 2;
      return `Triangle with base ${figure.base} and height ${figure.height} has an area of ${area}`;
    }
    case "rectangle": {
      const area = figure.width * figure.height;
      return `Rectangle with width ${figure.width} and height ${figure.height} has an area of ${area}`;
    }
    case "circle": {
      const area = Math.PI * Math.pow(figure.radius, 2);
      return `Circle with radius ${figure.radius} has an area of ${area.toFixed(
        2
      )}`;
    }
    default:
      throw new Error("Unsupported figure type");
  }
}

const triangle: Triangle = { type: "triangle", base: 5, height: 10 };
const rectangle: Rectangle = { type: "rectangle", width: 8, height: 14 };
const circle: Circle = { type: "circle", radius: 8 };

console.log(getFigureInfo(triangle));
console.log(getFigureInfo(rectangle));
console.log(getFigureInfo(circle));
