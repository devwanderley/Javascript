//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

//  Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por
//  3 e retorne true ou false.

function checker(a) {
  if (a % 3 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checker(3));
console.log(checker(5));
console.log(checker(7));
console.log(checker(9));
