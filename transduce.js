var R = require('lodash');

var arr = [1,2,3,4];
var append = function (newArr, x) {
    newArr.push(x);
    return newArr
};

var plusOne = x => x+1;
var square = x => x*x;

R.transduce(
    R.map(
        R.pipe(plusOne, square)
    ),
    append,
    [],
    arr
);

