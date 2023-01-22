//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

function MyObject() {}

console.log(MyObject.prototype);

const object1 = new MyObject();
const object2 = new MyObject();

console.log(object1.__proto__ === object2.__proto__);
console.log(MyObject.prototype === object1.__proto__);

MyObject.prototype.name = "Wanderley";

MyObject.prototype.function1 = function () {
  console.log(`Hello ${this.name}`);
};

object1.function1();
object2.name = "Junior";
object2.function1();
