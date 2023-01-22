//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley


// Cadeia de protótipos (prototype chain)
Object.prototype.value0 = 0;
const grandmother = {
  value1: "A",
};
const dad = {
  __proto__: grandmother,
  value2: "B",
};
const son = {
  __proto__: dad,
  value3: "C",
};

console.log(son.value1);
console.log(son.value0);

const car = {
  currentSpeed: 0,
  maxSpeed: 200,
  speedUp(delta) {
    if (this.currentSpeed + delta <= this.maxSpeed) {
      this.currentSpeed += delta;
    } else {
      this.currentSpeed = this.maxSpeed;
    }
  },
  status() {
    return `Current Speed: ${this.currentSpeed} km/h`;
  },
};

const ferrari = {
  model: "F40",
  maxSpeed: 300,
};
const volvo = {
  model: "V40",
  status() {
    return `${this.model}: ${super.status()}`;
  },
};
Object.setPrototypeOf(ferrari, car);
Object.setPrototypeOf(volvo, car);

console.log(ferrari);
console.log(volvo);

volvo.speedUp(600);
console.log(volvo.status());

ferrari.speedUp(400);
console.log(ferrari.status());
