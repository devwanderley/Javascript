//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e
// tempo de aplicação. A primeira função retornará o montante da aplicação financeira
// sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

function simpleInterestm(initialCapital, interestRate, applicationTime) {
  return initialCapital + initialCapital * interestRate * applicationTime;
}

function compoundInterest(initialCapital, interestRate, applicationTime) {
  return initialCapital * (1 + interestRate) ** applicationTime;
}
console.log(simpleInterestm(100, 10 / 100, 2));
console.log(compoundInterest(100, 10 / 100, 2));
