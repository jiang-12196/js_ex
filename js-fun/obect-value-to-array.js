function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}

function isObject(value) {
    return (typeof value === 'object' && value !== null && !isArray(value))
}

function hasKey(obj, key) {
    return obj !== null && Object.prototype.hasOwnProperty.call(obj, key)
}

function getKeys(obj) {
    if (!isObject(obj)) return [];

    var keys = [];
    for (var key in obj) {
        if (hasKey(obj, key)) keys.push(key);
    }
    return keys;
}

function transform(obj) {
    var keys, out, i;
    if (!isObject(obj)) {
        throw new TypeError('invalid input arguments. Must provide an object. Value:' + obj + '.');
    }
    keys = getKeys(obj);
    out = new Array(keys.length);
    for (i = 0; i < keys.length; i++) {
        out[i] = obj[keys[i]];
    }
    return out;
}

module.exports = transform;