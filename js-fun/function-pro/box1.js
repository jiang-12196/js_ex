const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  toString: () => `Box(${f})`
});

const f0 = x => x * 100;
const add1 = f => x => f(x) + 1;
const add2 = f => x => f(x) + 2;

const g = Box(f0)
  .map(f => add1(f))
  .map(f => add2(f))
  .fold(f => f);

const res = g(1);

console.log(res);