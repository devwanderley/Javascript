//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

/*  Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
    Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos 
    os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados 
    de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. 
    (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
*/
function analyzeTriangleSides(a, b, c) {
  if (a === b && a === c) {
    console.log("Equilateral Triangle");
  } else if (a === b || a === c || b === c) {
    console.log("Isosceles Triangle");
  } else {
    console.log("Scalene Triangle");
  }
}

analyzeTriangleSides(8, 6, 4);
analyzeTriangleSides(2, 2, 2);
analyzeTriangleSides(1, 4, 4);
