const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
var data = {
  id: 10,
  access: 'auth'
};
var token = jwt.sign(data, '123abc');
console.log(typeof token);
var decoded = jwt.verify(token, '123abc')
console.log(typeof decoded);

// var msg = "I'm user no 3";
// var hash = SHA256(msg);
// console.log(`msg - ${msg} \n hash - ${hash}`);
//
// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'secret').toString( )
// }
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'asecret').toString();
// if(resultHash === token.hash){
//   console.log('data not changed');
// }else {
//   console.log('data was changed don not trust');
// }
//
