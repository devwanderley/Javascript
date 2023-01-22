//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley


/*
Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

function analyzePayment(age) {
  if (age > 0 && age < 10) {
    console.log("Agreement value R$$80");
  } else if (age >= 10 && age <= 30) {
    console.log("Agreement value R$$50");
  } else if (age > 30 && age <= 60) {
    console.log("Agreement value R$95");
  } else if (age > 60) {
    console.log("Agreement value R$130");
  } else {
    console.log("Invalid age!!");
  }
}

analyzePayment(57);
analyzePayment(45);
analyzePayment(30);
analyzePayment(-1);
analyzePayment(0);
