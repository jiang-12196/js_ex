function F() {

}

console.log(F.prototype instanceof Object);

function A(x) {
    this.x = x;
}

var obj = new A(1);

A.prototype.say = function() {
    console.log('hi');
}

// [Function: A]
// A {}
// [Function: A]

console.log(obj.constructor)

console.log(obj.constructor.prototype)

console.log(obj.constructor.prototype.constructor)

console.log(obj.constructor === A.prototype.constructor)

console.log(obj.constructor.prototype === A.prototype)
