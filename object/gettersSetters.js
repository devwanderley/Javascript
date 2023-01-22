//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

const sequence = {
  _value: 1, // convenção
  get value() {
    return this._value++;
  },
  set value(value) {
    if (value > this._value) {
      this._value = value;
    }
  },
};
console.log(sequence.value,sequence.value);
sequence.value = 200;
console.log(sequence.value,sequence.value);

