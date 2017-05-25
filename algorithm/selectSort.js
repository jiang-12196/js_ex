

function swap(array, p1, p2) {
    var temp = array[p1];
    array[p1] = array[p2]
    array[p2] = temp
}

function selectionSort(array) {
    var len = array.length, min;

    for (var i = 0; i < len; i++) {
        min = i;
        for (j=i+1; j<len; j++ ) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        if (i != min ){
            swap(array, i, min)
        }
    }
    return array
}

var seledtionArray = [4,2,5,2,1,4,7,8]

selectionSort(seledtionArray);
console.log("seledtionArray-->",seledtionArray);