

// INDEX
function login(req, res) {
    res.render('login.ejs');
}

//AUTH FAIL
function authFail(req, res) {
    res.render('authFail.ejs');
}

//REGISTER
function registerUser(req, res) {
    res.render('registerUser.ejs');
}

//AUTH SUCCESS
function authSuccess(req, res) {
    res.render('app.ejs');
}


module.exports = {
  login: login,
  registerUser: registerUser,
  authFail: authFail,
  authSuccess: authSuccess
}