//set up application 
var mongoose    = require('mongoose')
var express     = require('express')
var app         = express()
var server      = require('http').createServer(app)
var port        = process.env.PORT || 3000
var morgan      = require('morgan')
var cookieParser = require('cookie-parser')
var passport    = require('passport');
var flash       = require('connect-flash');
var bodyParser  = require('body-parser');
var ejsLayouts  = require('express-ejs-layouts')
var session = require('express-session')

mongoose.connect('mongodb://localhost/wingman')

app.use(session({secret: "wingman-session"}));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 
require('./config/passport')(passport);
app.use(cookieParser())

app.use(function(req, res, next) {
  global.user = req.user;
  next();
})

var Response = require('./models/response')
var User = require('./models/user')
var Question = require('./models/question')

var user1 = new User({
  local:
  {
    username: 'rob',
    password: '$2a$08$boSocKqoq02aPgUyBnvpkOxcwC2z.UNfikT7NDAkt7EHosh9xsHi2'
  }
})

user1.save(function(err, airport) {
  if (err) console.log(err)
    console.log('user1 Saved');
})

// QUESTION 1
var question1 = new Question({
  questionName: 'compliment',
  questionText: 'YOU ARE VERY'
})

question1.responses.push({
  responseText: 'Thank you'
})

question1.responses.push({
  responseText: 'I\'m not interested, go away'
})

question1.save(function(err, question) {
  if (err) console.log(err)
    console.log('question1 Saved');
})

// QUESTION 2
var question2 = new Question({
  questionName: 'compliment',
  questionText: 'I LIKE YOUR'
})

question2.responses.push({
  responseText: 'Thank you'
})

question2.responses.push({
  responseText: 'Fuck off'
})

question2.save(function(err, question) {
  if (err) console.log(err)
    console.log('question2 Saved');
})

// QUESTION 3
var question3 = new Question({
  questionName: 'drink',
  questionText: 'would you like a drink?'
})

question3.responses.push({
  responseText: 'yes please'
})

question3.responses.push({
  responseText: 'not from you, you weirdo'
})

question3.save(function(err, question) {
  if (err) console.log(err)
    console.log('question3 Saved');
})
// QUESTION 4 SMOKE
var question4 = new Question({
  questionName: 'smoke',
  questionText: 'Would you like to go for a Cigarette?'
})

question4.responses.push({
  responseText: 'Yes Please'
})

question4.responses.push({
  responseText: 'No Thanks'
})

question4.save(function(err, question) {
  if (err) console.log(err)
    console.log('question3 Saved');
})


//set view engine and define view directory 
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.set('views', './views')

//loggin middlware (all requests)
app.use(morgan('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// serve static assets (js, css, image) from the public foldr
app.use(express.static(__dirname + '/public'))

// app.get('/', function(req, res){
//   res.render('index')
// })

// app.get('/login', function(req, res){
//   res.render('login')
// })

//require routes
var routes = require('./config/routes');
app.use(routes);

// app.get('/secretroom', function(req, res){
//   res.render('secretroom')
// })

//start server and listen on defined port 
server.listen(port, function(){
  console.log('Server has been started on port %s ...', port)
})