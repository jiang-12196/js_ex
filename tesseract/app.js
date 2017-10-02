const tesseract = require('node-tesseract');

tesseract.process('./captcha.png', function (err, text) {
     if (err) {
         console.error(err);
     } else {
         console.log(text);
     }
});