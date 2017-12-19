if (typeof Array.isArray === 'undefined') {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]'
    };
}

// addEventListener(xxx, 'click', test);

// javascript 事件模型 -- http://www.cnblogs.com/lvdabao/p/3265870.html
// 原始事件模型 通过指定元素的属性值绑定监听器 <input type='button' onclick='()=>{}' />
// IE事件模型
// 1.事件冒泡 2.事件捕捉 3.DOM事件流 --事件捕获--事件处理--事件冒泡

var foo = '11' + 2 - '1';

console.log(foo); // 111

console.log(typeof foo); // number

var numberArray = [1,3,4,5,2,4];

console.log(numberArray.reverse());

console.log(numberArray.sort((a, b) => {
    return a - b;
}))

var foo = 1;
function a(){
    console.log(foo);
    var foo = 2;
    console.log(foo);
}
// 函数声明与变量声明会被JavaScript引擎隐式地提升到当前作用域的顶部，但是只提升名称不会提升赋值部分。
a();

console.log([].constructor ===  Array);

Object.prototype.clone = function() {
    var o = this.constructor === Array ? [] : {};
    for (var e in this) {
        o[e] = typeof this[e] === 'object' ? this[e].clone() : this[e];
    }
    return o;
}

function clone(obj) {
    var buf;
    if (obj instanceof Array) {
        buf = [];
        var i = obj.length;
        while(i--) {
            buf[i] = clone(obj[i]);
        }
    } else if (obj instanceof Object) {
        buf = {};
        for (var k in obj) {
            buf[k] = clone(obj[k]);
        }
        return buf;
    } else {
        return obj;
    }
}

var User = {
    count: 1,
 
    getCount: function() {
        return this.count;
    }
};
console.log(User.getCount()); // what?
var func = User.getCount;
console.log(func()); // what?

Function.prototype.bind = Function.prototype.bind || function(context) {
    var self = this;
    return function() {
        return self.apply(context, arguments);
    }
}

var func = User.getCount.bind(User);

console.log(func());