//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

// Object.preventExtensions - evita que novas propriedades sejam adicionadas a um objeto (ou seja, impede futuras extensões do objeto). Também evita que o protótipo do objeto seja reatribuído.

const product = Object.preventExtensions({
  name: "Bread",
  value: 1.5,
  tag: "food",
});

console.log("Extensible:", Object.isExtensible(product));

product.name = "Rice";
product.description = "Fresh rice";
delete product.tag;

console.log(product);

const person = { name: "Wanderley", age: 22 };
Object.seal(person);
console.log("Seal:", Object.isSealed(person));

person.surname = "Junior";
delete person.name;
person.age = 23;

console.log(person);
