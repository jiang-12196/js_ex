/**
 * Created by jiang on 17-8-6.
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

R.compose(Math.abs, R.add(1), R.multiply(2)(-4));
R.pipe(Math.abs, R.add(1), R.multiply(2)(-4));

const sumOfArr = arr => {
    const sum = 0;
    arr.forEach(i => sum += i);
    return sum;
};
const lengthOfArr = arr => arr.length;

const average = R.converge(R.divide, [sumOfArr, lengthOfArr])
average([1, 2, 3, 4, 5, 6, 7])
// 4
// 相当于 28 除以 7

const toUpperCase = s => s.toUpperCase();
const toLowerCase = s => s.toLowerCase();
const strangeConcat = R.converge(R.concat, [toUpperCase, toLowerCase])
strangeConcat("Yodel")
// "YODELyodel"
// 相当于 R.concat('YODEL', 'yodel')