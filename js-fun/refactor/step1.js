function getCollectionWeight(collection) {
    let collectionValues;
    if (collection instanceof Array) {
        collectionValues = collection;
    } else if (collection instanceof Map) {
        collectionValues = [...collection.values()];
    } else {
        collectionValues = Object.keys(collection).map(key => collection[key]);
    }
    return collectionValues.reduce((sum, item) => {
        if (item == null) {
            return sum + 1;
        }
        if (typeof item === 'object' || typeof item === 'function') {
            return sum + 4;
        }
        return sum + 2;
    }, 0);
}

let myArray = [null, {}, 15];

let myMap = new Map([ ['functionKey', () => {}] ]);

let myObject = { key: 'value' }

console.log(getCollectionWeight(myArray));

console.log(getCollectionWeight(myMap));

console.log(getCollectionWeight(myObject));