const a = {
    i: 1,
    toString: function() {
        var b = a.i++;
        return b;
    },
    valueOf: function() {
        var b = a.i++;
        return b;
    }
}

if (a == 1 && a == 2 && a == 3) {
    console.log("great 1");
}

var val = 0;
var window = {};

Object.defineProperty(window, 'a', {
    get: function() {
        return ++val;
    }
})

if (window.a === 1 && window.a === 2 && window.a === 3) {
    console.log("great 2");
}


// i++ 返回 i

// ++i 返回 i+1