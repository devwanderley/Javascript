//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

// Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
// switch. Crie um case default que escreva ‘Número fora do intervalo.’

function converter(num) {
  switch (num) {
    case 0:
      console.log(`${num} - Nought `);
      break;
    case 1:
      console.log(`${num} - One `);
      break;
    case 2:
      console.log(`${num} - Two `);
      break;
    case 3:
      console.log(`${num} - Three `);
      break;
    case 4:
      console.log(`${num} - Four `);
      break;
    case 5:
      console.log(`${num} - Five `);
      break;
    case 6:
      console.log(`${num} - Six `);
      break;
    case 7:
      console.log(`${num} - Seven `);
      break;
    case 8:
      console.log(`${num} - Eight `);
      break;
    case 9:
      console.log(`${num} - Nine `);
      break;
    case 10:
      console.log(`${num} - Ten `);
      break;
    default:
      console.log("Number out of range!!!");
  }
}
converter(0);
converter(1);
converter(2);
converter(3);
converter(4);
converter(5);
converter(6);
converter(7);
converter(8);
converter(9);
converter(10);
converter(11);
