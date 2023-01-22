//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

let comparingThis = function (a) {
  console.log(this === a);
};
comparingThis(global);

const obj = {};

comparingThis = comparingThis.bind(obj);
comparingThis(global);
