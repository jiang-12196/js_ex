const Promise = function() {};

const isPromise = function(value) {
    return value instanceof Promise;
};

const defer = function() {
    const pending = [], valuie;

    const promise = new Promise();

    promise.then = function(callback) {
        if (pending) {
            pending.push(callback);
        } else {
            callback(value);
        }
    };
    return {
        resolve: function(_value) {
            if (pending) {
                value = _value;
                for (let i = 0, j = pending.length; i < j; i++) {
                    const callback = pending[i];
                    callback(value);
                }
                pending = undefined;
            }
        },
        promise,
    };
};
