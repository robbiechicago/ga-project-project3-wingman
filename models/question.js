var mongoose         = require('mongoose');
var Response         = mongoose.model('Response');

var questionSchema   = new mongoose.Schema({
  questionName: {type: String, required: true},
  questionText: {type: String, required: true},
  responses: [Response.schema]
});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;