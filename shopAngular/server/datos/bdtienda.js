var mongoose = require('mongoose');
var BDTienda = mongoose.connect('mongodb://localhost:27017/db_tienda');
module.exports = BDTienda;