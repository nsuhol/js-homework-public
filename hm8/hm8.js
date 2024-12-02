var employee = {
    name: "Alex Brown",
    profession: "doctor",
    workingHoursPerDay: 10,
};
var premiumData = {
    isPremium: true,
    premium: 1000,
};
var payPerHour = 32;
var workingDays = 14;
var experienceCoefficients = [1, 1.1, 1.2, 1.3, 1.5];
var getSalaryInfo = function (employeeData, premiumData, payPerHour, workingDays, experienceCoefficient) {
    var salary;
    if (premiumData.isPremium) {
        salary =
            employeeData.workingHoursPerDay *
                payPerHour *
                workingDays *
                experienceCoefficient +
                premiumData.premium;
    }
    else {
        salary =
            employeeData.workingHoursPerDay *
                payPerHour *
                workingDays *
                experienceCoefficient;
    }
    return "".concat(employeeData.profession, " ").concat(employeeData.name, " has a salary of ").concat(salary, "$ this month");
};
var salaryInfo = getSalaryInfo(employee, premiumData, payPerHour, workingDays, experienceCoefficients[2]);
console.log(salaryInfo);
//Task 2
function processData(param) {
    if (typeof param === "string") {
        return param.toUpperCase();
    }
    else if (typeof param === "number") {
        return Math.pow(param, 2);
    }
    else if (typeof param === "boolean") {
        return !param;
    }
    else if (Array.isArray(param)) {
        if (param.length === 0) {
            return "Empty array: []";
        }
        else {
            return param.map(function (num) { return Math.pow(num, 2); });
        }
    }
    else {
        throw new Error("Unsupported type");
    }
}
console.log(processData("text data"));
console.log(processData(3));
console.log(processData(false));
console.log(processData([1, 2, 3, 4]));
console.log(processData([]));
function getFigureInfo(figure) {
    switch (figure.type) {
        case "triangle": {
            var area = (figure.base * figure.height) / 2;
            return "Triangle with base ".concat(figure.base, " and height ").concat(figure.height, " has an area of ").concat(area);
        }
        case "rectangle": {
            var area = figure.width * figure.height;
            return "Rectangle with width ".concat(figure.width, " and height ").concat(figure.height, " has an area of ").concat(area);
        }
        case "circle": {
            var area = Math.PI * Math.pow(figure.radius, 2);
            return "Circle with radius ".concat(figure.radius, " has an area of ").concat(area.toFixed(2));
        }
        default:
            throw new Error("Unsupported figure type");
    }
}
var triangle = { type: "triangle", base: 5, height: 10 };
var rectangle = { type: "rectangle", width: 8, height: 14 };
var circle = { type: "circle", radius: 8 };
console.log(getFigureInfo(triangle));
console.log(getFigureInfo(rectangle));
console.log(getFigureInfo(circle));
