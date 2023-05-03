const mongoose = require('mongoose');

var uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks'

mongoose.connect(uri); 

module.exports = mongoose.connection;
