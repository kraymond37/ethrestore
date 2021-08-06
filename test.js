const keyth = require('keythereum');
let address = '0x7797056a5be5d48b9fb4e2265c8e5403b752afef'
let keystore = 'keystore/parent/directory'
let keyObj = keyth.importFromFile(address, keystore);
let privateKey = keyth.recover('password', keyObj);
console.log(privateKey.toString('hex'));
