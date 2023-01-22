//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

const person = {
  salutation: "Hello",
  speak() {
    console.log(this.salutation);
  },
};

person.speak();
const speak = person.speak;
speak();

const speakperson = person.speak.bind(person);
speakperson();
