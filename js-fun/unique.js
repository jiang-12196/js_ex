// function 1 ==> O(n^2)
function uniqueA(array) {
    const res = [];

    for (let i = 0, len = array.length; i < len; i++) {
        const item = array[i];
        for (var j = 0, jlen = res.length; j < jlen; j++) {
            if (res[j] === item) 
                break;
        }
        if (j === jlen)
            res.push(item);
    }
    return res;
}

const array = [1, 1, '1', '2', '2'];
const resultA = uniqueA(array);
console.log("uniqueA--->", resultA);


function uniqueB(array) {
    const res = [];
    for (let i = 0, len = array.length; i < len; i++) {
        const item = array[i];
        (res.indexOf(item) === -1) && res.push(item);
    }

    return res;
}

const resultB = uniqueB(array);
console.log("uniqueB--->", resultB);

function uniqueC(array) {
    const res = array.filter((item, index, array) => {
        return array.indexOf(item) === index;
    })
    return res;
}

const resultC = uniqueC(array);
console.log("uniqueC--->", resultC);

// function 2

function uniqueD(array) {
    const res = [];
    for (var i = 0, len = array.length; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (array[i] === array[j])
                j = ++i;
        }
        res.push(array[i]);
    }
    return res;
}


const resultD = uniqueD(array);
console.log("uniqueD--->", resultD);

function uniqueE(array) {
    return array.concat().sort().filter((item, index, array) => {
        return !index || item !== array[index - 1];
    });
}

const resultE = uniqueE(array);
console.log("uniqueE--->", resultE);

function uniqueF(array) {
    const seen = {};
    return array.filter((item) => {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

const resultF = uniqueF(array);
console.log("uniqueF--->", resultF);

function uniqueG(array) {
    return Array.from(new Set(array));
}

const resultG = uniqueG(array);
console.log("uniqueG--->", resultG);