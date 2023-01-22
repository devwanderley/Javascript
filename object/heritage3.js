//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

const dad = {
  name: "Wanderley",
  age: 22,
  nationality: "Brasil",
};

const son1 = Object.create(dad);
son1.name = "Jennifer";

console.log(dad);
console.log(son1, son1.nationality);

const son2 = Object.create(dad, {
  name: { value: "Bia", writable: false, enumerable: true },
});
console.log(son2.name);

console.log(Object.keys(son1));
console.log(Object.keys(son2));

console.log("---------------")

for (let key in son1) {
  son1.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`by inheritance: ${key}`);
}
