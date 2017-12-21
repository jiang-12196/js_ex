function spacify(str) {
    return str.split('').join(' ');
}

String.prototype.spacify = function() {
    return this.split('').split(' ');
}

function log() {
    // console.log.apply(console, arguments);
    // // apply 参数是个array
    // // call 参数是多个
    var args = Array.prototype.slice.call(arguments);
    console.log.apply(console, args);
}

log('hello', 'world');

/*

fixed:固定定位
absolute:绝对定位

区别很简单：
1、没有滚动条的情况下没有差异
2、在有滚动条的情况下，fixed定位不会随滚动条移动而移动，而absolute则会随滚动条移动

*/