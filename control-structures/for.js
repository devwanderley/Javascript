//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

let cont = 0;

while (cont <= 10) {
  console.log("While: ", cont);
  cont++;
}
console.log("------------------");
for (let i = 0; i <= 10; i++) {
  console.log("For: ", i);
}
console.log("------------------");
const notes = [8, 9, 10, 2, 6];
for (let i = 0; i < notes.length; i++) {
  console.log("Note: ", notes[i]);
}
console.log("------------------");
const notes2 = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in notes2) {
  console.log(i, notes2[i]);
}

const person = {
  name: "Wanderley",
  lastName: "Junior",
  age: 23,
};
console.log("------------------");
for (let attribute in person) {
  console.log(`${attribute} = ${person[attribute]}`);
}
