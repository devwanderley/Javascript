//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

function randomGenerator(min, max) {
  const value = Math.random() * (max - min) + min;
  return Math.floor(value);
}

let op = 0;
while (op != -1) {
  op = randomGenerator(-1, 10);
  console.log(`chosen option was: ${op}.`);
}

console.log("END!");


