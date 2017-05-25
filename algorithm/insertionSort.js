function insertionSort(array) {
    var len = array.length, value, i, j;
    for (i=0;i<len;i++) {
        value = array[i];
        console.log("i-->",i);
        for (j=i-1; j>-1 && array[j]>value;j--){
            console.log("j-->",j);

            array[j+1] = array[j];
            console.log('array-->',array)

        }
        array[j+1] = value;

    }
    
    return array;
}

var insertionArray = [4,2,5,2,1,4,7,8]

insertionSort(insertionArray);
console.log("insertionArray-->",insertionArray);