var express = require('express');
var router = express.Router()
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST

var questionsController = require('../controllers/questionsController');

// QUOTES API
router.route('/questions')
  .get(questionsController.getAll)
  .post(questionsController.createQuestion);

// router.route('/questions/:id')
//   .get(questionsController.getQuote)
//   .put(questionsController.updateQuote)
//   .delete(questionsController.removeQuote);

module.exports = router;