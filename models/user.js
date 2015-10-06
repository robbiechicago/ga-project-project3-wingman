// var mongoose        = require('mongoose');

// var userSchema   = new mongoose.Schema({
//   name: {type: String, required: true},
//   username: String,
//   password: String,
//   langCode: {type: String, minlength: 2},
// });

// var User = mongoose.model('User', userSchema);

// module.exports = User;

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var User = mongoose.Schema({
  local : {
    username     : String,
    password     : String,
  }
});

User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', User);