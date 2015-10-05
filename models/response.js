var mongoose         = require('mongoose');

var responseSchema   = new mongoose.Schema({
  responseText: {type: String, required: true},

});

var Response = mongoose.model('Response', responseSchema);

module.exports = Response;