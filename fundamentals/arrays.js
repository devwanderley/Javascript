//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

const values = [9.2, 5.7, 1.5];
console.log(values[1]);
values[3] = 4.8;
console.log(values[3]);
console.log(values.length); // A length - propriedade retorna o comprimento de uma string.
values.push({ id: 3 }, false, null, "Test"); // O push()método adiciona novos itens ao final de uma matriz.
console.log(values);
values.pop(); // O pop()método remove (aparece) o último elemento de uma matriz.
console.log(values);
delete values[2];
console.log(values);
