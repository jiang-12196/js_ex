function uniqueA(array) {
    var res = [];

    for (let i = 0, len = array.length; i < len; i++) {
        var item = array[i];
        for (var j = 0, jlen = res.length; j < jlen; j++) {
            if (res[j] === item) 
                break;
        }
        if (j === jlen)
            res.push(item);
    }
    return res;
}

const arrayA = [1, 1, '1', '2', '2'];
var resultA = uniqueA(arrayA);
console.log("uniqueA--->", resultA);


