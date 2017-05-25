/**
 * Created by jiang on 17-5-25.
 */

function swap(array, p1, p2) {
    var temp = array[p1];
    array[p1] = array[p2]
    array[p2] = temp
}

function bubbleSort(array) {
    var len = array.length;
    var i,j,stop;

    for(i=0; i<len-1; i++) {
        for (j=0, stop= len-1-i; j< stop; j++) {
            if (array[j] > array[j+1]) {
            swap(array, j, j+1)
            }
        }
    }
}

var myarray = [4,2,5,2,1,4,7,8]

bubbleSort(myarray);
console.log(myarray);