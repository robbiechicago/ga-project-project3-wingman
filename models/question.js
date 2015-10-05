var mongoose         = require('mongoose');
var Response        = mongoose.model('Response');

var questionSchema   = new mongoose.Schema({
  questionText: {type: String, required: true},
  resonses: [Response.schema]
});

var Question = mongoose.model('Question', userSchema);

module.exports = Question;