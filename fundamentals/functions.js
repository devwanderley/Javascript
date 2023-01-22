//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley
// Função sem retorno

function printSum(a, b) {
  console.log(a + b);
}
printSum(8, 10);

// Função com retorno
function sum(a, b = 0) {
  return a + b;
}
console.log(sum(2, 8));
console.log(sum(2));

// Armazenar uma função em uma varíavel
const printSum2 = function (a, b) {
  console.log(a + b);
};
printSum2(2, 6);

// Armazenar uma função arrow em uma varíavel
const sum2 = (a, b) => {
  return a + b;
};
console.log(sum2(20, 40));

// Retorno inplícito
const subtraction = (a, b) => a - b;
console.log(subtraction(5, 1));
