var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("scsdb");
    dbo.collection("stu").findOne({},function(err,res){
        if (err) throw err;
        console.log(res.rno, res.name);
        db.close();
    });
   
  });