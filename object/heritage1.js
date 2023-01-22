//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

const ferrari = {
  model: "F40",
  maxSpeed: 300,
};
const volvo = {
  model: "V40",
  maxSpeed: 200,
};

console.log(volvo.__proto__);
console.log(volvo.__proto__ === Object.prototype);
console.log(ferrari.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
console.log(Object.prototype.__proto__ === null);
