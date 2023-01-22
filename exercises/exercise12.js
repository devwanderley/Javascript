//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

// Faça um algoritmo que calcule o fatorial de um número.

function factorial(num) {
  let fact = 1;
  for (let i = num; i > 0; i--) {
    fact *= i;
  }
  console.log(`factorial of ${num} is: ${fact}.`);
}

factorial(5);
factorial(10);
