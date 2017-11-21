// let todos = require('../public/assets/json/todos.json');
let fs = require('fs');
let mongoose = require('mongoose');
let Todo = mongoose.model('todo');

require('../app/todo');

module.exports = (app) => {

  app.get('/', async (req, res) => {
    let todos = [];
    await Todo.find({}, (err, data) => {
      if(err) throw err;
      todos = data;
    });
    res.render('index.ejs', {data: todos});
  });

  app.post('/', (req, res) => {
    console.log(req.body);
    addNewTodo(req, res);
  });

}

async function addNewTodo(req, res) {
  let body = await req.body;
  console.log(body);

  Todo.findOne({name: body.name}).then(item => {
    if(item){
      done(null, item);
    }else{
      new Todo({
        "name": body.name,
        "state": body.state
      })
      .save((err) => {
        console.log("AAA");
        if(err) throw err;
      })
      .then(user => {
        done(null, user)
      });
    }
    res.redirect('/');
  });

}