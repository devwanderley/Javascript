//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

const weight1 = 1.5;
const weight2 = Number("2.0"); // (Number == Função) <> (number == tipo)
console.log("Type: ", typeof Number);
console.log("weight 1: " + weight1 + " | weight2: " + weight2);
console.log("Whole number? ", Number.isInteger(weight1)); //  isInteger Determina se o valor passado é um inteiro
console.log("Whole number? ", Number.isInteger(weight2));

const assessment1 = 9.871;
const assessment2 = 6.871;

const total = assessment1 * weight1 + assessment2 * weight2;
const average = total / (weight1 * weight2);
console.log("Average: ", average.toFixed(2)); // toFixed() formata um número utilizando notação de ponto fixo
console.log("Type: ", typeof average);
console.log("Average: ", average.toString(2)); // toString retorna uma representação string de um objeto - (2) BINÁRIO
console.log("Type: ", typeof average);
console.log();
//----Warning----
console.log("*********** Warning ****************");
console.log(7 / 0); // Qualquer número dividido por 0 == Infinito
console.log("10" / 2);
console.log("Yes!" * 2);
console.log(0.1 + 0.7);
// console.log(10.toString()); //ERRO
console.log((10).toFixed(2));
