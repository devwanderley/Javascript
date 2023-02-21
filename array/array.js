console.log(typeof Array, typeof new Array(), typeof []);

let approved = new Array("Wanderley", "Paulo", "Julia", "Fernanda");
console.log(approved);

approved = ["Junior", "Carlos", "Cesar"];
console.log(approved[0]);
console.log(approved[1]);
console.log(approved[2]);
console.log(approved[3]);

approved[3] = "Paulo";
approved.push("Bia");
console.log(approved.length);

approved[8] = "Luciana";
console.log(approved.length);

console.log("-----------------------");
console.log(approved);
approved.sort();
console.log(approved);
delete approved[1]
console.log(approved);

console.log("-----------------------");

approved = ["Junior", "Carlos", "Cesar"]
approved.splice(1,1,"Name1","Name2")
approved.splice(1,0,"Name1","Name2")
console.log(approved);