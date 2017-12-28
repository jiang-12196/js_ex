

var result = []
function sum() {
    
    result.push(Array.prototype.slice.call(arguments)[0]);
    return sum;

}


sum(1)(2)(3);


// function add(val) {
//     function _retFun(v) {
//         return add(val+v);
//     }
    
//     _retFun.toString = _retFun.valueOf = function() {
//         return val;
//     };

//     return _retFun;
// }

// console.log(add(1)(3)(4)(5));