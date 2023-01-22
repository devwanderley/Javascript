//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

// Usando a notação Literal
const object = {};
console.log(object);

// Object em Js
console.log();
console.log("- Object em Js");
console.log(typeof Object, "|", typeof new Object());
const object2 = new Object();
console.log(object2);

// Funções construtoras
console.log();
console.log("- Funções construtoras");
function Product(name, price, discount) {
  this.name = name;
  this.getPriceDiscount = () => {
    return price * (1 - discount);
  };
}

const product1 = new Product("Car", 872000, 0.2);
const product2 = new Product("Notebook", 6000, 0.6);

console.log(product1.getPriceDiscount());
console.log(product2.getPriceDiscount());

//Função Factory
console.log();
console.log("- Função Factory");
function createEmployee(name, baseSalary, absences) {
  return {
    name,
    baseSalary,
    absences,
    getSalary() {
      return (baseSalary / 30) * (30 - absences);
    },
  };
}

const employee1 = createEmployee("Wanderley", 1500, 3);
const employee2 = createEmployee("Junior", 1400, 9);

console.log(employee1.getSalary());
console.log(employee2.getSalary());
