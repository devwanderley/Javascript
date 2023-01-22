//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

function sum() {
  let sum = 0;
  for (i in arguments) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sum());
console.log(sum(2));
console.log(sum(2, 4));
console.log(sum(2, 4, "teste"));
