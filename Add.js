var http = require('http');
var obj = require('url');

http.createServer(function(req,res){

 var q = obj.parse(req.url, true);
var qdata = q.query;
var num1 = qdata.txt1;
var num2 = qdata.txt2;
var num3 = parseInt(num1)+parseInt(num2);

res.write("Result is "+num3 );
res.end();

}).listen('8089');

console.log("server started successfully under port 8089");