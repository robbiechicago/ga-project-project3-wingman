var mongoose        = require('mongoose');

var userSchema   = new mongoose.Schema({
  name: {type: String, required: true},
  username: String,
  password: String,
  langCode: {type: String, minlength: 2},
});

var User = mongoose.model('User', userSchema);

module.exports = User;