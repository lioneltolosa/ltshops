var mongoose = require( 'mongoose' );

// Aqui se configura la base de datos

// var config = require('config').get('ltshops');
// var typeDatabase = config.get('config.dataBase.typeDatabase');
// var ip = config.get('config.dataBase.ip');
// var port = config.get('config.dataBase.port');
// var nombreBaseDatos = config.get('config.dataBase.nombreBaseDatos');
//
// var ltshops = typeDatabase + "://" + ip + ":" + port + "/" + nombreBaseDatos;
//
// mongoose.connect(ltshops);

mongoose.connect('mongodb://localhost/ltshops');
