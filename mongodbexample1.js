var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/scsdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database connected!");
  db.close();
});