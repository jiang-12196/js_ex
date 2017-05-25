function merge(left, right) {
    var result = [],
        il = 0,
        ir = 0;

    while (il < left.length && ir < right.length) {
        if(left[il] < right[ir]) {
            result.push(left[il]);
            il++;
        }else {
            result.push(right[ir]);
            ir++;
        }
    }
    return result.concat(left.slice(il)).concat(right.slice(ir))
}

function mergeSort(array) {
    if (array.length < 2) {
        return array
    }
    var middle = Math.floor(array.length/2),
        left = array.slice(0, middle),
        right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

var mergeArray = [4,2,5,2,1,4,7,8];

var aaa = mergeSort(mergeArray);
console.log("mergeArray-->",aaa);


function mergeSort1(array) {
    if (array.length < 2) {
        return array
    }
    var middle = Math.floor(array.length/2),
        left = array.slice(0, middle),
        right = array.slice(middle),
        params = merge(mergeSort(left), mergeSort(right));
    params.unshift(0, array.length);
    array.splice.apply(array, params);

    return array
}

mergeSort1(mergeArray);
console.log("mergeArray111-->",mergeArray);
