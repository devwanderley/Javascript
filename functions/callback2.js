//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

const note = [8.7, 2.1, 7.0, 9.5, 10.0, 6.6, 5.4];

// Sem callback
const lowScore1 = [];
for (i in note) {
  if (note[i] <= 7) {
    lowScore1.push(note[i]);
  }
}
console.log(`LowScore1: ${lowScore1}`);

// Com callback 1
const lowScore2 = note.filter((note) => note <= 7);
console.log(`LowScore2: ${lowScore2}`);

// Com callback 2

const lowScore3 = note.filter(function (note) {
  return note <= 7;
});
console.log(`LowScore3: ${lowScore3}`);
console.log("--");
