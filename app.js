var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () { console.log("Connection to DB succeeded") });

var resourceRouter = require('./routes/resource');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var Books = require('./models/Books');
var BookssRouter = require('./routes/Books');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Books', BookssRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);


async function recreateDB() {
  // Delete everything
  await Books.deleteMany();

  let instance1 = new
    Books({ book_name: "comicBoom", book_genre: "funcomic", book_cost: 30 });
  instance1.save().then(() => {
    console.log('First Object is created');
  }).catch((e) => {
    console.log('There was an error', e.message);
  });
  let instance2 = new
    Books({ book_name: "HarryPotter", book_genre: "Adventure", book_cost: 150 });
  instance2.save().then(() => {
    console.log('Second Object is created');
  }).catch((e) => {
    console.log('There was an error', e.message);
  });
  let instance3 = new
    Books({book_name: "Lovestory", book_genre: "Lovestory", book_cost: 100 });
  instance3.save().then(() => {
    console.log('Third Object is created');
  }).catch((e) => {
    console.log('There was an error', e.message);
  });
}

let reseed = true;
if (reseed) { recreateDB(); }

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;