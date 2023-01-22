//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

/*
    Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
    como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
    numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma
    de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para
    operações inválidas.
*/

function calculator(a, b, operation) {
  switch (operation) {
    case "+":
      console.log(`Sum: ${a} + ${b} = ${a + b}`);
      break;
    case "-":
      console.log(`Subtraction: ${a} - ${b} = ${a - b}`);
      break;
    case "*":
      console.log(`Multiplication: ${a} * ${b} = ${a * b}`);
      break;
    case "/":
      console.log(`Division: ${a} / ${b} = ${a / b}`);
      break;
    default:
      console.log("Invalid operations!!!");
  }
}
calculator(9, 3, "+");
calculator(9, 3, "-");
calculator(9, 3, "*");
calculator(9, 3, "/");
calculator(9, 3, "%");
