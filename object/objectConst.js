//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

const people = { name: "Wanderley" };
people.name = "Junior";
console.log(people);

//people = { name: "Cesar" };
//console.log(people);
Object.freeze(people) // congelar objeto
people.name = "Lucas";
console.log(people.name);