var Question = require('../models/question');




// INDEX
function getAll(req, res) {
  Question.find(function(error, questions) {
    if(error) res.json({message: 'Could not find any questions'});

    res.json({question: questions});
  });
}


// CREATE
function createQuestion(req, res) {
  console.log('in POST');
  console.log('body:', req.body);
  console.log(req)
  var question = new Question(req.body);

  question.save(function(error) {
    if(error) res.json({messsage: 'Could not ceate question b/c:' + error});
    console.log(question);
    res.json(question);
  });
}


module.exports = {
  getAll: getAll,
  createQuestion: createQuestion
  // getQuote: getQuote,
  // updateQuote: updateQuote,
  // removeQuote: removeQuote
}