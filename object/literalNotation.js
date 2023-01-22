//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

const a = 1;
const b = 2;
const c = 3;

const object1 = {
  a: a,
  b: b,
  c: c,
};
const object2 = {
  a,
  b,
  c,
};
console.log(object1, object2);


const value1 = "Note";
const value2 = 10.0;
const object3 = {};
object3[value1] =value2;
console.log(object3);

const object4 = {[value1]:value2}
console.log(object4);


const object5 = {
    function1: function(){///...
    },
    function2(){
        // ...
    }
}
console.log(object5);
