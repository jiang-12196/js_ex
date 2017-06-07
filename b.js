/**
 * Created by jiang on 17-5-24.
 */

import Promise from 'bluebird';
import bcryptjs from 'bcryptjs';

const bcryptSalt = "$2a$10$4KVBXMEx96RZcnbviLzvAe";

const crypt = Promise.promisify(bcryptjs.hash);

const crypted = crypt("jiang12197", bcryptSalt);

console.log('crypted--->', crypted);
