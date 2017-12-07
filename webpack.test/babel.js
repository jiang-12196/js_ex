'use strict';

var _helloworld = require('./app/helloworld');

var _helloworld2 = _interopRequireDefault(_helloworld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.getElementById('container').appendChild((0, _helloworld2.default)());
