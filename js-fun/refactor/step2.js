function getWeightByType(value) {
    const WEIGHT_NULL_UNDEFINED = 1;
    const WEIGHT_PRIMITIVE = 2;
    const WEIGHT_OBJECT_FUNCTION = 4;

    if (value === null) {
        return WEIGHT_NULL_UNDEFINED;
    }
    if (typeof value === 'object' || typeof value === 'function') {
        return WEIGHT_OBJECT_FUNCTION;
    }

    return WEIGHT_PRIMITIVE;
}


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
        return sum + getWeightByType(item);
    }, 0);
}

let myArray = [null, {}, 15];

let myMap = new Map([ ['functionKey', () => {}] ]);

let myObject = { key: 'value' }

console.log(getCollectionWeight(myArray));

console.log(getCollectionWeight(myMap));

console.log(getCollectionWeight(myObject));