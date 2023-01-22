const object1 = {
  a: 2,
  b: 8,
  c: 14,
  sum() {
    return this.a + this.b + this.c;
  },
};

console.log(JSON.stringify(object1));

// console.log(JSON.parse("{ a: 2, b: 8, c: 14}"));
// console.log(JSON.parse("{ 'a': 2, 'b': 8, 'c': 14}"));
console.log(JSON.parse('{ "a": 2, "b": 8, "c": 14}'));
console.log(JSON.parse('{ "a": 2, "b": "String", "c": true, "d":{},"e":[] }'));
