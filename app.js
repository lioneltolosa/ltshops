var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var routes = require('./routes/index');

var formidable = require('formidable');

require('./app_api/models/bbdd');

var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');


// Upload
app.get('/', function (req, res){
	res.sendFile(__dirname + '/index.html');
});

var start = 'documentacion/publico/'

app.post('/upload', function (req, res){
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {

    var oldpath = files.upload.path;
    var newpath = './uploads' + files.upload.name;
		console.log(fields);
		fs.rename(oldpath, newpath, function (err) {
			console.log(files);
			if (err) throw err;
			return res.redirect('/');
			//res.send('File uploaded and moved!');
			res.end();
		});
	});
});
//Fin Upload


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
