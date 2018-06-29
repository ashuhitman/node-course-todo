const MongoClient = require('mongodb').MongoClient;
// const {MongoClient, ObjectID} = require('mongodb');
//
//
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if(err) {
      return console.log('Unable to connect MongoDB server');
    }
    console.log('successfully connected to MongoDB server');
    const db = client.db('TodoApp');
     //deleteMany
  //    db.collection('Todos').deleteMany({"text" : "Something to do"}).then((result) => {
  //       console.log(result);
  // });
  //delterOne
//   db.collection('Todos').deleteOne({"text" : "come on man"}).then((result) => {
//      console.log(result);
// });
  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
     console.log(result);
});
      client.close();
});
