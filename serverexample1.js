var http = require('http');
var obj = require('./si');
http.createServer(function(req,res){
res.write("Welcome in NODE JS WEB Server");
res.write("Simple Interest Result is "+obj.si());
res.end();

}).listen('8089');
console.log("server started successfully under port 8089");