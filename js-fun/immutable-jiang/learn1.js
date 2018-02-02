const { fromJS, Map, Seq }  = require('immutable');

const obj = { 1: "one" };

console.log(Object.keys(obj));

console.log(obj["1"] === obj[1]);

const map = fromJS(obj);
console.log(map.get("1") === map.get(1));


const originalMap = Map({ a: 1, b: 2, c: 3 })
const updatedMap = originalMap.set('b', 2)

console.log(originalMap === updatedMap);

const lazySeq = Seq(map);

console.log(lazySeq.reduce(i => console.log(i)));
