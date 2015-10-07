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

function registerUser(req, res) {
  console.log('Hello!')
  passport.authenticate('local-signup', {
    successRedirect : '/authsuccess', // redirect to the secure profile section
    failureRedirect : '/register', // redirect back to the signup page if there is an error
    failureFlash : true
  })(req, res);
}

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


module.exports = {
  login: login,
  registerUserPage: registerUserPage,
  registerUser: registerUser,
  postLogin: postLogin,
  authFail: authFail,
  authSuccess: authSuccess,
  getLogout: getLogout
}