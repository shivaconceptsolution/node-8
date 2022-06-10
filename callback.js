var fs = require("fs");  
  
/*fs.readFile('./abcnew.txt', function (err, data) {  
    if (err) return console.error(err);  
    console.log(data.toString());  
});  
console.log("Program Ended");  */

var data = fs.readFileSync('abcnew.txt');  
console.log(data.toString());  
console.log("Program Ended");   