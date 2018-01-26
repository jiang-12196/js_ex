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

function getMapValues(map) {
    return [...map.values()];
}

function getObjectValues(object) {
    return Object.keys(object).map(key => object[key]);
}

function getCollectionWeight(collection) {
    let collectionValues;
    if (collection instanceof Array) {
        collectionValues = collection;
    } else if (collection instanceof Map) {
        collectionValues = getMapValues(collection);
    } else {
        collectionValues = getObjectValues(collection);
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