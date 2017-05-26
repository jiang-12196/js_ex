function swap(array, p1, p2) {
    var temp = array[p1];
    array[p1] = array[p2]
    array[p2] = temp
}


function partition(array, left, right) {
    var pivot = array[Math.floor((right+left)/2)],
        i = left,
        j = right;
    while (i<j) {
        while (array[i]<pivot){
            i++;
        }
        while (array[j]>pivot) {
            j--;
        }
        if(i<=j) {
            swap(array, i,j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(array, left, right) {
    if (array.length < 2 ) return array;
    left = (typeof left !== "number" ? 0 : left);

    right = (typeof right !== "number" ? array.length - 1 : right);
    
    var index = partition(array, left, right);
    if (left < index-1) {
        quickSort(array, left, index-1);
    }
    
    if (index< right) {
        quickSort(array, index, right)
    }
    
    return array;
}

var quickSortArray = [4,2,5,2,1,4,7,8];

quickSort(quickSortArray);
console.log("quickSortArray-->",quickSortArray);