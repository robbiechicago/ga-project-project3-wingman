var passport = require("passport")
var mongoose = require('mongoose')
var User         = mongoose.model('User');


// INDEX
function login(req, res) {
    res.render('login.ejs');
}

//AUTH FAIL
function authFail(req, res) {
    res.render('authFail.ejs');
}

//REGISTER
function registerUserPage(req, res) {
    res.render('registerUser.ejs');
}


//REGISTER USER
function registerUser(req, res) {
  console.log('Hello!')
  passport.authenticate('local-signup', {
    successRedirect : '/go', // redirect to the secure profile section
    failureRedirect : '/register', // redirect back to the signup page if there is an error
    failureFlash : true
  })(req, res);
}

// POST LOGIN
function postLogin(req, res) {
  passport.authenticate('local-login', {
    successRedirect : "/authsuccess",
    failureRedirect : "/",
    failureFlash    : true
  })(req, res);
}

//AUTH SUCCESS
function authSuccess(req, res) {
    res.render('go.ejs');
}

// GET /logout
function getLogout(req, res) {
  req.logout();
  res.redirect("/");
}

//RENDER GO PAGE 
function go(req, res) {
  res.render('go.ejs');
}

//RENDER MENU PAGE 
function renderHome(req, res) {
  res.render('home.ejs');
}

//RENDER COMPLIMENT PAGE 
function renderCompliment(req, res) {
  res.render('compliment.ejs');
}

//RENDER SMOKE PAGE 
function renderSmoke(req, res) {
  res.render('smoke.ejs');
}
//RENDER DRINK PAGE 
function renderDrink(req, res) {
  res.render('drink.ejs');
}
//RENDER DRINKTYPE PAGE 
function renderDrinkType(req, res) {
  res.render('drinkType.ejs');
}


//POST AVTICITY 
function postActivity(req, res){
  console.log(req.user)
  User.findById({username: req.local.username}, function(error, user) {
  user.activity.push(req.body)
  if(error) res.json({message: 'Could not find response b/c:' + error});
  
  });

  console.log(req.body)
}

module.exports = {
  login: login,
  registerUserPage: registerUserPage,
  registerUser: registerUser,
  postLogin: postLogin,
  authFail: authFail,
  authSuccess: authSuccess,
  getLogout: getLogout,
  go: go,
  renderHome: renderHome,
  renderCompliment: renderCompliment,
  renderSmoke: renderSmoke,
  renderDrink: renderDrink,
  renderDrinkType: renderDrinkType,
  postActivity: postActivity
}