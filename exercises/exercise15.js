//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

/*
    Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
    possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, 
    caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: 
    “Tem certeza que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível,
    retorne no console:“Não trabalhamos com este tipo de automóvel aqui”.
*/

function carDealership(car) {
  switch (car) {
    case "hatch":
      console.log("Purchase made successfully!");
      break;
    case "sedans":
    case "motorcycles":
    case "vans":
      console.log("Are you sure you don't prefer this model?");
      break;
    default:
      console.log("We do not work with this type of car here!");
  }
}
carDealership("hatch");
carDealership("sedans");
carDealership("motorcycles");
carDealership("vans");
carDealership("boat");
