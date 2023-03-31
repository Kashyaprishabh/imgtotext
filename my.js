const T = require("tesseract.js") 

T.recognize('Captcha-United.png', 'eng', { logger: e => console.log(e)})
   .then(out => console.log(out))