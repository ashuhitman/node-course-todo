const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });
//Todo.findByIdAndRemove
//Todo.findOneAndRemove

Todo.findByIdAndRemove("5b36e3a69aa1857062f227b3").then((todo) => {
   console.log(todo);

});
