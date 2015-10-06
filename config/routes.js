var express = require('express');
var router = express.Router()
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST

var questionsController = require('../controllers/questionsController');
var responsesController = require('../controllers/responsesController');
var staticController = require('../controllers/staticController');

// QUESTION API

router.route('/questions')
  .get(questionsController.getAll)
  .post(questionsController.createQuestion);

router.route('/questions/:id')
  .get(questionsController.getQuestion)
  .put(questionsController.updateQuestion)
  .delete(questionsController.removeQuestion);

  //ADD RESPONSE TO QUESTION
router.route('/questions/:id/responses/:response_id')
  .put(questionsController.addResponse)


  // RESPONSE API
router.route('/responses')
  .get(responsesController.getAll)
  .post(responsesController.createResponse);

router.route('/responses/:id')
  .get(responsesController.getResponse)
  .put(responsesController.updateResponse)
  .delete(responsesController.removeResponse);




//STATIC ROUTES
router.route('/')
  .get(staticController.login)

router.route('/authfail')
  .get(staticController.authFail)

router.route('/register')
  .get(staticController.registerUser)

router.route('/authsuccess')
  .get(staticController.authSuccess)



module.exports = router;