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
    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todo');
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
         console.log('Unablt to fetch Uers');
    });
    client.close();
});
