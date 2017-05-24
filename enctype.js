/**
 * Created by jiang on 17-5-24.
 */

var  Promise = require('bluebird');
var bcryptjs = require('bcryptjs');

var bcryptSalt = "$2a$10$4KVBXMEx96RZcnbviLzvAe";

var crypt = Promise.promisify(bcryptjs.hash);

var crypted = crypt("jiang12197", bcryptSalt);

console.log('crypted--->',crypted);