

var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
//var bbdd = require("./app_api/models/bbdd");


var Schema = mongoose.Schema;

//mongoose.connect('mongodb://localhost/ltshops');

// Esquema
var userDataSchema = new Schema({
  title: {type: String, required: true},
  category: String,
  authorship: String,
},
{ versionKey: false},
{collection: 'ltshops'});


//modulo
var UserData = mongoose.model('ltshops', userDataSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


// insertar
router.post('/insert', function(req, res, next) {
  var item = {
    title: req.body.title,
    category: req.body.category,
    authorship: req.body.authorship
  };

  var data = new UserData(item);
  data.save();
  res.redirect('/');
  console.log(item);
});

module.exports = router;
