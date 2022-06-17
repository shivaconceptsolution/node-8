var http = require('http');
var obj = require('url');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
var s = "";
http.createServer(function(req,res){
if(req.url!='/favicon.ico')
{

 var q = obj.parse(req.url, true);
 let db1 = null;
 let db2 = null;
var qdata = q.query;
var r = qdata.txt1;
var n = qdata.txt2;
var b = qdata.txt3;
var f = qdata.txt4;
insertdb();
//getdb();


 function insertdb() {
   MongoClient.connect(url, function(err, db) {
    var dbo = db.db("scsdb");
    if (err) throw err;
    
    dbo.collection("student").insertOne({rno:r,name:n,branch:b,fees:f},function(err,res){
        if (err) throw err;
        console.log("Student Record Addedd Successfully");
        db.close();
        getdb();
    });
  
  });
}
 function getdb() {

MongoClient.connect(url, function(err, db) {
   
    var dbo = db.db("scsdb");
    dbo.collection("student").find({}).toArray(function(err,res1){
      if (err) throw err;
      console.log(res1);
    s="";
    s = s+"<table><tr><th>Rno</th><th>Name</th><th>Branch</th><th>Fees</th></tr>";
      for(var i=0;i<res1.length;i++)
      {
         s = s + "<tr><td>"+res1[i].rno + "</td><td>"+ res1[i].name + "</td><td>"+res1[i].branch + "</td><td>" + res1[i].fees + "</td></tr>";
      }
      s = s + "</table>";
      
     // s = "<table border='1'><tr><th>Hello</th></table>"; 
    
      db.close();
  });
   
  });
  setTimeout(function(){
    res.write(s);
    res.end();
  },1000);
  
}
  
}




}).listen('8089');

console.log("server started successfully under port 8089");