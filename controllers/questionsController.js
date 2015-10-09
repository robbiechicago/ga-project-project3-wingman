var Question = require('../models/question');
var Response = require('../models/response');

// INDEX
function getAll(req, res) {
  Question.find(function(error, questions) {
    if(error) res.json({message: 'Could not find any questions'});

    res.json({question: questions});
  });
}
// GET COMPLMENT QUESTIONS
function getQuestionByType(req, res) {
  var qName = req.params.questionName;

  Question.find({questionName: qName}, function(error, question) {
    if(error) res.json({message: 'Could not find question b/c:' + error});

    res.json({question: question});
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

// SHOW
function getQuestion(req, res) {
  var id = req.params.id;

  Question.findById({_id: id}, function(error, question) {
    if(error) res.json({message: 'Could not find question b/c:' + error});

    res.json({question: question});
  });
}

// UPDATE
function updateQuestion(req, res) {
  var id = req.params.id;

    Question.findById({_id: id}, function(error, question) {
    if(error) res.json({message: 'Could not find question b/c:' + error});

    if(req.body.questionText) question.questionText = req.body.questionText;

    question.save(function(error) {
      if(error) res.json({messsage: 'Could not update question b/c:' + error});
      console.log(question)
      res.json({message: 'Question successfully updated'});
    });
  });
}

// DELETE
function removeQuestion(req, res) {
  var id = req.params.id;

  Question.remove({_id: id}, function(error) {
    if(error) res.json({message: 'Could not delete question b/c:' + error});

    res.json({message: 'Question successfully deleted'});
  });
}

//ADD RESPONSE TO QUESTION

function addResponse(req, res) {
  var id = req.params.id;
  var responseId = req.params.response_id;

  var question1 = Question.findById(id, function(err, question){
    Response.findById(responseId, function(err, response){
      var text = response.responseText
      console.log(text)
      question.responses.push({
      responseText: text
      }) 

    question.save(function(error) {
      if(error) res.json({messsage: 'Could not update question b/c:' + error});
    });
    res.json(question);
    })
  })
}




// EXPORT MODULES
module.exports = {
  getAll: getAll,
  createQuestion: createQuestion,
  getQuestion: getQuestion,
  getQuestionByType: getQuestionByType,
  updateQuestion: updateQuestion,
  removeQuestion: removeQuestion,
  addResponse: addResponse,
  getQuestionByType: getQuestionByType
}