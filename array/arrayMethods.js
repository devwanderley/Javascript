const pilots = ["Vettel", "Alonso", "Raikkonen", "Massa"];

pilots.pop(); // Remova (pop) o último elemento
console.log(pilots);

pilots.push("Verstappen"); // Adicione um novo item no final de uma matriz
console.log(pilots);

pilots.shift(); // Deslocar (remover) o primeiro elemento da matriz
console.log(pilots);

pilots.unshift("Hamilton"); // Adicionar novos elementos no inicio de uma matriz
console.log(pilots);

pilots.splice(2, 0, "Bottas", "Massa");
console.log(pilots);

pilots.splice(2, 1);
console.log(pilots);

console.log("----------------");

const pilots2 = pilots.slice(2); // O slice()método retorna elementos selecionados em uma matriz, como uma nova matriz.
console.log(pilots2);

const pilots3 = pilots.slice(1,4);
console.log(pilots3);