//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

//  Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá
// imprimir o resultado e o resto da divisão destes dois valores.

function calculator(dividend, divider) {
  divisionResult = Math.floor(dividend / divider);
  RestDivision = dividend % divider;
  console.log(
    `Division Result: ${divisionResult}. Rest of Division: ${RestDivision}`
  );
}
calculator(8, 2);
calculator(9, 2);
