let express = require('express');
let bP = require('body-parser');
let morgan = require('morgan');
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin123@ds117136.mlab.com:17136/todos');

const PORT = 8181;

const app = express();

app.set('view engine', 'ejs');
app.use(bP.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(morgan('combined'));

require('./app/todo');
require('./routes/routes')(app);

app.listen(PORT, () => {
  console.log("ToDo app started on port " + PORT);
});