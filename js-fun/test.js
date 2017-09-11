var toArray = require('./obect-value-to-array');

var obj = {
  'jiang': 'jiang',
  'zuo': 'ju',
  'han': 'shuai',
};

var array = toArray(obj);

console.log(array);