let mongoose = require('mongoose');
// mongoose.createConnection(keys.mongoURI.posts);
let {Schema} = mongoose; // let Schema = mongoose.Schema;


let todoSchema = new Schema({
  name: String,
  state: String
});

module.exports = mongoose.model('todo', todoSchema);