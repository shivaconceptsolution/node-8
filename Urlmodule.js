var s = require('url');
var addr = "https://eroomrent.in/login.php?rid=34";
var q = s.parse(addr, true);
console.log(q.host); //returns 'https://eroomrent.in'
console.log(q.pathname); //returns '/login.php'
console.log(q.search); //returns '?rid=34'

var qdata = q.query; //returns an object: rid=34
console.log(qdata.rid); //returns rid