//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

/*
    Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
    casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
    escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções.
    Crie também um default, que retornará uma mensagem de erro no console.
*/
function verification(fruit) {
  switch (fruit) {
    case "Apple":
      console.log("We don't sell this fruit here!");
      break;
    case "kiwi":
      console.log("We are with kiwi fruit restriction!");
      break;
    case "watermelon":
      console.log("Here it is, it's 3 reais a kilo!");
      break;
    default:
      console.log("Console Error!!!");
  }
}
verification("Apple");
verification("kiwi");
verification("watermelon");
verification("jackfruit");
