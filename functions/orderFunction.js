//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function funct1() {}

// Armazenar em uma variável
const funct2 = function () {};

// Armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  funct1,
  funct2,
];
console.log(array[0](2, 3));

// Armazenar em um atributo de objeto
const obj = {};

obj.hello = function () {
  return "Hello";
};
console.log(obj.hello());

// Passar função como paramento
function run(fun) {
  fun();
}

run(function () {
  console.log("Running...");
});

// Um função pode retornar/conter um função
function sum(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

sum(2, 3)(4);
