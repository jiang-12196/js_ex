Array.prototype.unique = function() {
    var newArr = [];
    for (var i=0; i<this.length; i++) {
        if(newArr.indexOf(this[i]) == -1) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

var arr = [1,2,3,1,2,3,6,4,5,6];
console.log(arr.unique());