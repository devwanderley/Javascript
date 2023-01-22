//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

function Car(MaximumSpeed = 200, delta = 5) {
  //Atributo Privado
  let currentSpeed = 0;

  // Método Público
  this.speedUp = function () {
    if (currentSpeed + delta <= MaximumSpeed) {
      currentSpeed += delta;
    } else {
      currentSpeed = MaximumSpeed;
    }
  };

  // Método Público
  this.getCurrentSpeed = function () {
    return currentSpeed;
  };
}

const bmw = new Car();
bmw.speedUp();
console.log(bmw.getCurrentSpeed());

const audi = new Car(300, 20);
audi.speedUp();
audi.speedUp();
audi.speedUp();
console.log(audi.getCurrentSpeed());
