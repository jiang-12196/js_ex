const Box = x => ({
  map: f => {
    return Box(f(x));
  },
  fold: f => {
    return f(x);
  },
  toString: () => `Box(${f})`
});

const f0 = x => x * 100;
const add1 = f => x => {
  return f(x) + 1;
};
const add2 = f => x => {
  return f(x) + 2;
};

const g = Box(f0);
const g2 = g.map(f => {
  return add1(f);
});
const g3 = g2.map(f => {
  return add2(f);
});
const g4 = g3.fold(f => {
  return f;
});

const res = g4(1);

// const a = x * 100 + 1 + 2;
