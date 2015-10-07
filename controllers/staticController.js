var passport = require("passport")

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
    successRedirect : '/authsuccess', // redirect to the secure profile section
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
    res.render('app.ejs');
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

//RENDER COMPLIMENT PAGE 
function renderSmoke(req, res) {
  res.render('smoke.ejs');
}


//POST AVTICITY 
function postActivity(req, res){
  
  console.log(req.body)
  // question3.responses.push({
  //   question: req.body.question,
  //   response: req.body.response
  // })
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
  postActivity: postActivity
}