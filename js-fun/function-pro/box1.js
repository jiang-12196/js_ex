const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  toString: () => `Box(${f})`
});

const f0 = x => x * 100;
const add1 = f => x => f(x) + 1;
const add2 = f => x => f(x) + 2;

const g = Box(f0);
const g2 = g.map(f => {
  console.log('g2f===>', f);
  return add1(f);
});
const g3 = g2.map(f => {
  console.log('g3f===>', f);
  return add2(f);
});
const g4 = g3.fold(f => f);

console.log('g: ========>', g);
console.log('g2: ========>', g2);
console.log('g3: ========>', g3);
console.log('g4: ========>', g4);
const res = g4(1);

console.log(res);
