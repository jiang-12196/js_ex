// 原型链继承

function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
}

function SubType() {
    this.subProperty = false;
}

SubType.prototype = new SuperType();


SubType.prototype.getSubValue = function() {
    return this.subProperty;
}

var instance = new SubType();

console.log(instance.getSuperValue());


// function A() {} has a protoType  ---> protoType Object

// new A() has a __proto__ ---> protoType Object

// protoType Object has a constructor ---> function A()

