//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número
// referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
function Classified(num) {
  switch (num) {
    case 1:
      return "Weekend!";
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Business day!";
    case 7:
      return "Weekend!";
    default:
      return "invalid day!";
  }
}

console.log(Classified(1));
console.log(Classified(2));
console.log(Classified(3));
console.log(Classified(8));
