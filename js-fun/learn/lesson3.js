(function() {
    var a = b = 5;
})();

// console.log(a); //error
console.log(b);

(function() {
    'use strict';
    var a = b = 5;
})();

console.log(b);

String.prototype.repeatify = String.prototype.repeatify || function(times) {
    var str = '';
    for (let i = 0; i < times; i++) {
        str += this;
    }
    return str;
}

const hello = 'hello'.repeatify(3)
console.log(hello);

function test() {
    console.log(a);
    console.log(func());

    var a = 'handsome';

    function func() {
        return 2;
    }
}

test();