var LocalStrategy = require('passport-local').Strategy;
var User          = require("../models/user");

// In app.js require('./config/passport')(passport) is expecting a function
module.exports = function(passport) {

  // Serialize the user.id and save in a cookie in the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  })

  // Deserialise the id, and use the id to find a user
  passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, username, password, done) {
    console.log(username, password)
    process.nextTick(function() {

      User.findOne({ 'local.username' :  username }, function(err, user) {
        if (err) return done(err);

        // If there already is a user with this email 
        if (user) {
          return done(null, false, req.flash('signupMessage', 'This username is already used.'));
        } else {
        // There is no email registered with this email

          // Create a new user
          var newUser            = new User();
          
          newUser.local.username = username;
          newUser.local.password = newUser.encrypt(password); 
          console.log('RoHo says: ' + newUser);
          newUser.save(function(err) {
            if (err) throw err;
            return done(null, newUser);
          });
        }
      });
    });
  }));

  passport.use('local-login', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, username, password, done){

    // Search for a user with an email from the login form
    User.findOne({ 'local.username' : username }, function(err, user) {

      if (err) { return done(err) };

      // If no user has been found
      if (!user) {
        return done(null, false, req.flash('loginMessage', 'Incorrect username.'))
      };

      // If password is invalid
      if (!user.validPassword(password)) {
        return done(null, false, req.flash('loginMessage', 'Incorrect password.'));
      } 
         
      // User has been authenticated, return user
      console.log('login proceedure passed.')
      return done(null, user);
    });
  }));
}