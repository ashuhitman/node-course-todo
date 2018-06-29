//const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');
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
    db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('5b355d4a68b66f3bb0c5b00e'),
    }, {
       $set: {
         completed: false
       }
    },{
       returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
   db.collection('Users').findOneAndUpdate({
     _id: new ObjectID("5b3560493cde4705f4e77a9a")
   },{
     $set: {
       name: "Ashutosh Singh"
     },
     $inc: {
       age: 1
     }
   },{
      returnOriginal: false
   }).then((result) => {
       console.log(result);
   });
    client.close();
});
