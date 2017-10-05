// const tesseract = require('node-tesseract');
//
// tesseract.process(__dirname + '/captcha.png', function (err, text) {
//      if (err) {
//          console.error(err);
//      } else {
//          console.log(text);
//      }
// });
//
// // Recognize German text in a single uniform block of text and set the binary path
//
// var options = {
//     l: 'deu',
//     psm: 6,
//     binary: '/usr/local/bin/tesseract'
// };
//
// tesseract.process(__dirname + '/captcha.png', options, function(err, text) {
//     if(err) {
//         console.error(err);
//     } else {
//         console.log(text);
//     }
// });


const Tesseract = require("tesseract.js");

// Tesseract.recognize("./captcha.png")
//     .then(function (result) {
//         console.log("result-->",result);
//     });


Tesseract.recognize("./captcha.jmg")
    .progress(function  (p) { console.log('progress', p)    })
    .then(function (result) { console.log('result', result) })