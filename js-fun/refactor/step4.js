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

function getCollectValues(collection) {
    if (collection instanceof Array) {
        return collection;
    } else if (collection instanceof Map) {
        return getMapValues(collection);
    }
    return getObjectValues(collection);
}

function reduceWeightSum(sum, item) {
    return sum + getWeightByType(item);
} 

function getCollectionWeight(collection) {
    return getCollectValues(collection).reduce(reduceWeightSum, 0);
}

let myArray = [null, {}, 15];

let myMap = new Map([ ['functionKey', () => {}] ]);

let myObject = { key: 'value' }

console.log(getCollectionWeight(myArray));

console.log(getCollectionWeight(myMap));

console.log(getCollectionWeight(myObject));


// getCollectionWeight => getCollectValues + reduceWeightSum

// getCollectValues => getMapValue + getObjectValue

// reduceWeightSum => getWeightByType