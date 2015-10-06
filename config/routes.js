var express = require('express');
var router = express.Router()
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST
var passport = require('passport');

var questionsController = require('../controllers/questionsController');
var responsesController = require('../controllers/responsesController');
var staticController = require('../controllers/staticController');

function authenticatedUser(req, res, next) {
  if (req.isAuthenticated()) return next();
  console.log('a');
  res.redirect('/');
  console.log('b');
}

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

router.route('/login')
  .post(staticController.postLogin)

router.route("/logout")
  .get(staticController.getLogout)

router.route('/authfail')
  .get(staticController.authFail)

router.route('/register')
  .get(staticController.registerUserPage)
  .post(staticController.registerUser)

router.route('/authsuccess')
  .get(authenticatedUser, staticController.authSuccess)



module.exports = router;