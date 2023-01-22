//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

function handleError(erro) {
  throw new Error("...");
}

function printName(obj) {
  try {
    console.log(obj.name.toUpperCase() + " !!!");
  } catch (e) {
    handleError(e);
  } finally {
    console.log("Finally!");
  }
}

const obj = { name: "Wanderley" };
printName(obj);
