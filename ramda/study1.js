/**
 * Created by jiang on 17-8-6.
 * http://www.ruanyifeng.com/blog/2017/03/ramda.html
 * Ramda 函数库
 */
const R = require('ramda');

const square = n => n * n;
R.map(square, [4,8]);

R.map(square)([4,8]);

const add = R.curry(function (x, y) {
    return x + y;
});

add(4, 3);
add(4)(2);

R.compose(Math.abs, R.add(1), R.multiply(2))(-4); // 7
R.pipe(Math.abs, R.add(1), R.multiply(2)(-4));

const sumOfArr = arr => {
    let sum = 0;
    arr.forEach(i => sum += i);
    return sum;
};
const lengthOfArr = arr => arr.length;

const average = R.converge(R.divide, [sumOfArr, lengthOfArr])
average([1, 2, 3, 4, 5, 6, 7]);

const toUpperCase = s => s.toUpperCase();
const toLowerCase = s => s.toLowerCase();
const strangeConcat = R.converge(R.concat, [toUpperCase, toLowerCase])
console.log(strangeConcat("Yodel"));
