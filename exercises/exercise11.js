//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley
/*
    As regras para o cálculo dos anos bissextos são as seguintes:
    De 4 em 4 anos é ano bissexto;
    De 100 em 100 anos não é ano bissexto;
    De 400 em 400 anos é ano bissexto;
    Prevalecem as últimas regras sobre as primeiras.
    Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
    mensagem e retornando true ou false.
*/

function leapYearChecker(year) {
  if (year < 0) {
    return false;
  } else if (year % 400 == 0) {
    return true;
  } else if (year % 100 == 0) {
    return false;
  } else if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(leapYearChecker(2020));
console.log(leapYearChecker(2021));
console.log(leapYearChecker(2022));
console.log(leapYearChecker(2023));
console.log(leapYearChecker(2024));
console.log(leapYearChecker(2025));
