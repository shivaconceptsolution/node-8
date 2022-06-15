var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("scsdb");
    dbo.collection("stu").insertOne({rno:3,name:"fff"},function(err,res){
        if (err) throw err;
        console.log("Insert Succees");
        db.close();
    });
   
  });