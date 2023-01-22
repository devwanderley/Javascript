//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

// Coleção dinâmica de pares chave/valor

const product = new Object();
product.name = "Wanderley";
product["Age"] = 22;

console.log(product);
delete product.name;
console.log(product);

const car = {
  model: "BM",
  value: 500000,
  owner: {
    name: "Wanderley",
    age: 22,
  },
  leaders: [
    { name: "João", age: 35 },
    { name: "Mario", age: 25 },
  ],
};

console.log(car);

car.owner.name = "Wanderley Junior";
console.log(car);
