//Object.definePropertiy(); 直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象。

var obj = {};

Object.defineProperty(obj, 'o', {
    value: 37,
    writable: true, // 是否可修改
    enumerable: true, // 是否可列举  Object.keys()
    configurable: true, // 是否可删除
});

Object.defineProperty(obj, 'b', {
    value: 'jiang',
    // configurable: true,
    writable: true,
    enumerable: true,
});

console.log('obj--->', obj);

obj.b = 'liu';

console.log('obj--->', obj);