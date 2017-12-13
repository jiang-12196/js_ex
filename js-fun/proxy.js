const mult = function() {
    let a = 1;
    for (let i = 0, l = arguments.length; i < l; i++) {
        a = a * arguments[i];
    }
    return a;
}

const plus = function() {
    let a = 0;
    for (let i = 0, l = arguments.length; i < l; i++) {
        a = a + arguments[i];
    }
    return a;
}

const n = function(n) {
    let a = 1;
    let b = 0
    for (let i = 1; i < n; i++) {
        a = a * i;
    }
    for(let j = 0; j < a; j++) {
        b = b + j;
    }
    return b;
}

const createProxyFactory = function(fn) {
    const cache = {};
    return function() {
        const args = Array.prototype.join.call(arguments, ',');
        if (args in cache) {
            return cache[args];
        }
        return cache[args] = fn.apply(this, arguments);
    }
}

const proxyMult = createProxyFactory(mult);

const proxyPlus = createProxyFactory(plus);

const proxyN = createProxyFactory(n);

const time1 = Date.now();

console.log(proxyN(12));

const time2 = Date.now();

console.log("1--->",time2 - time1);

console.log(proxyN(12));

const time3 = Date.now();

console.log("2--->", time3-time2);