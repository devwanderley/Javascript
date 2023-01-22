//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

// Closures é o escopo criado quand uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis extrenas à função
const x = "Global";

function outside() {
  const x = "Local";
  function inside() {
    return x;
  }
  return inside();
}

const myFunction = outside();
console.log(myFunction);
