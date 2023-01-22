//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

// Factory simples
function createProduct(name, price, discount = 0.1) {
  return {
    name,
    price,
    discount,
  };
}

console.log(createProduct("Pants", 82.0, 0.2));
console.log(createProduct("Shirt", 32.0, 0.2));
console.log(createProduct("Sneakers", 300.00));
