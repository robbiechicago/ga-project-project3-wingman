var express = require('express');
var router = express.Router()
// var bodyParser = require('body-parser'); //parses information from POST
// var methodOverride = require('method-override'); //used to manipulate POST
// var passport = require('passport');

var questionsController = require('../controllers/questionsController');
var responsesController = require('../controllers/responsesController');
var staticController = require('../controllers/staticController');

function authenticatedUser(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}

// QUESTION API

router.route('/questions')
  .get(questionsController.getAll)
  .post(questionsController.createQuestion);

router.route('/questions/:id')
  .get(questionsController.getQuestion)
  .put(questionsController.updateQuestion)
  .delete(questionsController.removeQuestion);

router.route('/questions/type/:questionName')
  .get(questionsController.getQuestionByType)

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

router.route('/go')
  .get(authenticatedUser, staticController.go)

router.route('/lang')
  .get(authenticatedUser, staticController.lang)

router.route('/getName')
  .get(authenticatedUser, staticController.getName)

router.route('/home')
  .get(authenticatedUser, staticController.renderHome)

router.route('/compliment')
  .get(authenticatedUser, staticController.renderCompliment)

router.route('/smoke')
  .get(authenticatedUser, staticController.renderSmoke)

router.route('/drink')
  .get(authenticatedUser, staticController.renderDrink)

router.route('/drinkType')
  .get(authenticatedUser, staticController.renderDrinkType)

router.route('/selfie')
  .get(authenticatedUser, staticController.renderCamera)


 //AUTHENTICATION ROUTES 

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


//ACTIVITY ROUTE
router.route('/activity/post')
  .post(staticController.postActivity)



module.exports = router;