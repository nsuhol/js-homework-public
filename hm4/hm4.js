//Task1
const scores = {
  programming: 88,
  design: 74,
  jurisprudence: false,
  relational_DB: 92,
  computerGraphics: "submitted",
  patterns: 65,
  philosophy: "transferred",
  network: 81,
};
for (let key in scores) {
  if (typeof scores[key] !== "number") {
    delete scores[key];
  }
}
console.log(scores);

//Task2
class Student {
  constructor(fullName, direction) {
    this.fullName = fullName;
    this._direction = direction;
  }
  showFullName() {
    return this.fullName;
  }
  nameIncludes(data) {
    return this.showFullName().includes(data);
  }
  static studentBuilder() {
    return new Student("Ihor Kohut", "qc");
  }
  get direction() {
    return this._direction;
  }
  set direction(newDirection) {
    this._direction = newDirection;
  }
}

const stud1 = new Student("Ivan Petrenko", "web");
const stud2 = new Student("Sergiy Koval", "python");
const stud3 = Student.studentBuilder();
console.log(stud1.nameIncludes("Ivan"));
console.log(stud1.nameIncludes("Denysenko"));
console.log(stud1.direction);
stud1.direction = "frontend";
console.log(stud1.direction);

//Task3
class Plane {
  constructor(model, fuelSupply, fuelConsumption) {
    this.model = model;
    this.fuelSupply = fuelSupply;
    this.fuelConsumption = fuelConsumption;
  }
  calcFlightRange() {
    return (this.fuelSupply / this.fuelConsumption) * 100;
  }

  static sortFlightRange(planesArray) {
    planesArray.sort((a, b) => a.calcFlightRange() - b.calcFlightRange());
    planesArray.forEach((plane) => {
      console.log(`${plane.model}: ${plane.calcFlightRange()}`);
    });
  }
}
class TransportPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
    super(model, fuelSupply, fuelConsumption);
    this.cargo = cargo;
    this.addTank = addTank;
  }
  calcFlightRange() {
    return ((this.fuelSupply + this.addTank) / this.fuelConsumption) * 100;
  }
}
class PassengerPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, passengers, refueling) {
    super(model, fuelSupply, fuelConsumption);
    this.passengers = passengers;
    this.refueling = refueling;
  }

  calcFlightRange() {
    return ((this.fuelSupply + this.refueling) / this.fuelConsumption) * 100;
  }
}
class WarPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, missiles, aerodynamicsKoef) {
    super(model, fuelSupply, fuelConsumption);
    this.missiles = missiles;
    this.aerodynamicsKoef = aerodynamicsKoef;
  }
  calcFlightRange() {
    return (
      (this.fuelSupply / this.fuelConsumption) * 100 * this.aerodynamicsKoef
    );
  }
}
console.log("Unsorted range of planes:");
const plane1 = new TransportPlane("An-225 Mriya", 105000, 5000, 500, 300000);
console.log("An-225 Mriya: ", plane1.calcFlightRange());
const plane2 = new PassengerPlane("Boeing-747", 193000, 2500, 410, 90000);
console.log("Boeing-747:", plane2.calcFlightRange());
const plane3 = new WarPlane("F-22 Raptor", 8200, 320, 20, 1.2);
console.log("F-22 Raptor:", plane3.calcFlightRange());

console.log("Sorted range of planes:");
const planesArray = [plane1, plane2, plane3];
Plane.sortFlightRange(planesArray);
