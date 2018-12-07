const createIterator = items => {
  let i = 0;
  const length = items.length;
  return {
    next: () => {
      const done = i >= length;
      const value = !done ? items[i++] : undefined;
      return {
        done,
        value
      };
    }
  };
};

const array = [1, 2, 3];
const iterator = createIterator(array);
console.log('iterator: ========>', iterator.next());
console.log('iterator: ========>', iterator.next());
console.log('iterator: ========>', iterator.next());
console.log('iterator: ========>', iterator.next());

// for (let value of iterator) {
//   console.log('for of ====>', value);
// }

const object = {
  value: 1
};

object[Symbol.iterator] = () => {
  return createIterator(array);
};

for (let value of object) {
  console.log('new of ====>', value);
}
