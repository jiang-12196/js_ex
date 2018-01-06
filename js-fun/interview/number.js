console.log('equal--->', 0.1 + 0.2 === 0.3);

function isFloatEqual(f1, f2, digists) {
    return f1.toFixed(digists) === f2.toFixed(digists);
}

console.log(isFloatEqual(0.1+0.2, 0.3, 10));

console.log(isFloatEqual(0.3-0.2, 0.1, 10));


function isFloatEqual2(f1, f2, digists) {
    return Math.abs(f1 - f2) < digists;
}

console.log(isFloatEqual2(0.1+0.2, 0.3, 0.0001));

console.log(isFloatEqual2(0.3-0.2, 0.1, 0.0001));

function accAdd(arg1, arg2) {
    var r1, r2, m;
    try {
        r1 = arg1.toString().split('.')[1].length
    } catch(e) {
        console.log(e)
        r1 = 0
    }
    try {
        r2 = arg2.toString().split('.')[1].length
    } catch(e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1*m + arg2*m)/m
}

console.log(accAdd(0.1, 0.2))

console.log(accAdd(2.22, 0.1)) // 2.3200000000000003

function accAddInt(arg1, arg2) {
    var r1, r2, m;
    try {
        r1 = arg1.toString().split('.')[1].length
    } catch(e) {
        console.log(e)
        r1 = 0
    }
    try {
        r2 = arg2.toString().split('.')[1].length
    } catch(e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (parseInt(arg1*m) + parseInt(arg2*m))/m
}

console.log(accAddInt(2.22, 0.1))