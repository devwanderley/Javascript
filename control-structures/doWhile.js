//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

function randomGenerator(min, max) {
  const value = Math.random() * (max - min) + min;
  return Math.floor(value);
}

let op = 0;
do {
  op = randomGenerator(-1, 10);
  console.log(`chosen option was: ${op}.`);
} while (op != -1);

console.log("END!");



