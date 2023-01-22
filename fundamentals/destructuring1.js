//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

const person = {
  name: "Wanderley",
  age: 23,
  address: {
    road: "Solomon",
    number: 987,
  },
};
const { name, age } = person;
console.log(name, age);

const { name: n, age: a } = person;
console.log(n, a);

const {
  address: { road, number }} = person;

console.log(road, number);
