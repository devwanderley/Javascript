//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

function sum(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

function sum2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = b in arguments ? a : 1;
  c = isNaN(c) ? 1 : c; // Mais segura!
  return a + b + c;
}

console.log(sum());
console.log(sum(6));
console.log(sum(6, 8));
console.log(sum(6, 8, 9));
console.log("---------------");
console.log(sum2());
console.log(sum2(6));
console.log(sum2(6, 8));
console.log(sum2(6, 8, 9));
