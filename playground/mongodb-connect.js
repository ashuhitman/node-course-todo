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
    db.collection('Todos').insertOne({
      text: 'come on man',
      completed: true
    }, (err, result) => {
        if(err) {
          return console.log('Unable to Insert Todo', err);

        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
//     db.collection('Users').insertOne({
//         name: 'Ashu Singh',
//         age: 22,
//         location: 'India'
//     }, (err, result) => {
//          if(err) {
//             return console.log('Unable to Insert user details', err);
//          }
//
//          console.log(JSON.stringify(result.ops, undefined, 2));
//     });
      client.close();
});
