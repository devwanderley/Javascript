//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley


/*
    O cardápio de uma lanchonete é o seguinte:
            |Código|Descrição do Produto |Preço
            |100   |Cachorro Quente      |R$ 3,00
            |200   |Hambúrguer Simples   |R$ 4,00
            |300   |Cheeseburguer        |R$ 5,50
            |400   |Bauru                |R$ 7,50
            |500   |Refrigerante         |R$ 3,50
            |600   |Suco                 |R$ 2,80
    Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
    a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
    comando switch. Crie um caso default para produto não existente.
    */
function menu(itemCode, theAmount) {
  switch (itemCode) {
    case 100:
      console.log(
        `ItemCode: ${itemCode}| The Amount: ${theAmount}| Amount: $${
          theAmount * 3
        }`
      );
      break;
    case 200:
      console.log(
        `ItemCode: ${itemCode}| The Amount: ${theAmount}| Amount: $${
          theAmount * 4
        }`
      );
      break;
    case 300:
      console.log(
        `ItemCode: ${itemCode}| The Amount: ${theAmount}| Amount: $${
          theAmount * 5.5
        }`
      );
      break;
    case 400:
      console.log(
        `ItemCode: ${itemCode}| The Amount: ${theAmount}| Amount: $${
          theAmount * 7.5
        }`
      );
      break;
    case 500:
      console.log(
        `ItemCode: ${itemCode}| The Amount: ${theAmount}| Amount: $${
          theAmount * 3.5
        }`
      );
      break;
    case 600:
      console.log(
        `ItemCode: ${itemCode}| The Amount: ${theAmount}| Amount: $${
          theAmount * 2.5
        }`
      );
      break;
    default:
      console.log("Non-existent Product!!!");
  }
}

menu(100, 5);
menu(200, 6);
menu(300, 1);
menu(400, 9);
menu(500, 4);
menu(600, 2);
menu(700, 4);
