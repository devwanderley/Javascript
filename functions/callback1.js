//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

function printt(name, index) {
  console.log(`${index + 1}. ${name}`);
}
const manufacturers = ["BMW", "Honda", "Audi"];

manufacturers.forEach(printt);
console.log("--")
manufacturers.forEach(function (manufacturer) {
  console.log(manufacturer);
});
console.log("--")
manufacturers.forEach((manufacturer) => console.log(manufacturer));
